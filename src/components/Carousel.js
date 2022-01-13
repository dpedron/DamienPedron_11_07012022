import React from "react";
import logements from "../datas/logements.json";
import '../styles/css/Carousel.css';
import chevron from '../assets/chevron.png';


class Carousel extends React.Component {
    render(){

        this.navigation = (e) => {
            const pictures = logements[0].pictures;
            const next = document.getElementsByClassName('carousel--chevron__next')[0];
            const prev = document.getElementsByClassName('carousel--chevron__prev')[0];
            let currentPic = document.getElementsByClassName("carousel--pic")[0];
            const position = document.getElementsByClassName('carousel--pos')[0];
            if(e.currentTarget === next){
                if(pictures.indexOf(currentPic.src)+1 === pictures.length){
                    currentPic.setAttribute( 'src', pictures[0]);
                    position.innerText = "1/" + pictures.length;
                } else {
                    currentPic.setAttribute( 'src', pictures[pictures.indexOf(currentPic.src)+1]);
                    position.innerText = pictures.indexOf(currentPic.src)+1 + "/" + pictures.length;
                }
            }
            if(e.currentTarget === prev){
                console.log(pictures.indexOf(currentPic.src))
                if(pictures.indexOf(currentPic.src) === 0){
                    currentPic.setAttribute( 'src', pictures[pictures.length-1]);
                    position.innerText = pictures.length + "/" + pictures.length;
                } else {
                    currentPic.setAttribute( 'src', pictures[pictures.indexOf(currentPic.src)-1]);
                    position.innerText = pictures.indexOf(currentPic.src)+1 + "/" + pictures.length;                    
                }
            }
            
        }

        return (
            <section className="carousel">
                <button className="carousel--chevron carousel--chevron__prev" onClick={this.navigation}>
                    <img src={chevron} />
                </button>
                <img className="carousel--pic" src={logements[0].pictures[0]} />
                <p className="carousel--pos">{logements[0].pictures.indexOf(logements[0].pictures[0]) + 1}/{logements[0].pictures.length}</p>
                <button className="carousel--chevron carousel--chevron__next" onClick={this.navigation}>
                    <img src={chevron} />
                </button>
            </section>
        )
    }
}

export default Carousel;