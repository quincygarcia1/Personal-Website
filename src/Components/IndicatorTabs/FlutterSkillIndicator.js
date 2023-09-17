import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function FlutterSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorLBlue} text="Flutter"></SkillIndicator>
        </div>
    );
}

export default FlutterSkillIndicator;