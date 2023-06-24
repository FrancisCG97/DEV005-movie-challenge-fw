// IMPORTS
import Header from './Components/header';
import Carousel from './Components/carousel';
import Card from './Components/cards';
import Search from './Components/search';
import './Home.css';

const Home = () => {
  //JS

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