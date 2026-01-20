import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setshowIndex] = useState(null);
  const { id } = useParams();
  const restaurantInfo = useRestaurantMenu(id);

  console.log(restaurantInfo);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, areaName, avgRating, costForTwo, key } =
    restaurantInfo?.cards[2]?.card?.card?.info;
  // console.log(name);
  // Corrected path: itemCards is inside card.card, not card.info
  const { itemCards } =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-6 my-2">{name}</h1>
      <h2 className="font-bold">
        {areaName}- {costForTwo}{" "}
      </h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.info?.id}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}{" "}
    </div>
  );
};

export default RestaurantMenu;
