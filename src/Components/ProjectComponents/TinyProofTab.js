
import ProjectTab from "./ProjectTab";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"
import InProgressIndicator from "../IndicatorTabs/InProgressIndicator";

function TinyProofTab(){
    return(
        <div>
            <ProjectTab tabTitle="TinyProof" tabSubtitle="Mentoring and managing a team aiming to create a Deep Learning model that solves mathematical proofs" hasLink={false} tileColour={tileClasses.TinyProofColour}>
                <div style={{ "display":"flex", "gap":"5px" }}>
                </div>
                
                <p className="card-text">
                    Serving as the student mentor for a team of lower-year students as part of the Google Developer Student Club's 
                    "Community Projects" intiative. The TinyProof project is a machine learning pipeline that leverages
                    an altered version of deepseek-prover and a reinforcement learning algorithm used to solve mathematical proofs in
                    the Lean4 syntax.
                </p>
            </ProjectTab>
        </div>
        
    );
}

export default TinyProofTab;