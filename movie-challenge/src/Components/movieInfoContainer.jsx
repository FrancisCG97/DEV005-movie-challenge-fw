// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={back} className="btn btn-primary me-md-2" type="button"> Volver a resultados </button>
            </div>
            <div className="container">
            </div>
            <table className="table table-borderless">
                <><thead>
                    <tr>
                        <th scope="col">{currentMovies.title}</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead><tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Lenguaje original: {currentMovies.original_language}</td>
                            <td></td>
                            <td>Título original: {currentMovies.original_title}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Fecha de estreno: {currentMovies.release_date}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><img src={imagesBaseUrl + posterSize + currentMovies.poster_path} alt="Poster película" className="img-fluid" /></th>
                            <td colSpan="2">Sinopsis:</td>
                            <td className="col-md-6">{currentMovies.overview}</td>
                        </tr>
                    </tbody></>
            </table>
        </>
    );
}

export default MovieInfoContainer;