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
                                href="./documentos/certificado-acreditacion-onac.pdf"
                            >
                                <a target="_blank">Certificado Acreditación ONAC</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-certificates column">
                    {/*<div className="footer-certificate-container">
                        <Image 
                            src="/images/certificado-onac-b.png"
                            alt="Certificado Acreditación ONAC"
                            layout="fixed"
                            height={ 60 }
                            width={ 97 }
                            quality={ 60 }
                        />
                    </div>*/}
                    <div className="footer-certificate-container">
                        <Image 
                            src="/images/certificado-ISO-IEC-b.png"
                            alt="Certificado ISO / IEC"
                            layout="fixed"
                            height={ 90 }
                            width={ 90 }
                            quality={ 60 }
                        />
                    </div>
                    <div className="footer-certificate-container">
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
            </div>
            
        </footer>

    );

}

export default Footer;