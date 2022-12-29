import { useState } from 'react';


function CollapsibleSection(props) {
    const [ sectionOpened, setSectionOpen ] = useState(true);

    function toggleCollapse(){
        setSectionOpen(!sectionOpened);
    }

    return(
        <div id={props.idString}>
            <button className={sectionOpened ? "openButton" : "closedButton"} onClick={toggleCollapse}>{props.label}</button>
            {sectionOpened && (
                <div className='toggledSection'>{props.children}</div>
            )}
        </div>
    );
};

export default CollapsibleSection;