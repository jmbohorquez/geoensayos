import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    return(

        <footer className="footer">
            <div className="footer-inner block-columns has-3-columns">
                <div className="column">
                    <p>http://www.geoensayos.com <br />
                    Todos los derechos reservados { new Date().getFullYear() }</p>
                    <p><strong>Teléfono:</strong> (+571) 310 233 0373 <br />
                    <strong>Dirección:</strong> Calle 73 No. 69P-16. <br />
                    Bogotá D.C. Colombia</p>
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
                                href="./documentos/certificado-iso-9001.pdf"
                            >
                                <a target="_blank">Certificado ISO 9001</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-certificates column">
                    <Image 
                        src="/images/certificado-ISO-IEC-b.png"
                        alt="Certificado ISO / IEC"
                        layout="fixed"
                        height={ 96 }
                        width={ 96 }
                        quality={ 60 }
                    />
                    <Image 
                        src="/images/certificado-ISO-9001-b.png"
                        alt="Certificado ISO 9001"
                        layout="fixed"
                        height={ 42 }
                        width={ 108 }
                        quality={ 60 }
                    />
                </div>
            </div>
            
        </footer>

    );

}

export default Footer;