
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from '../MobileMenu'; 


function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`Nav ${isMobile ? 'mobile' : ''}`}>
      <Link to="/">
        <h1>Dez</h1>
      </Link>
      {isMobile ? (
        <div className='mobile-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='icon' />
        </div>
      ) : (
        <div className='menu'>
          <Link to="/">Accueil</Link>
          <Link to='/Music'>Musique</Link>
          <Link to='/Decouvrir'>Découvrir</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      )}
      {isMobile && showMenu && (
        <MobileMenu onClose={closeMenu} />
      )}
    </nav>
  );
}

export default Header;