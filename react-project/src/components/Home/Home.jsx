import { useEffect, useState } from "react"
import * as boxerService from "../../services/boxerService"
import ListOfBoxers from "./ListOfBoxers/ListOfBoxers"



export default function Home(){

    const [ boxer, setBoxer ] = useState([])

    useEffect(()=>{
       boxerService.getAll()
        .then(result =>
           setBoxer(result)
           )},[])

    return(
        <>
    <section id="welcome-world">
            <div className="welcome-message">
                <h2>The greatest</h2>
                <h3>boxers of all time</h3>
                <h3 style={{fontSize: '20px'}}> vote in our site!</h3>
            </div>
            <img style={{marginTop:'2em', opacity: 0.45}} src="https://www.sportco.io/images/post/vs_1629179581.jpg" alt="all-time" />
    </section>

    {boxer.map(box => <ListOfBoxers {...box}></ListOfBoxers>) }

    {!boxer.length === 0 && ( <p className="no-articles">No suggestion yet</p>)}
        </>
         
    )
}