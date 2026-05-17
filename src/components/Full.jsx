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
        </div>
    )
}