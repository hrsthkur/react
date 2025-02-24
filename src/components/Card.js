import React from "react"
import { IMAGE_CDN } from "../utils/constants.js/constants"



const Card = ({resdata = resdata}) => {
return(
  
    <div className="res-card">
        <img src={ IMAGE_CDN+resdata.info.cloudinaryImageId}></img>
            <h3 className="name">{resdata.info.name}</h3>
            <h4 className="cuisine">{resdata.info.cuisines.join(", ")}</h4>
            <div className="rating">
                 <h4>{resdata.info.avgRating + " stars"}</h4>
            <h4>{resdata.info.deliveryTime}</h4>
            </div>
           
            
        </div>
)
}


export default Card