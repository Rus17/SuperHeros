import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import ListSuperheroes from "./Components/ListSuperheroes/ListSuperheroes"
import SingleSuperhero from "./Components/SingleSuperhero/SingleSuperhero"
import db from './redux/db'


function App() {
  return (
     <div>
        <Header />
        <ListSuperheroes list={() => db.getHeroes()}/>
        <SingleSuperhero />
     </div>
  );
}

export default App;
