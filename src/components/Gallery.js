import React from "react";
import Cards from "./Cards";
import '../styles/css/Gallery.css'

class Gallery extends React.Component {
    render() {
        return (
            <section className="gallery">
                <Cards />
            </section>
        )
    }

}

export default Gallery;