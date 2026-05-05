import './Library.css'

export function Library() {
    return (
        <div className="main-Library">
            <div className='Naglowek'>
            <h3 className='Naglowek-text'>Biblioteka</h3>
            <button className='Utworz' title='Utwórz playliste, folder lub Jam'>➕ Utwórz</button>
            </div>
            <div className='Utworz-playliste'>
                <span className='upp'>Utwórz swoją pierwszą playlistę</span>
                <span className='down'>To proste, pomożemy Ci</span>
                <button className='Utworz-playliste-button'>Utwórz playlistę</button>
            </div>
        </div>
    )
}