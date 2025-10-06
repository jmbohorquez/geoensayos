import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Ejecución de apiques | Geoensayos",
    description: "Supervisión, control y seguimiento al plan de inspección y ensayos en Obra"
}


export default function EjecucionDeApiquesPage(){
    return(
        <>
            <section className="bg-[#78702f] relative">
                <Image 
                    src="/images/ejecucion-de-apiques.jpg"
                    alt="En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción"
                    height={ 600 }
                    width={ 900 }
                    className="h-screen md:h-[70vh] w-full object-cover lg:object-contain -object-[35%_90%] md:object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-xl md:text-2xl/tight tracking-wide font-[800]">Geoensayos - Servicios</p>
                        <h1 className="text-white text-5xl md:text-6xl/14 mb-4">Ejecución de apiques y sondeos</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿Conoces realmente qué hay bajo el terreno donde vas a construir?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos realizamos apiques que revelan las condiciones del suelo para tomar decisiones seguras en diseño y construcción.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light">Muchas fallas en obras civiles se deben a un desconocimiento del terreno. Cuando no se explora lo que hay bajo la superficie, pueden aparecer asentamientos diferenciales, grietas o incluso colapsos parciales de estructuras y pavimentos.</p>
                </div>
                <div className="bg-[var(--color-7)] w-[90%] md:w-4/5 lg:w-3/4 mx-auto p-8 md:p-16 flex flex-col lg:flex-row gap-8 rounded-2xl shadow-2xl relative z-10">
                    <picture className="w-full lg:w-1/2">
                        <Image 
                            src="/images/ejecucion-de-apiques-pic.jpg"
                            alt="En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto."
                            height={ 600 }
                            width={ 879 }
                            className="h-full w-auto rounded-2xl"
                        />
                    </picture>
                    <div className="w-full lg:w-1/2">
                        <p className="text-white font-light text-lg md:text-xl mb-4">La ejecución de apiques permite observar directamente las capas del suelo, identificar materiales no aptos y comprobar la calidad de rellenos o compactaciones.</p>
                        <p className="text-white font-light text-lg md:text-xl mb-8">En Geoensayos realizamos este proceso con la rigurosidad necesaria para que ingenieros y constructores cuenten con información confiable antes de avanzar en su proyecto.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#cd7e4d] bg-[url(/images/ejecucion-de-apiques-list.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[7vw]/8 md:text-[5vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de actividades que<span className="text-white lg:text-black block">realizamos con apiques</span></h2>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Excavaciones manuales o mecánicas para inspección del terreno</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Registro estratigráfico de las capas encontradas</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Verificación de espesores y materiales de relleno</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Identificación de zonas blandas o con baja capacidad portante</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Extracción de muestras inalteradas o disturbadas para ensayos de laboratorio</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">La ejecución de apiques se realiza siguiendo las especificaciones del INVÍAS, las Normas Técnicas Colombianas (NTC) y, cuando aplica, metodologías de exploración geotécnica reconocidas internacionalmente.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">Durante la construcción de un edificio de vivienda, los apiques revelaron que el terreno había sido rellenado de manera informal con material de desecho y sin compactación adecuada. De haberse construido sin este hallazgo, la estructura habría sufrido asentamientos y fisuras.</p>
                        <p className="text-white text-xl font-light mb-8">Gracias a la inspección, se recomendó reemplazar el material y compactar nuevamente, garantizando la seguridad de la cimentación y evitando un riesgo mayor para la obra.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}