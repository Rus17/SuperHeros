import React from "react"
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {addSuperheroTC} from '../../redux/listSuperheroesReducer'

const FormAddSuperhero = (props) => {

   return (<div className="item">
         <form onSubmit={props.handleSubmit}>

            {props.showImages}
            <br />Add image <input type="file" onChange={(e) => props.addImage(e.target.files[0].name)} /><br />


               <div>Nick name: </div>
               <Field
                  name="nickname"
                  type="input"
                  component="input"
                  />

               <div>Real name: </div>
               <Field
                  name="real_name"
                  type="input"
                  component="input"
                  />

               <div>Origin description: </div>
               <Field
                  name="origin_description"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50"
                  />

               <div>Superpowers: </div>
               <Field
                  name="superpowers"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50"
                  />

               <div>Catch phrase: </div>
               <Field
                  name="catch_phrase"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50"
                  />

            <button>Save changes</button>
         </form>
      </div>
   )
}



const ReduxFormAddSuperhero = reduxForm ({form: 'AddSuperhero'})(FormAddSuperhero)

const FormAddSuperheroContainer = (props) => {

  let imageName

  const addImage = (iN) => {
     imageName = iN
  }

  const onSubmit = (formData) => {
    let data = {
       nickname: formData.nickname,
       real_name : formData.real_name,
       origin_description: formData.origin_description,
       superpowers: formData.superpowers,
       catch_phrase: formData.catch_phrase,
       Images: [imageName]
    }
    props.addSuperheroTC(data)
    // setEditMode(!editMode)

   console.log(data)
  }

  return <ReduxFormAddSuperhero onSubmit={onSubmit} addImage={addImage}/>
}

let MapDispatchToProps = (dispatch) => {
  return {
    addSuperheroTC: (data) => dispatch(addSuperheroTC(data))
  }
}

export default connect (null, MapDispatchToProps)(FormAddSuperheroContainer)
