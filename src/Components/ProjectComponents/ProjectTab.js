import { useState } from 'react';
import tileClasses from "../../Modules/ProjectTileStyles.module.css";

function ProjectTab(props) {
    return(
        <div className={`card ${tileClasses.baseTile}`} id={props.tileColour}>
            <div className="card-body">
                <h5 className="card-title">{props.tabTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.tabSubtitle}</h6>
                {props.children}
                {props.hasLink &&
                    <a id={tileClasses.projectNavButton} href={props.link} className="btn btn-primary" target="_blank">View Project</a>
                }
            </div>
        </div>
    );
};

export default ProjectTab;