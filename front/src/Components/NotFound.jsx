import React from "react";
import { Button } from "./Button";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ElementError = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1437px] h-[1063px] relative">
        <div className="inline-flex flex-col items-center gap-[40px] absolute top-[374px] left-[304px]">
          <div className="relative w-fit mt-[-1.00px] font-heading-110px-medium font-[number:var(--heading-110px-medium-font-weight)] text-black text-[length:var(--heading-110px-medium-font-size)] tracking-[var(--heading-110px-medium-letter-spacing)] leading-[var(--heading-110px-medium-line-height)] whitespace-nowrap [font-style:var(--heading-110px-medium-font-style)]">
            404 Not Found
          </div>
          <p className="relative w-fit font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <Button
          button="primary"
          className="!absolute !left-[569px] !top-[633px]"
          hover={false}
          text="Back to home page"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
};