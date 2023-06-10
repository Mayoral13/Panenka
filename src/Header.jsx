import './header.css';
import { useContext } from 'react';
import { Context } from './Context';
const Header = ()=> {
  const {isOpen, toggleSidebar, closeSidebar} = useContext(Context)


  return (
    <div className="container-fluid d-flex align-items-center" style={{backgroundColor:'#191b1d'}}>
      <div className="row justify-content-between m-3 w-100">
        <div className="nav">
          <header>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </header>
          <h3 className="p-2">PLAYER MARKET</h3>
        </div>
      </div>
  
      <div className="balance d-flex m-4" style={{ marginLeft: 'auto' }}>
      <h4 className="me-1">Balance:</h4>
        <h4>1700</h4>
      </div>
  
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
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
