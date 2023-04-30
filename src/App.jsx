import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme"
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import LoginPage from "./scenes/LoginPage"; 
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = "707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <GoogleOAuthProvider clientId="707587160486-j7adbuqsr1ostdquto9rhdk783o42jq0.apps.googleusercontent.com">
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
    </GoogleOAuthProvider>
    </div>
  )
}

export default App;
