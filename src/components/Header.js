import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/header.css";

export const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/"><h2>JBlog</h2></Link>
            </div>
            <nav className="content">
                <li>
                    <NavLink to="/create" activeClassName="active">
                        Crear tema
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/developer" activeClassName="active">
                        Desarrollador
                    </NavLink>
                </li>
            </nav>
        </header>
    );
}

