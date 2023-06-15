import { createContext, useState, useEffect, useRef } from "react";
const Context = createContext()
const ContextProvider = ({children})=>{
    const [Players, SetPlayers] = useState(JSON.parse(localStorage.getItem("Data")) || []);
    const [isOpen, setIsOpen] = useState(false);
    const [Data, SetData] = useState(JSON.parse(localStorage.getItem("Data")) || []);
    const [Rendered, isRendered] = useState(false)
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleOptionClick = () => {
      setIsOpen(false);
      console.log("WORKS")
    };

    const FetchPlayers = async ()=>{
    try {
      const data = await fetch("./src/Players.json");
      const response = await data.json();
      const players = await response;
      SetPlayers(players)
      SetData(players)
      localStorage.setItem("Data",JSON.stringify(players))
      isRendered(true);
     } catch (error) {
      console.log(error)
      
     }
    };

    const AllPlayers = ()=>{
      const players = Data;
      SetPlayers(players);
    }

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


    const Goalkeepers = ()=>{
      const players = Data
      const filtered = players.filter(player => player.positions.includes("GK"));
      SetPlayers(filtered)
      }
  
    const Defenders = () =>{
      const players = Data
      const filteredPlayers = players.filter(player => {
        const positions = player.positions;
        return positions.includes("CB") || positions.includes("RB") || positions.includes("LB") || positions.includes("LWB") || positions.includes("RWB");
        });
        SetPlayers(filteredPlayers)
    };
    const Midfielders = () =>{
      const players = Data
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("CM") || positions.includes("RM") || positions.includes("LM") || positions.includes("AM") ||positions.includes("DM");
      });
      SetPlayers(filteredPlayers)
    };
    const Attackers = () =>{
      const players = Data
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
    localStorage.setItem("Data",JSON.stringify(Players))
},[Data])

useEffect(() => {
 isRendered(!Rendered)
},[])


useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
},[]);



return(
  <Context.Provider value={{isOpen, Players, Goalkeepers, Defenders, Midfielders, Attackers,
   AllPlayers, Rendered, dropdownRef, toggleDropdown, handleClickOutside, handleOptionClick}}>
      {children}
  </Context.Provider>
)
}

export {Context, ContextProvider}