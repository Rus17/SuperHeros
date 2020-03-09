import React from "react"
import {NavLink} from "react-router-dom"
import "../../App.css"
import "./header.css"

const Header = () => {
   return (
      <div className="header">
         <img src="./img/header.jpg" alt="phone"/>
         <NavLink to="/">
            <img className="logo" src="./img/logoSH.png" width="50px" alt=""/>   
         </NavLink>
         
      </div>
   )
}

export default Header