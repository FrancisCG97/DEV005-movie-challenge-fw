// IMPORTS
import axios from 'axios';

// CONFIGURACIÓN
export const imagesRequest = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/configuration', {
                  headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
                  }
              });

              console.log(response.data);

          } catch (error) {
              console.error(error);
          }
      };

// const apiConfig = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/configuration',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
//   }
// };

// axios
//   .request(apiConfig)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// POPULAR
// const popular = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/popular',
//   params: {language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
//   }
// };

// axios
//   .request(popular)
//   .then(function (response) {
//     console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });






// IMPORTS
// import axios from 'axios'; 
 
//  // DATOS REQUERIDOS A LA API PARA LA BÚSQUEDA DE PELÍCULAS
//  const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/search/movie',
//     params: {
//       query: movie,
//       include_adult: 'false',
//       page: '1',
//     },
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
//     }
//   };

//   // ENTREGA DE DATOS REQUERIDOS A LA API
//   axios
//     .request(options)
//     .then(function (response) {
//       navigate('/results', { state: { options, movie, currentMovies: response.data } });
//     })
//     .catch(function (error) {
//       console.error(error);
//     });


