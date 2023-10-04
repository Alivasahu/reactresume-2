import './About.scss'
import PersonIcon from '@mui/icons-material/Person';
export default function About() {
  return (
    <div className='about' id="about">
      <div className="title">
        <PersonIcon className='about-icon' /><p>About</p>
      </div>
      <h2>About Me ,</h2>
      <h4>I’m a Frontend Developer with a strong understanding of Responsive Web Desig. And passionate about coding.I am Highly Skilled in HTML, CSS, JavaScript,  Bootstrap, React Js,Oops concept,
        Responsive Web Design. I possess good written and oral communication skills,
        which enable me to explain complex web app issues in easy-to-understand terms.</h4>
    </div>
  )
}
