import React, { useState } from "react";
import { useStateContext } from "../utils/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
import { profile, hamburger, iconClose } from "../images";

const constants = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  const [showHam, setShowHam] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const changeHam = () => {
    setShowHam((prev) => (prev === false ? true : false));
  };

  const seeCart = () => {
    setShowCart((prev) => (prev === false ? true : false));
  };

  const { attributes } = useStateContext();
  const { light, cart } = attributes;

  return (
    <header
      className={`w-screen ${light === "light" ? "bg-white" : "bg-black"}`}
    >
      <nav
        className={`w-screen sm:w-[80vw] m-auto h-[13vh] flex justify-around sm:justify-between items-center gap-4 sm:gap-0 sm:border-b ${
          light === "light" ? "border-slate-300" : "border-white"
        } relative`}
      >
        <section className="flex items-center gap-3">
          <img
            src={hamburger}
            alt="menu icon"
            className="sm:hidden w-[6vw] h-[2vh] cursor-pointer"
            onClick={changeHam}
          />
          <h1
            className={`${
              light === "light" ? "text-black" : "text-white"
            } text-3xl sm:text-4xl  font-semibold logo`}
          >
            sneakers
          </h1>
        </section>

        <section
          className={`${light === "light" ? "bg-white" : "bg-black"} ${
            showHam === false ? "hidden" : "flex"
          } h-screen sm:h-full w-[60%] sm:w-[50vw] sm:flex gap-8 sm:gap-12 flex-col sm:flex-row absolute top-0 left-0 sm:relative z-40 pl-8 sm:pl-0 pt-6 sm:pt-0`}
        >
          <img
            src={iconClose}
            alt="close icon"
            className="sm:hidden w-[20px] h-[20px] cursor-pointer mb-5"
            onClick={changeHam}
          />
          {constants.map((data, i) => (
            <a
              href="#"
              key={i}
              className={`${
                light === "light" ? "text-black" : "text-white"
              } w-fit sm:h-full font-bold sm:font-light hover:border-b-4 flex sm:items-center`}
            >
              {data}
            </a>
          ))}
        </section>
        <section className="flex items-center">
          <IoCartOutline
            className={`mr-4 sm:mr-12 text-4xl cursor-pointer ${
              light === "light" ? "text-black" : "text-white"
            }`}
            onClick={seeCart}
          />
          <img
            src={profile}
            alt="profile"
            className="w-[40px] sm:w-[65px] h-[40px] sm:h-[60px] cursor-pointer profile"
          />
        </section>
        {showCart && (
          <div
            className={`${
              light === "light" ? "bg-white" : "bg-black"
            } w-[90vw] h-[20vh] absolute top-36 left-0 right-0 m-auto z-30`}
          >
            <h1>Cart</h1>
            <hr />
            {Object.keys(cart).length === 0 ? (
              <h2>Your cart is empty</h2>
            ) : (
              <div></div>
            )}
          </div>
        )}
        <div
          className={`h-screen w-[40%] bg-black opacity-30 z-40  absolute right-0 top-0 ${
            showHam === false ? "hidden" : "block"
          } sm:hidden`}
        ></div>
      </nav>
    </header>
  );
};

export default Nav;
