 import { Routes, Route } from 'react-router-dom';
 import Home from './Home.jsx'
import ProjectNewspaper from './projectNewspaper.jsx';
function App() {
  return(
  <Routes>
    <Route path = "/" element ={<Home/>} />
    <Route path = "/projects" element ={<ProjectNewspaper/>} />
  </Routes>
  )
}

export default App
