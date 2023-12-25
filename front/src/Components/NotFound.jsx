import React from "react";
import { Button } from "./Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export const ElementError = () => {
  return (
    <div>
        <Navbar/>
    <div className="flex flex-row justify-center w-full -mt-[150px]">
      <div className="w-[1437px] h-[1000px] relative -mb-[100px] ">
        <div className="inline-flex flex-col items-center gap-[40px] absolute top-[374px] left-[304px]">
          <div className="relative w-fit mt-[-1.00px] font-heading-110px-medium font-[number:var(--heading-110px-medium-font-weight)] text-black text-[length:var(--heading-110px-medium-font-size)] tracking-[var(--heading-110px-medium-letter-spacing)] leading-[var(--heading-110px-medium-line-height)] whitespace-nowrap [font-style:var(--heading-110px-medium-font-style)]">
            404 Not Found
          </div>
          <p className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
            Your visited page not found. You may go home page.
          </p>
         <Link to={'/home'}><button className=" bg-red w-[400px] h-10 border rounded text-white text-sm">Go Back To Home</button></Link> 
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};