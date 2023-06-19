// IMPORTS
// import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import camera from '../Images/cameraremove.png';

const Header = () => {
  // JS
  console.log('header funciona')

  return (
    <>

      {/* html */}
      <div className="container-sm">
        <div className="row row-cols-auto">
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <div className='row-col'>
                <img src={camera} alt="camera" width="160" height="115" className="d-inline-block align-text-top"></img>
              </div>
              <div className='row-col'>
                <span className="navbar-brand mb-0 h1"> Moviefy </span>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </>
  )
}

export default Header;