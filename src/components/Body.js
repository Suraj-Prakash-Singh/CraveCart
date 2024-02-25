import { resList } from "../utils/mockData";
import FoodCard from "./FoodCard";

const Body = () => {
    return (
        <div className="bodyContainer">
            <div className="heading">
                <h2>Featured items in your area</h2>
            </div>
            <div className="cardsContainer">
                {resList.map((restrauntInfo, index) => <FoodCard key={index} restraunt={restrauntInfo}></FoodCard>)}
            </div>
        </div>
    );
}

export default Body;