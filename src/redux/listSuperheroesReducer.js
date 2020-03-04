import {
   getListSuperheroesAPI, 
   getNumberSuperheroesAPI, 
   delHeroAPI
} from "../api/api"

const GET_LIST_SUPERHEROES = 'GET_LIST_SUPERHEROES'
const GET_NUMBER_SUPERHEROES = 'GET_NUMBER_SUPERHEROES'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


let initialState = {
   listSuperheroes: [],
   
   numberSuperheroes: 0,
   pageSize: 5,
//   totalUsersCount: 0,
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
// ----------------------- Get Number Supeheroes -----------------------
export const getNumberSuperheroesAC = (number) => {
   return ({
      type: GET_NUMBER_SUPERHEROES,
      number
   })
}


// ----------------------- Get List Supeheroes -----------------------
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
// ----------------------- Get Number Supeheroes -----------------------
export const getNumberSuperheroesTC = () => {
   return (dispatch) => {
         dispatch(getNumberSuperheroesAC(getNumberSuperheroesAPI()))
   }
}

// ----------------------- Get List Supeheroes -----------------------

export const getListSuperheroesTC = (currentPage = 1) => {
   return (dispatch) => {
      dispatch(setCurrentPageAC(currentPage))   // Пишем текущую страницу в СТОР
      let myResponse = getNumberSuperheroesAPI() // Запрашиваем количество героев на сервере 
      dispatch(getNumberSuperheroesAC(myResponse)) // Пишем количество героев в СТОР 
      let listSH = getListSuperheroesAPI(currentPage) // Запрашиваем порцию супергероев на сервере 
      dispatch(getListSuperheroesAC(listSH))    // Пишем порцию героев в СТОР 
   }
}

// ----------------------- Del Supehero -----------------------

export const delSuperheroTC = (idHero, currentPage) => {
   return (dispatch) => {
      dispatch(getNumberSuperheroesAC(delHeroAPI(idHero)))      // Запрашиваем удаление героя на сервере   
      dispatch(getListSuperheroesTC(currentPage))     // Запрашиваем новую порцию супергероев на сервере 
   }
}


export default listSuperheroesReducer