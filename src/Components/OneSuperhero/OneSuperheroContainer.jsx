import React from "react"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import OneSuperhero from "./OneSuperhero"
import {getOneSuperheroTC, delImageAC} from '../../redux/oneSuperheroReducer'

class OneSuperheroContainer extends React.Component {   
   
   componentDidMount(props){
      this.props.getOneSuperheroTC(this.props.match.params.id)
   }
   
   render(props){
      return <OneSuperhero  
                  oneSuperhero={this.props.oneSuperhero} 
                  delImageAC={(indImage) => this.props.delImageAC(indImage)}/>
   }
}

const withURLoneHero = withRouter(OneSuperheroContainer)


let MapStateToProps = (state) => {   
   return{
      oneSuperhero: state.oneSuperhero.oneSuperhero
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getOneSuperheroTC: (id) => dispatch(getOneSuperheroTC(id)),
      delImageAC: (indImage) => dispatch(delImageAC(indImage))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(withURLoneHero)
