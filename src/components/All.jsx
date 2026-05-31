import { Link } from 'react-router';
import './All.jsx';

export function All({ muzyki }) {

    return (
        <div className='Main-Div'>
            <h2 className='Utwory-text'>Wszystkie muzyki</h2>

            <div className='Audio-div-playlist'>

                {muzyki.map((music) => {
                    return (
                        <div className='top-audio playlist' key={music.id}>
                            <Link to={`/details?type=music&id=${music.id}`} style={{ textDecoration: 'none' }} state={music}>
                                <img className='top-img' src={music.image}></img>
                                <audio className='top-song' controls src={music.audio} ></audio>
                            </Link>
                            <div className="get-in-line">
                                <h4 className='top-song-name'>{music.name}</h4>

                            </div>
                            <p className='top-author'>{music.author}</p>

                        </div>
                    );
                })}
            </div>
        </div>

    );
}