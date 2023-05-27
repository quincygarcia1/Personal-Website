
import GCLTab from "./ProjectComponents/GCLTab";
import InnScienceTab from "./ProjectComponents/InnscienceTab";
import RedEatTab from "./ProjectComponents/RedEatTab";
import SnibbitTab from "./ProjectComponents/SnibbitTab";
import React from 'react';


class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aboutOpened: true, projectsOpened: false, contactOpened: false };
        this.displayNavBar = this.displayNavBar.bind(this);
    }

    displayNavBar(e, pageCode) {
        let aboutActive = false;
        let projectsActive = false;
        let contactActive = false;

        if (pageCode === 0) {
            aboutActive = true;
        } else if (pageCode === 1) {
            projectsActive = true;
        } else {
            contactActive = true;
        }

        this.setState({ aboutOpened: aboutActive });
        this.setState({ projectsOpened: projectsActive });
        this.setState({ contactOpened: contactActive });
    }

    render() {
        return (

            <div>
                <svg id="filters">
                    <defs>
                        <filter id="threshold">
                            <feColorMatrix in="SourceGraphic"
                                type="matrix"
                                values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
                        </filter>
                    </defs>
                </svg>

                <div className='forward navigationBar noCursor'>
                    <div className='personalBar'>
                        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>

                            <li><button className='navButton' id="leftNav" onClick={(e) => this.displayNavBar(e, 0)}>About Me</button></li>
                            <li><button className='navButton' id="midNav" onClick={(e) => this.displayNavBar(e, 1)}>My Projects</button></li>
                            <li><button className='navButton' id="rightNav" onClick={(e) => this.displayNavBar(e, 2)}>Contacts</button></li>
                        </ul>
                    </div>
                </div>

                <div className="centerSection">

                    <div className={`displayText ${this.state.projectsOpened || this.state.contactOpened ? "hideChildren" : "showChildren"}`} style={{ overflow: "hidden", margin: 0 }}>
                        <p>
                            I'm a computer science student at the University of Toronto currently working as a web applications
                            developer at Environment and Climate Change Canada.
                        </p>

                    </div>
                    <div className={`displayText ${this.state.aboutOpened || this.state.contactOpened ? "hideChildren" : "showChildren"}`}>
                        <div className="projectGrid">
                            <RedEatTab />
                            <InnScienceTab />
                            <GCLTab />
                            <SnibbitTab />
                        </div>
                    </div>
                    <div className="notFirstSpace" />
                    <div className={`displayText ${this.state.projectsOpened || this.state.aboutOpened ? "hideChildren" : "showChildren"}`}>
                        <p>
                            <a className="resumeButton" href="QuincyGarciaResume.pdf" download={"Quincy Garcia Resume.pdf"}>Grab a Copy of my Resume</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;