import React, {useEffect} from 'react'
import {connect} from "react-redux"
import ListSuperheroes from "./ListSuperheroes"
import {getListSuperheroesTC, delSuperheroTC} from "../../redux/listSuperheroesReducer"

const ListSuperheroesContainer = (props) => {
   
   useEffect(() => {
         props.getListSuperheroesTC(props.listSuperheroes.currentPage)
      }, [props.listSuperheroes.numberSuperheroes])
   
   let clickHandler = (p) => {
      props.getListSuperheroesTC(p)
   }
   
   if(props.listSuperheroes.listSuperheroes.length === 0){return <p>...</p>}
   else return <ListSuperheroes 
                  list={props.listSuperheroes.listSuperheroes}
                  number={props.listSuperheroes.numberSuperheroes}
                  currentPage={props.listSuperheroes.currentPage}  
                  delSuperheroTC={props.delSuperheroTC}                
                  clickHandler={clickHandler}
              />
}


let MapStateToProps = (state) => {
   return {
      listSuperheroes: state.listSuperheroes
   }   
}

let MapDispatchToProps = (dispatch) => {
   return {
      getListSuperheroesTC: (currentPage) => dispatch(getListSuperheroesTC(currentPage)),
      delSuperheroTC: (idHero, currentPage) => dispatch(delSuperheroTC(idHero, currentPage))
   }   
}


export default connect(MapStateToProps, MapDispatchToProps)(ListSuperheroesContainer)