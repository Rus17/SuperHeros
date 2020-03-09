import React from "react"
import {Field, reduxForm} from 'redux-form'

const FormEditSHero = (props) => {

   return (<div className="item">
         <form onSubmit={props.handleSubmit}>
            {props.arrImages[0] && props.showImages}
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
                  
                  <br />

            <button>Save changes</button>
         </form>
      </div>
   )
}


export default reduxForm ({form: 'EditSHero'})(FormEditSHero)
