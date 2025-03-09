import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function HTMLSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorOrange} text="HTML"></SkillIndicator>
        </div>
    );
}

export default HTMLSkillIndicator;