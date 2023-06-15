import { useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
const { dropdownRef, toggleDropdown, handleOptionClick, isOpen} = useContext(Context)

  return (
    <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: '#191b1d' }}>
      <div className="row justify-content-between m-4 w-100">
        <div className="nav">
          <div className='d-flex align-items-center'>
            <h3 className="p-2 dropdown-title" style={{ color: 'white' }}>
              MY SQUAD
              <svg className={`bi ${isOpen ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" onClick={toggleDropdown}>
                <path d="M8 10.707l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L8 10.707z" />
              </svg>
            </h3>
            {isOpen && (
              <div className="dropdown-content" ref={dropdownRef}>
                {/* Dropdown Content */}
                <Link style={{color:'white'}} onClick={handleOptionClick} to = "/Team">MY TEAM</Link>  
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
