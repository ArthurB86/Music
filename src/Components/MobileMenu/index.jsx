import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ onClose }) => {

  return (
    <div className="mobile-menu">
      <div className="menu-content">
        <Link to="/" onClick={onClose}>
          Accueil
        </Link>
        <Link to="/Music" onClick={onClose}>
          Musique
        </Link>
        <Link to="/Decouvrir" onClick={onClose}>
          Découvrir
        </Link>
        <Link to="/Contact" onClick={onClose}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
