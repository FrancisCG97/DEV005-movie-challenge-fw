import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path = {'/home'} element = {<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
