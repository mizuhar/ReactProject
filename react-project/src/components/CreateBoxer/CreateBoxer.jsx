import * as boxerService from "../../services/boxerService"
import {useNavigate} from 'react-router-dom'

export default function CreateBoxer(){

    const navigate = useNavigate()

    const createBoxerSubmitHandler = (e) =>{

    e.preventDefault()

    const boxerData = Object.fromEntries(new FormData(e.currentTarget))

   try {
    boxerService.create(boxerData)
    navigate('/boxers')
    
   } catch (error) {
    console.log(error);
   }

    }

    return(
        <>
                <section id="create-page" className="auth">
  <form id="create" onSubmit={createBoxerSubmitHandler}>
    <div className="container">
      <h1>Your vote</h1>
      <label htmlFor="leg-title">Name of the boxer:</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter boxer name..."
      />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Enter boxer category..."
      />
      <label htmlFor="levels">Number of world title:</label>
      <input
        type="number"
        id="maxLevel"
        name="maxLevel"
        min={1}
        placeholder={1}
      />
      <label htmlFor="boxer-img">Image:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />
      <label htmlFor="summary">Summary:</label>
      <textarea name="summary" id="summary" defaultValue={""} />
      <input  className="btn submit" type="submit" defaultValue="Create Boxer" />
    </div>
  </form>
</section>
        </>
    )
}