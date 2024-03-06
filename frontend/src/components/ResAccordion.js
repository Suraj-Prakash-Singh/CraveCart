import { useState } from "react";

const ResAccordion = (props) => {
    const [expand, setExpand] = useState(false);
    return (<>
        <div className="accordion" onClick={() => setExpand(!expand)}>
            <h3 className="accordionResCategory">{props.menuItems.title} ({props.menuItems.itemCards.length})</h3>
            <span className="downArrow">⬇️</span>
        </div>
        {expand && <div className="expandSection">Expand</div>}
        </>
    )
}

export default ResAccordion;