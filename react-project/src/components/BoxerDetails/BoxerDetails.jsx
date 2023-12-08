import { useContext, useEffect, useReducer } from "react"
import { useState } from "react"
import * as boxerService from "../../services/boxerService"
import * as commentService from "../../services/commentService"
import { Link, useNavigate, useParams } from "react-router-dom"
import  reducer  from "./commentReducer"
import { TodoContext } from "../contexts/TodoContexts"
import { useMemo } from "react"

import useForm from "../../hooks/useForm"
import { Button } from "react-bootstrap";

export default function BoxerDetails(){

    const navigate = useNavigate()

    const { email, userId } = useContext(TodoContext)

    const [boxer, setBoxer] = useState({})

    const [comment, dispath] = useReducer(reducer, [])

    const { boxerId } = useParams()

    useEffect(()=>{
      boxerService.getOne(boxerId)
      .then(setBoxer)
      commentService.getAll(boxerId)
      .then(result =>{
        dispath({
            type: 'Get_All_Commnets',
            payload: result,

        }) 
            
      })

    },[boxerId])



const addCommentHandler = async (values) => {

    const newComment = await commentService.createComment(
        boxerId,
        values.comment
    )
     newComment.owner = { email }
     dispath({
        type: 'Add_Comm',
        payload: newComment
     })
}
const deleteClickHandler = async () =>{

    const hasConfirm = confirm('Are you sure you want to remove this boxer?')

    if(hasConfirm){
       await boxerService.remove(boxerId)

       navigate('/boxers')
    }
    
}

const initialValue =  useMemo(() => ({
    comment: '',
  }),[])


const { values, onChange, onSubmit } = useForm(addCommentHandler, initialValue)

    return(
        <>
      <section id="boxer-details">  
            <div className="info-section">
            <div className="boxer-header">
            <img className="boxer-img" src={boxer.imageUrl} alt={boxer.title} />
            <h1>{boxer.title}</h1>
            <span className="levels">Number of world titles: {boxer.maxLevel}</span>
            <p className="type">{boxer.category}</p>
            </div>
            <p className="text">
            {boxer.summary}
            </p>
            {/* Bonus ( for Guests and Users ) */}
            <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                    {comment.map(({_id, text, owner:  { email } })=>
                    (<li key={_id} className="comment" ><p>{email}: {text}</p></li>))} 
            </ul>
            {comment.length === 0 && (<p className="no-comment">No comments.</p>)}
            
            </div>
            {userId === boxer._ownerId && (<div className="buttons">
            <Link to={`/boxers/${boxerId}/edit`} className="button">Update</Link>
            <Button className="button" onClick={deleteClickHandler}>Delete</Button>
            </div>
        )}
         <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form" onSubmit={onSubmit}>
      <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"  />
      <input className="btn submit" type="submit" defaultValue="Add Comment" />
    </form>
  </article>
            </div>
    </section>    
        </>
    )
}