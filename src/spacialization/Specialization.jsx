import { useState } from 'react';
import './Specialization.scss'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
export default function Specialization() {
    const Specific = [
        {
            id: 1,
            name: "Responsive Website Design",
            details: "I created Responsive Website using Bootstrap and and media quires"
        },
        {
            id: 2,
            name: "Dynamic Website",
            details: "I created Websites With with using HTML,CSS,JavaScript"
        },
        {
            id: 3,                              
            name: "JavaScript library",
            details: "I Designed Website Using React JS Library"
        },

    ]
    const [services, setServices] = useState(Specific)
    return (
        <div className='specialization' id='services'>
            <div className="title">
                <SettingsApplicationsIcon className='specialization-icon' /><p >Services</p>
            </div>
            <h2>My Specialization</h2>
            <div className="services">
                {
                    services.map((service) => {
                        return (
                            <div className="service" key={service.id}>
                                <h4>{service.name}</h4>
                                <p>{service.details}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
