import React from 'react';
import Reactplayer from 'react-player';
import { Grid, Box, Typography, Container } from '@mui/material';
import { borders } from '@mui/system';
import "./Home1.css";

export const Home1 = () => {
  return (
    <div>
      <div className="div1">
        <div className="left">
          <h1>
            Learn From <br />
            India's Biggest <br />
            Mentors
          </h1>
          <p>
            SCROLL DOWN TO DISCOVER <br />
            LEARN FROM THE BEST <br />
            OVER 350+ VIDEO LESSONS <br />
            GET SIGNED CERTIFICATES
          </p>
          <br />
          <span className='spanh1'>
            <img
              src="https://www.mento.co.in/assets/google-play-black-f7eb60056f740e3f7175688fc28e4fc4c2c2a20fc8a26b4fe4d2e944e24fa014.svg"
              alt="Get it on Google Play"
            />
          </span>
          <span className='spanh2'>
            <img
              src="https://www.mento.co.in/assets/app-store-black-89aa31eafa093e3c654fd68421e895d386767ea78997aa91db6ef811c3fb0152.svg"
              alt="Download on the App Store"
            />
          </span>
        </div>
        <div className="right">
          
          <Reactplayer
                            url='https://d1tthr7pv14hhy.cloudfront.net/Images/general/background1.mp4'
                            playing={true}
                            loop={true}
                            muted={true}
                            width='100%'
                            height='400px'
                       
                        />
            
    
        </div>
      </div>
    </div>
  );
};


