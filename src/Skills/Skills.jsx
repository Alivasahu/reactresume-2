import { useState } from 'react';
import './Skills.scss'
import html from './html.png'
import css from './css.png'
import bootstrap from './bootstrap.png'
import react from './react.png'
import redux from './redux.png'
import javascript from './javascript.png'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Javascript } from '@mui/icons-material';
export default function Skills() {
    const skill = [
        {
            id: 1,
            image: html,
            name: "HTML",
            percentage: "95%"
        },
        {
            id: 2,
            image: css,
            name: "CSS",
            percentage: "98%"
        },
        {
            id: 3,
            image: bootstrap,
            name: "Bootstrap",
            percentage: "95%"
        },
        {
            id: 4,
            image: javascript,
            name: "JavaScript",
            percentage: "90%"
        },
        {
            id: 5,
            image: react,
            name: "React JS",
            percentage: "90%"
        },
        {
            id: 6,
            image: redux,
            name: "Redux",
            percentage: "90%"
        }
    ]
    const [skills, setSkills] = useState(skill)
    return (
        <div className='skills' id='skills'>
            <div className="title">
                <CodeOffIcon className='specialization-icon' /><p >My Skills</p>
            </div>
            <h2>My Advantages</h2>
            <div className="skill">
                {
                    skills.map((skill) => {
                        return (
                            <div className="box">
                                <div className="inner-box" key={skill.id}>
                                    <img src={skill.image} alt="" />
                                    <h3>{skill.percentage}</h3>
                                </div>
                                <h4>{skill.name}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
