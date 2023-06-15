import './header.css';
import { useContext } from 'react';
import { Context } from '../Context';

const Header = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useContext(Context);

  return (
    <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: '#191b1d' }}>
      <div className="row justify-content-between m-4 w-100">
        <div className="nav">
          <header style={{ backgroundColor: '#191b1d' }}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </header>
          <div className='d-flex'>
            <h3 className="p-2" style={{ color: 'white' }}>MY SQUAD</h3>
          </div>
        </div>
      </div>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
          <li><a style={{cursor:'pointer',color:'white'}}>My Squad</a></li>
            <li><a style={{cursor:'pointer',color:'white'}}>My Team</a></li>
          </ul>
        </nav>
      </div>
  
      {isOpen && <div className="overlay" onClick={closeSidebar} />}
  
      <div className={`content ${isOpen ? 'shifted' : ''}`}>
        {/* Add your content here */}
      </div>
    </div>
  );
}

export default Header;
