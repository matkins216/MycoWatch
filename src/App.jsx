import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme"
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import LoginPage from "./scenes/LoginPage"; 



function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
