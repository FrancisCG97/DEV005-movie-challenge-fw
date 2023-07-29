/* eslint-disable no-unused-vars */
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, useLocation } from 'react-router-dom';

const MovieInfoContainer = () => {

    const location = useLocation();
    const { currentMovies, imagesBaseUrl, posterSize } = location.state;
    console.log(currentMovies);

    // BOTÓN VOLVER A RESULTADOS
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    }

    console.log('Info container funciona');

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-end">
                <button onClick={back} className="btn btn-primary me-md-2" type="button"> Volver a resultados </button>
            </div>
            <table className="table">
                <><thead>
                    <tr>
                        <th id="movie-title" scope="col" className="col-6 col-md-4 col-lg-4">{currentMovies.title}</th>
                        <td><p>Título original:
                            <br></br>
                            {currentMovies.original_title}</p> </td>
                    </tr>
                </thead><tbody>
                        <tr>
                            <th scope="row"><img src={imagesBaseUrl + posterSize + currentMovies.poster_path} alt="Poster película" className="img-fluid" /></th>
                            <td><p>Lenguaje original:
                                <br></br>
                                {currentMovies.original_language}</p>
                                <p>Fecha de estreno:
                                    <br></br>
                                    {currentMovies.release_date}</p>
                                <p>Sinopsis:
                                    <br></br>
                                    {currentMovies.overview} </p></td>
                        </tr>
                    </tbody></>
            </table>
        </>
    );
}

export default MovieInfoContainer;