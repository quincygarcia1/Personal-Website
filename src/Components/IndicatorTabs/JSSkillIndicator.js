import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function JSSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorYellow} text="JavaScript"></SkillIndicator>
        </div>
    );
}

export default JSSkillIndicator;