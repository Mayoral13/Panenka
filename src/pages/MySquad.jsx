import Header from "../components/Header"
import Position from "../components/Position"
import Players from "../components/Players"
const MySquad = ()=>{
    return (
        <main className='flex-column' style={{backgroundColor:'#191b1d'}}>
    <Header/>
    <Position/>
    <Players/>
        </main>   
      )
}
export default MySquad