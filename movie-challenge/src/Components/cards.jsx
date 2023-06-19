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

    <h1> Películas populares </h1>
      <div className="container-sm">
        <div className="card mb-3">
        <div className="row row-cols-auto">
          <div className='row-col'>
              <img src={kotfm} className="img rounded-start" alt="Poster Killers of The Flower Moon"></img>
            </div>
            <div className='row-col'>
              <img src={shawshank} className="img rounded-start" alt="Poster Shawshank Redemption"></img>
            </div>
            <div className='row-col'>
              <img src={godfather} className="img rounded-start" alt="Poster The Godfather"></img>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card;