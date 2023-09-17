import { useState } from 'react';


function ProjectTab(props) {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.tabTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                {props.children}
                {props.hasLink &&
                    <a href={props.link} className="card-link">View Project</a>
                }
            </div>
        </div>
    );
};

export default ProjectTab;