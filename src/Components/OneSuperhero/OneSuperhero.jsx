import React, {useState}  from "react"

const OneSuperhero = (props) => {
   
   let [editMode, setEditMode] = useState(false)
   let [arrImages, setImages] = useState([props.oneSuperhero.Images])
   
   const changeState = () => {
      setEditMode(!editMode)
   }
   
    let delImage = (indImage) => {
      let newArrImages = [...props.oneSuperhero.Images]
      for(let i = 0; i < props.oneSuperhero.Images.length; i++){
         if(newArrImages[i] === indImage)
         newArrImages.splice(i, 1)         
      }
      setImages(newArrImages)
   }
   
//   let delImage = (indImage) => {
//      let newArrImages = [...props.oneSuperhero.Images]
//      for(let i = 0; i < props.oneSuperhero.Images.length; i++){
//         if(newArrImages[i] === indImage)
//         newArrImages.splice(i, 1)         
//      }
//      props.delImageAC(newArrImages)
//   }
   
   let data
   
   if(props.oneSuperhero.id !== undefined){
      
      console.log("arrImages", arrImages)
      let showImages = props.oneSuperhero.Images.map((i) => {
         return (
            <div key={i}>
               <img  src={'../../' + i} alt=""/>
               {editMode && <button onClick={() => {delImage(i)}}>Delete this image</button>}
            </div>
            )
      })
      
      if(!editMode){
         data = <div>            
            <h1>{props.oneSuperhero.nickname}</h1>
            {showImages}
            <p><b>Real name: </b>{props.oneSuperhero.real_name}</p>
            <p><b>Origin description: </b>{props.oneSuperhero.origin_description}</p>
            <p><b>Superpowers: </b>{props.oneSuperhero.superpowers}</p>
            <p><b>Catch phrase: </b>{props.oneSuperhero.catch_phrase}</p>
            <button onClick={changeState}>Edit data</button>
         </div>
      } else {
         data = <div>         
            {showImages}
            <br />Add image <input type="file" /><br />
            <p><b>Nick name: </b><input defaultValue={props.oneSuperhero.nickname} /></p>
            <p><b>Real name: </b><input defaultValue={props.oneSuperhero.real_name} /></p>
            <p><b>Origin description: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.origin_description} /></p>
            <p><b>Superpowers: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.superpowers} /></p>
            <p><b>Catch phrase: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.catch_phrase} /></p>
            
            <button onClick={changeState}>Save changes</button>
         </div>
      }
   }
    
   return (
      <div className="item">
         {data}
      </div>
   )
   
}

export default OneSuperhero