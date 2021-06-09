import Head from 'next/head';
import Link from 'next/link'

const QuejasReclamos = () => {

    //SEO
    const title = 'Quejas y r6eclamos | Geoensayos';
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
            <section className="banner banner-legales banner-quejas-reclamos">
                <h1>Quejas y Reclamos</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <p>Cuando se presente un reclamo, queja o requerimiento deberá acudir a una instancia imparcial y competente, correo electrónico direccionlaboratorio@geoensayos.com o gerencia@geoensayos.com.</p>
                    <p>Vía telefónica [57] 1 320 5020 o [57] 1 317 575 4994</p>
                    <p>Toda la información del cliente obtenida durante el proceso de quejas y reclamos, requerimientos y demás será manejada de acuerdo con nuestras <Link href="/acuerdo-confidencialidad"><a>políticas de confidencialidad</a></Link> e <Link href="/politica-imparcialidad"><a>imparcialidad</a></Link></p>
                    <p><strong>Gracias</strong></p>
                </div>
            </main>
        </>
    )

}

export default QuejasReclamos