import './App.css'
import MySquad from './pages/MySquad'
import MyTeam from './pages/MyTeam'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element = {<MySquad/>}/>
        <Route path='/Team' element = {<MyTeam/>}/>
      </Routes>
    </Router>
   
  )

}

export default App
