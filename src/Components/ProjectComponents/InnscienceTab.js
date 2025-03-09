import CSSSkillIndicator from "../IndicatorTabs/CSSSkillIndicator";
import ProjectTab from "./ProjectTab";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"
import DjangoSkillIndicator from "../IndicatorTabs/DjangoSkillIndicator";
import SciKitLearnSkillIndicator from "../IndicatorTabs/SciKitLearnSkillIndicator";

function InnscienceTab(){
    return(
        <div>
            <ProjectTab tabTitle="InnScience Labs" tabSubtitle="Added the recommendation algorithm and profile statuses for the organization" hasLink={false} tileColour={tileClasses.InnScienceColour}>
                <div style={{ "display":"flex", "gap":"5px" }}>
                    <DjangoSkillIndicator></DjangoSkillIndicator>
                    <CSSSkillIndicator></CSSSkillIndicator>
                    <SciKitLearnSkillIndicator></SciKitLearnSkillIndicator>
                </div>
                
                <p className="card-text">
                    As part of a Software Engineering Course I worked with small student team to help InnScience 
                    Labs with their recommendation system that pairs researchers with research assistants.
                </p>
            </ProjectTab>
        </div>
        
    );
}

export default InnscienceTab;