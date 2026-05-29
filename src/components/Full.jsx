import { useLocation } from "react-router"
import './Full.css'

export function Full({ playlistIds, setPlaylistIds }) {
    const location = useLocation();
    const track = location.state

    function DodajDoPlaylisty() {
        if(!playlistIds.includes(track.id)) {
            const NewPlaylist = ([...playlistIds, track.id])
            setPlaylistIds(NewPlaylist)
        console.log(playlistIds);
        }
        
    }

    return (
        <div className='Main-Div'>
            <div className='Highest-section' style={{ backgroundColor: track.color, outline: `25px solid ${track.color}`  }}>

                <img src={track.image} className="Music-image"></img>
                <div className="Right-section">
                    <div className="Singiel-span"><span >Singiel</span></div>
                    <div className="Music-name"><h1 className="Music-name-text">{track.name}</h1></div>
                    <div className="Music-author"><span>{track.author}</span></div>
                </div>
            </div>
            <div className="Music-audio-div">
                <button className="Add-to-playlist" title='Dodaj do playlisty' onClick={DodajDoPlaylisty}>+</button>
            <audio src={track.audio} controls className="Music-audio"></audio>
            </div>
            

            <div className='Utwory-others-first'>
            <h2 className='Others-utwory-text'>Więcej od {track.author}</h2>
            <span className='Show-all-others'>Pokaż dyskografię</span>
            </div>
            <div className='Others-utwory-main-div'>
                <div className='Others-audio-div'>
                        <div className='others-audio' key={track.id}>
                            
                            <img className='others-img' src={track.image}></img>
                            <audio className='others-song' controls src={track.audio}></audio>
                            <h4 className='others-song-name'>{track.name}</h4>
                            <p className='others-author'>{track.author}</p>
                            
                        </div> 
                   
                </div>
                    
            </div>
            <div className="Footer-spans-full">
                <hr className="Line"></hr>
                <div className="Space"></div>
                <div className="The-display-full">
                    <div className="Section-1">
                        <span className="White">Firma</span>
                        <span className="Grey">Informacje</span>
                        <span className="Grey">Praca</span>
                        <span className="Grey">For the Record</span>
                    </div>
                    <div className="Section-1">
                        <span className="White">Społeczności</span>
                        <span className="Grey">Dla artystów</span>
                        <span className="Grey">Deweloperzy</span>
                        <span className="Grey">Reklama</span>
                        <span className="Grey">Inwestorzy</span>
                        <span className="Grey">Dostawcy</span>
                    </div>
                    <div className="Section-1">
                        <span className="White">Przydatne linki</span>
                        <span className="Grey">Pomoc</span>
                        <span className="Grey">Bazpłatna aplikacja mobilna</span>
                        <span className="Grey">Popularne wg kraju</span>
                        <span className="Grey">Importuj swoją muzykę</span>
                    </div>
                    <div className="Section-1">
                        <span className="White">Plany Spotify</span>
                        <span className="Grey">Premium Individual</span>
                        <span className="Grey">Premium Duo</span>
                        <span className="Grey">Premium Family</span>
                        <span className="Grey">Premium Student</span>
                        <span className="Grey">Spotify Free</span>
                    </div>
                    <div className="Section-2"></div>
                    <div className="Section-3">
                        <button title="Instagram" className="Instagram-button full-hover">📷</button>
                        <button title="Twetter" className="Twetter-button full-hover">🕊️</button>
                        <button title="Facebook" className="Facebook-button full-hover">📘</button>
                    </div>
                </div>
                <div className="Space"></div>
                    <hr className="Line"></hr>
                    <div class="Down-full"><span className="The-down-text">© 2026 Spotify AB</span></div>
            </div>
        </div>
    )
}