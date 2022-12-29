import Sun from './VisualComponents/Sun';
import Land from './VisualComponents/Land';
import MountainRange from './VisualComponents/MountainRange';
import InfoSection from './Components/InfoSection';
import classes from "../src/Modules/EnvironmentGraphics.module.css"
import NavigationBar from './Components/NavigationBar';
import {Helmet} from "react-helmet"

function App() {
  return (
      <div className='non-selectable'>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
        <div className='background' style={{ cursor: 'none' }}>
        </div>
        <div className='topLayer'>
          <div className='nameContainer noCursor'>
            <div className='name'>Hi, I'm Quincy</div>
          </div>
          <div className='sunInteraction'>
            <Sun />
          </div>

          <img className={classes.deer} src='deer1.png' alt='deer' width="200"></img>
          
          <Land />
          <MountainRange />
          <NavigationBar></NavigationBar>
        </div>


        <div className='bodyContainer'>
          <InfoSection />
        </div>
      </div>
  );
}

export default App;
