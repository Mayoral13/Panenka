import { useContext } from 'react';
import { Context } from '../Context';

const Formations = () => {
  const { formationDropdown, formationOpen, handleFormation } = useContext(Context);

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
        <div className="dropdown-content" style={{ backgroundColor: 'black' }}>
          <ul className="formation-list d-flex" style={{ listStyle: 'none', padding: 0 }}>
            <li
              onClick={handleFormation}
              style={{ color: 'white', borderRight: '1px solid white', width: 'fit-content', cursor:'pointer' }}
            >
              442
            </li>
            <li
              onClick={handleFormation}
              style={{ color: 'white', width: 'fit-content', cursor:'pointer' }}
            >
              433
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Formations;
