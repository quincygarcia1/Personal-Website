import { useState } from 'react';
import projectClasses from "../../Modules/SupplementalProjectStyles.module.css";

function BaseWorkContiner(props) {
    const Tag = (props.hasLink) ? "a" : "div" 

    return(
        <Tag className={`decorationless`} href={props.hasLink ? props.link : undefined} target="_blank">
            <div className={`${projectClasses.container}`}>
                <div className={`${projectClasses.headerContent}`}>
                    {props.children.headerContent}
                </div>
                <div className={`${projectClasses.bodyContent}`}>
                    {props.children.bodyContent}
                </div>
            </div>
        </Tag>
        
    );
};

export default BaseWorkContiner;