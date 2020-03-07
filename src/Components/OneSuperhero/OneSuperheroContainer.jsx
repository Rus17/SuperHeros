import React from "react"
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import OneSuperhero from "./OneSuperhero"
import {
  getOneSuperheroTC,
  getDefaultSHeroAC,
  updateSuperheroTC
} from '../../redux/oneSuperheroReducer'

class OneSuperheroContainer extends React.Component {

   componentDidMount(props){
      this.props.getOneSuperheroTC(this.props.match.params.id)
   }

   render(props){
      if(this.props.oneSuperhero.id !== undefined){
      return <OneSuperhero
                  oneSuperhero={this.props.oneSuperhero}
                  getDefaultSHeroAC={this.props.getDefaultSHeroAC}
                  initFormEditSHero={this.props.initFormEditSHero}
                  updateSuperheroTC={this.props.updateSuperheroTC}
                  />
      } else { return <>...</>}
   }
}

const withURLoneHero = withRouter(OneSuperheroContainer)


let MapStateToProps = (state) => {
   return{
      oneSuperhero: state.oneSuperhero.oneSuperhero,
      initFormEditSHero: state.oneSuperhero.initFormEditSHero
   }
}

let MapDispatchToProps = (dispatch) => {
   return {
      getOneSuperheroTC: (id) => dispatch(getOneSuperheroTC(id)),
      getDefaultSHeroAC: (data) => dispatch(getDefaultSHeroAC(data)),
      updateSuperheroTC: (data) => dispatch(updateSuperheroTC(data))
   }
}

export default connect(MapStateToProps, MapDispatchToProps)(withURLoneHero)
