/* eslint-disable no-unused-vars */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home.jsx";
import Results from "./Results.jsx";
import MovieInfoPage from "./MovieInfoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: '/results',
    element: <Results />,
  },
  {
    path: '/movieInfoPage',
    element: <MovieInfoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
