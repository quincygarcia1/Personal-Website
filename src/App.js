import Sun from './VisualComponents/Sun';
import MountainRange from './VisualComponents/MountainRange';
import InfoSection from './Components/InfoSection';
import classes from "../src/Modules/EnvironmentGraphics.module.css"

import { Helmet } from "react-helmet";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    <Helmet>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" /> 
    </Helmet>
  });
  return (
    <div className='non-selectable'>
      
      <div className='background' style={{ cursor: 'none' }}>
      </div>
      <div className='centerBody noCursor'>
        <div className='InfoColumn'>
          <div className='nameContainer'>
            <div className='name'>Hey, I'm Quincy </div>
          </div>
          <InfoSection />
        </div>
        <div className='graphicsColumn'>
          <div className='natureBackground'>
            <div className={classes.sunInteraction}>
              <Sun />
            </div>

            <img className={classes.deer} src='deer1.png' alt='deer' width="200"></img>

            <MountainRange />

            <div className='Grass'>

            </div>
          </div>
          <div className='musicSection'>
            <div style={{paddingBottom:"5px", paddingLeft: "2px"}}>What I'm listening to</div>
            <iframe title='musicSection' style={{ borderRadius:"12px" }} src="https://open.spotify.com/embed/album/5H1FtrVEYKl9hQyDxBZHvN?utm_source=generator" width="300" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
