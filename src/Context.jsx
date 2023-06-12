import { createContext, useState, useEffect } from "react";
const Context = createContext()
const ContextProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);
    const [Players, SetPlayers] = useState([]);

    const FetchPlayers = async()=>{
     try {
      const data = await fetch("./src/players.json");
      const players = await data.json();
      SetPlayers(players)
      
     } catch (error) {
      console.log(error)
      
     }
    };

    const Goalkeepers = async() =>{
      const response = await fetch("./src/players.json");
      const players = await response.json();
      const data = players.filter(player => player.positions.includes("GK"));
      SetPlayers(data)
      }
  
    const Defenders = async() =>{
      const response = await fetch("./src/players.json");
      const players = await response.json();
      const filteredPlayers = players.filter(player => {
        const positions = player.positions;
        return positions.includes("CB") || positions.includes("RB") || positions.includes("LB") || positions.includes("LWB") || positions.includes("RWB");
        });
        SetPlayers(filteredPlayers)
    };
    const Midfielders = async() =>{
      const response = await fetch("./src/players.json");
      const players = await response.json();
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("CM") || positions.includes("RM") || positions.includes("LM") || positions.includes("AM") ||positions.includes("DM");
      });
      SetPlayers(filteredPlayers)
    };
    const Attackers = async() =>{
      const response = await fetch("./src/players.json");
      const players = await response.json();
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


    return(
        <Context.Provider value={{isOpen, toggleSidebar, closeSidebar, Players, Goalkeepers, Defenders, Midfielders, Attackers, FetchPlayers}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}