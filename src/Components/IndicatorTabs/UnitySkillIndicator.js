import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function UnitySkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorGrey} text="Unity Game Engine"></SkillIndicator>
        </div>
    );
}

export default UnitySkillIndicator;