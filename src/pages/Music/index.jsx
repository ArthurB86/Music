import React from 'react';
import '../../style/index.scss';
import Album from '../../assets/album.webp';
import Spotify from '../../assets/Spotify.png';
import Youtube from '../../assets/Youtube.webp';
import Deezer from '../../assets/Deezer.svg';
import Itunes from '../../assets/Itunes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

function Music() {
  const lienSpotify = 'https://open.spotify.com/intl-fr/album/6rzDO1vZMEsQSiliBLueow';
  const lienDeezer = 'https://www.deezer.com/en/album/252797352';
  const lienYoutube = 'https://www.youtube.com/';
  const lienItunes = 'https://music.apple.com/fr/album/les-chemins-des-possibles-ep/1581566593';

  const openLink = (link) => {
    if (/Android/i.test(navigator.userAgent)) {
      // Si Android, tenter d'ouvrir l'application spécifique
      if (link === lienSpotify) {
        window.location.href = 'intent://spotify/#Intent;end';
      } else if (link === lienDeezer) {
        window.location.href = 'deezer://';
      } else if (link === lienYoutube) {
        window.location.href = 'vnd.youtube://';
      } else {
        // Fallback vers l'ouverture du lien standard si l'application n'est pas détectée
        window.open(link, '_blank');
      }
    } else if (/iPhone/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent)) {
      // Si iPhone ou iPad, tenter d'ouvrir l'application spécifique
      if (link === lienSpotify) {
        window.location.href = 'spotify:';
      } else if (link === lienDeezer) {
        window.location.href = 'deezer:';
      } else if (link === lienYoutube) {
        window.location.href = 'youtube:';
      } else {
        // Fallback vers l'ouverture du lien standard si l'application n'est pas détectée
        window.open(link, '_blank');
      }
    } else {
      // Pour d'autres systèmes d'exploitation, ouvrir le lien standard dans le navigateur
      window.open(link, '_blank');
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='wrapper'>
      <div className='music'>
        <div className='background'>
          <div className='album-photo'>
            <img src={Album} alt="Couverture de l'album" />
          </div>
          <div className='titre-album'>
            <h1>DEZ</h1>
            <h2> LES CHEMINS DES POSSIBLES</h2>
            <p>Nouvel album disponible :</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCircleDown} className='icon' onClick={scrollToBottom} />
          </div>
        </div>
        <ul className='lien-music'>
          <li className='lien'>
            <img src={Spotify} alt="logo Spotify" className='Logo' />
            <button className='btn-1 custom-btn' onClick={() => openLink(lienSpotify)}>
              Écouter
            </button>
          </li>
          <li className='lien'>
            <img src={Youtube} alt="logo Spotify" className='Logo' />
            <button className='btn-1 custom-btn' onClick={() => openLink(lienYoutube)}>
              Écouter
            </button>
          </li>
          <li className='lien'>
            <img src={Deezer} alt="logo Deezer" className='Logo' />
            <button className='btn-1 custom-btn' onClick={() => openLink(lienDeezer)}>
              Écouter
            </button>
          </li>
          <li className='lien'>
            <img src={Itunes} alt="logo Spotify" className='Logo' />
            <button className='btn-1 custom-btn' onClick={() => openLink(lienItunes)}>
              Écouter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Music;