import contactBack1 from "../assets/img/contactBack1.png";
import { Link } from "react-router-dom";
const Contact = () => {
  // JSX start from here
  return (
    <>
      <div
        className=" flex h-full w-full bg-cover bg-center justify-between shadow-lg shadow-slate-600"
        style={{ backgroundImage: "url(" + contactBack1 + ")" }}
      >
        <div className="phone w-80">
          <div className="my-0 mx-auto justify-center">
            <img
              src="https://visualpharm.com/assets/152/Phone-595b40b75ba036ed117d82e1.svg"
              alt="phone"
              className="w-24 mx-28 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 text-slate-900 font-serif">
              <h1 className=" text-xl font-bold">CALL US</h1>
              <p>Mon-Fri from 8am to 5pm</p>
              <p>+91 7319888365 or +91 8927691915</p>
            </div>
          </div>
        </div>
        <div className="mail w-80 ">
          <div className="my-0 mx-auto justify-center">
            <img
              src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-512.png"
              alt="mail"
              className="w-24 mx-28 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 font-serif">
              <h1 className=" text-xl font-bold">MAIL US</h1>
              <p>
                shivam.mishra2021@uem.edu.in or shivamkumardbg1109@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="address w-80 ">
          <div className="my-0 mx-auto justify-center">
            <img
              src="https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/address_location_pin-512.png"
              alt="mail"
              className="w-24 mx-28 my-12 rounded-2xl"
            />
            <div className="text-center mb-7 mt-10 font-serif">
              <h1 className=" text-xl font-bold">ADDRESS</h1>
              <p>
                Gurukul, Sikar Road Near Udaipuria Mod, Jaipur, Rajasthan 303807
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12">
        <h1 className="text-center my-5 font-semibold text-xl text-green-700 font-serif">
          Follow Us
        </h1>
        <ul className="flex justify-center">
          <li className="m-6  rounded-full">
            <Link to="https://www.linkedin.com/in/shivam-kumar-mishra-976085244/">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                alt="Linkedin icon"
                className="h-10 w-10 hover:red"
              />
            </Link>
          </li>

          <li className="m-6  rounded-full">
            <Link to="https://www.instagram.com/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Linkedin icon"
                className="h-10 w-10"
              />
            </Link>
          </li>

          <li className="m-6  rounded-full">
            <Link to="https://m.facebook.com/profile.php/?id=100022477230813">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png"
                alt="Linkedin icon"
                className="h-10 w-10"
              />
            </Link>
          </li>
          <li className="m-6 rounded-full">
            <Link to="https://www.youtube.com/@s.k.m2906">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                alt="Linkedin icon"
                className="h-10 w-10"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
