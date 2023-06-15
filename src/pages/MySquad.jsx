import Header from "../components/Header"
import Position from "../components/Position"
import Players from "../components/Players"
import { useContext } from "react"
import { Context } from "../Context"
const MySquad = ()=>{
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
    <Position/>
    <Players/>
        </main>   
      )
    }
}
}
export default MySquad