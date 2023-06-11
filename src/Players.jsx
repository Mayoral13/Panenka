import male from "./images/male.jfif"
import GroupBy from "./GroupBy"
const Players = ()=>{
return(


    <main className="container justify-content-center align-items-center mt-4">
        <div className="m-2 d-flex justify-content-between">
        <h1 className="mb-4">
        SQUAD VALUE : 70000
        </h1>
        
        <GroupBy/>
        
        </div>

    <div style={{ height: '90vh', overflowY: 'auto', overflowX:'hidden'}}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col mb-4">
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: Cristiano Ronaldo</h5>
              <h5 className="card-title d-flex">Positions: LW, RW, ST</h5>
              <h5 className="card-title d-flex">Price: 150</h5>
              <h5 className="card-title d-flex">Points: 15</h5>
            </div>
            <div className="d-flex justify-content-center mt-1">
                {/* <button className="sell">SELL</button> */}
                <button className ="buy">BUY</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: Cristiano Ronaldo</h5>
              <h5 className="card-title d-flex">Positions: LW, RW, ST</h5>
              <h5 className="card-title d-flex">Price: 150</h5>
              <h5 className="card-title d-flex">Points: 15</h5>
            </div>
            <div className="d-flex justify-content-center mt-1">
            <button className ="buy">BUY</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col mb-4">
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: Cristiano Ronaldo</h5>
              <h5 className="card-title d-flex">Positions: LW, RW, ST</h5>
              <h5 className="card-title d-flex">Price: 150</h5>
              <h5 className="card-title d-flex">Points: 15</h5>
            </div>
            <div className="d-flex justify-content-center mt-1">
            <button className ="buy">BUY</button>
            </div>
          </div>
        </div>
      </div>


      <div className="col mb-4">
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: Cristiano Ronaldo</h5>
              <h5 className="card-title d-flex">Positions: LW, RW, ST</h5>
              <h5 className="card-title d-flex">Price: 150</h5>
              <h5 className="card-title d-flex">Points: 15</h5>
            </div>
            <div className="d-flex justify-content-center mt-1">
            <button className ="buy">BUY</button>
            </div>
          </div>
        </div>
      </div>


      <div className="col mb-4">
        <div className="card collection custom-card" style={{backgroundColor:'whitesmoke'}}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '100', width: '180px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title d-flex">Name: Cristiano Ronaldo</h5>
              <h5 className="card-title d-flex">Positions: LW, RW, ST</h5>
              <h5 className="card-title d-flex">Price: 150</h5>
              <h5 className="card-title d-flex">Points: 15</h5>
            </div>
            <div className="d-flex justify-content-center mt-1">
            <button className ="buy">BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>

  

)
}
export default Players