import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function SQLSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorDBlue} text="SQLite"></SkillIndicator>
        </div>
    );
}

export default SQLSkillIndicator;