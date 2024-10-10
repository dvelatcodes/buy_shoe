import React from "react";
import { AiFillSun, AiOutlineSun } from "react-icons/ai";
import { useStateContext } from "../utils/ContextProvider";

const Main = () => {
  const { changeMode, attributes } = useStateContext();
  return (
    <main className={`${attributes.light === "light"? "bg-white" : "bg-black"} relative h-fit w-screen pt-8 pb-8`}>
      <div
        className="mode w-fit h-fit cursor-pointer absolute right-10 sm:right-28 top-16 z-50"
        onClick={changeMode}
      >
        {attributes.light === "light" ? (
          <AiFillSun className="text-3xl" />
        ) : (
          <AiOutlineSun className="text-3xl" />
        )}
      </div>
      <section></section>
      <section></section>
    </main>
  );
};

export default Main;
