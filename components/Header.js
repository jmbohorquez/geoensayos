import { useState, useEffect } from 'react'
import Link from 'next/link'

import {LogoHeader} from './Icons'

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
                        <LogoHeader />
                    </Link>
                    
                </div>
                <nav className={ `header-main-nav menu ${ showMenu ? 'show' : '' }` }>
                    {
                        MenuInfo.map( item => (
                            <Link
                                href={item.url}
                                key={item.id}
                                className="menu-item"
                            >
                                {item.anchor}
                            </Link>
                        ) )
                    }
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