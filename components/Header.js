import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../public/images/logo.svg';

const Header = ({ currentPage }) => {

    const [ showMenu, setShowMenu ] = useState( false )

    const mostrarOcultarMenu = () => {

        if( showMenu ) {
            setShowMenu( false )
        }
        else{
            setShowMenu( true )
        }

    }

    useEffect( () => {
        
        setShowMenu( false )

    }, [ currentPage ] );
    
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
                <nav className={ `header-main-nav ${ showMenu ? 'show' : '' }` }>
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
                <div className={ `menu-boton ${ showMenu ? 'cerrar' : '' }` } onClick={ () => mostrarOcultarMenu() } >
                    <span className="bot-line line-1"></span>
                    <span className="bot-line line-2"></span>
                    <span className="bot-line line-3"></span>
                </div>
            </div>
        </header>
    );

}

export default Header;