import { useState , useEffect } from "react";
import RestaurantCard from "./Restaurantcard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");   
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

 useEffect(() => {
    fetchData();
 }, []);

const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
   console.log(json);
   setListOfRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   setFilteredRestaurants(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}

const isOnline = useOnlineStatus();


if (!isOnline) return <h1>You are offline</h1>;


    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="flex justify-center m-5 gap-5">
                <input className="p-2 m-2 border border-gray-400 rounded-lg" type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="bg-red-500 text-white p-2 m-2 rounded-lg py-2" onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurant);
                }}>Search</button>
                <button 
                    className="bg-green-500 text-white p-2 m-1 rounded-lg py-2" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.info.avgRating > 4.5
                        );
                        setFilteredRestaurants(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap justify-center  ">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard  restaurant={restaurant} /></Link>
                    })
                }
            </div>
        </div>
    );
}

export default Body;