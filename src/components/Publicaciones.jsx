import '../css/Publicaciones.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import publi1 from '../assets/img/publi1.jpg';
import publi2 from '../assets/img/publi2.jpg';
import publi3 from '../assets/img/publi3.jpg';
import publi4 from '../assets/img/publi4.jpg';
import publi5 from '../assets/img/publi5.jpg';


function Publicaciones() {

    return (
        <>
        <div id='Publicaciones'>
            <h1 className='titulo-publicaciones'>Publicaciones</h1>
                <div className="publicaciones" style={{ padding: '35px'}}>
                <div className="carousel-wrapper">
                    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} dynamicHeight={true}>
                        <div>
                            <img src={publi1} className="publicacion" alt="publicacion1" />

                        </div>
                        <div>
                            <img src={publi2} className="publicacion" alt="publicacion2" />

                        </div>
                        <div>
                            <img src={publi3} className="publicacion" alt="publicacion3" />
                        </div>
                        <div>
                            <img src={publi4} className="publicacion" alt="publicacion4" />
                        </div>
                        <div>
                            <img src={publi5} className="publicacion" alt="publicacion5" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default Publicaciones