import React from "react"
import db from '../../redux/db'
import ListSuperheroes from "./ListSuperheroes"

const ListSuperheroesContainer = () => {
   return <ListSuperheroes list={() => db.getHeroes()}/>
}

export default ListSuperheroesContainer