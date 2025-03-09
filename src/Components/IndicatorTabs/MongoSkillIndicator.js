import SkillIndicator from "./SkillIndicator";
import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function MongoSkillIndicator() {
    
    return (
        <div>
            <SkillIndicator indicatorColour={ProjectStyles.indicatorGreen} text="MongoDB"></SkillIndicator>
        </div>
    );
}

export default MongoSkillIndicator;