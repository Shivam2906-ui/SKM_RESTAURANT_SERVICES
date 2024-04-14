import { useContext } from "react";
import UserContext from "../utils/userContext";
import { Link } from "react-router-dom";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="h-56 w-full bg-slate-700">
        <h1 className="text-center my-2 p-4 font-semibold text-xl text-slate-100 font-serif">
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
        <h2 className="text-center text-slate-300">
          This site is developed by {user.name}-{user.email}
        </h2>
      </div>
    </>
  );
};

export default Footer;
