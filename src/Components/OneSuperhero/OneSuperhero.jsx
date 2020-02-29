import React, {useState}  from "react"

const OneSuperhero = (props) => {
   
   let [editMode, setEditMode] = useState(false)
   
   const changeState = () => {
      setEditMode(!editMode)
   }
   
   let data
   if(!editMode){
      data = <div>
         <h1>{props.infoSuperhero()[props.id].nickname}</h1>
        <img src={'../../' + props.infoSuperhero()[props.id].Images[0]} />
         <p><b>Real name: </b>{props.infoSuperhero()[props.id].real_name}</p>
         <p><b>Origin description: </b>{props.infoSuperhero()[props.id].origin_description}</p>
         <p><b>Superpowers: </b>{props.infoSuperhero()[props.id].superpowers}</p>
         <p><b>Catch phrase: </b>{props.infoSuperhero()[props.id].catch_phrase}</p>
         <button onClick={changeState}>Edit data</button>
      </div>
   } else {
      data = <div>         
         <img src={'../../' + props.infoSuperhero()[props.id].Images[0]} />
         <p><b>Nick name: </b><input defaultValue={props.infoSuperhero()[props.id].nickname} /></p>
         <p><b>Real name: </b><input defaultValue={props.infoSuperhero()[props.id].real_name} /></p>
         <p><b>Origin description: </b><textarea cols="50" rows="4" defaultValue={props.infoSuperhero()[props.id].origin_description} /></p>
         <p><b>Superpowers: </b><textarea cols="50" rows="4" defaultValue={props.infoSuperhero()[props.id].superpowers} /></p>
         <p><b>Catch phrase: </b><textarea cols="50" rows="4" defaultValue={props.infoSuperhero()[props.id].catch_phrase} /></p>
         Add image <input type="file" /><br /><br /><br />
         <button onClick={changeState}>Save changes</button>
      </div>
   }
   return (
      <div className="item">
         {data}
      </div>
   )
}

export default OneSuperhero