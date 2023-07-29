// IMPORTS
import Header from './Components/header';
import MovieTable from './Components/movieTable';
import Search from './Components/search';
import './Home.css';

const Results = () => {

    return (
            <>
                <Header></Header>
                <Search></Search>
                <MovieTable></MovieTable>
            </>
    )
}

export default Results;
