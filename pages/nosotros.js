import Image from 'next/image'
import Link from 'next/link'

import SEO from '../components/SEO'
import BTN from '../components/BotonComponent'
import ContactPanel from '../components/ContactPanel'
import Certificaciones from '../components/Certificaciones'

const Nosotros = () => {

    //SEO
    const title = 'Quienes somos | Geoensayos'
    const description = 'Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico.'
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas'
    const socialImg = '/images/meta-images/nosotros.jpg'
    
    return(
        <>
            <SEO 
                title={title} 
                description={description} 
                keywords={keywords} 
                socialImg={socialImg}
            />

            <section className="banner banner-nosotros banner-full">
                <Image 
                    src="/images/nosotros-banner-gb.jpg"
                    alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                    fill
                    className="banner-nosotros-bg-image object-fit-cover"
                    priority
                />
                <div className="banner-text-container center-content">
                    <div className="banner-text-container-inner">
                        <h1>Nosotros</h1>
                        <p>En GEO ENSAYOS SAS contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 20-LAB-013, bajo la norma ISO/IEC 17025:2017</p>
                        <ContactPanel />
                    </div>
                </div>
            </section>
            <main className="nosotros-main-content">
                <div className="main-content-inner">
                    <div className="nosotros-main-image">
                        <Image 
                            src="/images/nosotros-main-content.jpg"
                            alt="Geoensayos, confiables y eficaces acreditados y certificados"
                            height={ 635 }
                            width={ 488 }
                        />
                    </div>
                    <div className="nosotros-main-text">
                        <p>Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico.</p>
                        <p>El laboratorio cuenta con <Link href="./documentos/acreditacion-onac-2023.pdf" target="_blank">acreditación vigente por parte del Organismo Nacional de Acreditación (ONAC)</Link> bajo la norma ISO/IEC 17025:2017, requisitos generales para la competencia de los laboratorios de ensayo y calibración</p>
                        <p>Todos nuestros procesos son soportados en la normatividad vigente gracias a que está certificado en la norma NTC-ISO-9001 y acreditado por la ONAC bajo la norma ISO/IEC 17025:2017.</p>
                        <Certificaciones />
                    </div>
                </div>
            </main>
            <section className="nosotros-antecedentes-container banner-full">
                <Image 
                    src="/images/nosotros-antecedentes-bg.jpg"
                    alt="Geoensayos, aliado para sus clientes en el control de calidad"
                    fill
                    className="object-fit-cover"
                />

                <div className="nosotros-antecedentes-content-inner">
                    <div className="nosotros-antecedentes-text-container">
                        <p>Desde sus inicios ha sido un aliado para sus clientes en el control de calidad, supervisión técnica y caracterización de materiales, observando todos los estándares de calidad, eficiencia, y cumplimiento.</p>
                        <BTN 
                            url='/servicios'
                            anchor='Ver nuestros servicios'
                        />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Nosotros