import React from 'react';
import logements from '../datas/logements.json';
import '../styles/css/Carousel.css';
import chevron from '../assets/chevron.png';

/**
 * This is the carousel of the housing page
 * Pictures came from json mocked data
 */

function Carousel(props) {
  const id = props.id; // Id of the current housing
  const housing = logements.find((logement) => logement.id === id); // Get all informations of the current housing
  const pictures = housing.pictures; // Pictures of the current housing

  const navigation = (e) => {
    const next = document.getElementsByClassName('carousel--chevron__next')[0]; // Navigation button "Next"
    let currentPic = document.getElementsByClassName('carousel--pic')[0]; // Get the current picture displayed
    const position = document.getElementsByClassName('carousel--pos')[0]; // Get the position of the current picture in the array
    const step = e.currentTarget === next ? 1 : pictures.length - 1; // The user click on "Next" or "Prev" ?
    const index = (pictures.indexOf(currentPic.src) + step) % pictures.length; // Get the index of the picture to display
    currentPic.setAttribute('src', pictures[index]); // Set the source of the picture to display
    position.innerText = index + 1 + '/' + pictures.length; // Display the position of the current picture in the array
  };

  return (
    <section className="carousel">
      <img className="carousel--pic" src={pictures[0]} alt={housing.title} />
      {pictures.length > 1 && ( // Just 1 picture ? position and "Next" and "Prev" button useless
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
