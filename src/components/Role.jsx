import { useContext } from "react"
import { Context } from "../Context"
const Role = ()=>{
    const {Role} = useContext(Context)
    return(
        <h3 className=" container justify-content-center align-items-center" style={{color:'white'}}>{Role}</h3>
    )
}
export default Role