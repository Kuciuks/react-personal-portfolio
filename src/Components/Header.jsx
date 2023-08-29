import '../Styles/Header.css'
import {Link} from 'react-router-dom'
export default function Header({onClick}) {
  return (
    <div className="header-container">
      <nav>
          <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">Instagram</a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          <Link to='/projects' onClick={onClick("/projects")}>Projects</Link>
          <Link to='/contact' onClick={onClick("/contact")}>Contact</Link>
        </nav>
    </div>
  )
}
