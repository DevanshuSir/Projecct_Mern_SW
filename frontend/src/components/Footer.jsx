import React from "react";
import Logo from "../assets/logo_ecommerce.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 px-3 mt-40 text-sm bg-black text-white  ">
        <div>
          <img src={Logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            distinctio sapiente voluptates esse facere delectus consequuntur
            asperiores sint nostrum ut.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5  text-[#ff6825]">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5  text-[#ff6825]">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-1">
            <li>+1404-567889</li>
            <li>devanshu@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
