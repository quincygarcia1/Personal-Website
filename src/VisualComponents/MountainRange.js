import classes from "../Modules/EnvironmentGraphics.module.css"

function MountainRange(){
    return(
        <div className={'mountainHolder'}>
            <div className={`${classes.mountain} ${classes.left} ${classes.close}`}/>
            <div className={`${classes.mountain} ${classes.leftmid} ${classes.far}`}/>
            <div className={classes.rightBrightness}></div>
            <div className={`${classes.mountain} ${classes.rightmid} ${classes.farthest}`}/>
            <div className={`${classes.mountain} ${classes.right} ${classes.close}`}/>
        </div>
    );
}

export default MountainRange;