
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import FlexBetween from './flexBetween';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';


function Navbar() {
  return (
    <FlexBetween mb="1.5rem" p="1rem 1rem" color="black" bgcolor="grey">

      {/* Left side */}
      <FlexBetween gap="1rem">
        <VisibilitySharpIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          MycoWatch
        </Typography>
      </FlexBetween>

      {/* right side */}

      <FlexBetween gap="1rem">
        <Box sx={{ p: '1rem' }}>
          <Link
            to="/">
            Dashboard
          </Link>
        </Box>

        <Box sx={{ p: '1rem' }}>
          <Link
            to="/addGrow">
            New Grow
          </Link>
        </Box>

      </FlexBetween>
    </FlexBetween>
  );
}

export default Navbar;