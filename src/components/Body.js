import { useState , useEffect } from "react";
import RestaurantCard from "./Restaurantcard.js";
import Shimmer from "./Shimmer.js";


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

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurant);
                }}>Search</button>
                <button 
                    className="filter-btn" 
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
            <div className="restaurant-card-container">
                {
                    filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                    })
                }
            </div>
        </div>
    );
}

export default Body;