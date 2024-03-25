import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="font-serif">
        <ul className="flex gap-10 text-2xl font-semibold pb-2 pt-4 bg-orange-200">
          <Link href="https://id.wikipedia.org/wiki/Eben-Haezer">
            <div className="pb-1 px-6 font-extrabold text-4xl font-serif">Ebenhaezer</div>
          </Link>
          <div className="container flex justify-end mx-auto px-0 gap-8">
            <Link href="." className=" text-black">
              <li>Home</li>
            </Link>
            <Link href="/about" className=" text-black">
              <li>About</li>
            </Link>
            <Link
              href="/services"
              className=" text-black"
            >
              <li>Services</li>
            </Link>
            <Link href="/teams" className=" text-black">
              <li>Teams</li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
