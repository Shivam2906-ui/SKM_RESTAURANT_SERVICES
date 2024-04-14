import React, { useState } from "react";
import loginSignupImage from "../assets/img/loginSignupImage.jpg";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const [confirmPassword, setShowconfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleconfirmPassword = () => {
    setShowconfirmPassword((preve) => !preve);
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
  const handleuploadfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };
  console.log(process.env.REACT_APP_SERVER_DOMAIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;
    // console.log(data);
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch("");

        alert("successful");
        navigate("/");
      } else {
        alert("pass not same");
      }
    } else {
      alert("please enter field");
    }
  };
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto  flex items-center flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold '>Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : loginSignupImage}
            className="w-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="/image"
              className="hidden"
              onChange={handleuploadfileImage}
            />
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName className=pb-1"> First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.firstName}
            onChange={handleonChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 rounded"
            value={data.lastName}
            onChange={handleonChange}
          />

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
          <label htmlFor="confirmpassword"> Confirm Password</label>
          <div className="flex px-2 py-1  bg-slate-200  rounded mt-1 mb-2">
            <input
              type={confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleonChange}
            />
            <span
              className="flex cursor-pointer"
              onClick={handleconfirmPassword}
            >
              {confirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="max-w-[120px] w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl py-1 rounded-full ">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
