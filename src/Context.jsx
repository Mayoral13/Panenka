import { createContext, useState } from "react";
const Context = createContext()
const ContextProvider = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);

    
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };


    return(
        <Context.Provider value={{isOpen, toggleSidebar, closeSidebar}}>
            {children}
        </Context.Provider>
    )
}
export {Context, ContextProvider}