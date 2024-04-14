import aboutImg from "../assets/img/aboutImg.jpg";
import { Link } from "react-router-dom";
const About = () => {
  // JSX start from here.
  return (
    <>
      <div>
        <div
          className=" h-60 w-full bg-cover bg-center bg-no-repeat shadow-lg shadow-slate-600 "
          style={{ backgroundImage: "url(" + aboutImg + ")" }}
        ></div>
        <h1 className=" text-center font-semibold text-2xl my-3 text-green-700 font-serif">
          About Us
        </h1>
        <img
          src="https://hotelnarainniwas.com/assets/frontsite/img/heading_line1.png"
          alt=""
          className="my-0 mx-auto "
        />
        <div class="font-serif">
          <p className="text-center my-8 mx-8 text-slate-800">
            At SKM, we're passionate about connecting people with the food they
            love. We're not just a food delivery app, we're a platform that
            brings communities together, one delicious bite at a time. SKM
            strives to be the most convenient and enjoyable way for people to
            discover and enjoy delicious food from their favorite local
            restaurants. We empower restaurants to reach new customers and
            expand their reach, while creating flexible earning opportunities
            for delivery drivers.
          </p>
          <p className="text-center my-8 mx-8 text-slate-800">
            We are committed to providing a wide variety of delicious food
            options, a user-friendly app, and exceptional customer service.
            Download the SKM app and embark on a culinary adventure. Discover
            hidden gems, support local businesses, and savor the convenience of
            having your favorite food delivered to your doorstep.
          </p>
        </div>
      </div>

      <div className="shadow-lg shadow-red-500">
        <h1 className="text-center font-semibold text-xl text-green-700 font-serif">
          Follow Us
        </h1>
        <ul className="flex justify-center ">
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

export default About;
