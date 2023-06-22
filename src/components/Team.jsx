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

  return (
    <main className="container justify-content-center align-items-center mt-4">
    <div className="m-2 d-flex justify-content-between"></div>
  
    <div className="overflow-auto" style={{ height: "50vh" }}>
      <div className="d-flex flex-wrap justify-content-center">
        {Players.map((player) => (
          <div
            key={player.id}
            className='col mb-4'
            onClick={() => handleCardClick(player)}
          >
            <div
              className="card collection custom-card "
              style={{ width: "150px", cursor: "pointer", backgroundColor: selectedPlayer === player ? "gray" : "whitesmoke", }}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top rounded-circle mt-4"
                  src={player.image}
                  alt={player.name}
                  style={{ borderRadius: "100%", width: "40%", height: "40%" }}
                />
              </div>
              <hr className="border-2" />
              <div className="card-body p-2">
                <div className="mb-3">
                  <h6 className="card-title">Name: {player.name}</h6>
                  {player.positions.length === 1 ? (
                    <h6 className="card-title">Position: {player.positions}</h6>
                  ) : (
                    <h6 className="card-title">Positions: {player.positions.join(",")}</h6>
                  )}
                </div>
                {selectedPlayer === player && (
                  <div className="d-flex justify-content-center mt-1">
                    <button id={player.id} onClick={AddPlayer} className="buy" value={player.positions}>
                      Pick
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
