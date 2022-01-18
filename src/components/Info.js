import logements from '../datas/logements.json';
import '../styles/css/Info.css';
import star from '../assets/star.png';
import starGrey from '../assets/star-grey.png';
import Dropdown from './Dropdown';

function Info(props) {
  const id = props.id;
  const housing = logements.find((logement) => logement.id === id);

  const rating = () => {
    const range = [1, 2, 3, 4, 5];

    return range.map((rangeElem) =>
      rangeElem <= parseInt(housing.rating) ? (
        <img
          key={`${star}-${rangeElem}`}
          src={star}
          alt="rating"
          className="info--rating--star"
        />
      ) : (
        <img
          key={`${starGrey}-${rangeElem}`}
          src={starGrey}
          alt="rating"
          className="info--rating--star"
        />
      )
    );
  };

  return (
    <section className="info">
      <h1 className="info--title">{housing.title}</h1>
      <div className="info--host">
        <p className="info--host--name">{housing.host.name}</p>
        <img
          className="info--host--pic"
          src={housing.host.picture}
          alt={housing.host.name}
        />
      </div>
      <p className="info--location">{housing.location}</p>
      <div className="info--tags">
        {housing.tags.map((tag) => (
          <p className="info--tags--tag" key={`tag-${tag}`}>
            {tag}
          </p>
        ))}
      </div>
      <div className="info--rating">{rating()}</div>
      <div className="info--dropdowns">
        <Dropdown
          title="Description"
          content={logements[0].description}
          select="desc"
        />
        <Dropdown
          title="Équipements"
          content={logements[0].equipments.map((equip) => (
            <p key={equip} className="equipment">
              {equip}
            </p>
          ))}
          select="equip"
        />
      </div>
    </section>
  );
}

export default Info;
