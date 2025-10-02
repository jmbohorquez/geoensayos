import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Pruebas para concretos | Geoensayos",
    description: "El concreto es el corazón de cualquier obra civil: sostiene estructuras, recibe cargas y asegura la vida útil de un proyecto. Pero no siempre la mezcla que llega a obra cumple lo prometido. Si no se controla su calidad, pueden aparecer problemas como grietas, deformaciones o incluso fallas estructurales."
}

export default function ConcretoPage(){
    return(
        <>
            <section className="bg-[#736f38] relative">
                <Image 
                    src="/images/pruebas-laboratorio-concretos.jpg"
                    alt="En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción"
                    height={ 600 }
                    width={ 900 }
                    className="h-screen md:h-[70vh] w-full object-cover lg:object-contain -object-[35%_90%] md:object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-xl md:text-2xl/tight tracking-wide font-[800]">Geoensayos - Servicios</p>
                        <h1 className="text-white text-6xl md:text-7xl/14 mb-4">Concretos</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿Tu concreto tiene la resistencia necesaria para que tu obra sea segura y duradera?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos verificamos la calidad de tus mezclas para evitar fallas y sobrecostos en construcción.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light"><strong>El concreto es el corazón de cualquier obra civil:</strong> sostiene estructuras, recibe cargas y asegura la vida útil de un proyecto. Pero no siempre la mezcla que llega a obra cumple lo prometido. Si no se controla su calidad, pueden aparecer problemas como grietas, deformaciones o incluso fallas estructurales.</p>
                </div>
                <div className="bg-[var(--color-7)] w-[90%] md:w-4/5 lg:w-3/4 mx-auto p-8 md:p-16 flex flex-col lg:flex-row gap-8 rounded-2xl shadow-2xl relative z-10">
                    <picture className="w-full lg:w-1/2">
                        <Image 
                            src="/images/prueba-resistencia-cilindro-concreto.jpg"
                            alt="En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto."
                            height={ 600 }
                            width={ 879 }
                            className="h-full w-auto rounded-2xl"
                        />
                    </picture>
                    <div className="w-full lg:w-1/2">
                        <p className="text-white font-light text-lg md:text-xl mb-8">En Geoensayos realizamos ensayos de laboratorio que permiten comprobar la resistencia, trabajabilidad y durabilidad del concreto. De esta manera, ayudamos a nuestros clientes a detectar a tiempo errores en la mezcla o en el proceso constructivo, garantizando estructuras más seguras, eficientes y confiables.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#bb7e52] bg-[url(/images/pruebas-concreto-construccion.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[8vw]/8 md:text-[7vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de pruebas que <span className="text-black block">Realizamos en concretos</span></h2>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Compresión de cilindros</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Flexión de vigas</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Ensayo de asentamiento</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Tracción indirecta</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Extracción de núcleos de concreto</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Falla de cubos de mortero</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="h-5" />
                                <span className="flex-1">Diseño de mezcla de concreto</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">Nuestros ensayos de concreto se realizan siguiendo las <strong>normas INVÍAS y NTC vigentes,</strong> lo que asegura que los resultados reflejen el comportamiento real del material en obra y brinden confianza en la calidad estructural.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">En la construcción de un edificio de cinco pisos, los ensayos de compresión revelaron que las columnas recién fundidas tenían una resistencia de solo 18 MPa, cuando lo exigido eran 28 MPa a los 28 días. Gracias a esta detección temprana se descubrió que la mezcla se estaba elaborando con demasiada agua. </p>
                        <p className="text-white text-xl font-light mb-8">La corrección inmediata evitó el uso de un concreto deficiente que habría puesto en riesgo la seguridad de la estructura y generado altos sobrecostos.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}