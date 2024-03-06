import { useState } from "react";
import ItemList from "./ItemList";

const ResAccordion = (props) => {
    // const [expand, setExpand] = useState(false);
    const expand = props.expand
    console.log("In resAccordion");
    const itemCardsList = props.menuItems.itemCards;
    return (
        <div className="accordionContainer">
            <div className="accordion" onClick={()=> props.setShowIndex()}>
                <h3 className="accordionResCategory">{props.menuItems.title} ({props.menuItems.itemCards.length})</h3>
                <span className="downArrow">⬇️</span>
            </div>
            {expand && itemCardsList.map((card) => <ItemList data={card.card}></ItemList>)}
        </div>
        
    )
}

export default ResAccordion;