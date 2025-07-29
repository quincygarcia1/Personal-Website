import Sun from './VisualComponents/Sun';
import MountainRange from './VisualComponents/MountainRange';
import InfoSection from './Components/InfoSection';
import classes from "../src/Modules/EnvironmentGraphics.module.css"
import textResources from './Resources/TextResources';

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
            <div className='name'>{textResources.introduction}</div>
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
            <div style={{paddingBottom:"5px", paddingLeft: "2px"}}>{textResources.musicHeading}</div>
            <iframe title='musicSection' style={{ borderRadius:"12px" }} src="https://open.spotify.com/embed/playlist/7fK3nMpjc4Uvo0LuwuKb2e?utm_source=generator" width="300" height="200" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
        
        
      </div>
      <div id="imageZone">

        <div id="photoGallery" class="carousel slide" data-bs-ride="carousel">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="HomeGallery/gallery-France Graffiti.jpeg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="HomeGallery/gallery-France Hike.jpeg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="HomeGallery/gallery-France Rockclimbing.jpeg" alt="Third slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="HomeGallery/gallery-Painting Landscape.jpeg" alt="Fourth slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="HomeGallery/gallery-Switzerland Water.jpeg" alt="Fifth slide"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default App;
