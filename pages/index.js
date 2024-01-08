import Image from 'next/image'

import SEO from '../components/SEO'
import BTN from '../components/BotonComponent'
import {LogoWhite} from '../components/Icons'
import Certificaciones from '../components/Certificaciones'

import ContactPanel from '../components/ContactPanel'

export default function Home() {
    
    //SEO
    const title = 'Geoensayos, laborato de pruebas geológicas'
    const description = 'Somos una fábrica de ensayos, altamente productiva, confiable y eficaz acreditada y certificada bajo las normas NTC/IEC 17025:2017 e ISO 9001:2015.'
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas'
    const socialImg = '/images/meta-images/inicio.jpg'
    
    return (
        <>
            <SEO 
                title={title} 
                description={description} 
                keywords={keywords} 
                socialImg={socialImg}
            />
            
            <section className="banner banner-home banner-full">
                <Image 
                    src="/images/inicio-cabecera-bg.jpg"
                    alt="Laboratorio de pruebas Geotécnicas"
                    fill
                    className="object-fit-cover mix-blend-overlay"
                    priority
                />
                <div className="banner-text-container banner-home-text-container">
                    <div className="banner-home-text-inner">
                        <div className="banner-home-image">
                            <Image 
                                src="/images/inicio-cabecera-imagen.jpg"
                                alt="Geoensayos, laboratorio de ensayos geológicos"
                                height={ 644 }
                                width={ 912 }
                                className="object-fit-cover"
                                priority
                            />
                        </div>
                        <div className="banner-home-text">
                            <h1 className="banner-home-title">Ingeniería de materiales</h1>
                            <p className="banner-home-description">Somos una fábrica de ensayos para el sector construcción, altamente productiva, confiable y eficaz. “En GEO ENSAYOS SAS contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 20-LAB-013, bajo la norma ISO/IEC 17025:2017</p>
                            <ContactPanel />
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <div className="inicio-servicios-panel">
                    <h2 className="titulo-cuadrado"><span className="titulo-numero">01_</span> Nuestros Servicios</h2>
                    <div className="inicio-servicios-panel-content">
                        <div className="inicio-servicios-panel-content-inner">
                            <div className="inicio-servicios-text">
                                <Certificaciones />
                                <p>Ofrecemos ensayos de laboratorio aplicados a materiales del sector construcción a través de servicios de supervisión, control al plan de inspección y ensayos, laboratorios en obra, toma de muestras, ejecución de ensayos, exploración manual (apiques), entre otros servicios conexos.</p>
                                <p>Nuestro laboratorio de Ingeniería de materiales ofrece un valor agregado técnico en sus conceptos y altos estándares de eficacia y confiabilidad…</p>
                                <BTN 
                                    url='/servicios'
                                    anchor='Ver los servicios'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inicio-nosotros-panel banner-full">
                    <Image 
                        src="/images/inicio-quienes-somos-bg.jpg"
                        alt="Geoensayos, un laboratorio de ingeniería de materiales"
                        fill
                        className='object-fit-cover'
                    />
                    <div className="inicio-nosotros-inner">
                        <h2 className="titulo-cuadrado"><span className="titulo-numero">02_</span> Quienes somos</h2>
                        <div className="inicio-nosotros-text-container">
                            <div className="nosotros-logo">
                                <LogoWhite />
                            </div>
                            <div className="nosotros-texto">
                                <p>GEO ENSAYOS SAS es un laboratorio de ingeniería de materiales enfocado en el procesamiento de concretos, suelos, agregados y mezclas asfálticas con altos estándares de calidad, y conceptos técnicos de valor añadido…</p>
                                <BTN 
                                    url='/nosotros'
                                    anchor='Saber Más'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
