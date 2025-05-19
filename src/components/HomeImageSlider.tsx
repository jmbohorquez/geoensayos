"use client";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
    'geoensayos-laboratorio-pruebas-materiales-1.jpg',
    'geoensayos-laboratorio-pruebas-materiales-2.jpg',
    'geoensayos-laboratorio-pruebas-materiales-3.jpg'
]

const properties = {
    duration: 2000,
    prevArrow: <div></div>,
    nextArrow: <div></div>
}

export const HomeImageSlider = () => {
    return(
        <div className="home-slide w-full h-full overflow-hidden">
            <Fade 
                {...properties}
                cssClass="fade-container"
            >
                {
                    images.map( ( image, index ) => (
                        <div 
                            key={index}
                            className="h-full w-full"
                        >
                            <img className="w-full h-auto object-cover" src={`/images/${ image }`} />
                        </div>
                    ) )
                }
            </Fade>
      </div>
    )
}