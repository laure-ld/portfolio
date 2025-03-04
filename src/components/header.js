import  { Link } from 'react-router-dom';
import React from 'react';
import '../styles/header.scss';

function Header () {
    return (
        <section className="container">
            <p>Portfolio</p>
            <div className='menu'>
                <Link to="/">Mes projets</Link>
                <Link to="/">Mes compétences</Link>
                <Link to="/">Mes informations</Link>
            </div>
        </section>
    )
}

export default Header; 