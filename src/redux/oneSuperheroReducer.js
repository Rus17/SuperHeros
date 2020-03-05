import {getOneSuperheroARI} from '../api/api'

const GET_ONE_SUPERHERO = 'GET_ONE_SUPERHERO'

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

// ------------------------- Thunk Creators -------------------------
// ----------------------- Get one Supeheroes -----------------------

export const getOneSuperheroTC = (id) => {
   return (dispatch) => dispatch(getOneSuperheroAC(getOneSuperheroARI(id)))
}

export default oneSuperheroReducer