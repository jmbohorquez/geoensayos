import SEO from "../components/SEO"

const acuerdoConfidencialidad = () => {

    //SEO
    const title = 'Acuerdo de confidencialidad | Geoensayos'
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
                <h1>Acuerdo de confidencialidad</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <h3>Cláusulas</h3>
                    <p><strong>Primera. - Objeto.</strong> El presente compromiso se refiere a la información que el solicitante proporcione al laboratorio de GEO ENSAYOS SAS y que el laboratorio proporcione a un tercero, ya sea de forma oral, gráfica o escrita y, aquella información que se genere durante su proceso de trabajo, de igual manera el compromiso con la imparcialidad en la ejecución de las actividades del laboratorio.</p>
                    <p><strong>Segunda</strong>
                        <ol>
                            <li>EL laboratorio de GEO ENSAYOS SAS únicamente utilizará la información facilitada para el desarrollo del objeto social del laboratorio, comprometiéndose a mantener la más estricta confidencialidad respecto de dicha información, lo que aplica a sus empleados, asociados y a cualquier persona que, por su relación con el laboratorio, tenga acceso a dicha información.</li>
                            <li>EL laboratorio de GEO ENSAYOS SAS, o las personas mencionadas en el párrafo anterior, no podrán hacer pública o divulgar a terceros la información objeto del presente Compromiso. En el caso de que el cliente establezca la necesidad de hacer público parte, o la totalidad de la información generada objeto del presente Compromiso, será preciso una autorización escrita aceptada y firmada por las implicadas.</li>
                            <li>De igual forma, EL laboratorio adoptará respecto de la información objeto de este Compromiso las mismas medidas de seguridad que adoptaría normalmente respecto a la información confidencial de GEO ENSAYOS SAS, evitando en la medida de lo posible su pérdida, robo o sustracción.</li>
                        </ol>
                    </p>
                    <p><strong>Tercera</strong> Sin perjuicio de lo estipulado en el presente Compromiso, la obligación de confidencialidad no se aplicará en los siguientes casos:
                        <ol>
                            <li>Cuando la información es de dominio público en el momento de su suministro o, una vez suministrada la información.</li>
                            <li>Cuando la información ya estuviera en el conocimiento de GEO ENSAYOS SAS con anterioridad a la firma del presente Acuerdo y sin obligación de guardar confidencialidad.</li>
                            <li>Cuando la legislación vigente o un mandato judicial exija su divulgación. En ese caso, GEO ENSAYOS SAS notificará a la otra parte, sí así se lo permiten.</li>
                            <li>En caso de que GEO ENSAYOS SAS pueda probar que la información fue desarrollada o recibida legítimamente de terceros, de forma totalmente independiente a su relación con el solicitante.</li>
                        </ol>
                    </p>
                    <p><strong>Cuarta</strong> Los derechos de propiedad intelectual de la información objeto de este Acuerdo pertenecen al cliente o GEOENSAYOS según autoría, y en caso de revelarla no cambiará tal situación. </p>
                    <p>En caso de que la información confidencial resulte revelada o divulgada de cualquier forma distinta al objeto de este Compromiso, ya sea de forma dolosa o por mera negligencia, habrá de indemnizar los daños y perjuicios ocasionados a la parte afectada, sin perjuicio de las acciones civiles o penales que puedan corresponder.</p>
                    <p><strong>Quinta</strong> Todo el personal del laboratorio y los terceros que correspondan se comprometen a ejecutar sus actividades de manera imparcial, dando cumplimiento a la Política de Imparcialidad y Confidencialidad, por tanto, no aceptará ofrecimientos, regalos, invitaciones o cualquier tipo de soborno. Ni participación en lavado de activos o extorsión.</p>
                    <p>No se permite prometer, ofrecer o dar cualquier beneficio o ventaja de cualquier naturaleza, de forma directa o indirecta (a través de un tercero) con el fin de influir en decisiones de cualquier tipo u obtener ventajas indebidas. </p>
                    <p>Cualquier violación a la imparcialidad por parte de los trabajadores de Geo Ensayos, se considerará una falta grave de acuerdo con lo establecido en el reglamento interno de Trabajo, además de las penales consagradas en la ley. Para las demás partes interesadas, este incumplimiento generará desde quejas hasta sanciones consagradas en la ley.</p>
                    <p><strong>Sexta</strong> El presente Acuerdo entrará en vigor en el momento de la aceptación de este por parte del cliente u otra parte interesada, extendiéndose su vigencia indefinida o hasta tanto la parte lo permita su divulgación por escrito.</p>
                    <p><strong>Septima</strong> En caso de cualquier conflicto o discrepancia que pueda surgir en relación con la interpretación y/o cumplimiento del presente Compromiso, el Laboratorio se someterá a la legislación vigente.</p>
                    <p><strong>Octava</strong> Para el caso del manejo de información que incluya datos personales, el GEOENSAYOS dará estricto cumplimiento a las disposiciones constitucionales y legales sobre la protección del derecho fundamental de habeas data, en particular lo dispuesto en el artículo 15 de la Constitución Política y la ley 1581 de 2012. </p>
                    <p className="firma"><strong>Juana Milena Rodriguez Montero</strong><br />
                    Gerente General</p>
                </div>
            </main>
        </>
    )

}

export default acuerdoConfidencialidad