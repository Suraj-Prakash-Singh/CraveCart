import { useEffect, useState } from "react";
import RestrauntShimmer from "./RestrauntShimmer";
import { SWIGGYMENUAPI } from "../utils/constants";
import { useParams } from "react-router";

const Restraunt = () => {

    const [name, setName] = useState("");
    const [menuItems, setMenuItems] = useState([]);
    const params = useParams();

    useEffect(()=> {
        fetchData();
    },[]);
    async function fetchData(){
        const resId = params.resId;
        const data = await fetch(SWIGGYMENUAPI+resId);
        const json = await data.json();
        const resName = json.data.cards[2].card.card.info.name;
        const menuItemsList = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
        console.log(menuItemsList)
        setName(resName);
        setMenuItems(menuItemsList)
    }

    if (name==="") return <RestrauntShimmer/>
    return (
        <div className="restrauntContainer">
            <h1>{name}</h1>
            <p></p>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item) => <li>{item.card.info.name} - Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default Restraunt;