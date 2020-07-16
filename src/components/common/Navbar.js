import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-primary sticky top-0 overflow-hidden w-full">
      <div className="container mx-auto text-white lg:flex justify-between py-2">
        <a href="/" className="title">
          Gossip
        </a>
        <ul className="auth lg:flex">
          <li className="mr-3">
            <a href="/login">Login</a>
          </li>
          <li className="">
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
