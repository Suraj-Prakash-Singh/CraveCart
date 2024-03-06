import { useState } from "react";
import ItemList from "./ItemList";

const ResAccordion = (props) => {
    const [expand, setExpand] = useState(false);
    console.log(props.menuItems)
    const itemCardsList = props.menuItems.itemCards;
    return (
        <div className="accordionContainer">
            <div className="accordion" onClick={() => setExpand(!expand)}>
                <h3 className="accordionResCategory">{props.menuItems.title} ({props.menuItems.itemCards.length})</h3>
                <span className="downArrow">⬇️</span>
            </div>
            {expand && itemCardsList.map((card) => <ItemList data={card.card}></ItemList>)}
        </div>
        
    )
}

export default ResAccordion;