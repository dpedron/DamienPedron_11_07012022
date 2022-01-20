import logements from '../datas/logements.json';
import '../styles/css/Cards.css';
import { Link } from 'react-router-dom';

/**
 * This is the cards for the homepage
 * Informations to create them came from json mocked data
 */

function Cards() {
  return logements.map((logement) => {
    const background = logement.pictures[0];
    return (
      <Link
        to={`/housing-${logement.id}`}
        href="./#"
        key={logement.id}
        className="card"
        style={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), center / cover no-repeat url(${background})`,
        }}
        onClick={() => (document.documentElement.scrollTop = 0)}
      >
        <p className="card--title">{logement.title}</p>
      </Link>
    );
  });
}

export default Cards;
