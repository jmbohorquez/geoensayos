import SEO from '../components/SEO'

const politicaImparcialidad = () => {

    //SEO
    const title = 'Política de imparcialidad | Geoensayos'
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
            <section className="banner banner-legales banner-politica-imparcialidad">
                <h1>Política de imparcialidad</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <p><strong>GEOENSAYOS SAS,</strong> laboratorio de ingeniería de ensayos enfocado en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, desarrolla sus servicios, libre de presiones comerciales, financieras o de otra índole, internas o externas, que puedan afectar la imparcialidad. La alta dirección y demás miembros de la compañía están comprometidos en informar cualquier tipo de conflicto que se le presente, que puedan comprometer o poner en riesgo la imparcialidad de los resultados. Los riesgos de imparcialidad identificados se registran, analizan y se controlan de acuerdo con los requisitos del sistema de gestión.</p>
                    <p><strong>GEOENSAYOS SAS</strong> cuenta con compromisos legalmente ejecutables, y requisitos en su sistema de gestión que controlan y protegen la información obtenida o generada durante el desarrollo de su objeto, catalogada como información confidencial, excepto que la ley requiera la divulgación de esta, lo cual se reportará al cliente, si es permitido.</p>
                    <p>Como laboratorio desarrollamos nuestras actividades con independencia, integridad e imparcialidad y aplicamos esta política en nuestro actuar, dejando claro pautas de comportamiento respecto a la aceptación u ofrecimiento de regalos o invitaciones, prohibiendo cualquier tipo de soborno, participación en lavado de activos, extorsión, y se podrán consultar listas establecidas para mantener el control. </p>
                    <p>No se permite prometer, ofrecer o dar cualquier beneficio o ventaja de cualquier naturaleza, de forma directa o indirecta (a través de un tercero) con el fin de influir en decisiones de cualquier tipo u obtener ventajas indebidas para la Compañía. </p>
                    <p className="firma"><strong>Juana Milena Rodriguez Montero</strong><br />
                    Gerente General</p>
                </div>
            </main>
        </>
    )

}

export default politicaImparcialidad