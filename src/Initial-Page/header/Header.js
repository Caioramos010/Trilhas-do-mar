import './Header.css' 
import anchor from './imgs/anchor.png';
import Call from '../action-call/Call.js';
import RotesPg from '../../Rotes/RotesPg.js';

function Header(){
    return(
        <header>
            <nav>
                <a className="item-nav" href='/rotas'>Rotas</a>
                <a className="item-nav" href='/sobre'>Sobre</a>
            </nav>
            <a href='/home'><img src={anchor} className='img-anchor' /></a>
            <Call></Call>
        </header>
    );
}
export default Header