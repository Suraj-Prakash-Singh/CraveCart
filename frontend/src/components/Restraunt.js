import { useEffect, useState } from "react";
import AccordionShimmer from "./AccordionShimmer";
import ResAccordion from "./ResAccordion";
import { SWIGGYMENUAPI } from "../utils/constants";
import { useParams } from "react-router";

const Restraunt = () => {

    const [name, setName] = useState("");
    const [menuItems, setMenuItems] = useState([]);
    const [showIndex, setShowIndex] = useState(null);
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

    if (name==="") return <AccordionShimmer/>
    return (
        <div className="restrauntContainer">
            <h1>{name}</h1>
            {menuItems.map((item, index) => {
                return <ResAccordion key={index} menuItems={item.card.card} expand={index===showIndex ? true : false}
                        setShowIndex={()=> setShowIndex(index)}>
                        </ResAccordion>})}
        </div>
    )
}

export default Restraunt;