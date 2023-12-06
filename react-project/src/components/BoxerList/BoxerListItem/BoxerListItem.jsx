import { Link } from "react-router-dom";

export default function BoxerListItem({
    
        _id,
        title,
        category,
        imageUrl,
    
}){

console.log(_id);

    return(
        <>
               <div className="allGames">
    <div className="allGames-info">
      <img src={imageUrl} />
      <h6>{category}</h6>
      <h2>{title}</h2>
      <Link to={`/boxers/${_id}`} className="details-button">
        More Information
      </Link>
    </div>
  </div>
        </>
    )
}