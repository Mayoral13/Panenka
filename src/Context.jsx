import { createContext, useState, useEffect } from "react";
const Context = createContext()
const ContextProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);
    const [Players, SetPlayers] = useState((JSON.parse(localStorage.getItem("Players") ||[])));

    var Data = [
      {
          "id": "1",
          "name": "Alisson Becker",
          "price": "100",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Alisson.png",
          "positions": [
              "GK"
          ]
      },
      {
          "id": "2",
          "name": "Ederson",
          "price": "100",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Ederson.png",
          "positions": [
              "GK"
          ]
      },
      {
          "id": "3",
          "name": "Tyrell Malacia",
          "price": "150",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Malacia.png",
          "positions": [
              "LB",",",
              "LWB"
          ]
      },
      {
          "id": "4",
          "name": "Virgil Van Dijk",
          "price": "200",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/VanDijk.png",
          "positions": [
              "CB"
          ]
      },
      {
          "id": "5",
          "name": "William Saliba",
          "price": "200",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Saliba.png",
          "positions": [
              "CB"
          ]
      },
      {
          "id": "6",
          "name": "Fikayo Tomori",
          "price": "200",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Tomori.png",
          "positions": [
              "CB"
          ]
      },
      {
          "id": "7",
          "name": "Joao Cancelo",
          "price": "150",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Cancelo.png",
          "positions": [
              "RB",",",
              "RWB"
          ]
      },
      {
          "id": "8",
          "name": "David Alaba",
          "price": "250",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Alaba.png",
          "positions": [
              "CB",",",
              "RB",",",
              "LB",",",
              "RWB",",",
              "LWB"
          ]
      },
      {
          "id": "9",
          "name": "Kevin De Bruyne",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/DeBruyne.png",
          "positions": [
              "CM",",",
              "AM"
          ]
      },
      {
          "id": "10",
          "name": "Bruno Fernandes",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Fernandes.png",
          "positions": [
              "CM",",",
              "AM"
          ]
      },
      {
          "id": "11",
          "name": "Paul Pogba",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Pogba.png",
          "positions": [
              "CM"
          ]
      },
      {
          "id": "12",
          "name": "Jude Bellingham",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Bellingham.png",
          "positions": [
              "CM"
          ]
      },
      {
          "id": "13",
          "name": "Casemiro",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Casemiro.png",
          "positions": [
              "CM",",",
              "DM"
          ]
      },
      {
          "id": "14",
          "name": "Rodri",
          "price": "300",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Rodri.png",
          "positions": [
              "CM",",",
              "DM"
          ]
      },
      {
          "id": "15",
          "name": "Erling Haaland",
          "price": "400",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Haaland.png",
          "positions": [
              "ST"
          ]
      },
      {
          "id": "16",
          "name": "Harry Kane",
          "price": "400",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Kane.png",
          "positions": [
              "ST",",",
              "CF"
          ]
      },
      {
          "id": "17",
          "name": "Marcus Rashford",
          "price": "400",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Rashford.png",
          "positions": [
              "LW",",",
              "LM",",",
              "ST"
          ]
      },
      {
          "id": "18",
          "name": "Lionel Messi",
          "price": "400",
          "points": "150",
          "loan": "false",
          "selected": "false",
          "image":"./src/PlayerFaces/Messi.png",
          "positions": [
              "RW",",",
              "CF",",",
              "RM"
          ]
      }
  ]

    const FetchPlayers = ()=>{
    try {
      const players = Data;
      SetPlayers(players)
      
     } catch (error) {
      console.log(error)
      
     }
    };

    // const AddPlayer = (e)=>{
    //   const updatedPlayers = Players.map(player => {
    //     if (player.id === e.target.id) {
    //       return {
    //         ...player,
    //         selected: "true"
    //       };
    //     }
    //     return player;
    //   });
    //   Data = updatedPlayers;
    //   console.log("add")
    //   SetPlayers(updatedPlayers)
    // }


    // const RemovePlayer = (e)=>{
    //   const updatedPlayers = Players.map(player => {
    //     if (player.id === e.target.id) {
    //       return {
    //         ...player,
    //         selected: "false"
    //       };
    //     }
    //     return player;
    //   });
    //   Data = updatedPlayers;
    //   console.log("remove")
    //   SetPlayers(updatedPlayers)
    // }



    const Goalkeepers = async() =>{
      const players = Data;
      const data = players.filter(player => player.positions.includes("GK"));
      SetPlayers(data)
      }
  
    const Defenders = async() =>{
      const players = Data;
      const filteredPlayers = players.filter(player => {
        const positions = player.positions;
        return positions.includes("CB") || positions.includes("RB") || positions.includes("LB") || positions.includes("LWB") || positions.includes("RWB");
        });
        SetPlayers(filteredPlayers)
    };
    const Midfielders = async() =>{
      const players = Data;
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("CM") || positions.includes("RM") || positions.includes("LM") || positions.includes("AM") ||positions.includes("DM");
      });
      SetPlayers(filteredPlayers)
    };
    const Attackers = async() =>{
      const players = Data;
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("ST") || positions.includes("RW") || positions.includes("LW") || positions.includes("CF");
        });
        SetPlayers(filteredPlayers)
      
    }
    
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(()=>{
    FetchPlayers();
  },[])

  useEffect(()=>{
    localStorage.setItem("Players",JSON.stringify(Data))
},[Data])



    return(
        <Context.Provider value={{isOpen, toggleSidebar, closeSidebar, Players, Goalkeepers, Defenders, Midfielders, Attackers, FetchPlayers}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}