import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Supervisión, control y seguimiento al plan de inspección y ensayos en Obra | Geoensayos",
    description: "Supervisión, control y seguimiento al plan de inspección y ensayos en Obra"
}


export default function SupervisionControlEnObraPage(){
    return(
        <>
            <section className="bg-[#787030] relative">
                <Image 
                    src="/images/supervision-y-control-en-obra.jpg"
                    alt="En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción"
                    height={ 600 }
                    width={ 900 }
                    className="h-screen md:h-[70vh] w-full object-cover lg:object-contain -object-[35%_90%] md:object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-xl md:text-2xl/tight tracking-wide font-[800]">Geoensayos - Servicios</p>
                        <h1 className="text-white text-6xl md:text-7xl/14 mb-4">Supervisión y control en obra</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿Quién se asegura de que cada etapa de tu obra cumpla con la norma y evite reprocesos?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos supervisamos y controlamos los ensayos en campo para garantizar calidad y seguridad en tu proyecto.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light">Una obra civil puede fallar no solo por materiales defectuosos, sino también por falta de control en su aplicación. Cuando no existe un seguimiento riguroso al plan de inspección y ensayos, se corre el riesgo de incumplir especificaciones, generar retrasos y asumir sobrecostos en reparaciones.</p>
                </div>
                <div className="bg-[var(--color-7)] w-[90%] md:w-4/5 lg:w-3/4 mx-auto p-8 md:p-16 flex flex-col lg:flex-row gap-8 rounded-2xl shadow-2xl relative z-10">
                    <picture className="w-full lg:w-1/2">
                        <Image 
                            src="/images/supervision-y-control-en-obra-pic.jpg"
                            alt="En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto."
                            height={ 600 }
                            width={ 879 }
                            className="h-full w-auto rounded-2xl"
                        />
                    </picture>
                    <div className="w-full lg:w-1/2">
                        <p className="text-white font-light text-lg md:text-xl mb-8">Geoensayos acompaña a ingenieros, contratistas e interventorías con un equipo técnico especializado que supervisa y valida cada prueba, cada control y cada registro en obra. Esto asegura que el proyecto avance con calidad comprobada y cumpla con las exigencias normativas y contractuales.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#ce7f4d] bg-[url(/images/supervision-y-control-en-obra-list.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[8vw]/8 md:text-[7vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de actividades <span className="text-black block">que realizamos</span></h2>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Verificación del cumplimiento del plan de inspección y ensayos (PIE)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Control de materiales y procesos constructivos en campo</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Revisión de compactación de suelos y capas granulares</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Supervisión de mezclas de concreto y asfaltos durante su colocación</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Generación de informes de avance y hallazgos en obra</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">La supervisión y control se realiza con base en los requisitos de los contratos de obra, las especificaciones del INVÍAS, las Normas Técnicas Colombianas (NTC) y, cuando aplica, estándares internacionales como ASTM y AASHTO. Esto garantiza que la calidad se valide bajo parámetros aceptados oficialmente.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">En la construcción de un tramo vial, la supervisión en campo detectó que la compactación de la subbase no alcanzaba la densidad mínima exigida. Si el problema hubiera pasado inadvertido, la vía habría presentado deformaciones a los pocos meses de uso.</p>
                        <p className="text-white text-xl font-light mb-8">Gracias al control inmediato, se corrigió el proceso de compactación y se evitó un deterioro prematuro del pavimento, ahorrando tiempo y recursos al contratista.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}