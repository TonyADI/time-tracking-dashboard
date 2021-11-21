import work from '../images/icon-work.svg';
import exercise from '../images/icon-exercise.svg';
import play from '../images/icon-play.svg';
import social from '../images/icon-social.svg';
import study from '../images/icon-study.svg';
import selfcare from '../images/icon-self-care.svg';
var imgSrc;


const Card = props => {
    switch(props.activity.title){
        case 'Work':
            imgSrc = work;
            break;
        case 'Play':
            imgSrc = play;
            break;
        case 'Study':
            imgSrc = study;
            break;
        case 'Exercise':
            imgSrc = exercise;
            break;
        case 'Social':
            imgSrc = social;
            break;
        case 'Self Care':
            imgSrc = selfcare;
            break;
        default:
            imgSrc = work;
    }
    console.log(props.activity)
    return (
        <div className="card-container"
        style={{backgroundColor: props.activity.color}}>
            <img src={imgSrc} alt="activity-icon"/>
            <div className="card">
                <div>
                    <span className="activity-name">{props.activity.title}</span>
                    <img className="ellipsis" alt="ellipsis" src={props.ellipsis}/>
                </div>
                <span className="current-duration">
                    {props.activity.timeframes[props.time].current}hrs</span>
                <span className="timeframe">{props.time === 'daily' ? 'Yesterday' : 
                props.time === 'weekly' ? 
                'Last Week' : 'Last Month'} - {props.activity.timeframes[props.time].previous}hrs</span>
            </div>
        </div>
    )
}

export default Card;