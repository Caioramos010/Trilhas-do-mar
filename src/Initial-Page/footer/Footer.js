import './Footer.css'
import imgInsta from './imgs/insta.png'
import imgWhats from './imgs/whats.png'
import imgTrip from './imgs/trip.png'


function Footer(){

    let instaLink = "https://www.instagram.com/trilhas_domar/;"
    let whatsLink = ""
    let tripAdLink = ""

    return(
        <footer className='footer'>
            <div className='footer-container'>
                <nav>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Rotas</a></li>
                        <li><a>Sobre</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className='social-container'>
                        <a href={instaLink}><img src={imgInsta}/></a>
                        <a href={whatsLink}><img src={imgWhats}/></a>
                        <a href={tripAdLink}><img src={imgTrip}/></a>
                    </ul>
                </nav>
                <div className='contact-container'>
                    <h6>Fale Conosco</h6>
                    <p>(48) 9 9939-9996</p>
                    <p>trilhasdomar2020@gmail.com</p>

                </div>
            </div>
            <div className="sub-footer"><p>© Copyright 2024 - Todos os direitos reservados - Trilhas do mar</p></div>
        </footer>
    );
}
export default Footer;