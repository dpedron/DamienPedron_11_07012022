import React from 'react';
import logements from '../datas/logements.json';
import '../styles/css/Carousel.css';
import chevron from '../assets/chevron.png';

function Carousel(props) {
  const id = props.id;
  const housing = logements.find((logement) => logement.id === id);
  const pictures = housing.pictures;

  const navigation = (e) => {
    const next = document.getElementsByClassName('carousel--chevron__next')[0];
    let currentPic = document.getElementsByClassName('carousel--pic')[0];
    const position = document.getElementsByClassName('carousel--pos')[0];
    const step = e.currentTarget === next ? 1 : pictures.length - 1;
    const index = (pictures.indexOf(currentPic.src) + step) % pictures.length;
    currentPic.setAttribute('src', pictures[index]);
    position.innerText = index + 1 + '/' + pictures.length;
  };

  return (
    <section className="carousel">
      <img className="carousel--pic" src={pictures[0]} alt={housing.title} />
      {pictures.length > 1 && (
        <>
          <p className="carousel--pos">
            {pictures.indexOf(pictures[0]) + 1}/{pictures.length}
          </p>
          <button
            className="carousel--chevron carousel--chevron__prev"
            onClick={navigation}
            title="photo précédente"
          >
            <img src={chevron} alt="" />
          </button>
          <button
            className="carousel--chevron carousel--chevron__next"
            onClick={navigation}
            title="photo suivante"
          >
            <img src={chevron} alt="" />
          </button>
        </>
      )}
    </section>
  );
}

export default Carousel;
