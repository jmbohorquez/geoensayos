import type { Metadata } from "next";
import Image from "next/image";

import { BTNWhatsappText } from "../../../../components/cta/BTNWhatsappText";
import { Certificaciones } from "../../../../components/Certificaciones";

import IconCheck from "../../../../../public/images/IconCheck.svg";

export const metadata: Metadata = {
    title: "Montaje de equipo de laboratorio en sitio | Geoensayos",
    description: "Comprobamos que los pavimentos sean resistentes, duraderos y adecuados para el tránsito y el clima."
}


export default function LaboratorioEnSitioPage(){
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
                        <h1 className="text-white text-5xl md:text-6xl/14 mb-4">Montaje de laboratorio en sitio</h1>
                        <p className="text-white text-lg md:text-xl font-bold mb-2">¿Necesitas resultados inmediatos sin perder tiempo en traslados de muestras?</p>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos instalamos un laboratorio directamente en tu obra para que tomes decisiones rápidas y seguras.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <article>
                <div className="px-8 py-24">
                    <p className="text-2xl md:text-3xl lg:text-5xl/normal w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center font-light">En muchos proyectos, los tiempos de traslado de muestras al laboratorio central retrasan la toma de decisiones y pueden generar reprocesos costosos. Además, algunos ensayos requieren condiciones específicas que solo se logran si se hacen justo en el lugar de la obra.</p>
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
                        <p className="text-white font-light text-lg md:text-xl mb-8">Con el montaje de un laboratorio en sitio, Geoensayos acerca los equipos y la experiencia de sus técnicos al frente de trabajo. Esto permite obtener resultados inmediatos, tener un control continuo de la calidad y reaccionar rápidamente ante cualquier desviación. El resultado: obras más eficientes, seguras y sin pérdida de tiempo.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
                <div className="bg-[#cf7f4e] bg-[url(/images/pruebas-suelos-y-agregados.jpg)] bg-no-repeat bg-left-top bg-cover lg:bg-contain -mt-24 px-8 py-48 relative z-0">
                    <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                        <h2 className="text-white text-[7vw]/8 md:text-[7vw]/12 lg:text-[3.8vw]/16 mb-12">Tipos de pruebas que <span className="text-white md:text-black block">Realizamos en sitio</span></h2>
                        <p className="text-3xl mb-4">El laboratorio móvil permite ejecutar, entre otros, los siguientes ensayos:</p>
                        <ul className="text-white text-lg md:text-2xl pl-1 font-light">
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Ensayos de compactación (densidad y humedad in situ)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Control de mezclas de concreto (asentamiento, temperatura, moldeado de cilindros)</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Ensayos de materiales granulares para capas de pavimento</span>
                            </li>
                            <li className="flex flex-row items-center gap-4 mb-4">
                                <IconCheck className="fill-white md:fill-black h-5" />
                                <span className="flex-1">Ensayos básicos de mezclas asfálticas durante la producción y colocación</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-[#6f6f3a] px-8 flex flex-col lg:flex-row justify-end gap-16 relative">
                    <div className="bg-[#c5c5bc] w-full lg:w-2/5 p-8 md:p-16 -mt-24 lg:mt-0 rounded-lg lg:absolute -top-24 left-8 shadow-2xl">
                        <Certificaciones />
                        <h3 className="text-4xl font-bold mt-8 mb-4">Normas y metodologías aplicadas</h3>
                        <p className="text-xl font-light">Los ensayos realizados en el laboratorio de obra se desarrollan bajo las Normas INVÍAS, NTC, ASTM y AASHTO, garantizando que los resultados tengan plena validez técnica y sean aceptados por interventorías y entidades de control.</p>
                    </div>
                    <div className="w-full lg:w-1/2 py-8 md:py-16 px-0 md:px-8">
                        <p className="text-white text-xl uppercase">Caso real</p>
                        <h2 className="text-white text-5xl mb-4">Lo que descubrimos en campo</h2>
                        <p className="text-white text-xl font-light mb-4">En un proyecto de pavimentación urbana, la interventoría exigía resultados diarios de compactación y control de concreto. Sin un laboratorio en sitio, los tiempos de transporte y análisis de las muestras retrasaban las decisiones críticas de la obra.</p>
                        <p className="text-white text-xl font-light mb-8">Con el montaje del laboratorio móvil, se logró verificar la calidad de los materiales en el mismo día y ajustar los procesos en tiempo real. Esto evitó reprocesos, redujo costos y permitió entregar el proyecto dentro de los plazos establecidos.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </article>
        </>
    )
}