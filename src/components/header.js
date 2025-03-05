import  { Link } from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/header.scss';

function Header () {
    const [isOpen, setIsOpen] = useState(false);
    function handleOnClick() {
        setIsOpen(!isOpen);
    }

    return (
        <section className="container">
            <p>Portfolio</p>
            <button aria-expanded={isOpen} aria-controls="menu" onClick={handleOnClick} className="burger-btn">
                    <svg  className='line' stroke="black" fill="none" strokeLinecap="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2"/>
                        <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
                        <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2"/>
                    </svg>
            </button>
            <nav id="menu" className={`menu ${isOpen ? 'open' : ''}`} >
                <ul>
                    <li><Link to="/">Mes projets</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header; 