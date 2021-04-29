import Head from 'next/head';
import Image from 'next/image';
import Concreto from '../public/images/serv-concreto.svg';
import Asfalto from '../public/images/serv-asfalto.svg';
import Suelos from '../public/images/serv-suelos.svg';
import Apiques from '../public/images/serv-apiques.svg';
import Laboratorio from '../public/images/serv-laboratorio.svg';
import Supervision from '../public/images/serv-supervision.svg';


const Servicios = () => {

    //SEO
    const title = 'Portafolio de servicios | Geoensayos';
    const description = 'Servicios en ingeniería de materiales, estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas.';
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas';
    const socialImg = '/images/meta-images/servicios.jpg';
    
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta name="keywords" content={ keywords } />
                <meta httpEquiv="expires" content="43200"/>
                <meta property="og:type" content="company" />
                <meta property="og:title" content={ title } />
                <meta property="og:description" content={ description } />
                <meta property="og:image" content={ socialImg } />
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:image" content={ socialImg } />
            </Head>
            <section className="banner banner-servicios banner-full">
                <Image 
                    src="/images/servicios-banner-bg.jpg"
                    alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                    layout="fill"
                    objectFit="cover"
                    quality={ 60 }
                    className="banner-servicios-bg-image"
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
                            <Concreto />
                        </div>
                        <p>Concretos</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <Suelos />
                        </div>
                        <p>Suelos y agregados</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <Asfalto />
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
                            <Laboratorio />
                        </div>
                        <p>Montaje de equipo de laboratorio en sitio.</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <Supervision />
                        </div>
                        <p>Supervisión, control y seguimiento al plan de inspección y ensayos en Obra.</p>
                    </div>
                    <div className="column">
                        <div className="serv-icon">
                            <Apiques />
                        </div>
                        <p>Ejecución de apiques</p>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Servicios;