import { useState, useContext } from "react";
import { Context } from "../Context";

const Team = () => {
  const { Players, AddPlayer } = useContext(Context);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleCardClick = (player) => {
    if (selectedPlayer === player) {
      // Deselect the player if it's already selected
      setSelectedPlayer(null);
    } else {
      setSelectedPlayer(player);
    }
  };

  const RemovePlayer = () => {
    console.log("Remove");
  };

  return (
    <main className="container justify-content-center align-items-center mt-4">
      <div className="m-2 d-flex justify-content-between"></div>

      <div style={{ height: "90vh", overflowY: "auto", overflowX: "hidden" }}>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-1">
          {Players.map((player) => (
            <div
              key={player.id}
              className="col mb-4"
              onClick={() => handleCardClick(player)}
            >
              <div
                className="card collection custom-card"
                style={{
                  backgroundColor: selectedPlayer === player ? "gray" : "whitesmoke",
                  width: "180px",
                  cursor: "pointer",
                }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    className="card-img-top rounded-circle mt-4"
                    src={player.image}
                    style={{ borderRadius: "100", width: "80px", height: "80px" }}
                  />
                </div>
                <hr style={{ border: "2px solid black" }} />
                <div className="card-body" style={{ padding: "0.5rem" }}>
                  <div className="mb-3">
                    <h6 className="card-title d-flex">Name: {player.name}</h6>
                    {player.positions.length === 1 ? (
                      <h6 className="card-title d-flex">Position: {player.positions}</h6>
                    ) : (
                      <h6 className="card-title d-flex">Positions: {player.positions.join(', ')}</h6>
                    )}
                  </div>
                  {selectedPlayer === player && (
                    <div className="d-flex justify-content-center mt-1">
                      <button id={player.id} onClick={AddPlayer} className="buy" value={player.positions}>
                        Pick
                      </button>
                      <button id={player.id} onClick={RemovePlayer} className="sell">
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Team;
