import { useEffect } from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'
export default function Header() {


  useEffect(()=>{
    const header = document.querySelector('.header-container')
    const button = document.querySelector('.header-button')

    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 50){
        header.classList.add("header-toggle") // hide header
        button.classList.add("toggle-button") // show button
      }
      else{
        header.classList.remove("header-toggle") // show header
        button.classList.remove("toggle-button") // hide button
      }
    })

    button.addEventListener("mouseover, click",()=>{
      header.classList.remove("header-toggle") // show header
      button.classList.remove("toggle-button") // hide button
    })


  },[])


  return (
    <div className="header-container">
      <nav className='nav-div'>
          <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">Instagram</a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/'>Landing Page</Link>
      </nav>
      <button className='header-button'><div className='line-button'></div></button>
    </div>
  )
}
