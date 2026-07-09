import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { ContactPanel } from '../../../components/ContactPanel';
import { Certificaciones } from '../../../components/Certificaciones';
import { BTN } from '../../../components/BotonComponent';

export const metadata: Metadata = {
    title: "Quienes somos | Geoensayos",
    description: "Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico."
}

export default function NosotrosPage(){
    return(
        <>
            <section className="banner banner-nosotros banner-full">
                <Image 
                    src="/images/nosotros-banner-gb.jpg"
                    alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                    fill
                    className="banner-nosotros-bg-image object-fit-cover"
                    priority
                />
                <div className="banner-text-container center-content">
                    <div className="banner-text-container-inner">
                        <h1>Nosotros</h1>
                        <p>En GEO ENSAYOS SAS contamos con acreditación ONAC, vigente a la fecha, con código de acreditación 20-LAB-013, bajo la norma ISO/IEC 17025:2017</p>
                        <ContactPanel />
                    </div>
                </div>
            </section>
            <main className="nosotros-main-content">
                <div className="w-full md:w-10/12 lg:w-8/10 mx-auto flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2 relative z-50">
                        <Image 
                            src="/images/nosotros-main-content.jpg"
                            alt="Geoensayos, confiables y eficaces acreditados y certificados"
                            height={ 635 }
                            width={ 488 }
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-8 pt-8 lg:pt-48">
                        <p className="mb-4">Somos especialista en ingeniería de materiales  y estamos enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas, con valor agregado técnico.</p>
                        <p className="mb-4">Geo Ensayos S.A.S cuenta con <Link href="./documentos/acreditacion-onac-2025.pdf" target="_blank">acreditación</Link> de competencia técnica vigente a la fecha, otorgada por el Organismo Nacional de Acreditación de Colombia (ONAC) en el certificado número 20-LAB-013 bajo los requisitos de la norma NTC ISO/IEC-17025:2017. El alcance de acreditación incluye ensayos realizados bajo normas técnicas reconocidas. Así mismo, cuenta con la certificación de sus procesos bajo las normas ISO 9001:2015, enfocando su Sistema Integrado de Gestión a la mejora continua y la satisfacción del cliente.</p>
                        <Certificaciones />
                    </div>
                </div>
            </main>
            <section className="nosotros-antecedentes-container banner-full">
                <Image 
                    src="/images/nosotros-antecedentes-bg.jpg"
                    alt="Geoensayos, aliado para sus clientes en el control de calidad"
                    fill
                    className="object-fit-cover"
                />

                <div className="nosotros-antecedentes-content-inner">
                    <div className="nosotros-antecedentes-text-container">
                        <p>Desde sus inicios ha sido un aliado para sus clientes en el control de calidad, supervisión técnica y caracterización de materiales, observando todos los estándares de calidad, eficiencia, y cumplimiento.</p>
                        <BTN 
                            url='/servicios'
                            anchor='Ver nuestros servicios'
                        />
                    </div>
                </div>
            </section>
        </>
    )

}