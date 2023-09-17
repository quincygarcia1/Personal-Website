import { useState } from 'react';
import tabClasses from "../../Modules/NavigationTabs.module.css"

function AboutTab(props){
    return (
        <div className={tabClasses.morphing}>
            <div className={tabClasses.word}>About me</div>
            <div className={tabClasses.word}>What I'm up to</div>
            <div className={tabClasses.word}>My resumé</div>
        </div>
    );
};

export default AboutTab;