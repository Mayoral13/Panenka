import { useContext } from "react";
import { Context } from "../Context";
const Position = ()=>{
  const {Goalkeepers, FetchPlayers, Defenders, Midfielders, Attackers} = useContext(Context)
    return (
        <div className="container mt-4">
          <div className="row justify-content-evenly">
            <div className="col-auto me-4">
              <div className="list-group">
                <p onClick={FetchPlayers} className="Headings">ALL PLAYERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p className="Headings" onClick={Goalkeepers}>GOALKEEPERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p onClick={Defenders} className="Headings">DEFENDERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
              <p onClick={Midfielders} className="Headings">MIDFIELDERS</p>
              </div>
            </div>
            <div className="col-auto">
              <div className="list-group">
                <p onClick={Attackers} className="Headings">ATTACKERS</p>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Position