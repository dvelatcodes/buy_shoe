import React, { useState } from "react";
import { AiFillSun, AiOutlineSun } from "react-icons/ai";
import { useStateContext } from "../utils/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Carousel from "./Carousel";
// import { products } from '../utils/constant';
const Main = () => {
  const { changeMode, attributes } = useStateContext();

  const [numOfItemsSelected, setNumOfItemsSelected] = useState(1);
  return (
    <main
      className={`${
        attributes.light === "light" ? "bg-white" : "bg-black"
      } relative h-fit sm:h-[87vh] w-screen pt-8 sm:pt-24 pb-4 flex flex-col sm:flex-row justify-center sm:justify-center gap-y-8 sm:gap-y-0 sm:gap-x-2 lg:gap-x-8 xl:gap-x-20`}
    >
      <div
        className="mode w-fit h-fit cursor-pointer absolute right-10 sm:right-28 top-16 z-50"
        onClick={changeMode}
      >
        {attributes.light === "light" ? (
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
              attributes.light === "light"
                ? "hsl(219, 9%, 45%)"
                : "hsl(0, 0%, 93.72549019607843%)",
          }}
        >
          Sneaker Company
        </span>
        <h1
          className={`${
            attributes.light === "light" ? "text-black" : "text-white"
          } text-3xl sm:text-4xl  font-semibold`}
        >
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p
          style={{
            color: attributes.light === "light" ? "hsl(219, 9%, 45%)" : "white",
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
                attributes.light === "light" ? "text-black" : "text-white"
              } text-2xl sm:text-3xl  font-semibold`}
            >
              $125.00
            </h3>
            <span
              className={`${
                attributes.light === "light" ? "text-white" : "text-black"
              }  font-bold ${
                attributes.light === "light" ? "bg-black" : "bg-white"
              } flex items-center pr-3 pl-3 rounded`}
            >
              50%
            </span>
          </div>
          <h4
            style={{
              color:
                attributes.light === "light"
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
            <FiMinus className="text-xl cursor-pointer" style={{color: 'hsl(26, 100%, 55%)'}}/>
            <span
              className={`font-semibold ${
                attributes.light === "light" ? "text-black" : "text-white"
              }`}
              style={{ fontSize: "1rem" }}
            >
              {numOfItemsSelected}
            </span>
            <GoPlus className="text-xl cursor-pointer" style={{color: 'hsl(26, 100%, 55%)'}}/>
          </div>
          <button
            className={`buy w-[90vw] sm:w-[20vw] h-[7vh] text-xl flex justify-center items-center gap-3 rounded-lg font-semibold ${
              attributes.light === "light" ? "text-black" : "text-white"
            }`}
            style={{
              fontSize: "1.1rem",
            }}
          >
            <IoCartOutline
              className={`text-2xl ${
                attributes.light === "light" ? "text-black" : "text-white"
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
