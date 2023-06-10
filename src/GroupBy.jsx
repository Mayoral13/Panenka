import { useContext } from 'react';
import { Context } from './Context';
const GroupBy = () => {
    const {showDropdown, handleClick} = useContext(Context)
  return (
    <div>
      <p className='dropdown-toggle' onClick={handleClick}>Group by</p>
      {showDropdown && (
        <div className="dropdown">
            <ul>
            <li> <h6
            className=" m-2 cursor"
          >
           Value
          </h6></li>

          <li> <h6
            className=" m-2 cursor"
          >
           Points
          </h6></li>
          
          </ul>
         
        </div>
      )}
    </div>
  );
};

export default GroupBy;
