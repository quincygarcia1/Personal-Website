import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function DjangoSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorOrange} text="Django"></SkillIndicator>
        </div>
    );
}

export default DjangoSkillIndicator;