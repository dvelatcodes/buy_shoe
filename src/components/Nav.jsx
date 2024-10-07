import React, {useState} from "react";
import { useStateContext } from "../utils/ContextProvider";


const constants = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  const [showHam, setShowHam] = useState(false);

  const changeHam = ()=>{
    setShowHam((prev)=> prev === false? true : false)
  }

  const { attributes } = useStateContext();

  return (
    <header>
      <nav className="w-screen sm:w-[80vw] m-auto h-[13vh] flex justify-between items-center border-b relative">
        <img src="/images/icon-menu.svg" alt="menu icon" className="sm:hidden w-[50] h-[50] cursor-pointer" onClick={changeHam}/>

        <h1 className="text-2xl sm:text-4xl  font-semibold">sneakers</h1>

        <section className={`${attributes.light === "light"? "bg-white" : "bg-black"} ${showHam? "hidden" : "flex"} sm:bg-transparent h-screen sm:h-full w-[60%] sm:w-[50vw] flex gap-8 sm:gap-12 flex-col sm:flex-row absolute top-0 left-0 sm:relative z-40 pl-8 sm:pl-0 pt-6 sm:pt-0`}>

          <img src="/images/icon-close.svg" alt="close icon" className="sm:hidden w-[20px] h-[20px] cursor-pointer mb-5" onClick={changeHam}/>
          {constants.map((data, i) => (
            <a
              href="#"
              key={i}
              className={`${attributes.light === "light"? "text-black" : "text-white"} w-fit sm:h-full font-bold sm:font-light hover:border-b-4 flex sm:items-center`}
            >
              {data}
            </a>
          ))}
        </section>
        <section className="flex items-center">
          <img src="/images/icon-cart.svg" alt="cart" className="mr-12" />
          <img
            src="/images/image-avatar.png"
            alt="profile"
            className="w-[65px] h-[60px] cursor-pointer profile"
          />
        </section>
        <div className={`h-screen w-[40%] bg-black opacity-30  absolute right-0 top-0 ${showHam? "hidden" : "block"} sm:hidden`}></div>
      </nav>
    </header>
  );
};

export default Nav;
