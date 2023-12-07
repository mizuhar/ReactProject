import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import * as boxerService from "../../services/boxerService"

export default function BoxerUpdate(){

    const navigate = useNavigate()

    const { boxerId } = useParams()

    const [boxer, setBoxer] = useState({ 
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',})

        useEffect(()=>{
            boxerService.getOne(boxerId)
            .then(result=> 
                setBoxer(result))
        },[boxerId])

        
    

        const updateBoxerHandler = async (e)=>{
            e.preventDefault()
            const values = Object.fromEntries(new FormData(e.currentTarget))
              try {
               await boxerService.update(boxerId, values)
               navigate('/boxers')
              } catch (error) {
               console.log(error);
              } 
           }
    const onChange = (e) => {
    setBoxer(state => ({...state, [e.target.name]: e.target.value}))
}


    return(
        <>
                 <section id="create-page" className="auth">
  <form id="create" onSubmit={updateBoxerHandler}>
    <div className="container">
      <h1>Edit Boxer's details</h1>
      <label htmlFor="leg-title">Name of the Boxer:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={boxer.title}
        onChange={onChange}
        placeholder="Enter boxer name..."
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={boxer.category}
        onChange={onChange}
        placeholder="Enter boxer category..."
      />
      <label htmlFor="levels">Number of world title:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        value={boxer.maxLevel}
        onChange={onChange}
        min={1}
        placeholder={1}
      />
      <label htmlFor="boxer-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        value={boxer.imageUrl}
        onChange={onChange}
        placeholder="Upload a photo..."
      />
      <label htmlFor="summary">Summary:</label>
      <textarea name="summary"   id="summary" value={boxer.summary} onChange={onChange} defaultValue={""} />
      <input  className="btn submit" type="submit" defaultValue="Create Boxer" />
    </div>
  </form>
</section>
        </>
    )
}