/* eslint-disable no-unused-vars */
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

const MovieTable = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { currentMovies } = location.state;
    const title = currentMovies.results;
    console.log(currentMovies);

    const [moviesImages, setMoviesImages] = useState(null);

    useEffect(() => {
        const fetchMoviesImages = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/configuration', {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
                    }
                });

                setMoviesImages(response.data);
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchMoviesImages();
    }, []);

    const imagesBaseUrl = moviesImages?.images?.base_url;
    const posterSize = moviesImages?.images?.poster_sizes[1];

    // VER MÁS INFORMACIÓN
    const goInfo = (movie) => {
        navigate('/movieInfoPage', { state: { imagesBaseUrl, posterSize, currentMovies: movie } });
    }
    console.log('movieTable funciona');

    return (
        <>
            {imagesBaseUrl && posterSize && (
                <div id="movieInfoContainer" className="container-fluid">
                    <section className="movie-cards">
                        <div className="row justify-content-evenly">
                                {Array.isArray(title) &&
                                    title.map((movie, index) => (
                                        <div id="movie-results" className="col col-xs-1 col-md-4 col-lg-3 m-2" key={index}>
                                            <img src={`${imagesBaseUrl}${posterSize}${movie.poster_path}`} className="card-img-top" alt="Poster película" />
                                            <div className="card-body overflow-visible">
                                                <h5 className="card-title">{movie.title}</h5>
                                                <p className="card-text">{movie.release_date}</p>
                                                <p className="card-text">{'⭐' + parseFloat(movie.vote_average).toFixed(1)}</p>
                                                <button onClick={() => goInfo(movie)} className="btn btn-primary" type="submit"> Ver más... </button>
                                            </div>
                                        </div>
                                    ))}
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}

export default MovieTable;
