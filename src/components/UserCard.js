const UserCard = props => {
    const handleClick = e => {
        props.handleClick(e.target.value);
    }
    return (
        <div className="user-card">
            <div className="profile-container">
                <img className="profile-picture" alt="profile picture" 
                src={props.profilePicture}/>
                
                <span className="report">Report for</span>
                <span className="user-name">Jeremy Robson</span>
            </div>
            <ul>
                <li><button value="daily"
                onClick={handleClick}>Daily</button></li>
                <li><button value="weekly"
                onClick={handleClick}>Weekly</button></li>
                <li><button value="monthly"
                onClick={handleClick}>Monthly</button></li>
            </ul>
        </div>
    );
}

export default UserCard;