import male from "./images/male.jfif"
const Players = ()=>{
return(


    <main className="container justify-content-center align-items-center mt-4">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col mb-4">
        <div className="card collection custom-card">
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '300', width: '150px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title">NAME</h5>
              <p className="card-text">TEXT</p>
            </div>
            <p className="card-text">SOME</p>
          </div>
        </div>
      </div>



      <div className="col mb-4">
        <div className="card collection custom-card">
          <div className="d-flex justify-content-center">
            <img className="card-img-top rounded-circle mt-4" src={male} style={{ borderRadius: '300', width: '150px', height: 'auto' }}/>
          </div>
          <hr style={{border:'2px solid black'}} />
          <div className="card-body">
            <div className="mb-3">
              <h5 className="card-title">NAME</h5>
              <p className="card-text">TEXT</p>
            </div>
            <p className="card-text">SOME</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  

)
}
export default Players