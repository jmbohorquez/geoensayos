import Head from 'next/head';
import Image from 'next/image';

const Contacto = () => {

    //SEO
    const title = 'Contáctanos | Geoensayos';
    const description = 'Contáctanos y conoce nuestro portafolio de servicios en ingeniería de materiales. Enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas.';
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas';
    const socialImg = '/images/meta-images/contacto.jpg';
    
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
            <main className="contacto-main-container">
                <div className="contacto-main-image-bg">
                    <Image 
                        src="/images/contacto-banner-bg.jpg"
                        alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                        layout="responsive"
                        height={ 1027 }
                        width={ 1920 }
                        quality={ 60 }
                        className="banner-servicios-bg-image"
                    />
                </div>
                
                <div className="contacto-main-inner">
                    <div className="contacto-content">
                        <p><strong>Dirección</strong><br />
                        Calle 73 # 69P - 16, Bogotá D.C.</p>

                        <div className="contacto-telefonos-container">
                            <p><strong>Celulares</strong> <br />
                            310 233 0373<br />
                            317 575 4994</p>
                            <p><strong>Teléfono</strong><br />
                            (571) 320 5020</p>
                        </div>
                        <p>Puedes contactarnos a través del siguiente formulario.</p>
                        <iframe 
                            onload="javascript:parent.scrollTo(0,0);" 
                            height="772" 
                            allowTransparency="true" 
                            scrolling="no" 
                            frameBorder="0" 
                            src="https://www.i180.co/machform/embed.php?id=19282" 
                            title="Geoensayos - Contacto"
                        ><a href="https://www.i180.co/machform/view.php?id=19282" title="Geoensayos - Contacto">Geoensayos - Contacto</a></iframe>
                    </div>

                </div>
            </main>
        </>
    )

}

export default Contacto;