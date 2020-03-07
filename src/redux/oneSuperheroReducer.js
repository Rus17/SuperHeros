import {getOneSuperheroARI, updateHeroAPI} from '../api/api'

const GET_ONE_SUPERHERO = 'GET_ONE_SUPERHERO'
const GET_DEFAULT_VALUE = "GET_DEFAULT_VALUE"
// const UPDATE_SUPERHERO = 'UPDATE_SUPERHERO'

let initialState = {
   oneSuperhero: [],
   initFormEditSHero: {}
}

let oneSuperheroReducer = (state = initialState, action) => {
   switch(action.type){
      case GET_ONE_SUPERHERO: {
         let newState = {
            ...state,
            oneSuperhero: action.data
         }
         newState.oneSuperhero.Images = [...action.data.Images]
         return newState
      }

      case GET_DEFAULT_VALUE: {
        return {
          ...state,
          initFormEditSHero: action.data
        }
      }

      default: return state
      }
}




// ------------------------- Action Creators -------------------------
// ----------------------- Get one Supehero -----------------------

export const getOneSuperheroAC = (data) => {
   return ({
      type: GET_ONE_SUPERHERO,
      data
   })
}

export const getDefaultSHeroAC = (data) => {
  return ({
    type: GET_DEFAULT_VALUE,
    data
  })
}

// ------------------------- Thunk Creators -------------------------
// ----------------------- Get one Supeheroes -----------------------

export const getOneSuperheroTC = (id) => {
   return (dispatch) => dispatch(getOneSuperheroAC(getOneSuperheroARI(id)))
}

export const updateSuperheroTC = (data) => {
   return (dispatch) => {
     updateHeroAPI(data)  //обновляем данные на сервере
     dispatch(getOneSuperheroTC(data.id)) //получаем новые данные с сервера
   }
}

export default oneSuperheroReducer
