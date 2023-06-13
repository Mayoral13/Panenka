import './header.css';

const Header = () => {

  return (
    <div className="container-fluid d-flex align-items-center" style={{ backgroundColor: '#191b1d' }}>
      <div className="row justify-content-between m-4 w-100">
        <div className="nav">
          <header style={{ backgroundColor: '#191b1d' }}>
            <div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </header>
          <div className="header-content">
            <h3 className="p-2" style={{ color: 'white',cursor:'pointer' }}>MySquad</h3>
          </div>
          <div className="header-content" style={{ marginLeft: 'auto',cursor:'pointer' }}>
            <h3 className="p-2" style={{ color: 'white' }}>MyTeam</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
