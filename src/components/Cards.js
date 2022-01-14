import logements from '../datas/logements.json'
import '../styles/css/Cards.css'

function Cards() {
    return (
        logements.map(logement => {
            const background = logement.pictures[0];
            return (
                <a href='#' key={logement.id} className="card" style={{background:  `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), center / cover no-repeat url(${background})`}}>
                    <p className="card--title">{logement.title}</p>
                </a>
            )
        })
    )
}

export default Cards;