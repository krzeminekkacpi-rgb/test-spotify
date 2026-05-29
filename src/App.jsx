import { useState, useEffect } from 'react'
import { Home } from './assets/pages/Home';
import { Routes, Route } from 'react-router'
import { Details } from './assets/pages/Details';
import { Playlist } from './assets/pages/Playlist';
import './App.css'

function App() {
  const [playlistIds, setPlaylistIds] = useState(() => {
    try {
    const stored = localStorage.getItem('playlistIds');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
  });

  useEffect(() => {
    localStorage.setItem('playlistIds', JSON.stringify(playlistIds))
  }, [playlistIds])
  const [muzyki, setMuzyki] = useState([{
    name: 'Pif Paf',
    author: 'Figo, Samogony',
    audio: '/audio/Pif-paf.mp3',
    image: 'image/Pif-paf.png',
    color: 'orange',
    id: "550e8400-e29b-41d4-a716-446655440001"
  }, {
    name: 'Darkside',
    author: 'Alan Walker',
    audio: '/audio/Darkside.mp3',
    image: 'image/Darkside.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440002"
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    image: 'image/Titanium.png',
    color: 'dark-grey',
    id: "550e8400-e29b-41d4-a716-446655440003"
  }, {
    name: 'Bring me to life',
    author: 'Evanescence',
    audio: 'audio/Bring-me-to-life.mp3',
    image: 'image/Bring-me-to-life.png',
    color: 'black',
    id: "550e8400-e29b-41d4-a716-446655440004"
  }, {
    name: 'Starships',
    author: 'Nicki Minaj',
    audio: 'audio/Starships.mp3',
    image: 'image/Starships.png',
    color: 'cornflowerblue',
    id: "550e8400-e29b-41d4-a716-446655440005"
  }, {
    name: '4 Pory Roku',
    author: 'QBIK',
    audio: 'audio/4-Pory-Roku.mp3',
    image: 'image/4-Pory-Roku.png',
    color: 'darklategrey',
    id: "550e8400-e29b-41d4-a716-446655440006"
  }, {
    name: 'Halo tu londyn',
    author: 'WEEKEND',
    audio: 'audio/Halo-tu-londyn.mp3',
    image: 'image/Halo-tu-londyn.png',
    color: 'Burlywood',
    id: "550e8400-e29b-41d4-a716-446655440007"
  }, {
    name: 'Magic Symphony',
    author: 'C-BooL',
    audio: 'audio/Magic-Symphony.mp3',
    image: 'image/Magic-Symphony.png',
    color: 'blueviolet',
    id: "550e8400-e29b-41d4-a716-446655440008"
  }, {
    name: 'Shape of you',
    author: 'Ed Sheeran',
    audio: 'audio/Shape-of-you.mp3',
    image: 'image/Shape-of-you.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440009"
  }, {
    name: 'Saudi',
    author: 'Tax Free, Malik Montana, Kazior, TYK',
    audio: 'audio/Saudi.mp3',
    image: 'wykonawcy/Tax-Free.jpg',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440010"
  }, {
    name: 'Summer',
    author: 'Calvin Harris',
    audio: 'audio/Summer.mp3',
    image: 'image/Summer.png',
    color: 'forestgreen',
    id: "550e8400-e29b-41d4-a716-446655440011"
  }, {
    name: 'Masz Stajla',
    author: 'Trzeci Wymiar',
    audio: 'audio/Dla-Mnie-Masz-Stajla.mp3',
    image: 'image/Dla-Mnie-Masz-Stajla.png',
    color: 'darkblue',
    id: "550e8400-e29b-41d4-a716-446655440012"
  }, {
    name: 'Gejowski Nurek',
    author: 'GAY RECORDS',
    audio: 'audio/Gejowski-Nurek.mp3',
    image: 'image/Gejowski-Nurek.jpg',
    color: 'cornflowerblue',
    id: "550e8400-e29b-41d4-a716-446655440013"
  }, {
    name: 'Harnaś-Ice-Tea',
    author: 'Gawryle',
    audio: 'audio/Harnaś-Ice-Tea.mp3',
    image: 'image/Harnaś-Ice-Tea.png',
    color: 'blue',
    id: "550e8400-e29b-41d4-a716-446655440014"
  }, {
    name: 'I Need Your Love',
    author: 'Calvin Harris',
    audio: 'audio/I-Need-Your-Love.mp3',
    image: 'image/I-Need-Your-Love.png',
    color: 'pink',
    id: "550e8400-e29b-41d4-a716-446655440015"
  }, {
     name: 'Thunder',
    author: 'Imagine Dragons',
    audio: 'audio/Thunder.mp3',
    image: 'image/Thunder.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440016"
  }, {
     name: 'Human',
    author: 'Rag n Bone Man',
    audio: 'audio/Human.mp3',
    image: 'image/Human.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440017"
  }, {
     name: 'Waiting For Love',
    author: 'Avicii',
    audio: 'audio/Waiting-For-Love.mp3',
    image: 'image/Waiting-For-Love.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440018"
  }, {
    name: 'Ghost Town',
    author: 'Adam Lambert',
    audio: 'audio/Ghost-Town.mp3',
    image: 'image/Ghost-Town.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440019"
  }, {
    name: 'Stereo Love',
    author: 'Edward Maya, Vika Jigulina',
    audio: 'audio/Stereo-Love.mp3',
    image: 'image/Stereo-Love.png',
    color: 'magenta',
    id: "550e8400-e29b-41d4-a716-446655440020"
  }, {
    name: 'Cant Hold Us',
    author: 'Macklemore, Ryan Lewis',
    audio: 'audio/Cant-Hold-Us.mp3',
    image: 'image/Cant-Hold-Us.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440021"
  }, {
    name: 'Dark Horse',
    author: 'Katy Perry, Juicy J',
    audio: 'audio/Dark-Horse.mp3',
    image: 'image/Dark-Horse.png',
    color: 'cornflowerblue',
    id: "550e8400-e29b-41d4-a716-446655440022"
  }, {
    name: 'Ignite',
    author: 'Alan Walker',
    audio: 'audio/Ignite.mp3',
    image: 'image/Ignite.png',
    color: 'grey',
    id: "550e8400-e29b-41d4-a716-446655440023"
  }, {
    name: 'Lambo',
    author: 'QBIK',
    audio: 'audio/Lambo.mp3',
    image: 'image/Lambo.png',
    color: 'darkblue',
    id: "550e8400-e29b-41d4-a716-446655440024"
  }, {
    name: 'Love The Way',
    author: 'Eminem',
    audio: 'audio/Love-The-Way.mp3',
    image: 'image/Love-The-Way.png',
    color: 'darklategrey',
    id: "550e8400-e29b-41d4-a716-446655440025"
  }, {
    name: 'Never Go Away',
    author: 'C-BooL',
    audio: 'audio/Never-Go-Away.mp3',
    image: 'image/Never-Go-Away.png',
    color: 'green',
    id: "550e8400-e29b-41d4-a716-446655440026"
  }, {
    name: 'Roar',
    author: 'Katy Perry',
    audio: 'audio/Roar.mp3',
    image: 'image/Roar.png',
    color: 'green',
    id: "550e8400-e29b-41d4-a716-446655440027"
  }, {
    name: 'Take Me To Church',
    author: 'Hozier',
    audio: 'audio/Take-Me-To-Church.mp3',
    image: 'image/Take-Me-To-Church.png',
    color: 'darklategrey',
    id: "550e8400-e29b-41d4-a716-446655440028"
  }, {
   name: 'The First Time',
    author: 'Damiano David',
    audio: 'audio/The-First-Time.mp3',
    image: 'image/The-First-Time.png',
    color: 'black',
    id: "550e8400-e29b-41d4-a716-446655440029"
  }, {
    name: 'Wonderland',
    author: 'C-BooL',
    audio: 'audio/Wonderland.mp3',
    image: 'image/Wonderland.png',
    color: 'darklategrey',
    id: "550e8400-e29b-41d4-a716-446655440030"
  }]);

  const [wykonawcy, setWykonawcy] = useState([{
    author: 'Mata',
    role: 'Wykonawca',
    image: 'wykonawcy/Mata.jpg',
    id: "560e8400-e29b-41d4-a716-446655440001"
  }, {
    author: 'Sobel',
    role: 'Wykonawca',
    image: 'wykonawcy/Sobel.jpg',
    id: "560e8400-e29b-41d4-a716-446655440002"
  }, {
    author: 'Sanah',
    role: 'Wykonawca',
    image: 'wykonawcy/Sanah.jpg',
    id: "560e8400-e29b-41d4-a716-446655440003"
  }, {
    author: 'Kizo',
    role: 'Wykonawca',
    image: 'wykonawcy/Kizo.jpg',
    id: "560e8400-e29b-41d4-a716-446655440004"
  }, {
    author: 'Sentino',
    role: 'Wykonawca',
    image: 'wykonawcy/Sentino.jpg',
    id: "560e8400-e29b-41d4-a716-446655440005"
  }, {
    author: 'Ed Sheeran',
    role: 'Wykonawca',
    image: 'wykonawcy/Ed-Sheeran.jpg',
    id: "560e8400-e29b-41d4-a716-446655440006"
  }, {
    author: 'Dawid Podsiadło',
    role: 'Wykonawca',
    image: 'wykonawcy/Dawid-Podsiadło.jpg',
    id: "560e8400-e29b-41d4-a716-446655440007"
  }, {
    author: 'Tax Free',
    role: 'Wykonawca',
    image: 'wykonawcy/Tax-Free.jpg',
    id: "560e8400-e29b-41d4-a716-446655440008"
  }]);
  const [radio, setRadio] = useState([{
    link: 'http://mp3.polskieradio.pl:8900/;',
    image: 'radio-img/Polskie-radio.png',
    name: 'Polskie radio jedynka',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://mp3.polskieradio.pl:8080/;',
    image: 'radio-img/Radio-24.png',
    name: 'Polskie radio 24',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://mp3.polskieradio.pl:8902/;',
    image: 'radio-img/Polskie-radio.png',
    name: 'Polskie radio dwójka',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'https://sc1.radioheaven.pl:8000/;stream.mp3',
    image: 'radio-img/Radio-Heaven.png',
    name: 'Radio Heaven',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://zet090-02.cdn.eurozet.pl:8404/',
    image: 'radio-img/Radio-Zet.png',
    name: 'Radio Zet',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
     link: 'http://stream.prw.pl:8000/prwmp3',
    image: 'radio-img/Radio-Wroclaw.png',
    name: 'Radio Wrocław',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://audio.radio.opole.pl:8035/1',
    image: 'radio-img/Radio-Opole.png',
    name: 'Radio Opole',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://stream4.nadaje.com:11986/prs',
    image: 'radio-img/Radio-Szczecin.png',
    name: 'Radio Szczecin',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://stream2.nadaje.com:11140/rdc',
    image: 'radio-img/Radio-Warszawa.png',
    name: 'Radio Warszawa',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://ice1.somafm.com/dronezone-128-mp3',
    image: 'radio-img/Radio-Drone-Zone.png',
    name: 'Radio SomaFM Drone Zone',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://amp.cesnet.cz:8000/cro-jazz.flac',
    image: 'radio-img/Czeskie-Radio.png',
    name: 'Czeskie Radio',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3',
    image: 'radio-img/Radio-Francja.png',
    name: 'Radio Francja',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'https://rs203-krk.rmfstream.pl/rmf_fm',
    image: 'radio-img/Radio-RMF-FM.png',
    name: 'Radio RMF FM',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'https://stream0.wfmu.org/freeform-128k',
    image: 'radio-img/Radio-USA.png',
    name: 'Radio USA',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }, {
    link: 'https://stream.radioparadise.com/mp3-128',
    image: 'radio-img/Radio-USA.png',
    name: 'Radio Paradise Main USA',
    id: '570e8400-e29b-41d4-a716-446655440001'
  }]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy} radio={radio} setRadio={setRadio}/>}></Route>
        <Route path="details" element={<Details muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy} setPlaylistIds={setPlaylistIds} playlistIds={playlistIds}/>}></Route>
        <Route path="playlist" element={<Playlist playlistIds={playlistIds} setPlaylistIds={setPlaylistIds} muzyki={muzyki}></Playlist>}></Route>
      </Routes>
    </>
  )
}

export default App
