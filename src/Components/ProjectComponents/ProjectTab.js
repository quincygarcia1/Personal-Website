import { useState } from 'react';
import tileClasses from "../../Modules/ProjectTileStyles.module.css"


function ProjectTab(props) {
    const [ TabSelected, setSelected ] = useState(false);

    function toggleExpand(){
        setSelected(!TabSelected);
    }

    return(
        <div div className="tileSpacing">
            <button className={`projectTile ${tileClasses[props.tileColour]} ${TabSelected ? "projectTileSelected" : "projetTileUnselected"}`} onClick={toggleExpand}>
                <div className={`projectTitle ${TabSelected ? "projectTitleSmall" : "projetTitleBig"}`}>
                    {props.imgLink !== '' && (
                        <img src={props.imgLink} alt=""/>
                    )}
                    <label className={tileClasses[props.titleTextStyle]}>{props.title}</label>
                </div>
                {TabSelected && (
                    <div className='projectContent'>{props.children}</div>
                )}
            </button>
        </div>
    );
};

export default ProjectTab;