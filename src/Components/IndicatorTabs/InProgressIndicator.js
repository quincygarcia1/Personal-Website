import ProjectStyles from "../../Modules/ProjectTileStyles.module.css";

function InProgressIndicator() {
    return (
        <div>
            <div className={`${ProjectStyles.curvedIndicator} ${ProjectStyles.pulse}`} id={`${ProjectStyles.inProgressStyling}`}>In Progress</div>
        </div>
        
    );
}

export default InProgressIndicator;