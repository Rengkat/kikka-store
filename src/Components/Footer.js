import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-52 bg-yellow-700 mt-32 flex items-center justify-center">
      <div className="icons flex list-none text-2xl md:text-4xl items-center justify-center space-x-3 cursor-pointer text-white">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaPinterestP />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </div>
    </div>
  );
}

export default Footer;
