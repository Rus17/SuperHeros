import startdb from "../db"
// import {delHero} from "../db"

export const getListSuperheroesAPI = (n) => {
   return startdb.getHeroes(n)
}

export const getOneSuperheroARI = (currentID) => {
//   console.log("api", startdb.getOneHeroes(id).Images[0])
   return startdb.getOneHero(currentID)
}

export const getNumberSuperheroesAPI = () => {
   return startdb.numberHeroes()
}

export const delHeroAPI = (idHero) => {
    startdb.delHero(idHero)
}

export const updateHeroAPI = (data) => {
  startdb.updateHero(data)
}

export const addHeroAPI = (data) => {
  startdb.addHero(data)
}
