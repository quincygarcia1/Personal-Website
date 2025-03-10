import InnscienceTab from "./ProjectComponents/InnscienceTab";
import RedEatTab from "./ProjectComponents/RedEatTab";
import SnibbitTab from "./ProjectComponents/SnibbitTab";
import React from 'react';
import tabClasses from "../Modules/NavigationTabs.module.css"
import textResources from '../Resources/TextResources';
import HurrinetTab from "./ProjectComponents/HurrinetTab";
import TinyProofTab from "./ProjectComponents/TinyProofTab";
import BakedTab from "./ProjectComponents/BakedTab";
import SupplementalProjectStyles from "../Modules/SupplementalProjectStyles.module.css"
import LinkPageStyles from "../Modules/LinkPageStyles.module.css"
import BaseWorkContiner from "./PersonalProjectContainers/BaseWorkContainer";
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
                            <li><button className={tabClasses.navButton} id={tabClasses.rightNav}  onClick={(e) => this.displayNavBar(e, 3)}>My Links</button></li>
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
                        <a className="resumeButton decorationless" href="DownloadableContent/Quincy_Garcia___Resume__Copy_.pdf" download={"Quincy Garcia Resume.pdf"}>{textResources.resumeStatement}</a>
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
                        <div className={`${SupplementalProjectStyles.projectGrid}`}>
                            <BaseWorkContiner hasLink={true} link="https://drive.google.com/drive/folders/1ldmsjb2z4tL14jyP6dRANbQJdrdp0V1Q?usp=sharing">
                                {{
                                    headerContent: <h1>Urban Journal</h1>,
                                    bodyContent: <p>A scrapbook and accompanying essay that focuses on the exploration of the urban space in Toronto
                                        and how it intersects with the environment. One of the most intriguing exploratory ventures I've done.
                                    </p>
                                }}
                            </BaseWorkContiner>
                            <div className={`${SupplementalProjectStyles.flexRow}`}>
                                <BaseWorkContiner hasLink={false} link="">
                                    {{
                                        headerContent: <h1>Participation in<br></br>Global Lab Challenge</h1>,
                                        bodyContent: <p>As part of the Global Lab Challenge my team created an app to help individuals reach proper medical care sites during flooding.</p>
                                    }}
                                </BaseWorkContiner>
                                <BaseWorkContiner hasLink={true} link="https://docs.google.com/document/d/1tbnhZgMy12hoIkLpJYirA6eSVaNubaRdOz-U2aIG1RE/edit?usp=sharing">
                                    {{
                                        headerContent: <h1>Journal Articles About Deep Learning in Disease Tracking</h1>,
                                        bodyContent: <p>A collection of scientific journal articles that I'd written about the applications of Machine Learning and Deep Learning
                                            in the medical industry. Particularly, in regards to disease detection and diagnosis.
                                        </p>
                                    }}
                                </BaseWorkContiner>
                            </div>
                        </div>
                    </div>
                    <div className={`displayText ${(this.state.projectsOpened || this.state.otherWorkOpened || this.state.aboutOpened) ? "hideChildren" : "showChildren"}`}>
                        <div className={LinkPageStyles.linkGrid}>
                            <div>
                                <a className={LinkPageStyles.link} href="https://github.com/quincygarcia1" target="_blank">
                                    <img className={LinkPageStyles.linkLogo} id={LinkPageStyles.flowerTLeft} src="Images/GithubLogo.png"/>
                                </a>
                            </div>
                            <div>
                                <a className={LinkPageStyles.link} href="https://www.linkedin.com/in/quincy-garcia7/" target="_blank">
                                    <img className={LinkPageStyles.linkLogo} id={LinkPageStyles.flowerTRight} src="Images/LinkedInLogo.png"/>
                                </a>
                            </div>
                           <div>
                                <a className={LinkPageStyles.link} href="mailto:quincygarcia1@gmail.com" target="_blank">
                                    <img className={LinkPageStyles.linkLogo} id={LinkPageStyles.flowerBLeft} src="Images/MailLogo.jpg"/>
                                </a>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoSection;