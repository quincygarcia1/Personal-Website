import FlutterSkillIndicator from "../IndicatorTabs/FlutterSkillIndicator";
import ProjectTab from "./ProjectTab";

function RedEatTab(){
    return(
        <div>
            <ProjectTab tabTitle="RedEat" hasLink={false}>
                <FlutterSkillIndicator></FlutterSkillIndicator>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </ProjectTab>
        </div>
    );
}

export default RedEatTab;