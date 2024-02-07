import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const images = [
    'inicio-cabecera-imagen.jpg',
    'inicio-corte-material.jpg',
    'inicio-medicion-cilindro-concreto.jpg',
    'inicio-resistencia-material.jpg',
    'inicio-prueba-asfalto.jpg'
]

const properties = {
    duration: 2000,
    prevArrow: <div></div>,
    nextArrow: <div></div>
}

const HomeImageSlider = () => {
    return(
        <div className="home-slide-container">
            <Fade {...properties}>
            {
                images.map((each, index) => (
                    <div className="home-slide-image">
                        <img key={index} style={{width: "100%"}} src={`/images/${each}`} />
                    </div>
                ))
            }
            </Fade>
      </div>
    )
}

export default HomeImageSlider