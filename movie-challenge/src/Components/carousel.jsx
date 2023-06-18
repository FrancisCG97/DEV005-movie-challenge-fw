import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import spiderman from '../Images/spiderman.jpg';
import sisu from '../Images/sisu.jpg';
import reality from '../Images/reality.jpg';
import eeao from '../Images/EEAO.jpg';

// CARRUSEL IMÁGENES
const Carousel = () => {
    // JS    
    console.log('carrusel funciona')

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={spiderman} className="d-block w-100" alt="Poster Spiderman Across the Spiderverse"></img>
    </div>
    <div className="carousel-item">
      <img src={sisu} className="d-block w-100" alt="Poster Sisu"></img>
    </div>
    <div className="carousel-item">
      <img src={reality} className="d-block w-100" alt="Poster Reality"></img>
    </div>
    <div className="carousel-item">
      <img src={eeao} className="d-block w-100" alt="Poster Everything Everywhere All at Once"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden"> Anterior </span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden"> Siguiente </span>
  </button>
</div>
    )
}

export default Carousel;