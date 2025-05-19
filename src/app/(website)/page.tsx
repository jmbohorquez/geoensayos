import Image from "next/image";

import { LogoWhite, IconCheck } from "../../components/Icons";

import { HomeImageSlider } from "../../components/HomeImageSlider";
import { BTN } from "../../components/BotonComponent";
import { Certificaciones } from "../../components/Certificaciones";
import { BTNWhatsappText } from "../../components/cta/BTNWhatsappText";

export default function HomePage() {
    return (
        <>  
            <section className="h-screen w-full relative">
                <div className="absolute w-full h-full z-0">
                    <HomeImageSlider />
                </div>
                <div className="relative z-10 h-full w-full bg-gradient-to-r from-slate-900 to-slate-900/0">
                    <div className="h-full w-full px-8 md:px-0 md:w-[84.4444%] md:mx-auto top-0 left-0">
                        <div className="h-full w-full md:w-2/3 lg:w-2/4 flex flex-col justify-center">
                            <h1 className="text-white text-2xl/8 md:text-4xl font-bold mb-4">¿Vas a construir una obra civil y no estás seguro si los materiales cumplen con la norma?</h1>
                            <p className="text-white text-lg md:text-xl font-light mb-2 md:mb-4">En Geoensayos te ayudamos a evitar errores costosos haciendo pruebas de laboratorio a los materiales antes de que comience la obra.</p>
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-4">Hacemos ensayos a:</h3>
                            <ul className="text-white mb-4">
                                <li className="text-lg md:text-2xl flex flex-row flex-nowrap items-center gap-2 list-icon mb-1 md:mb-2"><IconCheck /><span>Concretos</span></li>
                                <li className="text-lg md:text-2xl flex flex-row flex-nowrap items-center gap-2 list-icon mb-1 md:mb-2"><IconCheck /><span>Suelos y agregados</span></li>
                                <li className="text-lg md:text-2xl flex flex-row flex-nowrap items-center gap-2 list-icon"><IconCheck /><span>Mezclas asfálticas</span></li>
                            </ul>
                            <p className="text-white text-xl italic mb-4 md:mb-6">Hablemos de tu proyecto y cómo podemos ayudarte.</p>
                            <BTNWhatsappText anchor={"Hablemos"} />
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
                                <p className="mt-8 mb-4">Ofrecemos ensayos de laboratorio aplicados a materiales del sector construcción a través de servicios de supervisión, control al plan de inspección y ensayos, laboratorios en obra, toma de muestras, ejecución de ensayos, exploración manual (apiques), entre otros servicios conexos.</p>
                                <p className="mb-4">Nuestro laboratorio de Ingeniería de materiales ofrece un valor agregado técnico en sus conceptos y altos estándares de eficacia y confiabilidad…</p>
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