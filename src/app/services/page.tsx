import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pt-60 py-11">
        <p className="text-4xl text-center font-bold">Price :</p>
        <div className="flex gap-10 grid grid-cols-3">
          <div>
            <Image 
            src="/baju-04.webp" 
            alt="product" 
            width={500} 
            height={400} 
            className="pl-7 mx-auto"
            />
            <p className="pb-96 text-center text-2xl font-bold">250K IDR</p>
          </div>
          <div>
            <Image
              src="/slide-01.webp"
              alt="product"
              width={400}
              height={400}
              className="pb-32 pt-32 pl-7 mx-auto"
            />
          </div>
          <div>
            <Image 
            src="/baju-02.webp" 
            alt="product" 
            width={500} 
            height={400}
            className="pr-8 mx-auto"
            />
             <p className="pb-96 text-center text-2xl font-bold">250K IDR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
