import Header from "../components/Header"
import Pitch from "../components/Pitch"
import { useContext } from "react"
import { Context } from "../Context"
const MyTeam = () =>{
    const {Rendered} = useContext(Context)
    {
        if(!Rendered){
            return (
                <div className="d-flex align-items-center justify-content-center vh-100">
                  <h1 className="text-center">LOADING....</h1>
                </div>
              )
        }else{
    return (
        <main className='flex-column' style={{backgroundColor:'#191b1d'}}>
    <Header/>
    <Pitch/>
        </main>   
      )
    }
}
}
export default MyTeam