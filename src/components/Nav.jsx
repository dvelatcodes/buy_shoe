import React from "react";

const constants = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  return (
    <header>
      <nav className="w-screen sm:w-[80vw] m-auto h-[13vh] flex justify-between items-center border-b relative">
        <img src="/images/icon-menu.svg" alt="menu icon" className="sm:hidden w-[50] h-[50]"/>

        <h1 className="text-2xl sm:text-4xl  font-semibold">sneakers</h1>

        <section className="bg-pink-400 sm:bg-transparent h-screen sm:h-full w-screen sm:w-[50vw] flex gap-12 flex-col sm:flex-row absolute top-0 left-0 sm:relative z-40">

          <img src="/images/icon-close.svg" alt="close icon" className="sm:hidden w-[20px] h-[20px] cursor-pointer"/>
          {constants.map((data, i) => (
            <a
              href="#"
              key={i}
              className="sm:h-full font-light hover:border-b-4 flex sm:items-center"
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
      </nav>
    </header>
  );
};

export default Nav;
