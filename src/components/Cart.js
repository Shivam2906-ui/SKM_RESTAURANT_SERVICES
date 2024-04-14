import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-slate-600 shadow-lg shadow-slate-600">
      <h1 className=" p-2 font-bold text-3xl text-slate-300">
        Cart Items - {cartItems.length}
      </h1>

      <button
        className=" p-2 m-2 bg-green-600 font-medium rounded-lg hover:bg-green-500 "
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap justify-center ">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
