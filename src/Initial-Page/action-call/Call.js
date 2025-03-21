import React, { useState } from "react";

import './Call.css'
import '../header/Header.css'
import boat from '../header/imgs/boat.png';

function Call(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const OpenModal = () =>{
        setIsModalOpen(true)
    }
    const CloseModal = () => {
        setIsModalOpen(false);
      };
    return(
        <div className="div-button-whats">
            <button className='button-whats' onClick={OpenModal}>Viva momentos extraordinários no mar <img src={boat}/></button>
            {isModalOpen && <Modal onClose={CloseModal} />}
        </div>

    );
}
function Modal({ onClose }){
    return (
        <section className="modal-container">
          <div className="modal">
            <button onClick={onClose} className="close-modal-btn">
              Fechar
            </button>
            <h2>Rota</h2>
            <div>
                <div>
                    
                </div>
            </div>
            <p>Você pode adicionar qualquer conteúdo aqui.</p>
          </div>
        </section>
      );
}
export default Call;
