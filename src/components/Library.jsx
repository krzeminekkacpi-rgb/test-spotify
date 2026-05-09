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
            <div className='Space'></div>
            
            <div className='Utworz-playliste-dynamic'>
                <span className='upp'>Poszukajmy podkastów które możesz obserwować</span>
                <span className='down'>Będziemy Cię informować o nowych odcinkach</span>
                <button className='Utworz-playliste-button'>Przeglądaj podcasty</button>
            </div>
            
            <div className='Space2'></div>
            <div className='Footer-spans'>
                <span className='podtext block'>Kwestie prawne</span>
                <span className='podtext block'>Centrum ochrony prywatności i bezpieczeństwa</span>
                
                <span className='podtext'>Polityka prywatności</span> 
                <span className='podtext'>Ustawienia plików cookie</span> 
                <span className='podtext '>O rekramach</span>

                <span className='podtext block text-test'>Dostępność</span>
                <span className='podtext cookie-files'>Pliki cookie</span>
            
            
                <button className='Lang-settings'>🌐 Polski</button>
                <div className='space3'></div>
            </div>
        </div>
    )
}