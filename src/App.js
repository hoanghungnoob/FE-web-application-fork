import React, { useState, useEffect } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./admin/scenes/globals/Topbar";
import Sidebar from "./admin/scenes/globals/Sidebar";
import Dashboard from "./admin/scenes/dashboard";
import User from "./clients/home";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const [theme, colorMode] = useMode();
  const [role, setRole] = useState(null); // State để lưu vai trò người dùng

  useEffect(() => {
    // Hàm xử lý đăng nhập
    const handleLogin = async (email, password) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
        const role = response.data.role;
        // Lưu vai trò vào state
        setRole(role === 1 ? 'admin' : role === 0 ? 'user' : 'user');
      } catch (error) {
        console.error('Đăng nhập không thành công:', error.response.data.error);
        setRole('error'); // Trường hợp lỗi
      }
    };
    // Gọi hàm đăng nhập khi component được mount
    handleLogin('hoanghung@gmail.com', '123456789');
  }, []); // Dùng [] để chỉ chạy một lần khi component được mount
  // Kiểm tra vai trò và render phần giao diện tương ứng
  return (
    <>
      {role === 'admin' ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display="flex">
              <Sidebar />
              <main className="content">
                <Topbar />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Thêm các route khác cho admin nếu cần */}
                  </Routes>
              </main>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <>
          {role === 'user' && (
            <Routes>
              <Route path="/" element={<User />} />
              {/* Thêm các route khác cho user nếu cần */}
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
