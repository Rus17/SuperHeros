import React from "react"

const ListSuperheroes = (props) => {
   const showHeroes = props.list().map((h) => {
      return (         
         <div key={h.id}>
            <img src={h.Images[0]} alt="avatar" />
            <p>{h.nickname}</p>
         </div>         
      )
   })
   
   return (
      <div>
        <h2>List all the superheroes</h2>   
         {showHeroes}
      </div>
   )
}

export default ListSuperheroes