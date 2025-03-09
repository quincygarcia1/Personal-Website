import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function CSharpSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorLGreen} text="C#"></SkillIndicator>
        </div>
    );
}

export default CSharpSkillIndicator;