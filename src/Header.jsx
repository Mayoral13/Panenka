import './header.css';
import { useContext } from 'react';
import { Context } from './Context';
const Header = ()=> {
  const {isOpen, toggleSidebar, closeSidebar} = useContext(Context)


  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='nav'>
        <header>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <h3>PLAYER MARKET</h3>
      </div>
  
      <div className='balance'>
        <h4>Balance : 1700</h4>
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
