import React, {useState, useEffect}  from "react"
import FormEditSHero from "../FormEditSHero/FormEditSHero"

const OneSuperhero = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [arrImages, setImages] = useState([...props.oneSuperhero.Images])

   const changeState = () => {
     props.getDefaultSHeroAC({
       id: props.oneSuperhero.id,
       nickname: props.oneSuperhero.nickname,
       real_name : props.oneSuperhero.real_name,
       origin_description: props.oneSuperhero.origin_description,
       superpowers: props.oneSuperhero.superpowers,
       catch_phrase: props.oneSuperhero.catch_phrase
     })
      
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
      props.updateSuperheroTC(data)
      setEditMode(!editMode)

   }

   let showImages = arrImages.map((i) => {
      return (
         <div key={i}>
            <img  src={'../../' + i} alt={i}/>
            {editMode && <button onClick={() => {
                     delImage(i)
                  }}>Delete this image</button>}
         </div>
      )
   })

   if(!editMode){
      return (<div className="item">
         <h1>{props.oneSuperhero.nickname}</h1>
         {arrImages[0] && showImages}
         <p><b>Real name: </b>{props.oneSuperhero.real_name}</p>
         <p><b>Origin description: </b>{props.oneSuperhero.origin_description}</p>
         <p><b>Superpowers: </b>{props.oneSuperhero.superpowers}</p>
         <p><b>Catch phrase: </b>{props.oneSuperhero.catch_phrase}</p>
         <button onClick={changeState}>Edit data</button>
      </div>)
   } else {
      return <FormEditSHero
               showImages={showImages}
               arrImages={arrImages}
               changeState={changeState}
               oneSuperhero={props.oneSuperhero}
               addImage={addImage}
               onSubmit={onSubmit}
               initialValues={props.initFormEditSHero}
               />
   }
}

export default OneSuperhero
