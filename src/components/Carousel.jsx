import React from "react";
import { products } from "../utils/constant";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carousel = () => {
  return (
    <div className="w-[40vw]">
      <div className="w-full relative">
        <GoChevronLeft className="absolute top-0 bottom-0 left-6 m-auto text-3xl font-black bg-white hover:bg-slate-100 rounded-full h-fit w-fit cursor-pointer p-2"/>
        <img src={products[0].name} alt="" className="w-full h-[50vh]" />
        <GoChevronRight className="absolute top-0 bottom-0 right-6 m-auto text-3xl font-black bg-white hover:bg-slate-100 rounded-full h-fit w-fit cursor-pointer p-2"/>
      </div>
      <div className="hidden w-full sm:flex justify-between mt-7 ">
        {products.map((pic, index)=> <img key={index} src={pic.name} alt={pic.altMessage} className="w-[20%] h-[10vh]"/>)}
      </div>
    </div>
  );
};

export default Carousel;
