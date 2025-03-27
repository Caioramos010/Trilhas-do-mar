import React, { useState } from "react";
import "./Section-1.css";
import imgLagoinha from "./imgs/Lagoinha.png";
import ToggleCard from "./ToggleCard.js";

function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  const cardOpen = () => {
    setIsOpen(true);
  };

  const cardClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="section">
        <div className="section-container" onClick={cardOpen}>
          <div className="container-text">
            <h2>TRILHAS DO MAR</h2>
            <p>
              Viva uma experiência única no mar, explorando lugares incríveis e
              cenários de tirar o fôlego. Nossas trilhas aquáticas te levam a
              paisagens inesquecíveis, onde cada momento se transforma em uma
              aventura extraordinária. Venha descobrir o oceano como você nunca
              imaginou.
            </p>
          </div>
          <div className="container-img">
            <img className="img-lagoinha" src={imgLagoinha} alt="Lagoinha" />
          </div>
        </div>
        <p className="clique">Clique para visualizar mais imagens</p>
      </div>
      <ToggleCard isOpen={isOpen} onClose={cardClose} />
    </section>
  );
}

export default Section1;
