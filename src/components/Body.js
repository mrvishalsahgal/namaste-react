import { useState } from "react";
import restaurantList from "../utils/mockdata";
import RestaurantCard from "./Restaurantcard.js";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="Search" />
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.rating > 4
                        );
                        setListOfRestaurants(filteredList);
                        console.log(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-card-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    })
                }
            </div>
        </div>
    );
}

export default Body;