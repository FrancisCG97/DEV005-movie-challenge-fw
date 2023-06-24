// IMPORTS
// import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import camera from '../Images/cameraremove.png';

// HEADER DE PÁGINA (IMAGEN + TÍTULO)
const Header = () => {
  // JS

  console.log('header funciona')

  return (
    <>

      {/* html */}
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <div className='col-8 col-md-4 col-sm-6'>
                <img src={camera} alt="camera" width="250" height="179" className="d-inline-block align-text-top"></img>
              </div>
              <div className='col-8 col-md-4 col-sm-4'>
                <span className="navbar-brand h1"> Moviefy </span>
              </div>
              <div className='col-8 col-md-4 col-sm-4'>
                <h1 className="navbar-brand h1"> </h1>
              </div>
              <div className='col-8 col-md-4 col-sm-4'>
                <h1 className="navbar-brand h1"> </h1>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Header;