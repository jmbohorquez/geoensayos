"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { LogoWhite } from "../Icons";
import MenuInfo from "../../content/menu.json";

export const Header = () => {

    const currentPage = usePathname();

    const [ showMenu, setShowMenu ] = useState( false );
    const mostrarOcultarMenu = () => setShowMenu( ! showMenu );

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
                        <LogoWhite />
                    </Link>
                    
                </div>
                <nav className={ `header-main-nav menu ${ showMenu ? 'show' : '' }` }>
                    {
                        MenuInfo.map( item => (
                            item.anchor !== 'Inicio' &&
                                <Link
                                    href={ item.url }
                                    key={ item.id }
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
    );

}