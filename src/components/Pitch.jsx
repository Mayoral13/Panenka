import React, { useRef, useEffect, useState, useContext } from 'react';
import pitch from '../images/pitch.svg';
import Position from './Position';
import Team from './Team';
import Role from './Role';
import Formations from './Formations';
import placeholder from "../images/placeholder.png"
import { Context } from '../Context';

const Pitch = () => {
  const {Formation} = useContext(Context)
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
      }
    };

    updateDimensions(); // Initial dimensions

    window.addEventListener('resize', updateDimensions); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', updateDimensions); // Clean up the event listener on component unmount
    };
  }, []);

  const renderPlayerImages = () => {
    const calculateSize = (size) => {
      return (size * pitchWidth) / 100; // Convert the percentage size to pixels based on pitch width
    };

   

    return Formation.map((player, index) => (
      <img
      id={`Player${index + 1}`}
        key={index}
        src={placeholder}
        width={calculateSize(7) + 'px'} // Example: 5% width of the pitch
        alt={`Player ${index + 1}`}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          left: `${player.x}%`,
          top: `${player.y}%`,
          transition: `top ${1000}ms, left ${1000}ms`,
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
        <div className="col-md-4" style={{ width: '260px', overflowY: 'auto', height: '500px' }}>
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
