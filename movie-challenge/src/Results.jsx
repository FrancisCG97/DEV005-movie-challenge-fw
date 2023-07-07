// IMPORTS
import Header from './Components/header';
import MovieTable from './Components/movieTable';
import Search from './Components/search';
import './Home.css';

const Results = () => {
    //JS
    
    return (
        <>
            <Header></Header>
            <Search></Search>
            {/* 4. pasar por props la configuracion de las imagenes guardads en el estado del paso 1 */}
            <MovieTable></MovieTable>
        </>
    )
}

export default Results;
