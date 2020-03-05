import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import listSuperheroesReducer from './listSuperheroesReducer'
import oneSuperheroReducer from './oneSuperheroReducer'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
   listSuperheroes: listSuperheroesReducer,
   oneSuperhero: oneSuperheroReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store