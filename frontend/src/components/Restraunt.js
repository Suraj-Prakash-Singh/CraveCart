import { useEffect, useState } from "react";
import RestrauntShimmer from "./RestrauntShimmer";
import ResAccordion from "./ResAccordion";
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
        const resName = json.data.cards[0].card.card.info.name;
        const list = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        const menuItemsList = list.filter((item) => {
            return item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        })
        setName(resName);
        setMenuItems(menuItemsList);
    }

    if (name==="") return <RestrauntShimmer/>
    return (
        <div className="restrauntContainer">
            <h1>{name}</h1>
            {menuItems.map((item, index) => <ResAccordion key={index} menuItems={item.card.card}></ResAccordion>)}
        </div>
    )
}

export default Restraunt;