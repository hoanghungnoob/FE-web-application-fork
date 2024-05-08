import React, { useState, useEffect } from 'react';
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./admin/scenes/globals/Topbar";
import Sidebar from "./admin/scenes/globals/Sidebar";
import Dashboard from "./admin/scenes/dashboard";
import User from "./clients/home";
import Header from "./components/client/Header";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const [theme, colorMode] = useMode();
  let role = 'user';
  return (
    <>
      <Header />
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
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
