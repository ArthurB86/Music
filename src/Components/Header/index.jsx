import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.scss';

function Header() {
    return (
        <nav className='Nav'>
            <Link to="/">
                <h1>Dez</h1>
            </Link>
            <div className='menu'>
                <Link to="/">Accueil</Link>
                <Link to='/Music'>Musique</Link>             
                <Link to="/About">À Propos</Link>
            </div>
        </nav>
    );
}

export default Header;