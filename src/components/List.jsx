import { Link } from 'react-router';
import './List.css'

export function List({ playlistIds, muzyki }) {
    const NowaPlaylista = playlistIds.map((id) => {
        return muzyki.find(muzyka => muzyka.id === id)
    })
    return (
        <div className='Main-Div'>
            <h2 className='Utwory-text'>Twoja nowa Playlista</h2>
            {NowaPlaylista.map((music) => {
                        return (
                        <div className='top-audio' key={music.id}>
                            <Link to={`/details?type=music&id=${music.id}`} style={{ textDecoration: 'none', display: "block"}} state={music}>
                            <img className='top-img' src={music.image}></img>
                            <audio className='top-song' controls src={music.audio}></audio>
                            <h4 className='top-song-name'>{music.name}</h4>
                            <p className='top-author'>{music.author}</p>
                            </Link>
                        </div>
                        );
                    })}
        </div>
        
    );
}