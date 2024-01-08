import Image from 'next/image'

import SEO from '../components/SEO'

import {IconConcreto, IconAsfalto, IconSuelos, IconApiques, IconLaboratorio, IconSupervision} from '../components/Icons'


const Servicios = () => {

    //SEO
    const title = 'Portafolio de servicios | Geoensayos'
    const description = 'Servicios en ingeniería de materiales, estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas.'
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas'
    const socialImg = '/images/meta-images/servicios.jpg'
    
    return(
        <>
            <SEO 
                title={title} 
                description={description} 
                keywords={keywords} 
                socialImg={socialImg}
            />
            
            <section className="banner banner-servicios banner-full">
                <Image 
                    src="/images/servicios-banner-bg.jpg"
                    alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                    fill
                    className="banner-servicios-bg-image object-fit-cover"
                />
                <div className="banner-text-container center-content">
                    <div className="banner-text-container-inner">
                        <h1>Servicios</h1>
                    </div>
                </div>
            </section>
            <section className="servicios-ensayos-panel banner-full serv-container">
                <h3>Ensayos de laboratorio aplicados a los siguientes materiales:</h3>
                <div className="servicios-inner">
                    <div className="column">
                        <div className="serv-icon">
                            <IconConcreto />
                        </div>
                        <p>Concretos</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <IconSuelos />
                        </div>
                        <p>Suelos y agregados</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <IconAsfalto />
                        </div>
                        <p>Mezclas asfálticas densas en caliente</p>
                    </div>
                </div>
            </section>
            <section className="servicios-panel banner-full serv-container">
                <h3>Servicios</h3>
                <div className="servicios-inner">
                    <div className="column">
                        <div className="serv-icon">
                            <IconLaboratorio />
                        </div>
                        <p>Montaje de equipo de laboratorio en sitio.</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <IconSupervision />
                        </div>
                        <p>Supervisión, control y seguimiento al plan de inspección y ensayos en Obra.</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <IconApiques />
                        </div>
                        <p>Ejecución de apiques</p>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Servicios