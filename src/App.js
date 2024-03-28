

import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [hp, setHp] = useState(100);
  const [mp, setMp] = useState(100);

  const handleKillMonster = (playerIndex) => {
    const experienceGain = Math.floor(Math.random() * (50 + level * 10)) + 1; // Increase experience gain with level
    const newExperience = experience + experienceGain;
    const newLevel = Math.floor(newExperience / 100) + 1; // Level up every 100 experience points
    setExperience(newExperience);
    if (newLevel > level) {
      setLevel(newLevel);
    }
  
    // Update the experience and level for the specific player
    const updatedPlayers = [...players];
    updatedPlayers[playerIndex] = {
      ...updatedPlayers[playerIndex],
      experience: newExperience,
      level: newLevel
    };
    setPlayers(updatedPlayers);
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      setPlayers([...players, { name: newPlayerName, level: 1, experience: 0 }]);
      setNewPlayerName('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="solo-leveling-container bg-gray-900">
        <hr className='glowing-hr'></hr>
        <h1 className="solo-leveling-title pt-5">STATUS</h1>
        <hr className='glowing-hr'></hr>
        <div className="flex p-5 justify-between cont">
          <div className="left text-left">
            {players.map((player, index) => (
              <div key={index}>
                <p className="solo-leveling-text text-m">Name: {player.name}</p>
                <p className="solo-leveling-text">Job:Shadow Monarch</p>
                <p className="solo-leveling-text">Experience: {experience}</p>
                <p>  </p>
                <p> </p>
                <p className="solo-leveling-text text-m pt-5">HP:</p>
                <progress className="solo-progress-bar" value={hp} max="100"></progress>
                <p className="solo-leveling-text text-m">MP:</p>
                <progress className="solo-progress-bar" value={mp} max="100"></progress>
                
              </div>
            ))}
          </div>
          <div className="right text-left">
            <p className="solo-leveling-text">Level: {level}</p>
            <p className="solo-leveling-text">Fatigue: 0</p>
          </div>
        </div>
        <hr className='glowing-hr'></hr>
        <div className="flex p-5 justify-between cont">
          <div className="left text-left">
            <p className="solo-leveling-text text-m">STRENGTH:</p>
            <p className="solo-leveling-text">AGILITY:</p>
            <p className="solo-leveling-text">SENSE:</p>
          </div>
          <div className="right text-left">
            <p className="solo-leveling-text">VITALITY:</p>
            <p className="solo-leveling-text">INTELLIGENCE:</p>
          </div>
        </div>
        <hr className='glowing-hr'></hr>
        <button className="solo-leveling-button" onClick={handleKillMonster}>Kill Monster</button>
        <p>Monsters Killed: {experience}</p>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className='text-black bg-gray-200 p-2 rounded-md'
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
          />
          <button className="solo-leveling-button" onClick={handleAddPlayer}>Add Player</button>
        </div>
      </div>
    </div>
  );
}

export default App;

