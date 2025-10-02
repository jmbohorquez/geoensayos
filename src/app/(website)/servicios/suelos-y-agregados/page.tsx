import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Pruebas para Suelos y agregados | Geoensayos",
    description: "En Geoensayos verificamos suelos y agregados para que tu proyecto no sufra hundimientos, fisuras ni fallas prematuras."
}

export default function ConcretoPage(){
    return(
        <>
            <section className="bg-[#727036] relative">
                <Image 
                    src="/images/pruebas-laboratorio-suelos-agregados.jpg"
                    alt="En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción"
                    height={ 600 }
                    width={ 900 }
                    className="h-screen md:h-[70vh] w-full object-cover lg:object-contain -object-[35%_90%] md:object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-xl md:text-2xl/tight tracking-wide font-[800]">Geoensayos - Servicios</p>
                        <h1 className="text-white text-5xl md:text-6xl/14 mb-4">Suelos y agregados</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿El terreno y los materiales de tu obra tienen la resistencia y estabilidad que necesitas?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos verificamos suelos y agregados para que tu proyecto no sufra hundimientos, fisuras ni fallas prematuras.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light"><strong>El suelo y los agregados son la base de toda obra civil,</strong> especialmente en proyectos viales. Si no se analizan con rigor, pueden aparecer deformaciones, baches, asentamientos diferenciales o incluso fallas estructurales en el pavimento.</p>
                </div>
                <div className="bg-[var(--color-7)] w-[90%] md:w-4/5 lg:w-3/4 mx-auto p-8 md:p-16 flex flex-col lg:flex-row gap-8 rounded-2xl shadow-2xl relative z-10">
                    <picture className="w-full lg:w-1/2">
                        <Image 
                            src="/images/prueba-lboratorio-suelos.jpg"
                            alt="En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto."
                            height={ 600 }
                            width={ 879 }
                            className="h-full w-auto rounded-2xl"
                        />
                    </picture>
                    <div className="w-full lg:w-1/2">
                        <p className="text-white font-light text-lg md:text-xl mb-8">En Geoensayos realizamos ensayos que permiten caracterizar el terreno, evaluar la capacidad portante y comprobar que los materiales cumplen con las especificaciones técnicas. Con esto ayudamos a prevenir sobrecostos por reparaciones, retrasos en obra y riesgos de durabilidad en la infraestructura.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#cf7f4e] bg-[url(/images/pruebas-suelos-y-agregados.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[7vw]/8 md:text-[6vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de pruebas que <span className="text-white md:text-black block">Realizamos en suelos y agregados</span></h2>
                        <h3 className="text-3xl text-white md:text-black mb-4">Ensayos en suelos:</h3>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light mb-8">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Granulometría (tamizado e hidrómetro)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Límites de Atterberg</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Proctor estándar y modificado</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">CBR - California Bearing Ratio</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Densidad y humedad natural (cono de arena o densímetro nuclear)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Compresión inconfinada</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Permeabilidad</span>
                            </li>
                        </ul>
                        <h3 className="text-3xl text-white md:text-black mb-4">Ensayos en agregados:</h3>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Granulometría por tamizado</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Peso específico y absorción</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Equivalente de arena</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Desgaste Los Ángeles</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Durabilidad frente a sulfatos</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Índice de lajas y elongación</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Contenido de material deleznable y partículas livianas</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">Estos ensayos se realizan bajo las <strong>Normas INVÍAS, NTC</strong> y, cuando corresponde, metodologías internacionales como <strong>ASTM y AASHTO.</strong> Esto garantiza que los resultados sean aceptados por interventorías y entidades de control, y reflejen fielmente el comportamiento real de los materiales en obra.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">En la construcción de un tramo vial, los ensayos de CBR y Proctor revelaron que la subrasante tenía un CBR promedio de apenas 3%, cuando la norma exigía mínimo 8%. De no haberse identificado, la vía habría presentado hundimientos y baches prematuros.</p>
                        <p className="text-white text-xl font-light mb-8">Gracias a este hallazgo, se implementó un mejoramiento con material granular y un control más estricto de la compactación. El resultado: una vía segura, durable y libre de reprocesos costosos.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}