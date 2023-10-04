import './Sidebar.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import img1 from './img2.jpeg'
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h2>FontEnd Developer</h2>
            <div className="image">
                <img src={img1} alt="" />
            </div>
            <div className="details">
                <h3>Aliva Sahu</h3>
                <h4>alivasahu06@gmail.com</h4>
                <h4>Vadodara , Gujarat</h4>
            </div>
            <div className="icons">
                <div className="icon-container">
                    <LinkedInIcon className='icon' />
                </div>
                <div className="icon-container">
                    <InstagramIcon className='icon' />
                </div>
                <div className="icon-container">
                    <GitHubIcon className='icon' />
                </div>
                <div className="icon-container">
                    <EmailIcon className='icon' />
                </div>
            </div>
            <button>Hire Me</button>
        </div>
    )
}
