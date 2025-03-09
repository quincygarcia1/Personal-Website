import InnscienceTab from "./ProjectComponents/InnscienceTab";
import RedEatTab from "./ProjectComponents/RedEatTab";
import SnibbitTab from "./ProjectComponents/SnibbitTab";
import React from 'react';
import tabClasses from "../Modules/NavigationTabs.module.css"
import textResources from '../Resources/TextResources';
import HurrinetTab from "./ProjectComponents/HurrinetTab";
import TinyProofTab from "./ProjectComponents/TinyProofTab";
import BakedTab from "./ProjectComponents/BakedTab";
//import { animate } from "../SupplementaryFiles/TabAnimation";


class InfoSection extends React.Component {
    constructor(props) {
        super(props);
        this.callRefSection = null;
        this.setRefSection = element => {
            this.callRefSection = element
        }
        this.state = { aboutOpened: true, projectsOpened: false, otherWorkOpened: false, contactOpened: false, centerSectionBottom: false };
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
        let otherWorkActive = false;
        let contactActive = false;

        if (pageCode === 0) {
            aboutActive = true;
        } else if (pageCode === 1) {
            projectsActive = true;
        } else if (pageCode === 2){
            otherWorkActive = true;
        } 
        else {
            contactActive = true;
        }

        this.setState({ aboutOpened: aboutActive });
        this.setState({ projectsOpened: projectsActive });
        this.setState({ otherWorkOpened: otherWorkActive });
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
                            <li><button className={tabClasses.navButton} id={tabClasses.midLeftNav}  onClick={(e) => this.displayNavBar(e, 1)}>Coding Projects</button></li>
                            <li><button className={tabClasses.navButton} id={tabClasses.midRightNav}  onClick={(e) => this.displayNavBar(e, 2)}>Other Fun Work</button></li>
                            <li><button className={tabClasses.navButton} id={tabClasses.rightNav}  onClick={(e) => this.displayNavBar(e, 3)}>Contacts</button></li>
                        </ul>
                    </div>
                </div>
                <div ref={this.setRefSection} className={`centerSection`} onScroll={this.handleScroll.bind(this)}>
                    <div className={`displayText ${(this.state.projectsOpened || this.state.otherWorkOpened || this.state.contactOpened) ? "hideChildren" : "showChildren"}`}>
                        <p>
                            {textResources.aboutMeText.firstPart}
                            <br/><br/>
                            {textResources.aboutMeText.secondPart}
                        </p>
                        <a className="resumeButton" href="DownloadableContent/QuincyGarciaResume.pdf" download={"Quincy Garcia Resume.pdf"}>{textResources.resumeStatement}</a>
                    </div>
                    <div className={`displayText ${(this.state.aboutOpened || this.state.otherWorkOpened || this.state.contactOpened) ? "hideChildren" : "showChildren"} ${this.state.aboutOpened || this.state.otherWorkOpened || this.state.contactOpened ? "" : "maxInfo overflow"}`}>
                        <BakedTab />
                        <TinyProofTab />
                        <HurrinetTab />
                        <InnscienceTab />
                        <RedEatTab />
                        <SnibbitTab />
                    </div>
                    <div className={`displayText ${(this.state.aboutOpened || this.state.projectsOpened || this.state.contactOpened) ? "hideChildren" : "showChildren"} ${this.state.aboutOpened || this.state.projectsOpened || this.state.contactOpened ? "" : "maxInfo overflow"}`}>
                        
                    </div>
                    <div className={`displayText ${(this.state.projectsOpened || this.state.otherWorkOpened || this.state.aboutOpened) ? "hideChildren" : "showChildren"}`}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;