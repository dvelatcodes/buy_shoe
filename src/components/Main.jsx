import React, { useState } from "react";
import { AiFillSun, AiOutlineSun } from "react-icons/ai";
import { useStateContext } from "../utils/ContextProvider";
import { IoCartOutline } from "react-icons/io5";
// import { products } from '../utils/constant';
const Main = () => {
  const { changeMode, attributes } = useStateContext();

  const [numOfItemsSelected, setNumOfItemsSelected] = useState(1);
  return (
    <main
      className={`${
        attributes.light === "light" ? "bg-white" : "bg-black"
      } relative h-fit w-screen pt-8 pb-8 flex flex-col sm:flex-row items-center justify-center sm:justify-around`}
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
      <section></section>
      <section className="flex flex-col gap-6 pl-6 pr-6">
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
        <section>
          <div>
            <button></button>
            <span>{numOfItemsSelected}</span>
            <button></button>
          </div>
          <button
            className={`mr-4 sm:mr-12 text-4xl ${
              attributes.light === "light" ? "text-black" : "text-white"
            }`}
          >
            <IoCartOutline
              className={`mr-4 sm:mr-12 text-4xl ${
                attributes.light === "light" ? "text-black" : "text-white"
              }`}
            />
            Add to cart
          </button>
        </section>
      </section>
    </main>
  );
};

export default Main;
