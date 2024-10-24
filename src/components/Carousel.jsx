import React, { useState, useEffect } from "react";
import { products } from "../utils/constant";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useStateContext } from "../utils/ContextProvider";
import { IoClose } from "react-icons/io5";

const Carousel = () => {
  const { attributes, bigSwitch, addSwitch, minusSwitch } = useStateContext();
  const { current } = attributes;
  const [lightBox, setLightBox] = useState(false);
  const [screen, setScreen] = useState(window.innerWidth);

  const updateScreen = () => {
    setScreen(window.innerWidth);
  };

  const showLightBox = () => {
    setLightBox((prev) => (prev === false ? true : false));
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <>
      <div className="w-screen sm:w-[45vw] lg:w-[35vw] xl:w-[30vw]">
        <div className="w-full relative">
          <GoChevronLeft
            onClick={minusSwitch}
            className="sm:hidden absolute top-0 bottom-0 left-6 m-auto text-3xl font-black bg-white hover:text-orange-500 rounded-full h-fit w-fit cursor-pointer p-2"
          />
          <img
            src={products[current].art}
            alt={products[current].altMessage}
            className="w-full h-[50vh] sm:rounded-2xl sm:cursor-pointer"
            onClick={showLightBox}
          />
          <GoChevronRight
            onClick={addSwitch}
            className="sm:hidden absolute top-0 bottom-0 right-6 m-auto text-3xl font-black bg-white hover:text-orange-500 rounded-full h-fit w-fit cursor-pointer p-2"
          />
        </div>
        <div className="hidden w-full sm:flex justify-between mt-7 ">
          {products.map((pic, index) => (
            <div
              key={index}
              onClick={() => bigSwitch(index)}
              className={`w-[20%] h-[10vh] rounded-2xl ${
                current === index ? "border-2" : ""
              } ${current === index ? "border-orange-500" : ""}`}
            >
              <img
                src={pic.art}
                alt={pic.altMessage}
                className={`w-[100%] h-[100%] rounded-2xl cursor-pointer ${
                  current === index ? "opacity-40" : ""
                } hover:opacity-40`}
              />
            </div>
          ))}
        </div>
      </div>
      {lightBox && screen > 640 && (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-10  absolute top-0 right-0 bottom-0 left-0 m-auto z-50 lightBox">
          <div className="w-5/12 lg:w-4/12 h-[40vh] relative">
            <IoClose className="absolute -top-12 right-0 text-3xl font-black text-white hover:text-orange-500 rounded-full h-fit w-fit cursor-pointer" onClick={showLightBox}/>
            <GoChevronLeft
              onClick={minusSwitch}
              className="absolute top-0 bottom-0 -left-6 m-auto text-3xl font-black bg-white hover:text-orange-500 rounded-full h-fit w-fit cursor-pointer p-2"
            />
            <img
              src={products[current].art}
              alt={products[current].altMessage}
              className="w-full h-full sm:rounded-2xl"
            />
            <GoChevronRight
              onClick={addSwitch}
              className="absolute top-0 bottom-0 -right-6 m-auto text-3xl font-black bg-white hover:text-orange-500 rounded-full h-fit w-fit cursor-pointer p-2"
            />
          </div>
          <div className="hidden w-full sm:flex justify-center gap-x-7">
            {products.map((pic, index) => (
              <div
                key={index}
                onClick={() => bigSwitch(index)}
                className={`sm:w-[15%] lg:w-[10%] h-[10vh] rounded-2xl ${
                  current === index ? "border-2" : ""
                } ${current === index ? "border-orange-500" : ""}`}
              >
                <img
                  src={pic.art}
                  alt={pic.altMessage}
                  className={`w-[100%] h-[100%] rounded-2xl cursor-pointer ${
                    current === index ? "opacity-40" : ""
                  } hover:opacity-40`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;
