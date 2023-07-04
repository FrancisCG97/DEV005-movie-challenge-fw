// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MovieInfoContainer = () => {

    const location = useLocation();
    const { currentMovies } = location.state;
    console.log(currentMovies);

    const filePath = currentMovies.poster_path;
    console.log(filePath);

    const navigate = useNavigate();
    const back = () => {
        navigate('/home');
    }

    console.log('Info container funciona');

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={back} className="btn btn-primary me-md-2" type="button"> Volver </button>
            </div>
            <div className="container">
            </div>
            <table className="table table-borderless">
                <><thead>
                    <tr>
                        <th scope="col"></th>
                        <td></td>
                        <td></td>
                        <td>{currentMovies.title}</td>
                    </tr>
                </thead><tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Lenguaje original:</td>
                            <td>{currentMovies.original_language}</td>
                            <td>{currentMovies.original_title}</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Fecha de estreno</td>
                            <td>{currentMovies.release_date}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td colSpan="2">Sinopsis:</td>
                            <td className="col-md-6">{currentMovies.overview}</td>
                        </tr>
                    </tbody></>
            </table>
        </>
    );
}

export default MovieInfoContainer;