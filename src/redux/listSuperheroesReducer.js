import {
   getListSuperheroesAPI,
   getNumberSuperheroesAPI,
   delHeroAPI,
   addHeroAPI
} from "../api/api"

const GET_LIST_SUPERHEROES = 'GET_LIST_SUPERHEROES'
const GET_NUMBER_SUPERHEROES = 'GET_NUMBER_SUPERHEROES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let initialState = {
   listSuperheroes: [],

   numberSuperheroes: 0,
   pageSize: 5,
   currentPage: 1
}

const listSuperheroesReducer = (state = initialState, action) => {
   switch(action.type){

      case GET_NUMBER_SUPERHEROES:
         return {
            ...state,
            numberSuperheroes: action.number
         }

      case GET_LIST_SUPERHEROES:
         return {
            ...state,
            listSuperheroes: action.data
         }

      case SET_CURRENT_PAGE:
      return {
         ...state,
         currentPage: action.currentPage
      }


      default: return state
   }
}



// ------------------------- Action Creators -------------------------
// ----------------------- Get Number Superheroes -----------------------
export const getNumberSuperheroesAC = (number) => {
   return ({
      type: GET_NUMBER_SUPERHEROES,
      number
   })
}


// ----------------------- Get List Superheroes -----------------------
export const getListSuperheroesAC = (data) => {
   return ({
      type: GET_LIST_SUPERHEROES,
      data
   })
}

export const setCurrentPageAC = (currentPage) => {
   return ({
      type: SET_CURRENT_PAGE,
      currentPage
   })
}


// ------------------------- Thunk Creators  -------------------------
// ----------------------- Get Number Superheroes -----------------------
export const getNumberSuperheroesTC = () => {
   return (dispatch) => {
         dispatch(getNumberSuperheroesAC(getNumberSuperheroesAPI()))
   }
}

// ----------------------- Get List Superheroes -----------------------

export const getListSuperheroesTC = (currentPage = 1) => {
   return (dispatch) => {
      dispatch(setCurrentPageAC(currentPage))   // Пишем текущую страницу в СТОР
      let myResponse = getNumberSuperheroesAPI() // Запрашиваем количество героев на сервере
      dispatch(getNumberSuperheroesAC(myResponse)) // Пишем количество героев в СТОР
      let listSH = getListSuperheroesAPI(currentPage) // Запрашиваем порцию супергероев на сервере
      dispatch(getListSuperheroesAC(listSH))    // Пишем порцию героев в СТОР
   }
}

export const delSuperheroTC = (idHero, currentPage) => {
   return (dispatch) => {
      delHeroAPI(idHero)      // Запрашиваем удаление героя на сервере
      dispatch(getNumberSuperheroesTC()) // Запрашиваем новое количество героев с сервера
      dispatch(getListSuperheroesTC(currentPage))     // Запрашиваем новую порцию супергероев на сервере
   }
}

export const addSuperheroTC = (data) => {
  return (dispatch) => {
    addHeroAPI(data)
  }
}


export default listSuperheroesReducer
