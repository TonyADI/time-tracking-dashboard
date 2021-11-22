import { useState } from 'react';
import Card from './components/Card';
import UserCard from './components/UserCard';
import ellipsis from './images/icon-ellipsis.svg';
import profilePicture from './images/image-jeremy.png';
import data from './utils/data.json';
import './App.css';

const App = () => {
  const [time, setTime] = useState('weekly');

  const handleClick = value => {
    setTime(value);
  }

  return (
    <div className="App">
      <div className="dashboard">
        <UserCard profilePicture={profilePicture} 
        handleClick={handleClick} time={time}/>
        <div className="card-list">
          {data ? data.map(activity => {
            return <Card activity={activity} ellipsis={ellipsis}
            time={time} key={activity.title}/>
          }) : <div>We encoutered a problem.</div>}
          </div>
      </div>
    </div>
  );
}

export default App;
