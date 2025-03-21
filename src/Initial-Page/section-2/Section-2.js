import ModelIcon from './model-icon';
import ImgLem from './imgs/lem.png';
import ImgRote from './imgs/rote.png'; 
import ImgBoat from './imgs/boat.png';
import './Section-2.css' 




function Section2(){
    return(
        <section className="sec-2">
            <h2 className="title-sec"> AO REALIZAR UMA VIAGEM
            CONOSCO VOCÊ VAI CONTAR COM:</h2>
            <ModelIcon title="PROFISSIONAIS EXPERIENTES E QUALIFICADOS" imageSrc={ImgLem} altText={"imagem de leme"}/>
            <ModelIcon title="ROTAS SEGURAS E EFICIENTES" imageSrc={ImgRote} altText={"imagem de leme"}/>
            <ModelIcon title="DIVERSÃO GARANTIDA" imageSrc={ImgBoat} altText={"imagem de leme"}/>

        </section>
        
    );
}
export default Section2