import { useEffect } from "react"
import { useState } from "react"
import * as boxerService from "../../services/boxerService"
import BoxerListItem from "./BoxerListItem/BoxerListItem"


export default function BoxerList(){

  const [boxers, setBoxers] = useState([])

  useEffect(()=>{
   boxerService.getAll()
   .then(result => setBoxers(result))
   .catch(err => console.log(err))

  },[])


    return(
        <>
        <section id="catalog-page">
      <h1>All Boxers</h1>

     {boxers.map(x=> (<BoxerListItem key={x._id} {...x}/>))}

  

    {boxers.length === 0 && <h3 className="no-articles">No suggestions yet</h3>}
  
     </section>

        </>
    )
}