import React from "react"
import {Field, reduxForm} from 'redux-form'

const Form = (props) => {

   return (<div className="item">
         <form onSubmit={props.handleSubmit}>
            {props.showImages}
            <br />Add image <input type="file" onChange={(e) => props.addImage(e.target.files[0].name)} /><br />

            <p>
               <b>Nick name: </b>
               <input defaultValue={props.oneSuperhero.nickname} />
            </p>
            <p>
               <b>Nick name: </b>
               <Field
                  name="nickname"
                  type="input"
                  component="input"
                  />
            </p>

            <p>
               <b>Real name: </b>
               <input defaultValue={props.oneSuperhero.real_name} />
            </p>
            <p>
               <b>Real name: </b>
               <Field
                  name="real_name"
                  type="input"
                  component="input"
                  />
            </p>

            <p>
               <b>Origin description: </b>
               <textarea cols="50" rows="4" defaultValue={props.oneSuperhero.origin_description} />
            </p>
            <p>
               <b>Origin description: </b>
               <Field
                  name="origin_description"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50" 
                  />
            </p>

            <p>
               <b>Superpowers: </b>
               <textarea cols="50" rows="4" defaultValue={props.oneSuperhero.superpowers} />
            </p>
            <p>
               <b>Superpowers: </b>
               <Field
                  name="superpowers"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50" 
                  />
            </p>

            <p>
               <b>Catch phrase: </b>
               <textarea cols="50" rows="4" defaultValue={props.oneSuperhero.catch_phrase} />
            </p>

            <p>
               <b>Catch phrase: </b>
               <Field
                  name="catch_phrase"
                  type="textarea"
                  component="textarea"
                  rows="4"
                  cols="50" 
                  />
            </p>

            <button>Save changes</button>
         </form>
      </div>
   )
}

let ReduxLoginForm = reduxForm ({form: 'EditSHero'})(Form)

export default ReduxLoginForm