import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../public/images/logo.svg'

import MenuInfo from '../content/menu.json'

const Header = ({ currentPage }) => {

    const [ showMenu, setShowMenu ] = useState( false )

    const mostrarOcultarMenu = () => setShowMenu( ! showMenu )

    useEffect( () => {
        
        setShowMenu( false )

    }, [ currentPage ] )
    
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
                        {
                            MenuInfo.map( item => (
                                <li 
                                    key={item.id}
                                    className="menu-item"
                                >
                                    <Link
                                        href={item.url}
                                    >
                                        <a>{item.anchor}</a>
                                    </Link>
                                </li>
                            ) )
                        }
                    </ul>
                </nav>
                <div className={ `menu-boton ${ showMenu ? 'cerrar' : '' }` } onClick={ () => mostrarOcultarMenu() } >
                    <span className="bot-line line-1"></span>
                    <span className="bot-line line-2"></span>
                    <span className="bot-line line-3"></span>
                </div>
            </div>
        </header>
    )

}

export default Header