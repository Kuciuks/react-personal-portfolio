import LandingPage from './LandingPage'
import ProjectPage from './ProjectPage'
import TechnologyUsePage from './TechnologyUsePage'
import ContactMePage from './ContactMePage'
import '../Styles/HomePage.css';

export default function HomePage() {
  return (
    <div className='homePage-container'>
        <LandingPage/>
        <ProjectPage/>
        <TechnologyUsePage/>
        <ContactMePage/>
    </div>
  )
}
