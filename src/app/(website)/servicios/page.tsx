import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BTNWhatsappText } from "../../../components/cta/BTNWhatsappText";

import IconConcreto from "../../../../public/images/IconConcreto.svg";
import IconAsfalto from "../../../../public/images/IconAsfalto.svg";
import IconSuelos from "../../../../public/images/IconSuelos.svg";
import IconApiques from "../../../../public/images/IconApiques.svg";
import IconLaboratorio from "../../../../public/images/IconLaboratorio.svg";
import IconSupervision from "../../../../public/images/IconSupervision.svg";
import IconArrow from "../../../../public/images/icon-link-arrow.svg";


export const metadata: Metadata = {
    title: "Portafolio de servicios | Geoensayos",
    description: "En Geoensayos llevamos la ciencia a la construcción. Aseguramos que cada obra civil se realice con materiales confiables, experiencia técnica y un acompañamiento cercano en todo el proceso."
}

const Laboratorio = [
    {
        "id": 1,
        "name": "Concretos",
        "icon": <IconConcreto className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Verificamos que la mezcla tenga la resistencia y calidad necesarias para soportar la obra ",
        "link": "/servicios/concretos"
    },
    {
        "id": 2,
        "name": "Suelos y agregados",
        "icon": <IconSuelos className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Analizamos la capacidad y estabilidad del terreno y de los materiales que sostienen la construcción ",
        "link": "/servicios/suelos-y-agregados"
    },
    {
        "id": 3,
        "name": "Mezclas asfálticas",
        "icon": <IconAsfalto className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Comprobamos que los pavimentos sean resistentes, duraderos y adecuados para el tránsito y el clima ",
        "link": "/servicios/mezclas-asfalticas"
    },
];

const Obra = [
    {
        "id": 4,
        "name": "Montaje de laboratorio en sitio",
        "icon": <IconLaboratorio className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Instalamos equipos de laboratorio móviles directamente en la obra para ensayar materiales sin perder tiempo en traslados",
        "link": "/servicios/laboratorio-en-sitio"
    },
    {
        "id": 5,
        "name": "Supervisión y control en obra",
        "icon": <IconSupervision className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Acompañamos al equipo técnico para garantizar que cada etapa cumpla la norma y se eviten reprocesos o sobrecostos",
        "link": "/servicios/supervision-y-control-en-obra"
    },
    {
        "id": 6,
        "name": "Ejecución de apiques y sondeos",
        "icon": <IconApiques className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Hacemos excavaciones que revelan el terreno y permiten decisiones seguras en diseño y construcción",
        "link": "/servicios/ejecucion-de-apiques"
    }
]

export default function ServiciosPage(){
    return(
        <>
            <section className="bg-[var(--color-7)] h-screen relative ">
                <Image 
                    src="/images/servicios-pruebas-materiales-construccion.jpg"
                    alt="Geoensayos, laboratorio de ensayos de materiales de construcción"
                    height={ 1512 }
                    width={ 2513 }
                    className="h-full w-full object-cover lg:object-contain object-top-right"
                />
                <div className="absolute h-full w-full top-0 p-8">
                    <div className="h-full flex flex-col justify-center w-full lg:w-1/3">
                        <p className="text-[#b8b874] text-2xl md:text-3xl/tight tracking-wide font-[800]">Geoensayos</p>
                        <h1 className="text-white text-6xl md:text-7xl/14 mb-4">Servicios</h1>
                        <p className="text-white text-lg md:text-xl font-light mb-8">En Geoensayos llevamos la ciencia a la construcción. Aseguramos que cada obra civil se realice con materiales confiables, experiencia técnica y un acompañamiento cercano en todo el proceso.</p>
                        <BTNWhatsappText 
                            anchor="Contactar"
                        />
                    </div>
                </div>
            </section>
            <section className="px-4 md:px-8">
                <div className="bg-[var(--color-8)] p-8 md:p-16 lg:p-24 rounded-2xl flex flex-col lg:flex-row gap-28 -mt-16 md:-mt-28 relative z-10 shadow-2xl">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#c5c5bc] text-[12vw]/12 md:text-[10vw]/20 lg:text-[5.4vw]/20 mb-8">Ensayos de <span className="text-black block">laboratorio</span></h2>
                        <p className="text-xl">Antes de poner la primera piedra, es clave saber si los materiales realmente cumplen lo que prometen. En nuestro laboratorio realizamos pruebas que ayudan a detectar fallas a tiempo, optimizar recursos y garantizar que las estructuras sean seguras y duraderas.</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        {
                            Laboratorio.map( servicio => (
                                <Link
                                    key={ servicio.id }
                                    href={ servicio.link }
                                    className="border-t-2 border-t-[var(--color-7)] px-1 py-6 hover:pl-5 flex flex-col items-start gap-1 group transition-all"
                                >
                                    { servicio.icon }
                                    <span className="text-3xl text-black font-bold mt-3">{ servicio.name }</span>
                                    <span className="text-xl text-black font-light">{ servicio.description } [ ... ]</span>
                                    <span className="flex flex-row items-center gap-1 transition-all group-hover:ml-1">
                                        <span className="text-xl block group-hover:text-[var(--color-4)]">Saber más</span>
                                        <IconArrow className="h-4 w-auto block fill-black group-hover:fill-[var(--color-4)]" />
                                    </span>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
            </section>
            <section className="bg-[var(--color-9)] px-8 pt-40 lg:pt-60 pb-30 -mt-28">
                <div className="w-full lg:w-1/2 pb-16 lg:pb-32">
                    <h2 className="text-[#93938c] text-[12vw]/12 md:text-[10vw]/20 lg:text-[5.4vw]/20 mb-8">Servicios en <span className="text-black block">Sitio de obra</span></h2>
                    <p className="text-xl font-light">No siempre es suficiente con llevar muestras al laboratorio: hay proyectos que requieren control inmediato, justo en el frente de trabajo. Por eso también ofrecemos servicios directamente en obra, asegurando que las decisiones se tomen a tiempo y con información confiable.</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row">
                    {
                        Obra.map( servicio => (
                            <div key={ servicio.id } className="w-full lg:w-1/3 pb-4 lg:pb-0 [&:nth-child(-n+2)]:lg:border-r-2 [&:nth-child(-n+2)]:lg:border-r-[var(--color-7)] lg:[&:nth-child(n+2)]:pl-16">
                                <Link
                                    href={ servicio.link }
                                    className="pl-1 pr-16 lg:py-4 hover:py-5 flex flex-col items-start gap-1 group transition-all"
                                >
                                    { servicio.icon }
                                    <span className="text-3xl text-black font-bold mt-4">{ servicio.name }</span>
                                    <span className="text-xl text-black font-light">{ servicio.description } [ ... ]</span>
                                    <span className="flex flex-row items-center gap-1 transition-all group-hover:ml-1">
                                        <span className="text-xl block group-hover:text-[var(--color-4)]">Saber más</span>
                                        <IconArrow className="h-4 w-auto block fill-black group-hover:fill-[var(--color-4)]" />
                                    </span>
                                </Link>
                            </div>
                        ) )
                    }
                </div>
            </section>
        </>
    )

}