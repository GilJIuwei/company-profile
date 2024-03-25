import Image from "next/image";
import React from "react";

const aboutUs = () => {
  return (
    <div
      className="opacity-80 w-screen h-screen relative"
      style={{ backgroundImage: "url(/bg-02.webp" }}
    >
      <div className="container mx-auto grid grid-cols-5  font-bold pt-36 text-xl text-green-900">
        {/* <div> 
          <Image 
          src="" 
          alt="" 
          width={500} 
          height={500}
          />
          </div> */}
        <table className="col-span-3">
          <p className="text-5xl font-extrabold">Company History</p>
          <div className="pt-11 text-4xl text-justify">
            <p className="mb-2">Our Business start when we </p>
            <p className="mb-2">begin our relationship.</p>
            <p className="mb-2">So we think to, how to make</p>
            <p className="mb-2"> income, because we dont </p>
            <p className="mb-2"> want to wasted our time</p>
            <p className="mb-2">finally, we get the result that </p>
            <p className="mb-2"> we want to make accesories</p>
            <p className="mt-2">for young people in the church.</p>
          </div>
        </table>
        <table>
          <p className="text-5xl font-extrabold">Culture</p>
          <div className="pt-11 text-4xl">
            <p className="mb-2">We start from the bottom, </p>
            <p className="mb-2">begin with enthusiasm and</p>
            <p className="mb-2">we blessed young generation</p>
          </div>
        </table>
      </div>
    </div>
  );
};

export default aboutUs;
