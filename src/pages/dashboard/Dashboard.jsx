import React, { useState } from 'react';
import { Box, useMediaQuery} from '@mui/material';
import DashboardBox from '../../components/layout/DasboardBox';

const gridTemplateLargeScreens = `
    "a a a a"
    "a a a a"
    "a a a a"
    "a a a a"
    "a a a a"
    "a a a a"
    "b b c c"
    "b b c c"
    "b b c c"
    "b b c c"
    "b b c c"
    "b b c c"
    "b b c c"
    "b b c c"
`;

const gridTemplateSmallScreens = `
    "a"
    "a"
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "c"
    "c"
    "c"
    "c"
    "c"
`;

function Dashboard() {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")
    return (
        <Box width="100%" height='100%' display="grid" gap="1.5rem"
            sx={
                isAboveMediumScreens ? {

                    gridTemplateColumns: "repeat(4, minmax(400px, 1fr))",
                    gridTemplateRows: "repeat(13, minmax(60px, 1fr))",
                    gridTemplateAreas: gridTemplateLargeScreens,
                } : {
                    gridAutoColumns: "1fr",
                    gridAutoRows: "80px",
                    gridTemplateAreas: gridTemplateSmallScreens,
                }}>


            <DashboardBox bgcolor="grey" gridArea="b">Tasks</DashboardBox>
            <DashboardBox bgcolor="grey" gridArea="a">Active</DashboardBox>
            <DashboardBox bgcolor="grey" gridArea="c">Analytics</DashboardBox>

                






        </Box>
    );
}

export default Dashboard;