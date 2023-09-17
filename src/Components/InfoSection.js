
import GCLTab from "./ProjectComponents/GCLTab";
import InnScienceTab from "./ProjectComponents/InnscienceTab";
import RedEatTab from "./ProjectComponents/RedEatTab";
import SnibbitTab from "./ProjectComponents/SnibbitTab";
import React from 'react';
import tabClasses from "../Modules/NavigationTabs.module.css"
//import { animate } from "../SupplementaryFiles/TabAnimation";


class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.callRefSection = null;
        this.setRefSection = element => {
            this.callRefSection = element
        }
        this.state = { aboutOpened: true, projectsOpened: false, contactOpened: false, centerSectionBottom: false };
        this.displayNavBar = this.displayNavBar.bind(this);
    }

    componentDidMount(){
        this.checkOverflow();
    }

    checkOverflow(){
        if (this.callRefSection){
            const el = this.callRefSection;
            const hasOverflowingChildren = el.offsetHeight < el.scrollHeight ||
                                    el.offsetWidth < el.scrollWidth;
            this.setState({centerSectionBottom: !hasOverflowingChildren});
            return !hasOverflowingChildren;
        }
        
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        let centerSectionBottom = false;
        if (bottom){
            centerSectionBottom = true;
        } 
        this.setState({centerSectionBottom: centerSectionBottom});
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
        this.setState({ contactOpened: contactActive }, this.checkOverflow);
        this.setState({ centerSectionBottom: false });
    }
    
    render() {
        return (     
            <div>
                <div className='forward navigationBar noCursor'>
                    <div className='personalBar'>
                        <ul className="buttonSpacing">
                            <li><button className={tabClasses.navButton} id={tabClasses.leftNav} onClick={(e) => this.displayNavBar(e, 0)}>About Me</button></li>
                            <li><button className={tabClasses.navButton} id={tabClasses.midNav}  onClick={(e) => this.displayNavBar(e, 1)}>My Projects</button></li>
                            <li><button className={tabClasses.navButton} id={tabClasses.rightNav}  onClick={(e) => this.displayNavBar(e, 2)}>Contacts</button></li>
                        </ul>
                    </div>
                </div>
                <div ref={this.setRefSection} className={`centerSection${this.state.centerSectionBottom ? "" : " bottomBlur"}`} onScroll={this.handleScroll.bind(this)}>
                    <div className={`displayText ${this.state.projectsOpened || this.state.contactOpened ? "hideChildren" : "showChildren"}`}>
                        <p>
                            Thanks for checking out the website. I'm passionate about leveraging technology to enrich peoples lives and create social change. Outside
                            of work I'm big on being active, hiking, music (scroll down to stalk my listening habits), and biking. 
                            I also work on some, hopefully cool, projects, hang out with my dog, and make the best Minecraft creations known to man.
                            <br/><br/>
                            Now something for you recruiters and interviewers out there. I'm currently studying Computer Science at the University of Toronto Mississauga
                            and working as a web developer intern at Environment and Climate Change Canada. If you want to know anything more about me check out my résumé or feel free to reach out
                            (see the Contacts page)
                        </p>
                        <a className="resumeButton" href="QuincyGarciaResume.pdf" download={"Quincy Garcia Resume.pdf"}>Grab My Resume</a>
                    </div>
                    <div className={`displayText ${this.state.aboutOpened || this.state.contactOpened ? "hideChildren" : "showChildren"}`}>
                        <RedEatTab />
                    </div>
                    <div className={`displayText ${this.state.projectsOpened || this.state.aboutOpened ? "hideChildren" : "showChildren"}`}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;