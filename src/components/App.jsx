
import { Routes, Route } from "react-router-dom";
import {Movies} from "./Movies/Movies"
import { Layout } from "./Layout/Layout";
import { Home } from "./Home/Home";

export const App = () => {
  return <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='movies' element={<Movies/>}/> 
    </Route>
  </Routes>
};
