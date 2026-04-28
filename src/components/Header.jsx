import SpotifyLogo from '../../../img/spotify.jpg'
import HomeLogo from '../../../img/domm.png'
import SearchIcon from '../../../img/search-icon-png-5.png'
import './Header.css'

export function Header() {
return (
    <div className="Header-wrap">
        <div className="Header">
            <img src={SpotifyLogo} width='40px' className='Spotify-logo'></img>
            <button className='Home-Button'><img src={HomeLogo} width="40px" className='Home'></img></button>
            <div className='search-container'>
                <button className='Search-button' ><img src={SearchIcon} width="20.15px"></img></button>
            <input className='Search-bar-input' placeholder='Czego chcesz posłuchać'></input>
            </div>

            
            <button className='Premium-button trios'>Premium</button>
            <button className='Pomoc-button trios'>Pomoc</button>
            <button className='Pobierz-button trios'>Pobierz</button>
            

        </div>
        

    </div>
) 
}