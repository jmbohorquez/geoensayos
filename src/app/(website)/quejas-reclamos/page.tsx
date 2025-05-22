import type { Metadata } from "next";
import Link from "next/link";
import { FormPQR } from "../../../components/forms/FormPQR";

export const metadata: Metadata = {
    title: "Quejas y r6eclamos | Geoensayos",
    description: "Contáctanos y conoce nuestro portafolio de servicios en ingeniería de materiales. Enfocados en el procesamiento de concretos, suelos, agregados y mezclas asfálticas."
}

export default function QuejasReclamosPage(){
    return(
        <>
            <section className="banner banner-legales banner-quejas-reclamos">
                <h1>Quejas y Reclamos</h1>
            </section>
            <main className="legales-main-content">
                <div className="legales-main-inner">
                    <p className="mb-4">Cuando se presente un reclamo, queja o requerimiento deberá acudir a una instancia imparcial y competente, correo electrónico comercial@geoensayos.co o direccionlaboratorio@geoensayos.com</p>
                    <p className="mb-4">Vía telefónica [57] 1 320 5020 o [57] 1 316 850 1923</p>
                    <p className="mb-4">Toda la información del cliente obtenida durante el proceso de quejas y reclamos, requerimientos y demás será manejada de acuerdo con nuestras <Link href="/acuerdo-confidencialidad">políticas de confidencialidad</Link> e <Link href="/politica-imparcialidad">imparcialidad</Link></p>
                    <p className="mb-4"><strong>Gracias</strong></p>
                    <div className="formulario-quejas-reclamos">
                        <FormPQR />
                    </div>
                </div>
            </main>
        </>
    )

}