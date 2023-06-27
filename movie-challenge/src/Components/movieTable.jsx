// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useLocation } from "react-router-dom";

const MovieTable = () => {
    //JS
    const location = useLocation();
    const { currentMovies } = location.state;
    const title = currentMovies;
    console.log(currentMovies);

        // title.results[i].original_title;
        // title.results[i].release_date;
        // title.results[i].original_language;
    
    console.log('movieTable funciona');


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> Imagen </th>
                        <th scope="col"> Título </th>
                        <th scope="col"> Fecha de estreno </th>
                        <th scope="col"> Sinopsis </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> {JSON.stringify(title.results[0].original_title)} </td>
                        <td> {JSON.stringify(title.results[0].release_date)} </td>
                        <td> {JSON.stringify(title.results[0].original_language)} </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td> {JSON.stringify(title.results[1].original_title)} </td>
                        <td> {JSON.stringify(title.results[1].release_date)} </td>
                        <td> {JSON.stringify(title.results[1].original_language)} </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2"> </td>
                        <td> </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default MovieTable;