const UserCard = props => {
    const handleClick = e => {
        props.handleClick(e.target.value);
    }
    return (
        <div className="user-card">
            <div className="profile-container">
                <img className="profile-picture" alt="account user" 
                src={props.profilePicture}/>
                <div className="report-container">
                    <span className="report">Report for</span>
                    <span className="user-name">Jeremy Robson</span>
                </div>
            </div>
            <ul>
                <li><button value="daily"
                onClick={handleClick}
                style={{color: props.time === 'daily' && '#fff'}}>Daily</button></li>
                <li><button value="weekly"
                onClick={handleClick}
                style={{color: props.time === 'weekly' && '#fff'}}>Weekly</button></li>
                <li><button value="monthly"
                onClick={handleClick}
                style={{color: props.time === 'monthly' && '#fff'}}>Monthly</button></li>
            </ul>
        </div>
    );
}

export default UserCard;