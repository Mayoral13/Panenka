import React from 'react';
import pitch from '../images/pitch.svg';
import Position from './Position';
import Team from './Team';
import Role from './Role';
import Formations from './Formations';

const Pitch = () => {
  return (
    <div className="container">
        <Position/>
      <div className="row">
        <div className="col-md-8">
        <Formations/>
          <img src={pitch} alt="Pitch" style={{ width: '100%', height: '75%' }} />
        </div>
        <div className="col-md-4" style={{ width: '300px', overflowY: 'auto' , height: '500px' }}>
          <div className="container" style={{border:'white 4px solid'}}>
            <Role/>
           <Team/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
