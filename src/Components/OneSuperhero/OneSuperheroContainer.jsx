import React from "react"
import {withRouter} from 'react-router-dom'
import OneSuperhero from "./OneSuperhero"
import db from "../../redux/db.js"

const OneSuperheroContainer = (props) => {
   return <OneSuperhero infoSuperhero={() => db.getHeroes()} id={props.match.params.id}/>
}

const withURLoneHero = withRouter(OneSuperheroContainer)

export default withURLoneHero