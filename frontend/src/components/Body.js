import FoodCard, { FoodCardPromoted } from "./FoodCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SWIGGYAPI } from "../utils/constants";

const Body = () => {

    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState("");
    const onlineStatus = useOnlineStatus();
    useEffect(()=> {
        fetchData();
    }, []);

    const PromotedRes = FoodCardPromoted(FoodCard);

    async function fetchData(){
        const response = await fetch(SWIGGYAPI);
        const json = await response.json();
        const newList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setList(newList);
        setFilteredList(newList);
    }
    //without dependency array in useEffect, the application goes into infinte loop why?.

    function searchOnClickHandler(){
        const updatedResList = list.filter((res) => res?.info?.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredList(updatedResList);
    }

    if(onlineStatus===false) return <h1>Looks like you are offline</h1>
    
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
                {filteredList.map((restrauntInfo, index) => {
                    return <Link key={restrauntInfo.info.id} to={"/restraunts/" + restrauntInfo.info.id}>
                            {/* <FoodCard restraunt={restrauntInfo}/> */}
                            {parseInt(restrauntInfo.info.id) > 39000 ? <FoodCard restraunt={restrauntInfo}/> : <PromotedRes restraunt={restrauntInfo}/>} 
                            </Link>
                        })
                }
            </div>
        </div>
    );
}

export default Body;