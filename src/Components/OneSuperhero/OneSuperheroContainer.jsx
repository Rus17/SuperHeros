import React from "react"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import OneSuperhero from "./OneSuperhero"
import {getOneSuperheroTC} from '../../redux/oneSuperheroReducer'

class OneSuperheroContainer extends React.Component {   
   
   componentDidMount(props){
      this.props.getOneSuperheroTC(this.props.match.params.id)
   }
   
   render(props){
      if(this.props.oneSuperhero.id !== undefined){
      return <OneSuperhero  
                  oneSuperhero={this.props.oneSuperhero}/>
      } else { return <>...</>}
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
      getOneSuperheroTC: (id) => dispatch(getOneSuperheroTC(id))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(withURLoneHero)
