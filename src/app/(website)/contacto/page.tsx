import type { Metadata } from "next";
import Image from "next/image";

import {IconPhone, IconTelephone, IconLocation} from "../../../components/Icons";
import { ContactForm } from "../../../components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contáctanos | Geoensayos",
    description: "Contáctanos y conoce nuestro portafolio de servicios en ingeniería de materiales. Enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas."
}

export default function ContactoPage(){
    return(
        <>
            <main className="contacto-main-container">
                <div className="contacto-main-image-bg">
                    <Image 
                        src="/images/contacto-banner-bg.jpg"
                        alt="Geoensayos, laboratorio de ensayos, altamente productivos"
                        height={ 1027 }
                        width={ 1920 }
                        className="banner-servicios-bg-image mix-blend-multiply"
                    />
                </div>
                
                <div className="contacto-main-inner">
                    <div className="contacto-content">
                        <h1 className="text-white text-4xl">Contacto</h1>
                        <div className="contacto-medios-wrap">
                            <div className="contacto-dir contacto-item svg-white">
                                <IconLocation />
                                <p className="text-white"><strong>Dirección</strong><br />
                                Calle 73 # 69P - 16, Bogotá D.C.</p>
                            </div>
                            <div className="contacto-moviles contacto-item svg-white">
                                <IconPhone />
                                <p className="text-white"><strong>Celular</strong> <br />
                                (+57) 310 305 4570</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 pb-16">
                        <ContactForm />
                    </div>
                </div>
            </main>
        </>
    )

}