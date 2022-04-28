import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
export function FooterTop() {
    const box = {
        widht: 1,
        height: '200px',
        backgroundColor: '#1a1d24',
        fontFamily: 'Roboto Condensed, sans-serif',
    };
    return (
        <div>
            <Box sx={box}>
                <Box
                    sx={{
                        borderBottom: '5px solid white',
                        margin: 'auto',
                        marginBottom: '10px',
                        marginTop: '50px',
                        width: '40px',
                        
                        
                    }}
                ></Box>
                <Typography
                    variant='h3'
                    fontFamily="'Roboto Slab',serif"
                    fontWeight='700'
                    color='#fff'
                    font='inherit'
                    line-height='normal'
                    marginBottom='20px'
                >
                    Learn on the go
                </Typography>
                
                <Typography
                    variant='h5'
                    color='#999999'
                    fontSize='16px'
                    marginBottom='20px'
                >
                    DOWNLOAD OUR APP FROM THE STORE AND <br /> LEARN ON THE GO.
                </Typography>
                <Grid container color='white' justifyContent='center'>
                    <Grid item marginRight='40px' xs={1}>
                        <Box
                            sx={{
                                width: '150px',
                                height: '50px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://www.mento.co.in/assets/google-play-black-f7eb60056f740e3f7175688fc28e4fc4c2c2a20fc8a26b4fe4d2e944e24fa014.svg')",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box
                            sx={{
                                width: '150px',
                                height: '50px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundImage:
                                    "url('https://www.mento.co.in/assets/app-store-black-89aa31eafa093e3c654fd68421e895d386767ea78997aa91db6ef811c3fb0152.svg')",
                            }}
                        ></Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}


