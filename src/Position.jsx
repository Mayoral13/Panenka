const Position = ()=>{
    return (
        <div className="container mt-4">
          <div className="row justify-content-evenly">
            <div className="col-auto me-4">
              <div className="list-group">
                <p className="Headings">MY TEAM</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p className="Headings">GOALKEEPERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p className="Headings">DEFENDERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
              <p className="Headings">MIDFIELDERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p className="Headings">ATTACKERS</p>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Position