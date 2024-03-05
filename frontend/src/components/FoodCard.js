import {imgCDNLink} from "../utils/constants"
import star from "../assets/starFill.svg";

const FoodCard = (restraunt) => {
    const {name, cloudinaryImageId, avgRating, locality} = restraunt.restraunt.info;
    return (
        <div className="foodCard">
            <img alt="burgerImg" src={imgCDNLink + cloudinaryImageId}></img>
            <div className="foodCardMetaData">
                <div className="ratingContainer">
                    <img src={star}></img>
                    <p>{avgRating}</p>
                </div>
                <p className="dnd">Dining & Delivery</p>
            </div>
            <div className="resName">{name}</div>
            <div className="locality">{locality}</div>
        </div>
    )
}

export const FoodCardPromoted = (FoodCard) => {
    return (props) =>{
        return (
            <div>
                <div className="promoted">Promoted</div>
                <FoodCard {...props}></FoodCard>
            </div>
        )
    }
}

export default FoodCard;