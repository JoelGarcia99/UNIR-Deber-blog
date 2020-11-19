import React from 'react';
import "../css/header.css";

export const Header = ({location}) => {

    const _location = location && location.pathname;

    return (
        <header>
            <div className="logo">
                <a href="/"><h2>JBlog</h2></a>
            </div>
            <nav className="content">
                <li>
                    <a
                        href="/create" 
                        className={ (_location === "/create")? "active": ""}
                    >
                        Crear tema
                    </a>
                </li>
            </nav>
        </header>
    );
}

