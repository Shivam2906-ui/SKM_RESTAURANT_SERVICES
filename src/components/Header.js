import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import loginSignupImage from "../assets/img/loginSignupImage.jpg";

const loggedInUser = () => {
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2 .w-full" src={Logo} alt="Logo" />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg shadow-slate-400">
      {/* <Title /> */}
      <div className="flex py-10 px-2 m-1 text-lg font-bold font-serif">
        <img
          src="https://clipground.com/images/circle-clipart-logo-1.jpg"
          alt=""
          className="w-8 h-8"
        />
        <a href="/">
          <h1 className="px-1">S.K.M</h1>
        </a>
      </div>
      <div className="nav-items">
        <ul className="flex py-10  font-serif">
          <li className="px-2">
            <Link to="/body">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <h1 className="p-10">{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold font-serif text-red-900">
        {user.name}
      </span>

      <Link to="/Login">
        <img
          src={loginSignupImage}
          alt=""
          className="my-8 w-10 h-10 rounded-full"
        />
      </Link>
    </div>
  );
};

export default Header;
