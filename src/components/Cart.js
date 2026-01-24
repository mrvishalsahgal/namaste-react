import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4 font-bold">
      <h1>Cart</h1>
      <div className="flex justify-center w-6/12 m-auto">
        <ItemList itemlist={cartItems} />
      </div>
      <button
        className="bg-green-500 text-white p-2 m-2 rounded-lg cursor-pointer "
        onClick={clearCartHandler}
      >
        Clear Cart
      </button>
      <h1>{cartItems.length === 0 && "Cart is Empty"}</h1>
    </div>
  );
};

export default Cart;
