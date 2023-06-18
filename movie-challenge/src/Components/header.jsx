// IMPORTS
// import './Home.css';
import camera from '../Images/cameraremove.png';

const Header = () => {
  // JS    
  console.log('header funciona')

  return (
    <>
      {/* html */}
      <nav className="navbar navbar-light">
        <div className="container-fluid">
      <img src={camera} alt="" width="112" height="154" className="d-inline-block align-text-top"></img>
          <span className="navbar-brand mb-0 h1"> Moviefy </span>
        </div>
      </nav>
    </>

  )

}

export default Header;