// IMPORTS
import Header from './Components/header';
import MovieTable from './Components/movieTable';
import Search from './Components/search';
import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
    //JS
    // 1. crear un estado con useState para guardar la configuracion de las imagenes, que por defecto va a ser null
    const [moviesImages, setMoviesImages] = useState(null);
    // const baseUrl = moviesImages.images.base_url;
    // const sizeFile = moviesImages.images.poster_sizes[4];

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/configuration',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
        }
    };

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                // 2. guardar response.data.images dentro del estado del paso 1
                setMoviesImages(response.data);
                console.log(moviesImages);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [])

    return (
        // 3. no vas renderizar nada hasta que el valor del estado del paso 1 deje der ser null
        <>
            <Header></Header>
            <Search></Search>
            {/* 4. pasar por props la configuracion de las imagenes guardads en el estado del paso 1 */}
            <MovieTable></MovieTable>
        </>
    )
}

export default Results;
