import './Video.css'
import video from "./Video.mp4"


function Video(){
    return(
        <section>
            <h1>Descubra os horizontes pelo mar...</h1>
            <div className="container-video">
                <video controls autoplay loop className="video">
                    <source src={video} type="video/mp4"/>
                    seu navegador não suporta o vídeo!
                </video>
            </div>
        </section>
    );
}
export default Video