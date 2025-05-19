import Link from 'next/link'

import SEO from '../components/SEO'

const QuejasReclamos = () => {

    //SEO
    const title = 'Quejas y r6eclamos | Geoensayos';
    const description = 'Contáctanos y conoce nuestro portafolio de servicios en ingeniería de materiales. Enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas.';
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas';
    const socialImg = '/images/meta-images/contacto.jpg';

    return(
        <>
            <SEO 
                title={title} 
                description={description} 
                keywords={keywords} 
                socialImg={socialImg}
            />
            
            <section className="banner banner-legales banner-quejas-reclamos">
                <h1>Quejas y Reclamos</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <p>Cuando se presente un reclamo, queja o requerimiento deberá acudir a una instancia imparcial y competente, correo electrónico comercial@geoensayos.co o direccionlaboratorio@geoensayos.com</p>
                    <p>Vía telefónica [57] 1 320 5020 o [57] 1 316 850 1923</p>
                    <p>Toda la información del cliente obtenida durante el proceso de quejas y reclamos, requerimientos y demás será manejada de acuerdo con nuestras <Link href="/acuerdo-confidencialidad">políticas de confidencialidad</Link> e <Link href="/politica-imparcialidad">imparcialidad</Link></p>
                    <p><strong>Gracias</strong></p>
                    <div className="formulario-quejas-reclamos">
                        <p>Puede enviarnos su queja o reclamo a través del siguiente formulario</p>
                        <iframe 
                            onload="javascript:parent.scrollTo(0,0);" 
                            height="1093" 
                            allowTransparency="true" 
                            scrolling="no" 
                            frameBorder="0" 
                            src="https://arteobjeto.co/machform/embed.php?id=19738" 
                            title="Geoensayos quejas y reclamos"
                        ><a href="https://arteobjeto.co/machform/view.php?id=19738" title="Geoensayos quejas y reclamos">Geoensayos quejas y reclamos</a></iframe>
                    </div>
                </div>
            </main>
        </>
    )

}

export default QuejasReclamos