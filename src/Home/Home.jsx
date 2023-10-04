import './Home.scss'
import HomeIcon from '@mui/icons-material/Home';
import Reactimage from './reactjs-logo.png'
export default function Home() {
  return (
    <div className='home' id='home'>
        <div className="title">
            <HomeIcon className='home-icon'/><p >Home</p>
        </div>
        <h1>Hey I'm Aliva Sahu</h1>
        <h2>I Develop Interactive Portfolio </h2>
        <p>I design and code simple Websites and maintain responsive web pages .</p>
        <div className="image">
            <img src={Reactimage} alt="" />
        </div>
    </div>
  )
}
