import React from "react";

const constants = ["Collections", "Men", "Women", "About", "Contact"];

const Nav = () => {
  return (
    <header>
      <nav className="w-[80vw] m-auto h-[13vh] flex justify-between items-center border-b">
        <img
          src="/images/logo.svg"
          alt="shoe logo"
          className="w-[200px] h-[30px]"
        />
        <section className="h-full w-[50vw] flex gap-12">
          {constants.map((data, i) => (
            <a href="#" key={i} className="h-full font-light hover:border-b-4 flex items-center">
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
