import React, { useRef, useEffect } from 'react';
import pitch from '../images/pitch.svg';
import Position from './Position';
import Team from './Team';
import Role from './Role';
import Formations from './Formations';

const Pitch = () => {
  const pitchImageRef = useRef(null);

  useEffect(() => {
    if (pitchImageRef.current) {
      const width = pitchImageRef.current.clientWidth;
      const height = pitchImageRef.current.clientHeight;
      console.log('Rendered Pitch Width:', width);
      console.log('Rendered Pitch Height:', height);
    }
  }, []);

  const renderPlayerImages = () => {
    const players = [
      { x: 30, y: 25, image: './src/images/placeholder.png' },
      { x: 50, y: 45, image: './src/images/placeholder.png' },
      // Add more players with their respective x, y coordinates and image URLs
    ];

    const CLICK = ()=>{
      console.log("CLICKED")
    }

    return players.map((player, index) => (
      <img onClick={CLICK}
        key={index}
        src={player.image}
        width={'45px'}
        alt={`Player ${index + 1}`}
        style={{
          cursor:'pointer',
          position: 'absolute',
          left: `${player.x}%`,
          top: `${player.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    ));
  };

  return (
    <div className="container">
      <Position />
      <div className="row">
        <div className="col-md-8">
          <Formations />
          <div style={{ position: 'relative', width: '100%', height: '75%' }}>
            <img
              src={pitch}
              alt="Pitch"
              style={{ width: '100%', height: '90%' }}
              ref={pitchImageRef}
            />
            {renderPlayerImages()}
          </div>
        </div>
        <div className="col-md-4" style={{ width: '300px', overflowY: 'auto', height: '500px' }}>
          <div className="container" style={{ border: 'white 4px solid' }}>
            <Role />
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
