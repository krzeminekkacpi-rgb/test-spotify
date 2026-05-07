import Pifpaf from '../../../audio/Pif-paf.mp3'
import './Albumy.css'

export function Albumy() {
    return (
        <div className='Main-Div'>
            <h2 className='Utwory-text'>Utwory na czasie</h2>
            <div className='Utwory-main-div'>
                <div className='Audio-div'><audio controls src={Pifpaf}></audio><h4>Test</h4><p>Kacper</p>
                <audio controls src={Pifpaf}></audio><h4>Test</h4><p>Kacper</p>
                </div>
                
            </div>
        </div>
    );
}