import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import kotfm from '../Images/kotfm.jpg';
import shawshank from '../Images/shawshank.jpg';
import godfather from '../Images/godfather.jpg';

// IMÁGENES DE PELÍCULAS POPULARES
const Card = () => {
  // JS    

  console.log('card funciona');

  return (
    <>
    <section className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <h1 id="titulo-cards"> Películas populares </h1>
        </div>
        </section>
        <section id="cards-pop">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="container-fluid">
          <div className="card mb-3">
            <div className="row">
            
              <div className='col'>
                <img src={kotfm} className="img rounded-start" alt="Poster Killers of The Flower Moon"></img>
              </div>
              <div className='col'>
                <img src={shawshank} className="img rounded-start" alt="Poster Shawshank Redemption"></img>
              </div>
              <div className='col'>
                <img src={godfather} className="img rounded-start" alt="Poster The Godfather"></img>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card;