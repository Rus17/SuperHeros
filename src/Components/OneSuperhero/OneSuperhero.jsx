import React, {useState, useEffect}  from "react"
import Form from "../Form/Form"

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
   
   useEffect(() => {
      setImages([...props.oneSuperhero.Images])}, [props]	
   )
   
   const onSubmit = (formData) => {
         
      let data = {
         id: props.oneSuperhero.id,
         nickname: formData.nickname,
         real_name : formData.real_name,
         origin_description: formData.origin_description,
         superpowers: formData.superpowers,
         catch_phrase: formData.catch_phrase,
         Images: [...arrImages]
      }
      console.log(data)
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
   
   if(!editMode){
      return (<div className="item">            
         <h1>{props.oneSuperhero.nickname}</h1>
         {showImages}
         <p><b>Real name: </b>{props.oneSuperhero.real_name}</p>
         <p><b>Origin description: </b>{props.oneSuperhero.origin_description}</p>
         <p><b>Superpowers: </b>{props.oneSuperhero.superpowers}</p>
         <p><b>Catch phrase: </b>{props.oneSuperhero.catch_phrase}</p>
         <button onClick={changeState}>Edit data</button>
      </div>)
   } else {
      return <Form 
               showImages={showImages} 
               changeState={changeState} 
               oneSuperhero={props.oneSuperhero}
               addImage={addImage}
               onSubmit={onSubmit}
               />
   }   
}

export default OneSuperhero