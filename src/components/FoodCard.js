import {imgCDNLink} from "../utils/constants"

const FoodCard = (restraunt) => {
    const {name, cloudinaryImageId, costForTwo, avgRating, locality} = restraunt.restraunt.info;
    return (
        <div className="foodCard">
            <img alt="burgerImg" src={imgCDNLink + cloudinaryImageId}></img>
            <div className="foodCardMetaData">
                <h3>{name}</h3>
                <h4>{locality}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo} minutes</h4>
            </div>
        </div>
    )
}

export default FoodCard;