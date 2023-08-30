import { useEffect, useState } from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'
export default function Header() {

  useEffect(()=>{
    const header = document.querySelector('.header-container')
    const button = document.querySelector('.header-button')

    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 50){ //show button, hide header
        header.classList.add("header-toggle")
        button.classList.add("toggle-button")
      }
      else{ //show header, hide button
        header.classList.remove("header-toggle")
        button.classList.remove("toggle-button")
      }
    })

    button.addEventListener("mouseover", ()=>{
      header.classList.remove("header-toggle")
      button.classList.remove("toggle-button")
    })

    header.addEventListener("mouseleave", ()=>{
      header.classList.add("header-toggle")
      button.classList.add("toggle-button")
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
      <button className='header-button'></button>
    </div>
  )
}
