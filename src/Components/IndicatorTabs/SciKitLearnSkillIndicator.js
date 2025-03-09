import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function SciKitLearnSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorLOrange} text="scikit-learn"></SkillIndicator>
        </div>
    );
}

export default SciKitLearnSkillIndicator;