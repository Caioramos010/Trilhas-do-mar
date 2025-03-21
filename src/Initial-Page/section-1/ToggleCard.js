import React, { useState } from "react";
import "./ToggleCard.css";
import img1 from "./imgs/Lagoinha.png";

function ToggleCard({ isOpen, onClose }) {
  const todasImagens = [
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1
  ];

  const [quantidadeVisivel, setQuantidadeVisivel] = useState(4);

  const carregarMaisImagens = () => {
    setQuantidadeVisivel((prev) => prev + 4);
  };

  if (!isOpen) return null;

  return (
    <label className="section-toggleCard">
      <div className="blur-container"></div>

      <div className="container-toggleCard">
        <div className="header-toggleCard">
          <h2>IMAGENS TRILHAS DO MAR</h2>
          <button onClick={() => { onClose(); setQuantidadeVisivel(4); }} className="close-btn">
            Fechar
          </button>
        </div>

       
        <div className="cards-container">
          {todasImagens.slice(0, quantidadeVisivel).map((imagem, index) => (
            <div className="img-card" key={index}>
              <img src={imagem} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Exibe o botão "Ver Mais Imagens" apenas se houver mais imagens para exibir */}
        {quantidadeVisivel < todasImagens.length && (
          <button onClick={carregarMaisImagens} className="load-more-btn">
            Ver Mais Imagens
          </button>
        )}
      </div>
    </label>
  );
}

export default ToggleCard;
