import React, { useState, useRef } from 'react';

// Importation des styles
import '../../player/styles/app.scss';

// Importation des données (remplacer 'util' par le chemin correct)
import data from '../../player/util';

// Importation des composants
import Song from '../../player/components/Song';
import Player from '../../player/components/Player';

function Discover() {
  // Référence à l'élément audio pour le contrôle
  const audioRef = useRef(null);

  // États pour gérer les chansons, la chanson actuelle, et l'état de lecture
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // États pour gérer la répétition de la playlist, l'état de la chanson, et les boutons de lecture
  const [isPlaylistRepeat, setIsPlaylistRepeat] = useState(false);
  const [songState, setSongState] = useState({
    currentTime: 0,
    duration: 0,
    seekbarPercentage: 0,
  });
  const [buttonStatus, setButtonStatus] = useState({
    next: true,
    previous: false,
  });

  // Fonction pour mettre à jour le temps de la chanson
  const handleSongTimer = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const percentage = Math.round((100 * currentTime) / duration);

    // Mise à jour de l'état de la chanson
    setSongState({
      ...songState,
      currentTime: currentTime,
      duration: duration,
      seekbarPercentage: percentage,
    });
  };

  // Fonction pour changer de chanson en fonction de la direction (next ou previous)
  const handleChangeSong = (direction) => {
    let index = songs.findIndex((song) => song.id === currentSong.id);

    switch (direction) {
      case 'next':
        if (isPlaylistRepeat) {
          setCurrentSong(index === songs.length - 1 ? songs[0] : songs[index + 1]);
          setButtonStatus({ next: true, previous: true });
        } else {
          setCurrentSong(index === songs.length - 1 ? currentSong : songs[index + 1]);
          setButtonStatus({ next: true, previous: true });
        }
        break;
      case 'previous':
        if (isPlaylistRepeat) {
          setCurrentSong(index === 0 ? songs[songs.length - 1] : songs[index - 1]);
          setButtonStatus({ next: true, previous: true });
        } else {
          setCurrentSong(index === 0 ? currentSong : songs[index - 1]);
          setButtonStatus({ next: true, previous: true });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={`'library-active' : ''}`}>
      {/* Composant pour afficher les détails de la chanson en cours */}
      <Song currentSong={currentSong} />

      {/* Composant pour afficher le lecteur audio avec les contrôles */}
      <Player
        audioRef={audioRef}
        songs={songs}
        currentSong={currentSong}
        songState={songState}
        setSongState={setSongState}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextSong={() => handleChangeSong('next')}
        prevSong={() => handleChangeSong('previous')}
        buttonStatus={buttonStatus}
        isPlaylistRepeat={isPlaylistRepeat}
        setIsPlaylistRepeat={setIsPlaylistRepeat}
      />

      {/* Balise audio pour jouer les chansons */}
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleSongTimer}
        onLoadedMetadata={handleSongTimer}
        onEnded={() => handleChangeSong('next')}
      ></audio>
    </div>
  );
}

export default Discover;