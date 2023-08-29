import '../Styles/LandingPage.css'
import gif from '../assets/giphy.gif'
export default function LandingPage() {
  return (
    <div className='landing-container'>
        <h1 className='h1-greet'>Hi there
          <span className='span-exclamation'>!
            <img className='gif-img' src={gif}/>
          </span>
        </h1>
        <h2 className='h2-greet'>Welcome to my portfolio page, my name is Benas and I am a front-end web developer</h2>
        <div className='line-break'></div>
        
    </div>
  )
}
