import '../Styles/TechnologyUsePage.css'

const list = ["CSS","JavaScript","Bootstrap","JSX","React","HTML","React-hook-form"]

export default function TechnologyUsePage() {
  return (
    <ul className='tech-list'>
        {list.map((item, index) => (
            <li className='tech-item' key={index}>{item}</li>
        ))}
    </ul>
  )
}
