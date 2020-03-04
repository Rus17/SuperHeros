import React from 'react'
import {Provider, connect} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"

import {getListSuperheroesTC} from "./redux/listSuperheroesReducer"

import './App.css'
import Header from "./Components/Header/Header"
import ListSuperheroes from "./Components/ListSuperheroes/ListSuperheroesContainer"
import OneSuperhero from "./Components/OneSuperhero/OneSuperheroContainer"

import store from "./redux/store.js"


class App extends React.Component {
   componentDidMount(props){
      this.props.getListSuperheroesTC()
   }
   
   render(){
      return (
        <div className="container">
           <Header />
           <Route exact path='/' component={ListSuperheroes} />
           <Route path='/superhero/:id' component={OneSuperhero} />           
        </div>
      )
   }   
}

let MapDispatchToProps = (dispatch) => {
   return {
      getListSuperheroesTC: () => dispatch(getListSuperheroesTC())
   }
}

const AppConnect = connect(null, MapDispatchToProps)(App)

const AppContainer = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <AppConnect />
         </Provider>
      </BrowserRouter>
   )
}

export default AppContainer
