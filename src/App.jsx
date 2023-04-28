import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/layout/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import Dashboard from './pages/dashboard/Dashboard'
// import React from 'react'

function App() {
  console.log('am I rendering')
  const [count, setCount] = useState(0)
  // const mode = useSelector((state) => state.global.mode)
  // const theme = useMemo(() => createTheme(themeSettings(mode))[mode]);

  return (
    <div styles={{ height: '100%', width: '100%' }}>
      <BrowserRouter>
        <Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addgrow"  />
          </Routes>

        </Box>
      </BrowserRouter>

    </div>
  )
}

export default App;
