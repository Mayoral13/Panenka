import { createContext, useState, useEffect, useRef } from "react";
import { formation343, formation352, formation41212CF, formation433, formation433AM,
  formation433DM, formation442 } from "./components/AllFormations";

const Context = createContext()
const ContextProvider = ({children})=>{
    const [Players, SetPlayers] = useState(JSON.parse(localStorage.getItem("Data")) || []);
    const [isOpen, setIsOpen] = useState(false);
    const [formationOpen, setformationOpen] = useState(false);
    const [Data, SetData] = useState(JSON.parse(localStorage.getItem("Data")) || []);
    const [Rendered, isRendered] = useState(false)
    const dropdownRef = useRef(null);
    const [PageStatus, setPageStatus] = useState('MY SQUAD')
    const [Role,setRole] = useState('ALL PLAYERS');
    // const [Image, setImage] = useState({})
    const [Formation,setFormation] = useState(formation442)
 
    // const UpdateImage = (id,src)=>{
    //   setImage((prevMap)=>({
    //     ...prevMap,[id]:src
    //   }))

    // }


    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };

    const formationDropdown = () => {
      setformationOpen((prevState) => !prevState);
      
    };

    const handleFormation = (e) =>{
      // 4331 = 433FLAT
      // 4332 = 433DM
      // 4333 = 433AM
      const value = e.target.value;
      if(value === 442){
        setFormation(formation442)
      }
      if(value === 4331){
        setFormation(formation433)
      }

      if(value === 4332){
        setFormation(formation433DM)
      }

      if(value === 4333){
        setFormation(formation433AM)
      }


      if(value === 41212){
        setFormation(formation41212CF)
      }

      if(value === 343){
        setFormation(formation343)
      }

      if(value === 352){
        setFormation(formation352)
      }
      formationDropdown(); 
    }
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleOptionClick = (e) => {
      setPageStatus(e.target.innerHTML)
      setIsOpen(false);
    };

    const FetchPlayers = async ()=>{
    try {
      const data = await fetch("./Players.json");
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
      setRole("ALL PLAYERS")
    }

    const getImageById = (id) => {
      const player = Players.find((player) => player.id === id);
      if (player) {
        return player.image;
      }
      return null; // Return null or handle the case where ID is not found
    };

    const AddPlayer = (e) => {
      const position = e.target.value
      const id = e.target.id;
      let url = getImageById(id);
      if(position.includes("GK")){
        let pic = document.getElementById(`Player${1}`);
        pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
        pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
        pic.style.display = "block"; // Add this line to ensure element is displayed
      }

      if(position.includes("LB")){
        let pic = document.getElementById(`Player${2}`);
        let url = getImageById(id);
        pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
        pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
        pic.style.display = "block"; // Add this line to ensure element is displayed
      }
      if(position.includes("CB")){
        if(id === "3"){
          let pic = document.getElementById(`Player${3}`); //3 & 4
          let url = getImageById(id);
          pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
          pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
          pic.style.display = "block"; // Add this line to ensure element is displayed  
         
  }
  if(id === "4"){
    let pic = document.getElementById(`Player${4}`); //3 & 4
    pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
    pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
    pic.style.display = "block"; // Add this line to ensure element is displayed  
}
    }
    if(position.includes("RB")|| position.includes("RWB")){
      let pic = document.getElementById(`Player${5}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("CM")){
      let pic = document.getElementById(`Player${6}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("DM")){
      let pic = document.getElementById(`Player${7}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("AM")){
      let pic = document.getElementById(`Player${8}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("LW")){
      let pic = document.getElementById(`Player${9}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("ST")){
      let pic = document.getElementById(`Player${10}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
    if(position.includes("RW")){
      let pic = document.getElementById(`Player${11}`);
      pic.style.backgroundImage = `url(${url})`; // Use abeg variable to set the background image
      pic.style.backgroundSize = "cover"; // Add this line to ensure proper sizing
      pic.style.display = "block"; // Add this line to ensure element is displayed
    }
  }
  

 
    
    


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
      setRole("GOALKEEPER")
      }
  
    const Defenders = () =>{
      const players = Data
      const filteredPlayers = players.filter(player => {
        const positions = player.positions;
        return positions.includes("CB") || positions.includes("RB") || positions.includes("LB") || positions.includes("LWB") || positions.includes("RWB");
        });
        SetPlayers(filteredPlayers)
        setRole("DEFENDERS")
    };
    const Midfielders = () =>{
      const players = Data
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("CM") || positions.includes("RM") || positions.includes("LM") || positions.includes("AM") ||positions.includes("DM");
      });
      SetPlayers(filteredPlayers)
      setRole("MIDFIELDERS")
    };
    const Attackers = () =>{
      const players = Data
      const filteredPlayers = players.filter(player => {
      const positions = player.positions;
      return positions.includes("ST") || positions.includes("RW") || positions.includes("LW") || positions.includes("CF");
        });
        SetPlayers(filteredPlayers)
        setRole("ATTACKERS")
      
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

// useEffect(() => {
//   const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//   ids.forEach(id => {
//     const src = ""
//     UpdateImage(id, src); // Update the image state with the id and src
//   });
// }, []);


useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
},[]);



return(
  <Context.Provider value={{isOpen, Players, Goalkeepers, Defenders, Midfielders, Attackers,
   AllPlayers, Rendered, dropdownRef, toggleDropdown, handleClickOutside, handleOptionClick,
   PageStatus, Role, formationOpen, formationDropdown, handleFormation,
    Formation, AddPlayer}}>
      {children}
  </Context.Provider>
)
  }
  

export {Context, ContextProvider}