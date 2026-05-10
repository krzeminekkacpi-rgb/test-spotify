import Pifpaf from '../../../audio/Pif-paf.mp3'
import './Albumy.css'


export function Albumy({ muzyki }) {
    return (
        <div className='Main-Div'>
            <div className='Utwory-top-first'>
            <h2 className='Utwory-text'>Utwory na czasie</h2>
            <span className='Show-all-top'>Pokaż wszystko</span>
            </div>
            <div className='Utwory-main-div'>
                <div className='Audio-div'>
                    
                    {muzyki.map((music) => {
                        return (
                        <div className='top-audio' key={music.id}>
                            <img className='top-img' src={music.image}></img>
                            <audio className='top-song' controls src={music.audio}></audio>
                            <h4 className='top-song-name'>{music.name}</h4>
                            <p className='top-author'>{music.author}</p>
                        </div>
                        );
                    })}
                    
                   
                </div>

            </div>
        </div>
    );
}