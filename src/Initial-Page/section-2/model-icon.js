import './Section-2.css'

function ModelIcon({title, imageSrc, altText}){
    return(
        <div className="container-model">
            <img src={imageSrc} alt={altText}/>
            <h2>{title}</h2>
        </div>
    );
}
export default ModelIcon