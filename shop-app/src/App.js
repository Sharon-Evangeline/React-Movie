import logo from './logo.svg';
import './App.css';
import {MovieCard }from './MovieCard';
import {useState} from 'react';
import { User } from './User';
import { Movie } from './Movie';
import MovieList from './MovieList';
import { AddMovie } from './AddMovie';
import {Routes,Route} from "react-router-dom"
import Portal from './Portal';
import Login from './Login';
import Register from './Register';




function App() {
  

return(
  <div >
    <Routes>

    <Route path ="/" element ={<Login />}/>  
    <Route path ="/portal" element ={<Portal/>}/>
    <Route path ="/register" element ={<Register/>}>
      <Route path ="addmovie" element ={<AddMovie/>}/>
      <Route path ="movie" element ={<MovieList/>}/>


    </Route>
    </Routes>
  </div>
)

}
export default App;

