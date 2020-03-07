import React from "react"
import {NavLink, Redirect} from "react-router-dom"
import "./ListSuperheroes.css"

const ListSuperheroes = (props) => {

   let numberPages = Math.ceil(props.number / 5)

   let pages =[]
   for(let i = 0; i < numberPages; i++){pages.push(i)}

   let showPages = pages.map((p) =>{

      if(p + 1 === props.currentPage){
         return <span key={p} onClick={(e) => {props.clickHandler(p + 1)}} className="currentPage">{p + 1}</span>
      } else {
         return <span key={p} onClick={(e) => {props.clickHandler(p + 1)}}>{p + 1}</span>
      }
   })


   let showHeroes = props.list.map((h) => {
      return (
         <div className="innerContainer" key={h.id}>
            <NavLink to={`/superhero/${h.id}`}>
               <img src={h.Images[0]} alt="avatar" />
               <p>{h.nickname}</p>
            </NavLink>
               <button onClick={() => props.delSuperheroTC(h.id, props.currentPage)
               }>Dell this superhero</button>
         </div>
      )
   })

   return (
      <div className="item">
         <NavLink to={'/addSuperhero'} >Add superhero</NavLink>
        <h2>List all the superheroes</h2>
         {showPages}
         {showHeroes}
      </div>
   )
}

export default ListSuperheroes
