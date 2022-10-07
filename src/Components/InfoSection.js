import CollapsibleSection from "./CollapsibleSection";

function InfoSection(){
    return(
        <div className="centerSection">
            <div>
                <CollapsibleSection label="About Me" idString="about">
                    <div className="contentHolder">
                        <p> My name is Quincy Garcia and I'm currently a third year Computer Science Student at the University of Toronto Mississauga.
                            I'm a big fan of the outdoors and remaining healthy and I'm passionate about using softare development to better our
                            environement and ourselves. 
                        </p>
                        <p>I love to work in teams and currently I'm working with a few groups to make some cool projects (stay tuned!) Outside of
                            academics, I enjoy reading articles online, listening to music, and staying active through hiking, running, or any other activity
                            I can think of in the moment. Below you can find some more info about what I work on and my resume, feel free to look around!
                        </p>
                    </div>
                    
                </CollapsibleSection>
                <div className="notLastSpace"/>
                <CollapsibleSection label="My Projects" idString="projects">
                    <p> My name is Quincy Garcia and I'm currently a third year Computer Science Student at the University of Toronto Mississauga.
                            I'm a big fan of the outdoors and remaining healthy and I'm passionate about using softare development to better our
                            environement and ourselves. 
                    </p>
                    <p>I love to work in teams and currently I'm working with a few groups to make some cool projects (stay tuned!) Outside of
                            academics, I enjoy reading articles online, listening to music, and staying active through hiking, running, or any other activity
                            I can think of in the moment. Below you can find some more info about what I work on and my resume, feel free to look around!
                    </p>
                </CollapsibleSection>
                <div className="notLastSpace"/>
                <CollapsibleSection label='My Accounts & Resume' idString="contacts">
                    <div className="contentHolder">
                        <p>
                            <a className="resumeButton" href="QuincyGarciaResume.pdf" download={"Quincy Garcia Resume.pdf"}>Grab a Copy of my Resume</a>
                        </p>
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
    

}

export default InfoSection;