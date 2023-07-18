// IMPORTS
import { Router } from 'react-router-dom';
import Header from './Components/header';
import MovieInfoContainer from './Components/movieInfoContainer';
import './Home.css';

const MovieInfoPage = () => {

    return (
        <Router>
            <>
                <Header></Header>
                <MovieInfoContainer></MovieInfoContainer>
            </>
        </Router>
    )
}

export default MovieInfoPage;
