import React, {useState} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux"
import {addSuperheroTC} from '../../redux/listSuperheroesReducer'
import {Redirect} from 'react-router-dom'
import {Input, TextArea} from "../FormsControls/FormsControls"
import {required, minInput, minText} from "../Validators/validators"

const FormAddSuperhero = (props) => {

   return (<form onSubmit={props.handleSubmit}>

            {props.showImages}
            <br />
            Add image 
            <input type="file" onChange={(e) => props.addImage(e.target.files[0].name)} />
            <br />

            <div>Nick name: </div>
            <Field
               name="nickname"
               component={Input}
               validate={[required, minInput]}
               />

            <div>Real name: </div>
            <Field
               name="real_name"
               component={Input}
               validate={[required, minInput]}
               />

            <div>Origin description: </div>
            <Field
               name="origin_description"
               component={TextArea}
               validate={[required, minText]}
               />

            <div>Superpowers: </div>
            <Field
               name="superpowers"
               component={TextArea}
               validate={[required, minText]}
               />

            <div>Catch phrase: </div>
            <Field
               name="catch_phrase"
               component={TextArea}
               validate={[required, minText]}
               />

            <button>Add Superhero</button>
         </form>      
   )
}


const ReduxFormAddSuperhero = reduxForm ({form: 'AddSuperhero'})(FormAddSuperhero)

const FormAddSuperheroContainer = (props) => {

   let [editMode, setEditMode] = useState(true)

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
            Images: imageName ? [`./${imageName}`] : []
         }
      
      props.addSuperheroTC(data)
      setEditMode(false)
   }

   return <div className="item" >     
      {editMode ? <ReduxFormAddSuperhero onSubmit={onSubmit} addImage={addImage} /> : <Redirect to={"/"} />}
   </div>
}

let MapDispatchToProps = (dispatch) => {
   return {
      addSuperheroTC: (data) => dispatch(addSuperheroTC(data))
   }
}

export default connect (null, MapDispatchToProps)(FormAddSuperheroContainer)
