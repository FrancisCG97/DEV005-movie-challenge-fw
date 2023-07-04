// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MovieTable = () => {

    // VARIABLES DEL ARRAY
    const location = useLocation();
    const { currentMovies } = location.state;
    const title = currentMovies.results;
    console.log(currentMovies);

    const navigate = useNavigate();

    // VER MÁS INFORMACIÓN
    const goInfo = (movie) => {
        navigate('/movieInfoPage', { state: { currentMovies: movie } });
    }
    console.log('movieTable funciona');

    return (
        <>
            <div id="movieInfoContainer">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {Array.isArray(title) &&
                        title.map((movie, index) => (
                            <div id="movie-results" className="card" key={index}>
                                <img src={movie.file_path} className="card-img-top" alt="Poster película" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.release_date}</p>
                                    <p className="card-text">{'⭐' + parseFloat(movie.vote_average).toFixed(1)}</p>
                                    <button onClick={() => goInfo(movie)} className="btn btn-primary" type="submit"> Ver más... </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default MovieTable;