import React from 'react';
import "../css/header.css";

export const Header = ({location}) => {

    const _location = location && location.pathname;
    const url = "https://joelgarcia99.github.io/UNIR-Deber-blog";

    return (
        <header>
            <div className="logo">
                <a href={url+"/"}><h2>JBlog</h2></a>
            </div>
            <nav className="content">
                <li>
                    <a
                        href={url+"/create"} 
                        className={ (_location === "/create")? "active": ""}
                    >
                        Crear tema
                    </a>
                </li>
            </nav>
        </header>
    );
}

