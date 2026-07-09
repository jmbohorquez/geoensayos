import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { IconCheck } from "../../components/Icons";
import LogoWhite from "../../../public/images/logo-white.svg"

import { HomeImageSlider } from "../../components/HomeImageSlider";
import { BTN } from "../../components/BotonComponent";
import { Certificaciones } from "../../components/Certificaciones";
import { BTNWhatsappText } from "../../components/cta/BTNWhatsappText";

import IconConcreto from "../../../public/images/IconConcreto.svg";
import IconAsfalto from "../../../public/images/IconAsfalto.svg";
import IconSuelos from "../../../public/images/IconSuelos.svg";
import IconApiques from "../../../public/images/IconApiques.svg";
import IconLaboratorio from "../../../public/images/IconLaboratorio.svg";
import IconSupervision from "../../../public/images/IconSupervision.svg";
import IconArrow from "../../../public/images/icon-link-arrow.svg";

export const metadata: Metadata = {
    title: "Laboratorio de suelos, concretos y mezclas asfálticas | Geoensayos",
    description: "Ofrecemos ensayos de laboratorio aplicados a materiales del sector construcción a través de servicios de supervisión, control al plan de inspección y ensayos, laboratorios en obra."
}

const servicios = [
    {
        "id": 1,
        "name": "Concretos",
        "icon": <IconConcreto className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Verificamos que tu mezcla de concreto tenga la resistencia y durabilidad que la obra necesita.",
        "link": "/servicios/concretos"
    },
    {
        "id": 2,
        "name": "Suelos y agregados",
        "icon": <IconSuelos className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Analizamos la capacidad y estabilidad del terreno y de los materiales que sostienen la construcción.",
        "link": "/servicios/suelos-y-agregados"
    },
    {
        "id": 3,
        "name": "Mezclas asfálticas",
        "icon": <IconAsfalto className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Comprobamos que los pavimentos sean resistentes, duraderos y adecuados para el tránsito y el clima.",
        "link": "/servicios/mezclas-asfalticas"
    },
    {
        "id": 4,
        "name": "Montaje de laboratorio en sitio",
        "icon": <IconLaboratorio className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Instalamos equipos de laboratorio móviles directamente en la obra para ensayar materiales sin perder tiempo en traslados.",
        "link": "/servicios/laboratorio-en-sitio"
    },
    {
        "id": 5,
        "name": "Supervisión y control en obra",
        "icon": <IconSupervision className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Acompañamos al equipo técnico para garantizar que cada etapa cumpla la norma y se eviten reprocesos o sobrecostos.",
        "link": "/servicios/supervision-y-control-en-obra"
    },
    {
        "id": 6,
        "name": "Ejecución de apiques y sondeos",
        "icon": <IconApiques className="h-16 fill-[var(--color-7)] group-hover:fill-[var(--color-4)] transition-colors" />,
        "description": "Hacemos excavaciones que revelan el terreno y permiten decisiones seguras en diseño y construcción.",
        "link": "/servicios/ejecucion-de-apiques"
    }
]

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
                            <h1 className="text-white text-xl/6 md:text-4xl font-bold mb-4">¿Vas a construir una obra civil y no estás seguro si los materiales cumplen con la norma?</h1>
                            <p className="text-white text-sm md:text-xl font-light mb-2 md:mb-4">En Geoensayos te ayudamos a evitar errores costosos haciendo pruebas de laboratorio a los materiales antes de que comience la obra.</p>
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
                <div className="bg-[#e9e9df] flex flex-col lg:flex-row gap-16 px-8 py-24">
                    <div className="w-full lg:w-2/6">
                        <h2 className="text-[#93938c] text-[9vw] lg:text-[3.8vw]/16 mb-4">Nuestros <span className="text-black">Servicios</span></h2>
                        <p className="text-2xl font-light mb-4">Aseguramos la calidad de tus materiales y el control técnico en cada etapa de tu proyecto. Descubre cómo podemos ayudarte.</p>
                        <Certificaciones />
                    </div>
                    <div className="flex-full lg:w-4/6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {
                            servicios.map( servicio => (
                                <Link
                                    href={ servicio.link } 
                                    key={ servicio.id } 
                                    className="w-full bg-white p-8 rounded-md shadow-lg group transition-all hover:shadow-xl hover:-translate-y-2"
                                >
                                    { servicio.icon }
                                    <h3 className="text-[#333] text-3xl font-bold my-4">{ servicio.name }</h3>
                                    <p className="text-black text-lg font-light mb-8">{ servicio.description }</p>
                                    <span className="flex flex-row items-center gap-1 transition-all group-hover:ml-1">
                                        <span className="text-lg block group-hover:text-(--color-4)">Saber más</span>
                                        <IconArrow className="h-3 w-auto block fill-black group-hover:fill-(--color-4)" />
                                    </span>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
                <div className="bg-[#aa7b54] px-8 pb-16 relative before:bg-[#e9e9df] before:top-0 before:left-0 before:h-[16%] before:w-full before:absolute before:z-0">
                    <div className="bg-[#6f6f3a] rounded-2xl overflow-hidden aspect-9/16 md:aspect-auto lg:aspect-video relative shadow-xl mb-16">
                        <Image 
                            src="/images/inicio-quienes-somos-bg.jpg"
                            alt="Geoensayos, un laboratorio de ingeniería de materiales"
                            height={ 1200 }
                            width={ 800 }
                            className='object-fit-cover mix-blend-multiply'
                        />
                        <div className="absolute top-0 h-full w-full">
                            <div className="h-full w-full lg:w-1/2 p-8 lg:p-0 flex flex-col md:flex-row items-center gap-x-8 mx-auto">
                                <div className="w-full md:w-1/3">
                                    <LogoWhite className="h-24 md:h-auto mx-auto md-mx-0 mb-4 md:mb-0" />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h2 className="text-white text-[12vw] md:text-[6vw] text-center md:text-left mb-4">Nosotros</h2>
                                    <p className="text-white text-sm md:text-xl font-light">GEO ENSAYOS SAS es un laboratorio de ingeniería de materiales enfocado en el procesamiento de concretos, suelos, agregados y mezclas asfálticas con altos estándares de calidad, y conceptos técnicos de valor añadido…</p>
                                    <BTN 
                                        url='/nosotros'
                                        anchor='Saber Más'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex flex-col items-center">
                        <p className="text-white text-center text-4xl">Evita sobrecostos y retrasos:</p>
                        <p className="text-white text-center text-3xl mb-8">asegura la calidad de tu obra desde el primer día.</p>
                        <BTNWhatsappText anchor={"Hablemos"} />
                    </div>
                </div>
            </main>
        </>
    )
}