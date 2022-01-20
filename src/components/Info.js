import logements from '../datas/logements.json';
import '../styles/css/Info.css';
import star from '../assets/star.png';
import starGrey from '../assets/star-grey.png';
import Dropdown from './Dropdown';

/**
 * This is the information section of the housing page
 * All informations came from json mocked data
 */

function Info(props) {
  const id = props.id; // Id of the current housing
  const housing = logements.find((logement) => logement.id === id); // Get all informations of the current housing

  const rating = () => {
    const range = [1, 2, 3, 4, 5]; // Range notation

    return range.map(
      (
        rangeElem // Repeat 5 times
      ) =>
        rangeElem <= parseInt(housing.rating) ? ( // The housing rating is higher than the range => add star
          <img
            key={`${star}-${rangeElem}`}
            src={star}
            alt=""
            className="info--rating--star"
          />
        ) : (
          // The housing rating is lower than the range => add an empty star (in grey)
          <img
            key={`${starGrey}-${rangeElem}`}
            src={starGrey}
            alt=""
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
      <div className="info--rating" title="rating">
        {rating()}
      </div>
      <div className="info--dropdowns">
        <Dropdown title="Description" content={logements[0].description} />
        <Dropdown
          title="Équipements"
          content={logements[0].equipments.map((equip) => (
            <p key={equip} className="equipment">
              {equip}
            </p>
          ))}
        />
      </div>
    </section>
  );
}

export default Info;
