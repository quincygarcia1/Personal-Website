
import ProjectTab from "./ProjectTab";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"
import PythonSkillIndicator from "../IndicatorTabs/PythonSkillIndicator";
import NumpySkillIndicator from "../IndicatorTabs/NumpySkillIndicator";

function HurrinetTab(){
    return(
        <div>
            <ProjectTab tabTitle="Hurrinet" tabSubtitle="Deep Learning model to predict worldwide hurricane formation and trajectory" hasLink={true} tileColour={tileClasses.HurrinetColour} link="https://github.com/quincygarcia1/HurriNet">
                <div style={{ "display":"flex", "gap":"5px" }}>
                    <PythonSkillIndicator></PythonSkillIndicator>
                    <NumpySkillIndicator></NumpySkillIndicator>
                </div>
                
                <p className="card-text">
                    A final project for my Neural Networks and Deep Learning Course. My team's model architecture, as described in an
                    accompanying report is a embedded transformer network that was used to achieve better hurricane formation predictions than previous research.
                </p>
            </ProjectTab>
        </div>
        
    );
}

export default HurrinetTab;