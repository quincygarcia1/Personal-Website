
import FlutterSkillIndicator from "../IndicatorTabs/FlutterSkillIndicator";
import MongoSkillIndicator from "../IndicatorTabs/MongoSkillIndicator";
import DjangoSkillIndicator from "../IndicatorTabs/DjangoSkillIndicator";
import SQLSkillIndicator from "../IndicatorTabs/SQLSkillIndicator";
import tileClasses from "../../Modules/ProjectTileStyles.module.css"
import ProjectTab from "./ProjectTab";

function RedEatTab(){
    return(
        <div>
            <ProjectTab tabTitle="RedEat" tabSubtitle="App for dietary help" hasLink={true} tileColour={tileClasses.RedEatColour} link="https://github.com/utmgdsc/RedEat">
                <div style={{ "display":"flex", "gap":"5px" }}>
                    <FlutterSkillIndicator></FlutterSkillIndicator>
                    <MongoSkillIndicator></MongoSkillIndicator>
                    <DjangoSkillIndicator></DjangoSkillIndicator>
                    <SQLSkillIndicator></SQLSkillIndicator>
                </div>
                
                <p className="card-text">
                    An app created as part of the university Google Student Developer Club "Community Projects Initiative".
                    Provides users with the ability to track their health metrics and understand nutrition facts of foods
                    given UPC bar codes.
                </p>
            </ProjectTab>
        </div>
    );
}

export default RedEatTab;