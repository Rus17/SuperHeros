import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import ListSuperheroes from "./Components/ListSuperheroes/ListSuperheroesContainer"
import OneSuperhero from "./Components/OneSuperhero/OneSuperheroContainer"
//import db from './redux/db'
import {BrowserRouter, Route} from "react-router-dom"


function App() {
  return (
     <BrowserRouter>
        <div className="container">
           <Header />
           <Route exact path='/' component={ListSuperheroes} />
           <Route path='/superhero/:id' component={OneSuperhero} />           
        </div>
      </BrowserRouter>
  );
}

export default App;
