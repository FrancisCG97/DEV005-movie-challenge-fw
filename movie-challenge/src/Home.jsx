// IMPORTS
import './Home.css';

const Home = () => { 
// JS    
console.log('hola')
    
    return (
    // AGREGAR IMAGEN CAMERAREMOVE.PNG
    // MODIFICAR COLOR, TAMAÑO Y GROSOR DEL TÍTULO
    // ALINEARLOS A LA PARTE SUPERIOR IZQUIERDA DE LA PANTALLA (PRIMERO IMAGEN, TÍTULO AL LADO) 
    
    <>
    {/* html */}

    {/* <h1 className="card-title"> Moviefy </h1> */}
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="movie-challenge/src/Images/cameraremove.png" alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
      Moviefy
    </a>
  </div>
</nav>
    
    </>
    
    )

} 



export default Home;