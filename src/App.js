import React, { useState, useEffect } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./admin/scenes/globals/Topbar";
import Sidebar from "./admin/scenes/globals/Sidebar";
import Dashboard from "./admin/scenes/dashboard";
import Team from './admin/scenes/team';
import User from "./clients/home";
import Login from "./clients/login";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import RegisterPage from './clients/register';

function App() {
  const [theme, colorMode] = useMode();
  const role = 'admin';
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
                    <Route path="/team" element={<Team />} />
                    
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
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<Login />} />
              {/* Thêm các route khác cho user nếu cần */}
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
