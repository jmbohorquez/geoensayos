import Head from 'next/head';

const politicaCalidad = () => {

    //SEO
    const title = 'Acuerdo de confidencialidad | Geoensayos';
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
            <section className="banner banner-legales banner-politica-imparcialidad">
                <h1>Política de calidad</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <p>GEO ENSAYOS SAS es un laboratorio de ingeniería de ensayos enfocado en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con altos estándares de calidad, imparcialidad, confidencialidad, competencia, y coherencia en su operación, atributos que le aportan valor a sus clientes.</p>
                    <p>Somos una fábrica en ingeniería de ensayos altamente productiva, confiable y con conceptos técnicos de valor añadido, buscamos la satisfacción de nuestras partes interesadas, contando con los recursos necesarios, el personal competente, la infraestructura requerida y la trazabilidad a nuestros procesos. </p>
                    <p>El compromiso de la alta dirección con la mejora continua es una constante en la organización, a través del cumplimiento del sistema de gestión de calidad basado en la norma ISO/IEC 17025:2017, la normatividad técnica aplicable y los requisitos del ente acreditador, los legales y reglamentarios.</p>
                    <p className="firma"><strong>Juana Milena Rodriguez Montero</strong><br />
                    Gerente General</p>
                </div>
            </main>
        </>
    )

}

export default politicaCalidad;