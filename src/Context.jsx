import { createContext, useState, useEffect } from "react";
const Context = createContext()
const ContextProvider = ({children})=>{
    const [Players, SetPlayers] = useState((JSON.parse(localStorage.getItem("Players") ||[])));

  

    const FetchPlayers = async ()=>{
    try {
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = response;
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
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = response;
      const filtered = players.filter(player => player.positions.includes("GK"));
      SetPlayers(filtered)
      }
  
    const Defenders = async() =>{
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = response;
      const filteredPlayers = players.filter(player => {
        const positions = player.positions;
        return positions.includes("CB") || positions.includes("RB") || positions.includes("LB") || positions.includes("LWB") || positions.includes("RWB");
        });
        SetPlayers(filteredPlayers)
    };
    const Midfielders = async() =>{
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = response;
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("CM") || positions.includes("RM") || positions.includes("LM") || positions.includes("AM") ||positions.includes("DM");
      });
      SetPlayers(filteredPlayers)
    };
    const Attackers = async() =>{
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = response;
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("ST") || positions.includes("RW") || positions.includes("LW") || positions.includes("CF");
        });
        SetPlayers(filteredPlayers)
      
    }

  useEffect(()=>{
    FetchPlayers();
  },[])

  useEffect(()=>{
    localStorage.setItem("Players",JSON.stringify(Players))
},[])



    return(
        <Context.Provider value={{Players, Goalkeepers, Defenders, Midfielders, Attackers, FetchPlayers}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}