import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function PythonSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorYellow} text="Python"></SkillIndicator>
        </div>
    );
}

export default PythonSkillIndicator;