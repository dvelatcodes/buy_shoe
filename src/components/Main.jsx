import React from "react";
import { AiFillSun, AiOutlineSun } from "react-icons/ai";
import { useStateContext } from "../utils/ContextProvider";

const Main = () => {
  const { changeMode, attributes } = useStateContext();
  return (
    <main className="relative h-fit w-screen">
      <div
        className="mode w-fit h-fit cursor-pointer absolute right-28 top-16 z-50"
        onClick={changeMode}
      >
        {attributes.light === "light" ? (
          <AiFillSun className="text-3xl" />
        ) : (
          <AiOutlineSun className="text-3xl" />
        )}
      </div>
    </main>
  );
};

export default Main;
