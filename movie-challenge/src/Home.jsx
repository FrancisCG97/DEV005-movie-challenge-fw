// IMPORTS
import { Router } from 'react-router-dom';
import Header from './Components/header';
import Carousel from './Components/carousel';
import Card from './Components/cards';
import Search from './Components/search';
import './Home.css';

const Home = () => {

  return (
    <Router>
    <>
      
        <Header></Header>
        <Search></Search>
        <Carousel></Carousel>
        <Card></Card>
    </>
    </Router>
  )
}

export default Home;