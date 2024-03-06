import { imgCDNLink } from "../utils/constants";

const ItemList = (props) => {
    console.log(props.data)
    const {name, price, imageId, description} = props.data.info;
    return (
        <div className="itemListContainer">
            <div className="textContainer">
                <h4>{name}</h4>
                <h5>₹ {price/100}</h5>
                <p>{description}</p>
            </div>
            <div className="imgContainer">
                <img className="itemImg" src={imgCDNLink + imageId}></img>
                <button className="addItem">ADD</button>
            </div>
        </div>
    )
}
export default ItemList;