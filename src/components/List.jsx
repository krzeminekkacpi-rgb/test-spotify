import { Link } from 'react-router';
import { useRef } from 'react';
import './List.css'




export function List({ playlistIds, muzyki, setPlaylistIds  }) {
    function RemoveFromList(id) {
        setPlaylistIds(playlistIds.filter(playlistIds => !(playlistIds == id)))
    }

    const NowaPlaylista = playlistIds.map((id) => {
        return muzyki.find(muzyka => muzyka.id == id)
    })

    
    const autoPlay = useRef([]);

    const switchIndex = (i) => {
       if (autoPlay.current[i + 1]) {
        autoPlay.current[i + 1].play();
        console.log(autoPlay.current);
       }
    };

    
    
    return (
        <div className='Main-Div'>
            <h2 className='Utwory-text'>Twoja nowa playlista</h2>
            
                <div className='Audio-div-playlist'>
                    
            {NowaPlaylista.map((music, i) => {
                        return (
                        <div className='top-audio playlist' key={music.id}>
                            <Link to={`/details?type=music&id=${music.id}`} style={{ textDecoration: 'none'}} state={music}>
                            <img className='top-img' src={music.image}></img>
                            <audio className='top-song' controls src={music.audio}  ref={e => autoPlay.current[i] = e} onEnded={() => switchIndex(i)}></audio>
                            </Link>
                            <div className="get-in-line">
                            <h4 className='top-song-name'>{music.name}</h4>
                            <button className='del-button' onClick={() => RemoveFromList(music.id)}>🗑️</button>
                            </div>
                            <p className='top-author'>{music.author}</p>
                            
                        </div>
                        );
                })}
        </div>
       </div>
    );
}