import { resList } from "../utils/mockData";
import FoodCard from "./FoodCard";
import { useState } from "react";

const Body = () => {
    const [list, setList] = useState(resList);
    return (
        <div className="bodyContainer">
            <div className="heading">
                <h2>Featured items in your area</h2>
                <button className="filter" onClick={()=> {
                    const newList = resList.filter((res) => res.info.avgRating > 4.2)
                    setList(newList);
                }}>Show Restraunts with high ratings</button>
            </div>
            <div className="cardsContainer">
                {list.map((restrauntInfo, index) => <FoodCard key={index} restraunt={restrauntInfo}></FoodCard>)}
            </div>
        </div>
    );
}

export default Body;