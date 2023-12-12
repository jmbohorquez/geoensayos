import Link from 'next/link'

import MenuInfo from '../content/menu.json'

const Footer = () => {

    return(

        <footer className="footer">
            <div className="footer-inner block-columns has-3-columns">
                <div className="column">
                    <p>http://www.geoensayos.com <br />
                    Todos los derechos reservados { new Date().getFullYear() }</p>
                    <p><strong>Celular:</strong> (+57) 317 575 4994 <br />
                    <strong>Teléfono:</strong> (+57) 1 - 320 5020 <br />
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
                                        <a>{item.anchor}</a>
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
                                <a>Política de imparcialidad</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/acuerdo-confidencialidad"
                            >
                                <a>Acuerdo de confidencialidad</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/politica-calidad"
                            >
                                <a>Política calidad</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/quejas-reclamos"
                            >
                                <a>Quejas y reclamos</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="./documentos/certificado-iso-9001.pdf"
                            >
                                <a target="_blank">Certificado ISO 9001</a>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="./documentos/acreditacion-onac-2023.pdf"
                            >
                                <a target="_blank">Certificado Acreditación ONAC</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>

    )

}

export default Footer