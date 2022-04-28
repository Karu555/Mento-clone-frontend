import React from 'react';

import { Grid, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

//dawdeamoneakjnjn
export function Footerdown() {

    const box = {
        width: 1,
        height: 270,
        backgroundColor: '#1a1d24',
        borderTop: '1px solid #999999',
        fontFamily: 'Roboto Condensed, sans-serif'

    }

    const grid = {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '50px',
        cursor: "pointer",
        fontFamily: 'Roboto Condensed, sans-serif',
        color: "#999999",
        fontSize: '10px',
    }

    return (
        <footer>
            <Box
                sx={box}
                marginTop="30px"
            >
                <Grid container sx={grid} >
                    <Grid item xs={0.5}>

                        <YouTubeIcon sx={{ fontSize: "40px", color: "#263238" }} />
                    </Grid>
                    <Grid item xs={0.5}>
                        <FacebookIcon sx={{ fontSize: "40px", color: "#263238" }} />            </Grid>
                    <Grid item xs={0.5}>
                        <InstagramIcon sx={{ fontSize: "40px", color: "#263238" }} />            </Grid>
                    <Grid item xs={0.5}>
                        <TwitterIcon sx={{ fontSize: "40px", color: "#263238" }} />            </Grid>
                </Grid>

                <Grid fontSize="12px" container sx={grid}>
                    <Grid item xs={0.5}>ABOUT</Grid>
                    <Grid item xs={0.5}>FAQ</Grid>
                    <Grid item xs={1}>TERMS OF SERVICE</Grid>
                    <Grid item xs={1}>PRIVACY POLICY</Grid>
                    <Grid item xs={1}>CONTACT US</Grid>
                </Grid>
                <Box textAlign="center" marginTop='50px' sx={grid} >
                    COPYRIGHT @GRADESDONTMATTER PVT LTD
                </Box>
            </Box>
        </footer>
    );
}



