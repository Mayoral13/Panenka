import { useContext } from "react"
import { Context } from "../Context"
const Players = ()=>{
  const {Players} = useContext(Context)
return(


    <main className="container justify-content-center align-items-center mt-4">
        <div className="m-2 d-flex justify-content-between">
      
        
        </div>

    <div style={{ height: '90vh', overflowY: 'auto', overflowX:'hidden'}}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      {
          Players.map((player)=>(   
      <div key={player.id} className="col mb-4">
              
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>    
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={player.image} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: {player.name}</h5>
              { player.positions.length === 1 ?(
              <h5 className="card-title d-flex">Position: {player.positions}</h5>):(
                <h5 className="card-title d-flex">Positions: {player.positions.join(',')}</h5>
              )
}
            </div>
            {/* <div className="d-flex justify-content-center mt-1">
  
                  player.selected === "false" ?(
                <button id={player.id} onClick={AddPlayer} className ="buy">Add To Squad</button>)
                :(<button id={player.id} onClick={RemovePlayer} className ="sell">Remove</button>)
            </div> */}
          </div>
        </div>
    
      </div>
        ))}
    </div>
    </div>
  </main>

  

)
}
export default Players