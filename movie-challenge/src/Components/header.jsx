/* eslint-disable no-unused-vars */
// IMPORTS
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import camera from '../Images/cameraremove.png';

// HEADER DE PÁGINA (IMAGEN + TÍTULO)
const Header = () => {

  // VOLVER AL HOME
  const navigate = useNavigate();
  const back = () => {
    navigate('/');
  }

  console.log('header funciona')

  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-light">
            <div className="container-fluid">
              <div className='col-2 col-md-2 col-sm-3'>
                <img src={camera} id='camera' alt="camera" width="250" height="179" className="d-inline-block align-text-top"></img>
              </div>
              <div className='col-9 col-md-9 col-lg-9 col-xl-10'>
                <h1 onClick={back} className="navbar-brand h1"> Moviefy </h1>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header;
