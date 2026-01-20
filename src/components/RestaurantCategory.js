import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItem, setshowIndex }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 bg-gray-200 p-2 mx-auto my-2 shadow-lg cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemList itemlist={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
