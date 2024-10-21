import React from "react";
import { AiFillSun, AiOutlineSun } from "react-icons/ai";
import { useStateContext } from "../utils/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Carousel from "./Carousel";
import { products } from "../utils/constant";

const Main = () => {
  const { changeMode, attributes, itemUp, itemDown, setAttributes } = useStateContext();
  const {light, items, current, showHam} = attributes;

  // add to cart function
  const addToCart = ()=>{
    const pic = products[current]
    const data = {
     pic,
     content: "Fall Limited Edition Sneakers",
     priceCalculation: `$125.00 x ${items}`,
     price: `$${125 * items}.00`
    }
    setAttributes({...attributes, cart: data});
  }

  return (
    <main
      className={`${
        light === "light" ? "bg-white" : "bg-black"
      } 
      ${
        showHam === true ? "h-[48vh]" : "h-fit"
      } 
      ${
        showHam === true ? "overflow-y-hidden" : ""
      } 
      relative h-fit sm:h-[87vh] w-screen sm:pt-24 pb-4 flex flex-col sm:flex-row justify-center sm:justify-center gap-y-8 sm:gap-y-0 sm:gap-x-2 lg:gap-x-8 xl:gap-x-20`}
    >
      <div
        className="mode w-fit h-fit cursor-pointer absolute right-10 sm:right-28 top-16 z-50"
        onClick={changeMode}
      >
        {light === "light" ? (
          <AiFillSun className="text-3xl" />
        ) : (
          <AiOutlineSun className="text-3xl text-white" />
        )}
      </div>
      <Carousel/>
      <section className="w-screen sm:w-[40vw] flex flex-col gap-6 pl-6 pr-6">
        <span
          className="uppercase font-semibold"
          style={{
            color:
              light === "light"
                ? "hsl(219, 9%, 45%)"
                : "hsl(0, 0%, 93.72549019607843%)",
          }}
        >
          Sneaker Company
        </span>
        <h1
          className={`${
            light === "light" ? "text-black" : "text-white"
          } text-3xl sm:text-4xl  font-semibold`}
        >
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p
          style={{
            color: light === "light" ? "hsl(219, 9%, 45%)" : "white",
          }}
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex justify-between sm:block">
          <div className="flex gap-4">
            <h3
              className={`${
                light === "light" ? "text-black" : "text-white"
              } text-2xl sm:text-3xl  font-semibold`}
            >
              $125.00
            </h3>
            <span
              className={`${
                light === "light" ? "text-white" : "text-black"
              }  font-bold ${
                light === "light" ? "bg-black" : "bg-white"
              } flex items-center pr-3 pl-3 rounded`}
            >
              50%
            </span>
          </div>
          <h4
            style={{
              color:
                light === "light"
                  ? "hsl(219, 9%, 45%)"
                  : "hsl(0, 0%, 93.72549019607843%)",
            }}
            className="font-semibold line-through sm:mt-2"
          >
            $250.00
          </h4>
        </div>
        <section className="flex flex-col sm:flex-row gap-5">
          <div
            className="w-[90vw] sm:w-[8vw] h-[7vh] flex items-center justify-around rounded-lg"
            style={{ backgroundColor: "hsl(220, 14%, 75%)" }}
          >
            <FiMinus className="text-xl cursor-pointer" style={{color: 'hsl(26, 100%, 55%)'}} onClick={itemDown}/>
            <span
              className={`font-semibold ${
                light === "light" ? "text-black" : "text-white"
              }`}
              style={{ fontSize: "1rem" }}
            >
              {items}
            </span>
            <GoPlus className="text-xl cursor-pointer" style={{color: 'hsl(26, 100%, 55%)'}} onClick={itemUp}/>
          </div>
          <button
            className={`buy w-[90vw] sm:w-[20vw] h-[7vh] text-xl flex justify-center items-center gap-3 rounded-lg font-semibold ${
              light === "light" ? "text-black" : "text-white"
            }`}
            style={{
              fontSize: "1.1rem",
            }}
            onClick={addToCart}
          >
            <IoCartOutline
              className={`text-2xl ${
                light === "light" ? "text-black" : "text-white"
              } cart`}
            />
            Add to cart
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
