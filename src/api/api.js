import startdb from "../db"
import {delHero} from "../db"

export const getListSuperheroesAPI = (n) => {
   return startdb.getHeroes(n)
}

export const getOneSuperheroARI = (id) => {
//   console.log("api", startdb.getOneHeroes(id).Images[0])
   return startdb.getOneHeroes(id)
}

export const getNumberSuperheroesAPI = () => {
   return startdb.numberHeroes()
}

export const delHeroAPI = (idHero) => {
   return delHero(idHero)
}
