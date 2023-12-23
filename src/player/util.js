import { v4 as uuidv4 } from 'uuid';
function chillHop() {
  return [
    
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Baby',
      cover: '../couverture.webp',
      artist: 'DEZ',
      audio: '../Baby.mp3',
      color: ['#205950', '#2ab3bf'],
      id: uuidv4(),
      active: false,
    }
    //ADD MORE HERE
  ];
}

export default chillHop;
