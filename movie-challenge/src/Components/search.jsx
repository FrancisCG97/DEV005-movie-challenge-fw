/* eslint-disable no-unused-vars */
// IMPORTS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

// BÚSQUEDA DE PELÍCULAS
export default function Search() {
  const navigate = useNavigate();

  // FUNCIONALIDAD BOTÓN BUSCAR
  const searchData = () => {
    const movie = document.getElementById('title').value;
    console.log(movie);

    // TOAST EN CASO DE INPUT DE BÚSQUEDA VACÍO
    if (movie.length < 1) {
      toast.error('Ingrese un título a buscar');
    } else {

      // DATOS REQUERIDOS A LA API PARA LA BÚSQUEDA DE PELÍCULAS
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
          query: movie,
          include_adult: 'false',
          page: '1',
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
        }
      };

      // ENTREGA DE DATOS REQUERIDOS A LA API
      axios
        .request(options)
        .then(function (response) {
          navigate('/results', { state: { options, movie, currentMovies: response.data } });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }

  return (
    <>
      {/* html */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="dark"
      />
      <div className="container-l">
        <div className="input-group mb-3">
          <div className="row row-cols-auto">
            <div className='row-col'>
              <input id='title' type="text" className="form-control" placeholder="¿Qué película buscas?" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            </div>
            <div className='row-col'>
              <button onClick={ searchData } className="btn btn-outline-secondary" type="submit" id="button-addon2"> Buscar </button>             
              </div>
          </div>
        </div>
      </div>
    </>
  )
}