import Image from 'next/image'
import SEO from '../components/SEO'

import {IconPhone, IconTelephone, IconLocation} from '../components/Icons'

const Contacto = () => {

    //SEO
    const title = 'Contáctanos | Geoensayos'
    const description = 'Contáctanos y conoce nuestro portafolio de servicios en ingeniería de materiales. Enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas.'
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas'
    const socialImg = '/images/meta-images/contacto.jpg'
    
    return(
        <>
            <SEO 
                title={title} 
                description={description} 
                keywords={keywords} 
                socialImg={socialImg}
            />

            <main className="contacto-main-container">
                <div className="contacto-main-image-bg">
                    <Image 
                        src="/images/contacto-banner-bg.jpg"
                        alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                        height={ 1027 }
                        width={ 1920 }
                        className="banner-servicios-bg-image"
                    />
                </div>
                
                <div className="contacto-main-inner">
                    <div className="contacto-content">
                        <h1>Contacto</h1>
                        <div className="contacto-medios-wrap">
                            <div className="contacto-dir contacto-item">
                                <IconLocation />
                                <p><strong>Dirección</strong><br />
                                Calle 73 # 69P - 16, Bogotá D.C.</p>
                            </div>
                            <div className="contacto-moviles contacto-item">
                                <IconPhone />
                                <p><strong>Celular</strong> <br />
                                (+57) 317 516 0345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}

export default Contacto