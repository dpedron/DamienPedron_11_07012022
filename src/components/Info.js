import React from "react";
import logements from '../datas/logements.json';
import '../styles/css/Info.css';
import star from '../assets/star.png';
import starGrey from '../assets/star-grey.png'

class Info extends React.Component {
    render() {

        this.rating = () => {
            let ratingArray = []  
            for(let i=0; i<5; i++){
                if(i<parseInt(logements[0].rating)){
                    ratingArray.push(<img key={`${star}-${i}`} src={star} alt="rating" className="info--rating--star" />)                    
                } else {
                    ratingArray.push(<img key={`${starGrey}-${i}`} src={starGrey} alt="rating" className="info--rating--star" />)
                }
            }
            return ratingArray;
        }

        return(
            <section className="info">
                <h1 className="info--title">{logements[0].title}</h1>
                <div className="info--host">
                    <p className="info--host--name">{logements[0].host.name}</p>
                    <img className="info--host--pic" src={logements[0].host.picture} />
                </div>
                <p className="info--location">{logements[0].location}</p>
                <div className="info--tags">
                    {logements[0].tags.map((tag) => (
                        <p className="info--tags--tag" key={`tag-${tag}`}>{tag}</p>                
                    ))}
                </div>
                <div className="info--rating">
                    {this.rating()}
                </div>
            </section>
        )
    }
}

export default Info;