import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function CSSSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorBlue} text="CSS"></SkillIndicator>
        </div>
    );
}

export default CSSSkillIndicator;