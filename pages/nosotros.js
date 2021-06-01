import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Nosotros = () => {

    //SEO
    const title = 'Quienes somos | Geoensayos';
    const description = 'Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico.';
    const keywords = 'ensayos, geología, laboratorio, materiales, ingenieria, ingenieria de materiales, concretos, suelos, mezclas asfálticas';
    const socialImg = '/images/meta-images/nosotros.jpg';
    
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

            <section className="banner banner-nosotros banner-full">
                <Image 
                    src="/images/nosotros-banner-gb.jpg"
                    alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                    layout="fill"
                    objectFit="cover"
                    quality={ 60 }
                    className="banner-nosotros-bg-image"
                />
                <div className="banner-text-container center-content">
                    <div className="banner-text-container-inner">
                        <h1>Nosotros</h1>
                        <p>Somos un laboratorio de ensayos, altamente productivos, confiables y eficaces acreditados y certificados bajo las normas NTC/IEC 17025:2017 e ISO 9001:2015.</p>
                    </div>
                </div>
            </section>
            <main className="nosotros-main-content">
                <div className="main-content-inner">
                    <div className="nosotros-main-image">
                        <Image 
                            src="/images/nosotros-main-content.jpg"
                            alt="Geoensayos, confiables y eficaces acreditados y certificados"
                            layout="responsive"
                            height={ 635 }
                            width={ 488 }
                            quality={ 50 }
                        />
                    </div>
                    <div className="nosotros-main-text">
                        <p>Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico.</p>
                        <p>El laboratorio cuenta con <Link href="./documentos/certificado-acreditacion-onac.pdf"><a target="_blank">acreditación vigente por parte del Organismo Nacional de Acreditación (ONAC)</a></Link> bajo la norma ISO/IEC 17025:2017, requisitos generales para la competencia de los laboratorios de ensayo y calibración</p>
                        <p>Todos nuestros procesos son soportados en la normatividad vigente gracias a que está certificado en la norma NTC-ISO-9001 y acreditado por la ONAC bajo la norma ISO/IEC 17025:2017.</p>
                        <div className="nosotros-main-certificates">
                            <Image 
                                src="/images/certificado-onac-bn.png"
                                alt="Certificado Acreditación ONAC"
                                layout="intrinsic"
                                height={ 60 }
                                width={ 97 }
                                quality={ 40 }
                            />
                            <Image 
                                src="/images/certificado-ISO-IEC.png"
                                alt="Certificado ISO / IEC 17025"
                                layout="intrinsic"
                                height={ 80 }
                                width={ 80 }
                                quality={ 40 }
                            />
                            <Image 
                                src="/images/certificado-ISO-9001.png"
                                alt="Certificado ISO 9001"
                                layout="intrinsic"
                                height={ 58 }
                                width={ 151 }
                                quality={ 40 }
                            />
                        </div>
                    </div>
                </div>
            </main>
            <section className="nosotros-antecedentes-container banner-full">
                <Image 
                    src="/images/nosotros-antecedentes-bg.jpg"
                    alt="Geoensayos, aliado para sus clientes en el control de calidad"
                    layout="fill"
                    objectFit="cover"
                    quality={ 60 }
                />

                <div className="nosotros-antecedentes-content-inner">
                    <div className="nosotros-antecedentes-text-container">
                        <p>Desde sus inicios ha sido un aliado para sus clientes en el control de calidad, supervisión técnica y caracterización de materiales, observando todos los estándares de calidad, eficiencia, y cumplimiento.</p>
                        <Link
                            href="/servicios"
                        >
                            <a className="btn"><span>Ver nuestros servicios</span></a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Nosotros;