import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import ListSuperheros from "./Components/ListSuperheros/ListSuperheros"
import SingleSuperhero from "./Components/SingleSuperhero/SingleSuperhero"


function App() {
  return (
     <div>
        <Header />
        <ListSuperheros />
        <SingleSuperhero />
     </div>
  );
}

export default App;
