import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Pruebas para Mezclas asfálticas | Geoensayos",
    description: "Comprobamos que los pavimentos sean resistentes, duraderos y adecuados para el tránsito y el clima."
}


export default function MezclasAsfalticasPage(){
    return(
        <>
            <section className="bg-[#78702f] relative">
                <Image 
                    src="/images/pruebas-laboratorio-mezclas-asfalticas.jpg"
                    alt="En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción"
                    height={ 600 }
                    width={ 900 }
                    className="h-screen md:h-[70vh] w-full object-cover lg:object-contain -object-[35%_90%] md:object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-xl md:text-2xl/tight tracking-wide font-[800]">Geoensayos - Servicios</p>
                        <h1 className="text-white text-5xl md:text-6xl/14 mb-4">Mezclas asfálticas</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿Tu pavimento resistirá el tráfico y el clima sin fallar antes de tiempo?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos comprobamos la calidad de las mezclas asfálticas para que tus vías sean seguras y duraderas.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light"><strong>El pavimento es clave en la infraestructura vial:</strong> soporta cargas constantes y condiciones climáticas exigentes. Cuando las mezclas asfálticas no cumplen con los requisitos de calidad, los problemas aparecen rápido: baches, agrietamientos, deformaciones y un aumento en los costos de mantenimiento.</p>
                </div>
                <div className="bg-[var(--color-7)] w-[90%] md:w-4/5 lg:w-3/4 mx-auto p-8 md:p-16 flex flex-col lg:flex-row gap-8 rounded-2xl shadow-2xl relative z-10">
                    <picture className="w-full lg:w-1/2">
                        <Image 
                            src="/images/prueba-lboratorio-mezclas-asfalticas.jpg"
                            alt="En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto."
                            height={ 600 }
                            width={ 879 }
                            className="h-full w-auto rounded-2xl"
                        />
                    </picture>
                    <div className="w-full lg:w-1/2">
                        <p className="text-white font-light text-lg md:text-xl mb-8">En Geoensayos realizamos ensayos de laboratorio que permiten evaluar la resistencia, estabilidad y durabilidad de las mezclas asfálticas densas en caliente. Así garantizamos que el pavimento se comporte de acuerdo con la norma, evitando fallas prematuras y asegurando una vida útil más larga para la obra.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#cf7f4e] bg-[url(/images/pruebas-mezclas-asfalticas.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[7vw]/8 md:text-[6vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de pruebas que <span className="text-white lg:text-black block">Realizamos en mezclas asfálticas</span></h2>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Diseño Marshall de mezclas asfálticas</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Estabilidad y flujo Marshall</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Contenido de asfalto y granulometría</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Ensayo de densidad y vacíos en mezcla compactada</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Ensayo de resistencia a la tracción indirecta (TSR)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Prueba de desgaste y durabilidad</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Control de compactación en obra</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">Estos ensayos se desarrollan bajo los lineamientos de las Normas INVÍAS y las Normas Técnicas Colombianas (NTC). También aplicamos metodologías internacionales como ASTM y AASHTO, garantizando resultados confiables, aceptados por interventorías y de acuerdo con las mejores prácticas de la ingeniería vial.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">En la construcción de una vía secundaria, el ensayo Marshall mostró que la mezcla asfáltica utilizada tenía un contenido de vacíos superior al permitido. Esto significaba que el pavimento se deterioraría rápidamente con el tránsito pesado y las lluvias.</p>
                        <p className="text-white text-xl font-light mb-8">Gracias a la identificación temprana, se ajustó el diseño de la mezcla y se corrigió el proceso de compactación. El resultado fue una carpeta asfáltica más resistente y con mejor desempeño a largo plazo.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}