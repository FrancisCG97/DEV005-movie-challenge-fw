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
          <div id="titulo">
            <h1 id="titulo-cards"> Películas populares </h1>
          </div>
        </div>
      </section>
      <section id="cards-pop">
        <div className="container-fluid">
          <div className="row">
            <div className="card mb-3">
              <div id="pop-imgs" className='col-4 col-md-4 col-lg-2 col-xl-2'>
                <img src={kotfm} className="img rounded-start" alt="Poster Killers of The Flower Moon"></img>
              </div>
              <div id="pop-imgs" className='col-4 col-md-4 col-lg-2 col-xl-2'>
                <img src={shawshank} className="img rounded-start" alt="Poster Shawshank Redemption"></img>
              </div>
              <div id="pop-imgs" className='col-4 col-md-4 col-lg-2 col-xl-2'>
                <img src={godfather} className="img rounded-start" alt="Poster The Godfather"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card;