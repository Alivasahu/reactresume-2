import './Portfolio.scss'
import BusinessIcon from '@mui/icons-material/Business';
import TilesImg from './Tiles.png'
import MobileImg from './Mobile.png'
import FoodImg from './Food.png'
import ResumeImg from './Resume1.png'
import bg1 from './OIP.jpg'
import bg2 from './bg.jpg'

export default function () {
    const Data = [
        {
            id: 1,
            Name: "Madhava Tiles Website",
            image: TilesImg,
            Tech: [
                "html", "css", "bootstrap"
            ],
            link: "https://alivasahu.github.io/TilesSide.github.io/",
           
        },
        {
            id: 2,
            Name: "Landing-Page-App-Presentation",
            image: MobileImg,
            Tech: [
                "html", "css", "Javascript"
            ],
            link: "https://alivasahu.github.io/Landing-Page-App-Presentation/"
        },
        {
            id: 3,
            Name: "Food-Website",
            image: FoodImg,
            Tech: [
                "html", "css", "Javascript"
            ],
            link: "https://alivasahu.github.io/Food-Website/"
        },
        {
            id: 4,
            Name: "Portfolio-Design",
            image: ResumeImg,
            Tech: [
                "React", "html", "scss", "material ui",
            ],
            link: "https://alivasahu.github.io/Aliva-portfolio/"
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <div className="title">
                <BusinessIcon className='portfolio-icon' /><p >My Projects</p>
            </div>
            <h2>Featured Projects</h2>
            <div className="projects">
                {
                    Data.map((pro) => {
                        return (
                            <div className="project-box" key={pro.id}>
                                <a href={pro.link} className='project-link'>
                                    <div className="project" >
                                        <img src={pro.image} alt="" />
                                        <ul>
                                            {
                                                pro.Tech.map((tech) => {
                                                    return (
                                                        <li>{tech}</li>

                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <h3>{pro.Name}</h3>
                                </a>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
