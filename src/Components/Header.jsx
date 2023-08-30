import { useEffect, useState } from 'react'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'
export default function Header() {

  //const [headerVisible, setHeaderVisible] = useState()

  useEffect(()=>{
    const header = document.querySelector('.header-container')
    const button = document.querySelector('.reveal-button')

    window.addEventListener("scroll" , () =>{
      if (window.scrollY > 50){
        header.classList.add("header-hidden");
        button.classList.add("hide-button")
      }
      else{
        header.classList.remove("header-hidden")
      }
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
      <button className='reveal-button'></button>
    </div>
  )
}
