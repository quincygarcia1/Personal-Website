import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function NumpySkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorBlack} text="NumPy"></SkillIndicator>
        </div>
    );
}

export default NumpySkillIndicator;