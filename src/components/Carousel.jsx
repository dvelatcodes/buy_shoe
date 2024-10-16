import React from "react";
import { products } from "../utils/constant";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useStateContext } from "../utils/ContextProvider";

const Carousel = () => {
  const {attributes, bigSwitch, addSwitch, minusSwitch} = useStateContext();
  const {current} = attributes
  

  return (
    <div className="w-screen sm:w-[45vw] lg:w-[35vw] xl:w-[30vw]">
      <div className="w-full relative">
        <GoChevronLeft onClick={minusSwitch} className="absolute top-0 bottom-0 left-6 m-auto text-3xl font-black bg-white hover:bg-slate-100 rounded-full h-fit w-fit cursor-pointer p-2" />
        <img
          src={products[current].art}
          alt={products[current].altMessage}
          className="w-full h-[50vh] rounded-2xl"
        />
        <GoChevronRight onClick={addSwitch} className="absolute top-0 bottom-0 right-6 m-auto text-3xl font-black bg-white hover:bg-slate-100 rounded-full h-fit w-fit cursor-pointer p-2" />
      </div>
      <div className="hidden w-full sm:flex justify-between mt-7 ">
        {products.map((pic, index) => (
          <div key={index} onClick={()=>bigSwitch(index)} className={`w-[20%] h-[10vh] rounded-2xl ${current === index? 'border-2' : ''} ${current === index? 'border-orange-500' : ''}`}>
            <img
              src={pic.art}
              alt={pic.altMessage}
              className={`w-[100%] h-[100%] rounded-2xl cursor-pointer ${current === index? 'opacity-40' : ''} hover:opacity-40`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
