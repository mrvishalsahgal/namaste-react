import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

   
    const {id} = useParams();
    const restaurantInfo = useRestaurantMenu(id);
   

    if (restaurantInfo === null) return <Shimmer />;

    const {name, areaName, avgRating, costForTwo, key} = restaurantInfo?.cards[2]?.card?.card?.info;
    // console.log(name);
    // Corrected path: itemCards is inside card.card, not card.info
    const {itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //    console.log(itemCards);
       return <div className="restaurant-menu">
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h3>{avgRating}</h3>
            <h4>{costForTwo}</h4>
            <h5>{key}</h5>
            <h3>Menu</h3>
            <ul>
       {itemCards.map((item) => {
           return <li key={item.card.info.id}>{item.card.info.name + " - " + item.card.info.price/100}</li>
       })}
                
            </ul>
          
        </div>
 
}

export default RestaurantMenu;