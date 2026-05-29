import Pifpaf from '../../../audio/Pif-paf.mp3'
import { Link } from 'react-router';
import './Albumy.css'

export function Albumy({ muzyki, wykonawcy, radio, search}) {
    return (
        <div className='Main-Div'>
            <div className='Utwory-top-first'>
            <h2 className='Utwory-text'>Utwory na czasie</h2>
            <span className='Show-all-top'>Pokaż wszystko</span>
            </div>
            <div className='Utwory-main-div'>
                <div className='Audio-div'>
                    
                    
                    {muzyki.filter((muz) => {
                        return search === '' || muz.name.toLowerCase().includes(search.toLowerCase());
                    }).map((music) => {
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
                    
            </div>
            <div className='Utwory-top-first the-space'>
            <h2 className='Utwory-text'>Popularni wykonawcy</h2>
            <span className='Show-all-top'>Pokaż wszystko</span>
            </div>
            <div className='Utwory-main-div'>
                <div className='Audio-div'>
                    
                    {wykonawcy.map((wyk) => {
                        return (
                        <div className='top-audio' key={wyk.id}>
                            <img className='wyk-img' src={wyk.image}></img>
                            
                            <h4 className='top-song-name'>{wyk.author}</h4>
                            <p className='top-author'>{wyk.role}</p>
                        </div>
                        );
                    })}
                    
                   
                </div>
                    
            </div>
            


            <div className='Utwory-top-first space-radio'>
            <h2 className='Utwory-text'>Popularne radia</h2>
            <span className='Show-all-top'>Pokaż wszystko</span>
            </div>
            <div className='Utwory-main-div'>
                <div className='Audio-div'>
                    
                    {radio.map((stacja) => {
                        return (
                        <div className='top-audio' key={stacja.id}>
                            
                            <img className='top-img' src={stacja.image}></img>
                            <audio className='top-song' controls src={stacja.link}></audio>
                            <h4 className='top-song-name'>{stacja.name}</h4>
                            
                        </div>
                        );
                    })}
                    
                   
                </div>
                    
            </div>
        </div>
    );
}