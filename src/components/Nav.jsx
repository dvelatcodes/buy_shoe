import React, { useState } from "react";
import { useStateContext } from "../utils/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
import { profile, hamburger, iconClose } from "../images";
import { ImBin } from "react-icons/im";

const constants = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  const seeCart = () => {
    setShowCart((prev) => (prev === false ? true : false));
  };

  const { attributes, deleteCart, changeHam } = useStateContext();
  const { light, cart, items, showHam } = attributes;

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
          <span
            className={`${
              light === "light" ? "text-black" : "text-white"
            } text-3xl sm:text-4xl  font-semibold logo`}
          >
            sneakers
          </span>
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
          <div className="relative">
            {Object.keys(cart).length !== 0 && (
              <span
                className="w-[3.5vw] lg:w-[2.5vw] xl:w-[2vw] text-white absolute -top-1 right-0 left-0 m-auto font-semibold flex justify-center rounded-lg"
                style={{
                  backgroundColor: "hsl(26, 100%, 55%)",
                  fontSize: "0.7rem",
                }}
              >
                {items}
              </span>
            )}
            <IoCartOutline
              className={`mr-4 sm:mr-12 text-4xl cursor-pointer ${
                light === "light" ? "text-black" : "text-white"
              }`}
              onClick={seeCart}
            />
          </div>
          <img
            src={profile}
            alt="profile"
            className="w-[40px] sm:w-[65px] h-[40px] sm:h-[60px] cursor-pointer profile"
          />
        </section>
        <div
          className={`h-screen w-[40%] bg-black opacity-30 z-40  absolute right-0 top-0 ${
            showHam === false ? "hidden" : "block"
          } sm:hidden`}
        ></div>
        {showCart && (
          <div
            className={`${
              light === "light" ? "bg-white" : "bg-black"
            }
            ${
              light === "light" ? "" : "border"
            }
            ${
              light === "light" ? "" : "border-orange-400"
            }
            w-[95vw] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto sm:h-fit pb-10 sm:pb-0  absolute top-32 right-0 m-auto sm:m-0 z-30 rounded-xl pt-4 sm:shadow-2xl seeCart`}
          >
            <h1
              className={`pl-2 sm:pl-4 pb-4 font-semibold ${
                light === "light" ? "text-black" : "text-white"
              }`}
            >
              Cart
            </h1>
            <hr />
            {Object.keys(cart).length === 0 ? (
              <h2
                className={`m-auto w-fit mt-10 sm:mb-12 font-semibold ${
                  light === "light" ? "text-slate-500" : "text-white"
                }`}
              >
                Your cart is empty.
              </h2>
            ) : (
              <div className="pl-2 sm:pl-4">
                <div className="mt-6 mb-6 flex items-center gap-x-5 sm:gap-x-2 xl:gap-x-4">
                  <img
                    src={cart.pic.art}
                    alt={cart.pic.altMessage}
                    className="w-[14vw] md:w-[10vw] xl:w-[7vw] h-[7vh] rounded-md"
                  />
                  <h2
                    className={`w-[50vw] sm:w-[30vw] md:w-[21vw] xl:w-[19vw] ${
                      light === "light" ? "text-slate-500" : "text-white"
                    }`}
                  >
                    {cart.content} <br /> {cart.priceCalculation}{" "}
                    <span
                      className={`font-bold ${
                        light === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      {cart.price}
                    </span>
                  </h2>
                  <ImBin
                    className={`text-xl cursor-pointer ${
                      light === "light" ? "text-slate-500" : "text-white"
                    }`}
                    onClick={deleteCart}
                  />
                </div>
                <button
                  className={`buy w-[80vw] sm:w-[90%] h-[7vh] sm:mb-5 text-xl flex justify-center items-center gap-3 rounded-lg font-semibold ${
                    light === "light" ? "text-black" : "text-white"
                  }`}
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
