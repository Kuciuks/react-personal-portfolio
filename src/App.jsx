import './App.css'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage'
import ProjectPage from './Components/ProjectPage'
import TechnologyUsePage from './Components/TechnologyUsePage'
import ContactMePage from './Components/ContactMePage'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [path, setPath] = useState(true)

  const CheckPathProjects = (path) =>{
    path == "/projects" || path == "/contact" ? setPath(false)
    : setPath(true)
    
    path ? console.log(path,"the user is currently in the homepage, use autoscroll") : console.log(path,"The user is the dedicated component page, render the component alone")
  }

  return(
    <div>
      <Header onClick={CheckPathProjects}/>
      <Routes>
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path='/contact' element={<ContactMePage/>}/>
      </Routes>

      {path ?
      (<>
      <LandingPage/><ProjectPage/><TechnologyUsePage/><Footer/>
      </>)
      : ""
      }
      
    </div>
  )
}

export default App
