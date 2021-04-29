import Link from 'next/link';
import Logo from '../public/images/logo.svg';

const Header = () => {

    return(
        <header className="header">
            <div className="header-inner">
                <div className="header-logo-container">
                    <Link
                        href="/"
                    >
                        <a><Logo /></a>
                    </Link>
                    
                </div>
                <nav className="header-main-nav">
                    <ul className="menu">
                        <li className="menu-item">
                            <Link
                                href="/"
                            >
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                href="/nosotros"
                            >
                                <a>Nosotros</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                href="/servicios"
                            >
                                <a>Servicios</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link
                                href="/contacto"
                            >
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

}

export default Header;