import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ itemlist }) => {
  console.log(itemlist);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <ul>
        {itemlist.map((item) => (
          <div
            key={item.card.info.id}
            className="border-b-2 border-b-gray-400 p-2 text-left"
          >
            <div className="m-2 py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>

              <p className="text-sm">{item.card.info.description}</p>
              <button
                className="bg-green-500 text-white p-2 m-2 rounded-lg cursor-pointer "
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
