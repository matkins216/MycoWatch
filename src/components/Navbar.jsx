import React from 'react'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from '../state'
import { useState } from 'react'
import { AppBar, Toolbar, useTheme, Typography, Box } from '@mui/material'
import { themeSettings } from "../theme"
import { Link } from 'react-router-dom'
import YardIcon from '@mui/icons-material/Yard';


function Navbar() {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    return (
        <AppBar
        
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
            m: '1rem'
        }}
        >
            <FlexBetween mb="0.25rem" p="0.5rem 1rem" color={palette.grey[300]}>
                <FlexBetween gap="0.75rem">
                    <YardIcon />
                    <Typography variant="h4" fontSize="16px">
                        MycoWatch
                    </Typography>
                </FlexBetween>
                <FlexBetween gap="2rem">
                    <Box sx={{ "&:hover": { color: palette.grey[100] } }}>
                        <Link
                            to="/"
                        >
                            dashboard
                        </Link>
                    </Box>
                    <Box sx={{ "&:hover": { color: palette.grey[100] } }}>
                        <Link
                            to="/"
                            
                        >
                            FOLLOW UP
                        </Link>
                    </Box>
                </FlexBetween>
            </FlexBetween>
            
            </AppBar>
    )
}

export default Navbar