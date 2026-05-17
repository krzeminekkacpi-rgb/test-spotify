import { useState } from 'react'
import { Home } from './assets/pages/Home';
import { Routes, Route } from 'react-router'
import { Details } from './assets/pages/Details';
import { Playlist } from './assets/pages/Playlist';
import './App.css'

function App() {
  const [muzyki, setMuzyki] = useState([{
    name: 'Pif Paf',
    author: 'Figo, Samogony',
    audio: '/audio/Pif-paf.mp3',
    image: 'image/Pif-paf.png',
    color: 'orange',
    id: crypto.randomUUID()
  }, {
    name: 'Darkside',
    author: 'Alan Walker',
    audio: '/audio/Darkside.mp3',
    image: 'image/Darkside.png',
    color: 'grey',
    id: crypto.randomUUID()
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    image: 'image/Titanium.png',
    color: 'dark-grey',
    id: crypto.randomUUID()
  }, {
    name: 'Bring me to life',
    author: 'Evanescence',
    audio: 'audio/Bring-me-to-life.mp3',
    image: 'image/Bring-me-to-life.png',
    color: 'black',
    id: crypto.randomUUID()
  }, {
    name: 'Starships',
    author: 'Nicki Minaj',
    audio: 'audio/Starships.mp3',
    image: 'image/Starships.png',
    color: 'cornflowerblue',
    id: crypto.randomUUID()
  }, {
    name: '4 Pory Roku',
    author: 'QBIK',
    audio: 'audio/4-Pory-Roku.mp3',
    image: 'image/4-Pory-Roku.png',
    color: 'darklategrey',
    id: crypto.randomUUID()
  }, {
    name: 'Halo tu londyn',
    author: 'WEEKEND',
    audio: 'audio/Halo-tu-londyn.mp3',
    image: 'image/Halo-tu-londyn.png',
    color: 'Burlywood',
    id: crypto.randomUUID()
  }, {
    name: 'Magic Symphony',
    author: 'C-BooL',
    audio: 'audio/Magic-Symphony.mp3',
    image: 'image/Magic-Symphony.png',
    color: 'blueviolet',
    id: crypto.randomUUID()
  }, {
    name: 'Shape of you',
    author: 'Ed Sheeran',
    audio: 'audio/Shape-of-you.mp3',
    image: 'image/Shape-of-you.png',
    color: 'grey',
    id: crypto.randomUUID()
  }, {
    name: 'Saudi',
    author: 'Tax Free, Malik Montana, Kazior, TYK',
    audio: 'audio/Saudi.mp3',
    image: 'wykonawcy/Tax-Free.jpg',
    color: 'grey',
    id: crypto.randomUUID()
  }, {
    name: 'Summer',
    author: 'Calvin Harris',
    audio: 'audio/Summer.mp3',
    image: 'image/Summer.png',
    color: 'forestgreen',
    id: crypto.randomUUID()
  }, {
    name: 'Dla Mnie Masz Stajla',
    author: 'Trzeci Wymiar',
    audio: 'audio/Dla-Mnie-Masz-Stajla.mp3',
    image: 'image/Dla-Mnie-Masz-Stajla.png',
    color: 'darkblue',
    id: crypto.randomUUID()
  }, {
    name: 'Gejowski Nurek',
    author: 'GAY RECORDS',
    audio: 'audio/Gejowski-Nurek.mp3',
    image: 'image/Gejowski-Nurek.jpg',
    color: 'cornflowerblue',
    id: crypto.randomUUID()
  }, {
    name: 'Harnaś-Ice-Tea',
    author: 'Gawryle',
    audio: 'audio/Harnaś-Ice-Tea.mp3',
    image: 'image/Harnaś-Ice-Tea.png',
    color: 'blue',
    id: crypto.randomUUID()
  }, {
    name: 'I Need Your Love',
    author: 'Calvin Harris',
    audio: 'audio/I-Need-Your-Love.mp3',
    image: 'image/I-Need-Your-Love.png',
    color: 'pink',
    id: crypto.randomUUID()
  }, {
     name: 'Thunder',
    author: 'Imagine Dragons',
    audio: 'audio/Thunder.mp3',
    image: 'image/Thunder.png',
    color: 'grey',
    id: crypto.randomUUID()
  }, {
     name: 'Human',
    author: 'Rag n Bone Man',
    audio: 'audio/Human.mp3',
    image: 'image/Human.png',
    color: 'grey',
    id: crypto.randomUUID()
  }, {
     name: 'Waiting For Love',
    author: 'Avicii',
    audio: 'audio/Waiting-For-Love.mp3',
    image: 'image/Waiting-For-Love.png',
    color: 'grey',
    id: crypto.randomUUID()
  }]);

  const [wykonawcy, setWykonawcy] = useState([{
    author: 'Mata',
    role: 'Wykonawca',
    image: 'wykonawcy/Mata.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Sobel',
    role: 'Wykonawca',
    image: 'wykonawcy/Sobel.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Sanah',
    role: 'Wykonawca',
    image: 'wykonawcy/Sanah.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Kizo',
    role: 'Wykonawca',
    image: 'wykonawcy/Kizo.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Sentino',
    role: 'Wykonawca',
    image: 'wykonawcy/Sentino.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Ed Sheeran',
    role: 'Wykonawca',
    image: 'wykonawcy/Ed-Sheeran.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Dawid Podsiadło',
    role: 'Wykonawca',
    image: 'wykonawcy/Dawid-Podsiadło.jpg',
    id: crypto.randomUUID()
  }, {
    author: 'Tax Free',
    role: 'Wykonawca',
    image: 'wykonawcy/Tax-Free.jpg',
    id: crypto.randomUUID()
  }]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy} />}></Route>
        <Route path="details" element={<Details muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy}/>}></Route>
        <Route path="playlist" element={<Playlist></Playlist>}></Route>
      </Routes>
    </>
  )
}

export default App
