import React, { useState } from "react";
import loginSignupImage from "../assets/img/loginSignupImage.jpg";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("successful");
      navigate("/body");
    } else {
      alert("please enter field");
    }
  };
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto  flex items-center flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold '>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginSignupImage} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.email}
            onChange={handleonChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1  bg-slate-200  rounded mt-1 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleonChange}
            />
            <span className="flex cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="max-w-[120px] w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl py-1 rounded-full ">
            login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          not have account{" "}
          <Link to={"/Signup"} className="text-red-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
