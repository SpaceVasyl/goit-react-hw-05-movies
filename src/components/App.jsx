// import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Trending } from "./Trending/Trending";
import { Movies } from "./movies/movies";
import { Credits } from "./credits/credits";
import { Details } from "./details/details";
import { Reviews } from "./reviews/reviews";

export const App = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/movies' element={<Movies/>}/>
    <Route path='/movies/:movieId/cast' element={<Credits/>}/>
    <Route path='/:movieId' element={<Details/>}/>
    <Route path='/movies/:movieId/reviews' element={<Reviews/>}/>
  </Routes>
};
