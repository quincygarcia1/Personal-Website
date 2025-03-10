import ProjectTab from "./ProjectTab";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"
import InProgressIndicator from "../IndicatorTabs/InProgressIndicator";
import CSharpSkillIndicator from "../IndicatorTabs/CSharpSkillIndicator";
import UnitySkillIndicator from "../IndicatorTabs/UnitySkillIndicator";

function BakedTab(){
    return(
        <div>
            <ProjectTab tabTitle="Baked" tabSubtitle="A chaotic cooking game" hasLink={false} tileColour={tileClasses.BakedColour}>
                <div style={{ "display":"flex", "gap":"5px" }}>
                    <InProgressIndicator></InProgressIndicator>
                    <CSharpSkillIndicator></CSharpSkillIndicator>
                    <UnitySkillIndicator></UnitySkillIndicator>
                </div>
                
                <p className="card-text">
                    In this co-op game you play as two friends that have opened a bakery. The only issue is that you're prone to
                    causing fire in the kitchen. Manage the stresses of working in the culinary industry while keeping your kitchen
                    from burning down. This game was created as a joint venture between U of T Computer Science, OCADU Design, and U of T Music.
                </p>

                <a id={tileClasses.projectNavButton} href="https://utoronto-my.sharepoint.com/:u:/g/personal/samuel_weiss_mail_utoronto_ca/ETbde6KooJZAvBAQ1o7Pls0B_I9KCLiydXldU0phKkZ-9Q?e=i6dB9r" className="btn btn-primary" target="_blank">Play Our Latest Build</a>
            </ProjectTab>
        </div>
        
    );
}

export default BakedTab;