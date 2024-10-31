import Link from 'next/link'

import MenuInfo from '../content/menu.json'

const Footer = () => {

    return(

        <footer className="footer">
            <div className="footer-inner block-columns has-3-columns">
                <div className="column">
                    <p>http://www.geoensayos.com <br />
                    Todos los derechos reservados { new Date().getFullYear() }</p>
                    <p><strong>Celular:</strong> (+57) 310 305 4570<br />
                    <strong>Email:</strong> direccioncomercial@geoensayos.co <br />
                    <strong>Dirección:</strong> Calle 73 No. 69P-16. <br />
                    Bogotá D.C. Colombia</p>
                </div>
                <div className="column">
                    <h3>Mapa</h3>
                    <ul className="footer-menu">
                        {
                            MenuInfo.map(item=>(
                                <li
                                    key={item.id}
                                >
                                    <Link
                                        href={item.url}
                                    >
                                        {item.anchor}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="column">
                    <h3>Políticas</h3>
                    <ul className="footer-menu">
                        <li>
                            <Link
                                href="/politica-imparcialidad"
                            >
                                Política de imparcialidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/acuerdo-confidencialidad"
                            >
                                Acuerdo de confidencialidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/politica-calidad"
                            >
                                Política calidad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/quejas-reclamos"
                            >
                                Quejas y reclamos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="./documentos/acta-acreditacion-onac-geoensayos-2024.pdf"
                                target="_blank"
                            >
                                Certificado Acreditación ONAC
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>

    )

}

export default Footer