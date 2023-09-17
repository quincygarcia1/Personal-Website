import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function SkillIndicator(props) {
    return(
        <div className={`${ProjectStyles.curvedIndicator} ${props.indicatorColour}`}>
            {props.text}
        </div>
    );
}

export default SkillIndicator;