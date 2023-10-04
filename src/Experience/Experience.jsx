import { useState } from 'react';
import './Experience.scss'
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { DesktopAccessDisabled } from '@mui/icons-material';
export default function Experience() {
    const Details = [
        {
            id: 1,
            Duration: "2022 - Present",
            course: "Front End Developer",
            place: "TrueWebLogic"
        },
        {
            id: 2,
            Duration: "2022",
            course: "Frontend Development",
            place: "k2infocom"
        },
        {
            id: 3,
            Duration: "2016 - 2019",
            course: "Gradution in Electrical Engineering",
            place: "Kalam Institute of Technology"
        },
    ]
    const [detail, setDetail] = useState(Details)
    return (
        <div className='experience' id='resume'>
            <div className="title">
                <BackupTableIcon className='experience-icon' /><p >Resume</p>
            </div>
            <h2>Education & Experience </h2>
            <ul>
                {
                    detail.map((Details) => {
                        return (
                            <li key={Details.id}>
                                <h6>{Details.Duration}</h6>
                                <div>
                                    <h4>{Details.course}</h4>
                                    <p>{Details.place}</p>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        
        </div>
    )
}
