import './Iconbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useState } from 'react';
export default function Iconbar() {
    const Menu = [
        {
            id:1,
            item:"home",
            icon:<HomeIcon className='icon'/>
        },
        {
            id:2,
            item:"about",
            icon:<PersonIcon className='icon'/>
        },
        {
            id:3,
            item:"resume",
            icon:<BackupTableIcon className='icon'/>
        },
        {
            id:4,
            item:"skills",
            icon:<CodeOffIcon className='icon'/>
        },
        {
            id:5,
            item:"portfolio",
            icon:<BusinessIcon className='icon'/>
        },
        {
            id:6,
            item:"services",
            icon:<SettingsApplicationsIcon className='icon'/>
        },
        {
            id:7,
            item:"contact",
            icon:<PermContactCalendarIcon className='icon'/>
        },
        "home", "about", "resume", "skills", "portfolio", "services", "contact"
    ]
    const [menus, setMenus] = useState(Menu)
    return (
        <div className='iconbar'>
            <ul>
                {
                    menus.map((menu, index) => {
                        return (
                            <li><a href={`#${menu.item}`}><span>{menu.item}</span>{menu.icon}</a></li>

                        )
                    })
                }
                {/* <li><a href="#about"><span>About</span><PersonIcon className='icon'/></a></li>
            <li><a href="#resume"><span>Resume</span><BackupTableIcon className='icon'/></a></li>
            <li><a href="#skills"><span>Skills</span><CodeOffIcon className='icon'/></a></li>
            <li><a href="#portfolio"><span>Portfolio</span><BusinessIcon className='icon'/></a></li>
            <li><a href="#services"><span>Services</span><SettingsApplicationsIcon className='icon'/></a></li>
            <li><a href="#contact"><span>Contact</span><PermContactCalendarIcon className='icon'/></a></li> */}
            </ul>
        </div>
    )
}
