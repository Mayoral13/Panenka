import React, { useRef, useEffect, useState } from 'react';
import pitch from '../images/pitch.svg';
import Position from './Position';
import Team from './Team';
import Role from './Role';
import Formations from './Formations';

const Pitch = () => {
  const pitchImageRef = useRef(null);
  const [pitchWidth, setPitchWidth] = useState(0);
  const [pitchHeight, setPitchHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (pitchImageRef.current) {
        const width = pitchImageRef.current.clientWidth;
        const height = pitchImageRef.current.clientHeight;
        setPitchWidth(width);
        setPitchHeight(height);
        console.log(width)
        console.log(height)
      }
    };

    updateDimensions(); // Initial dimensions

    window.addEventListener('resize', updateDimensions); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', updateDimensions); // Clean up the event listener on component unmount
    };
  }, []);

  const renderPlayerImages = () => {
    const players = [
      { x: 50, y: 18, image: './src/images/placeholder.png' }, //GK
      { x: 26, y: 34, image: './src/images/placeholder.png' }, //LB
      { x: 42, y: 34, image: './src/images/placeholder.png' }, //CB1
      { x: 58, y: 34, image: './src/images/placeholder.png' }, //CB2
      { x: 74, y: 34, image: './src/images/placeholder.png' }, //RB
      { x: 22, y: 60, image: './src/images/placeholder.png' }, //LM
      { x: 40.67, y: 60, image: './src/images/placeholder.png' }, //CM1
      { x: 59.33, y: 60, image: './src/images/placeholder.png' }, //CM2
      { x: 78, y: 60, image: './src/images/placeholder.png' }, //RM
      { x: 40, y: 84, image: './src/images/placeholder.png' }, //ST1
      { x: 59.5, y: 84, image: './src/images/placeholder.png' }, //ST2
      // Add more players with their respective x, y coordinates and image URLs
    ];

    const calculateSize = (size) => {
      return (size * pitchWidth) / 100; // Convert the percentage size to pixels based on pitch width
    };

    const handleClick = () => {
      console.log('CLICKED');
    };

    return players.map((player, index) => (
      <img
        onClick={handleClick}
        key={index}
        src={player.image}
        width={calculateSize(7) + 'px'} // Example: 5% width of the pitch
        alt={`Player ${index + 1}`}
        style={{
          cursor: 'pointer',
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
