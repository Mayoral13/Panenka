import { useContext } from 'react';
import { Context } from '../Context';

const Formations = () => {
  const { formationDropdown, formationOpen, handleFormation, changeFormation } = useContext(Context);

  return (
    <div className='d-flex align-items-center'>
      <h3 className="p-2 dropdown-title d-flex" style={{ color: 'white' }}>
        <div>Formations</div>
        <svg
          className={`bi ${formationOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          onClick={formationDropdown}
        >
          <path d="M8 10.707l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L8 10.707z" />
        </svg>
      </h3>
      {formationOpen && (
        <div className="formation-content" style={{ backgroundColor: 'black' }}>
          <ul className="formation-list d-flex" style={{ listStyle: 'none', padding: 0 }}>
            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              4-4-2
            </li>
            <li value={'433'}
              onClick={handleFormation}
              style={{ color: 'white',  borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              4-3-3 FLAT
            </li>

            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              4-3-3 DM
            </li>

            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              4-3-3 AM
            </li>

            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              4-1-2-1-2 CF
            </li>

            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              3-4-3
            </li>
            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              3-5-2
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Formations;
