import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import kotfm from '../Images/kotfm.jpg';
import shawshank from '../Images/shawshank.jpg';
import godfather from '../Images/godfather.jpg';

// CARRUSEL IMÁGENES
const Card = () => {
    // JS    
    console.log('card funciona')
    return (
        <>
        <div className="container-sm">
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={kotfm} className="img-fluid rounded-start" alt="Poster Killers of The Flower Moon"></img>
    </div>
    <div className="col-md-4">
      <img src={shawshank} className="img-fluid rounded-start" alt="Poster Shawshank Redemption"></img>
    </div>
    <div className="col-md-4">
      <img src={godfather} className="img-fluid rounded-start" alt="Poster The Godfather"></img>
    </div>
  </div>
</div>
</div>
        </>
    )
}

export default Card;