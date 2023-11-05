import { Link, useNavigate } from "react-router-dom";
import logo from "../Assest/icon.png";
import { FaRegHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { IoMdContact, IoMdLogIn } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { GiShoppingBag, GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltRight, BiLogOutCircle } from "react-icons/bi";
import { useContext, useState } from "react";
import { GeneralContext } from "../Contexts/GeneralContext";
import { SingleProductContext } from "../Contexts/SingleContext";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../Contexts/localStorage";

// STYLES/////////////
const isOpenMenu =
  " flex flex-col fixed z-20 font-bold bg-yellow-700 w-[80%] bottom-0 top-0 left-0 transition-all ease-linear duration-500";
const isnotOpne =
  "flex flex-col absolute z-20 font-bold bg-yellow-700 w-[80%] bottom-0 top-0 -left-full transition-all ease-linear duration-500";
const linkMoble = "text-white py-3 px-4 hover:bg-yellow-700 hover:text-white rounded text-2xl";
const link =
  "text-yellow-700 py-3 transition-all ease-linear duration-700 px-4 hover:bg-yellow-700 hover:text-white rounded text-2xl";
const box =
  "absolute bg-black text-white  h-6 w-6 rounded-full flex items-center justify-center -top-3 -right-2";

// ............FUNCTION....................
function NavBar() {
  const navigate = useNavigate();
  const { cart, wishlist } = useContext(SingleProductContext);
  const [isOpen, setIsOpen] = useState(false);
  const user = getUserFromLocalStorage();
  const { opnenMenu, isOpnenMenu } = useContext(GeneralContext);
  const handleLogout = () => {
    removeUserFromLocalStorage();
    navigate("/login");
  };
  return (
    <div>
      {/* ...........MENU........... */}
      <div className="menu absolute top-5 pl-5 lg:pl-0">
        <GiHamburgerMenu
          onClick={opnenMenu}
          fontSize={45}
          className="text-yellow-700 cursor-pointer md:hidden"
        />
      </div>
      {/* ............MOBILE MENU */}
      <div onClick={opnenMenu} className={isOpnenMenu ? isnotOpne : isOpenMenu}>
        <div className="menu w-full flex justify-end p-5">
          <BiMenuAltRight onClick={opnenMenu} fontSize={45} className="text-white " />
        </div>
        <Link to="/" className={linkMoble}>
          <li className="flex list-none">
            <HiHome fontSize={32} className="" /> <span className="pl-3">Home</span>
          </li>
        </Link>
        <Link to="/shop" className={linkMoble}>
          <li className="flex list-none">
            <FaShoppingBag fontSize={32} className="" />
            <span className="pl-3">Shop</span>
          </li>
        </Link>
        <Link to="/contact" className={linkMoble}>
          <li className="flex list-none">
            <IoMdContact fontSize={32} className="" />
            <span className="pl-3">Contact</span>
          </li>
        </Link>
        <div className={linkMoble}>
          <li className="flex list-none cursor-pointer">
            {user ? (
              <BiLogOutCircle onClick={handleLogout} fontSize={32} />
            ) : (
              <Link to={"/login"}>
                <IoMdLogIn fontSize={32} />
              </Link>
            )}

            <span className="pl-3">{user ? "Log out" : "Login"}</span>
          </li>
        </div>
      </div>
      {/* ..................MIDEUM SCREEN NAV..... AND LOGO................*/}
      <div className=" bg-gray-200 ">
        <nav className="flex w-[60%]  md:w-[70%] py-5 items-center mx-auto justify-between">
          <Link to="/">
            <div className="logo hidden md:flex items-cd flex-col justify-start hover:opacity-75 ">
              <img src={logo} alt="Logo image" className="w-8 h-8 md:w-10 md:h-10" />
              <h1 className="font-bold md:text-xl -mt-2">
                Buil<span className="text-yellow-600">din</span>
                <span className="text-yellow-700 font-bold text-xl">X</span>
              </h1>
            </div>
          </Link>
          <div className="hidden md:flex space-x-5 font-bold">
            <Link to="/" className={link}>
              Home
            </Link>
            <Link to="/shop" className={link}>
              Shop
            </Link>
            <Link to="/contact" className={link}>
              Contact
            </Link>
          </div>

          {/* ..............CART AND WISHLIST............... */}
          <div className="flex space-x-7">
            <Link to="/cart" className="relative">
              <GiShoppingBag fontSize={30} className="text-yellow-700 hover:opacity-75" />
              <div className={box}>
                <h1>{cart?.length}</h1>
              </div>
            </Link>
            <Link to="/wishlist" className="relative">
              <FaRegHeart fontSize={30} className="text-yellow-700 hover:opacity-75" />
              <div className={box}>
                <h1>{wishlist?.length}</h1>
              </div>
            </Link>
            <div className="relative">
              <FaUserAlt
                onClick={() => setIsOpen((prev) => !prev)}
                className=" text-3xl text-yellow-700 cursor-pointer hidden md:block"
              />
              {isOpen && (
                <div className="absolute -translate-x-[30%] top-[110%] w-[10rem] border-[1px] border-yellow-600 p-2 z-20 bg-white rounded shadow">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="bg-yellow-700 rounded shadow py-2 px-5 text-white w-full ">
                      Log out
                    </button>
                  ) : (
                    <Link to={"/login"}>
                      <button className="bg-yellow-700 rounded shadow py-2 px-5 text-white w-full ">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
