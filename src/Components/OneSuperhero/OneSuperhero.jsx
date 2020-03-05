import React, {useState}  from "react"

const OneSuperhero = (props) => {
   
   let [editMode, setEditMode] = useState(false)
   let [arrImages, setImages] = useState([...props.oneSuperhero.Images])
   
   const changeState = () => {
      setEditMode(!editMode)
   }
   
   let newArrImages = [...arrImages]
   
   let delImage = (indImage) => {
      for(let i = 0; i < newArrImages.length; i++){
         if(newArrImages[i] === indImage){            
            newArrImages.splice(i, 1)
         }
      }
      setImages(newArrImages)
   }
   
   let addImage = (newImage) => {
      newArrImages.push(`./${newImage}`)
      setImages(newArrImages)
   }
      
   let showImages = arrImages.map((i) => {
      return (
         <div key={i}>            
            <img  src={'../../' + i} alt="Only images from the database are displayed"/>
            {editMode && <button onClick={() => {
                     delImage(i)
                  }}>Delete this image</button>}
         </div>
      )
   })
   
   let data

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
         <br />Add image <input type="file" onChange={(e) => addImage(e.target.files[0].name)} /><br />
         <p><b>Nick name: </b><input defaultValue={props.oneSuperhero.nickname} /></p>
         <p><b>Real name: </b><input defaultValue={props.oneSuperhero.real_name} /></p>
         <p><b>Origin description: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.origin_description} /></p>
         <p><b>Superpowers: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.superpowers} /></p>
         <p><b>Catch phrase: </b><textarea cols="50" rows="4" defaultValue={props.oneSuperhero.catch_phrase} /></p>

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