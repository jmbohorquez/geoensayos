import Link from "next/link";

import MenuInfo from "../../content/menu.json";
import Logo from "../../../public/images/logo-white.svg";

export const Footer = () => {

    return(
        <footer className="bg-[#24240b] p-8 flex flex-col md:flex-row gap-8">
            <div className='w-full md:w-1/4'>
                <Logo className="h-16 mb-4" />
                <p className="text-white text-xs font-light">http://www.geoensayos.com <br />
                Todos los derechos reservados { new Date().getFullYear() }</p>
            </div>
            <div className="w-full md:w-1/4">
                <h4 className="text-white text-lg mb-2">Contáctanos</h4>
                <p className="text-white text-xs/6 font-light"><strong>Celular:</strong> (+57) 310 305 4570<br />
                <strong>Email:</strong> direccioncomercial@geoensayos.co <br />
                <strong>Dirección:</strong> Calle 73 No. 69P-16. <br />
                Bogotá D.C. Colombia</p>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className="text-white text-lg mb-2">Mapa</h3>
                <ul className="text-white text-xs font-light">
                    {
                        MenuInfo.map( item=>(
                            <li
                                key={ item.id }
                                className="pb-2"
                            >
                                <Link
                                    href={ item.url }
                                    className="text-[var(--color-4)] hover:underline"
                                >
                                    { item.anchor }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className="text-white text-lg mb-2">Políticas</h3>
                <ul className="text-white text-xs font-light">
                    <li className="pb-2">
                        <Link
                            href="/politica-imparcialidad"
                            className="text-[var(--color-4)] hover:underline"
                        >
                            Política de imparcialidad
                        </Link>
                    </li>
                    <li className="pb-2">
                        <Link
                            href="/acuerdo-confidencialidad"
                            className="text-[var(--color-4)] hover:underline"
                        >
                            Acuerdo de confidencialidad
                        </Link>
                    </li>
                    <li className="pb-2">
                        <Link
                            href="/politica-calidad"
                            className="text-[var(--color-4)] hover:underline"
                        >
                            Política calidad
                        </Link>
                    </li>
                    <li className="pb-2">
                        <Link
                            href="/quejas-reclamos"
                            className="text-[var(--color-4)] hover:underline"
                        >
                            Quejas y reclamos
                        </Link>
                    </li>
                    <li className="pb-2">
                        <Link
                            href="./documentos/acreditacion-onac-2025.pdf"
                            target="_blank"
                            className="text-[var(--color-4)] hover:underline"
                        >
                            Certificado Acreditación ONAC
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );

}