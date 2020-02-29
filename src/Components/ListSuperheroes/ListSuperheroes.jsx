import React from "react"
import {NavLink} from "react-router-dom"
import "./ListSuperheroes.css"

const ListSuperheroes = (props) => {
   const showHeroes = props.list().map((h) => {
      return (         
         <div className="innerContainer" key={h.id}>
            <NavLink to={`/superhero/${h.id}`}>
               <img src={h.Images[0]} alt="avatar" />
               <p>{h.nickname}</p>
            </NavLink>
               <button>Dell this superhero</button>            
         </div>         
      )
   })
   
   return (
      <div className="item">
         <button>Add superhero</button>
        <h2>List all the superheroes</h2>   
         {showHeroes}
      </div>
   )
}

export default ListSuperheroes