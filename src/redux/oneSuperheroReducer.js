import {getOneSuperheroARI} from '../api/api'

const GET_ONE_SUPERHERO = 'GET_ONE_SUPERHERO'
const DEL_IMAGE = 'DEL_IMAGE'

let initialState = {
   oneSuperhero: []
}

let oneSuperheroReducer = (state = initialState, action) => {
   switch(action.type){
      case GET_ONE_SUPERHERO: {
         return {
         ...state,
            oneSuperhero: action.data
         }
      }
       
      case DEL_IMAGE: {
         let newState = {
            ...state
         }
         newState.oneSuperhero.Images = [...action.newArrImages]       
         console.log("newState", newState)
         return newState
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

// ----------------------- Del image -----------------------

export const delImageAC = (newArrImages) => {   
   return ({
      type: DEL_IMAGE,
      newArrImages
   })
}

// ------------------------- Thunk Creators -------------------------
// ----------------------- Get one Supeheroes -----------------------

export const getOneSuperheroTC = (id) => {
   return (dispatch) => dispatch(getOneSuperheroAC(getOneSuperheroARI(id)))
}

export default oneSuperheroReducer