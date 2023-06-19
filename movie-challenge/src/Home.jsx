// IMPORTS
import Header from './Components/header';
import Carousel from './Components/carousel';
import Card from './Components/cards';
import Search from './Components/search';
import './Home.css';

// DARLE FUNCIONALIDAD A BOTÓN BUSCAR
// MOSTRAR EN CONSOLA EL VALOR DEL INPUT
// TRAER LA DATA CON FETCH A HOME

const Home = () => { 
  // new Promise ((resolve, reject) => {
  // console.log('home funciona')
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTczZDEyNmNmYjFlMTdkZmMwZjM1YWY1MjJmZjBlMCIsInN1YiI6IjY0OTBiMDk2NDJiZjAxMDEwMWJmZTU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dtmKGUMqjtSdO5v4tL_rV_mpSa4JzVXhod6EgDhanto'
  //   }
  // };

  // if ()
  //  fetch('https://api.themoviedb.org/3/authentication', options)
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));

  return (
    <>
    <Header></Header>
    <Search></Search>
    <Carousel></Carousel>
    <Card></Card>  

    </>
  )
  }

export default Home;