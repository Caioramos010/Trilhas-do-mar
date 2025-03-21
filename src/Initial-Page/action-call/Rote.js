const Rote = ({ titleRote, textRote, imgRote}) =>{
    return(
        <div>
            <div>
                <h3>{titleRote}</h3>
                <p>{textRote}</p>
            </div>
            <img src={imgRote}/>
        </div>
)}
export default Rote();