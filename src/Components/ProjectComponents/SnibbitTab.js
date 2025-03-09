import CSSSkillIndicator from "../IndicatorTabs/CSSSkillIndicator";
import HTMLSkillIndicator from "../IndicatorTabs/HTMLSkillIndicator";
import JSSkillIndicator from "../IndicatorTabs/JSSkillIndicator";
import ProjectTab from "./ProjectTab";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"

function SnibbitTab(){
    return(
        <div>
            <ProjectTab tabTitle="Snibbit Code" tabSubtitle="Chrome Extension for Managing Code Snippets" hasLink={true} tileColour={tileClasses.SnibbitColour} link="https://github.com/quincygarcia1/SnibbitCode">
                <div style={{ "display":"flex", "gap":"5px" }}>
                    <CSSSkillIndicator></CSSSkillIndicator>
                    <HTMLSkillIndicator></HTMLSkillIndicator>
                    <JSSkillIndicator></JSSkillIndicator>
                </div>
                
                <p className="card-text">
                    My first coding project, a Chrome Extension designed to help save snippets of code from stack exchange websites
                    using Chrome Storage.
                </p>
            </ProjectTab>
        </div>
        
    );
}

export default SnibbitTab;