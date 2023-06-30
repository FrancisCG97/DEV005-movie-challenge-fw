// IMPORTS
import Header from './Components/header';
import MovieTable from './Components/movieTable';
// import Pagination from './Components/pagination';
import Search from './Components/search';
import './Home.css';

const Results = () => {
    //JS

    return (
        <>
            <Header></Header>
            <Search></Search>
            <MovieTable></MovieTable>
        </>
    )
}

export default Results;
