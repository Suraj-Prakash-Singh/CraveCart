import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SWIGGYAPI } from "../utils/constants";

const Body = () => {

    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(()=> {
        async function fetchData(){
            const response = await fetch(SWIGGYAPI);
            const json = await response.json();
            const newList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setList(newList);
            setFilteredList(newList);
        }
        fetchData();
    }, []);
    //without dependency array in useEffect, the application goes into infinte loop why?.

    function searchOnClickHandler(){
        console.log(search)
        const updatedResList = list.filter((res) => res?.info?.name.toLowerCase().includes(search.toLowerCase()));
        console.log(updatedResList);
        setFilteredList(updatedResList);
    }
    return list.length===0 ? <Shimmer/> : (
        <div className="bodyContainer">
            <div className="heading">
                <h2>Featured items in your area</h2>
                <button className="filter" onClick={()=> {
                    const newList = list.filter((res) => res.info.avgRating > 4.2)
                    setList(newList);
                    }}>
                    Show Restraunts with high ratings
                </button>
                <input type="text" onChange={(e) => {
                    setSearch(e.target.value);
                    }}>
                </input>
                <button onClick={()=> searchOnClickHandler()}>
                    Search
                </button>
            </div>
            <div className="cardsContainer">
                {filteredList.map((restrauntInfo, index) => <FoodCard key={index} restraunt={restrauntInfo}></FoodCard>)}
            </div>
        </div>
    );
}

export default Body;