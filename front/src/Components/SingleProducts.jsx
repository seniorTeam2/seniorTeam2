import React, { useState } from "react";
import ReactStars from 'react-stars'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export const SingleProducts = ({obj,addCart}) => {
  const[inp,setInp]=useState(0)
const ratingChanged = (newRating) => {
  console.log(newRating)
}
  return (
    <>
    <Navbar/>
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1437px] h-[1077px] relative">
        <div className="absolute w-[500px] h-[600px] top-[274px] left-[342px] bg-secondary rounded-[4px] overflow-hidden">
          <img className="absolute w-[446px] h-[546px]  left-[27px]" alt="Image" src={obj.img} />
        </div>
        
        <div className="absolute w-[170px] h-[138px] top-[274px] left-[142px] bg-secondary rounded-[4px] overflow-hidden">
          <img className="absolute w-[121px] h-[114px] top-[12px] left-[24px]" alt="Image" src="image-57.png" />
        </div>
        <div className="absolute w-[170px] h-[138px] top-[428px] left-[142px] bg-secondary rounded-[4px] overflow-hidden">
          <img className="absolute w-[112px] h-[97px] top-[20px] left-[29px]" alt="Image" src="image-58.png" />
        </div>
        <div className="absolute w-[170px] h-[138px] top-[582px] left-[142px] bg-secondary rounded-[4px] overflow-hidden">
          <img className="absolute w-[134px] h-[94px] top-[22px] left-[18px]" alt="Image" src="image-61.png" />
        </div>
        <div className="absolute w-[170px] h-[138px] top-[736px] left-[142px] bg-secondary rounded-[4px] overflow-hidden">
          <img className="absolute w-[122px] h-[106px] top-[16px] left-[24px]" alt="Image" src="image-59.png" />
        </div>
        <div className="absolute top-[273px] left-[910px] font-heading-24px-semibold font-[number:var(--heading-24px-semibold-font-weight)] text-text-2 text-[length:var(--heading-24px-semibold-font-size)] tracking-[var(--heading-24px-semibold-letter-spacing)] leading-[var(--heading-24px-semibold-line-height)] whitespace-nowrap [font-style:var(--heading-24px-semibold-font-style)]">
          {obj.name}
        </div>
        <div className="absolute top-[350px] left-[910px] font-heading-24px-regular font-[number:var(--heading-24px-regular-font-weight)] text-text-2 text-[length:var(--heading-24px-regular-font-size)] tracking-[var(--heading-24px-regular-letter-spacing)] leading-[var(--heading-24px-regular-line-height)] whitespace-nowrap [font-style:var(--heading-24px-regular-font-style)]">
          {obj.price}
        </div>
        <div className="inline-flex items-start gap-[16px] absolute top-[314px] left-[910px]">
          <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
          <ReactStars className="!relative !flex-[0_0_auto]"
        count={5} 
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
        style={{'margin-left':'15px'}} />
            <div className=" mb-10 relative w-fit mt-[9px] opacity-50 font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-text-2 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
              (150 Reviews)
            </div>
          </div>
          <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[9px] opacity-60 font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-button-1 text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] whitespace-nowrap [font-style:var(--title-14px-regular-font-style)]">
              In Stock
            </div>
          </div>
        </div>
        <p className="absolute w-[373px] top-[398px] left-[910px] font-title-14px-regular font-[number:var(--title-14px-regular-font-weight)] text-black text-[length:var(--title-14px-regular-font-size)] tracking-[var(--title-14px-regular-letter-spacing)] leading-[var(--title-14px-regular-line-height)] [font-style:var(--title-14px-regular-font-style)]">
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install &amp;
          mess free removal Pressure sensitive.
        </p>
        <div className="flex w-[159px] h-[44px] items-start absolute top-[519px] left-[897px]">
          <div className="relative w-[40px] h-[44px] rounded-[4px_0px_0px_4px] overflow-hidden border border-solid border-[#00000080]">
            <CiSquareMinus onClick={()=>setInp(inp-1)}  className="!left-[8px] !absolute !w-[24px] !h-[24px] !top-[10px]" />
          </div>
          <div className="relative w-[80px] h-[44px] -ml-px border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#00000080]">
            <div className="absolute top-[7px] left-[34px] font-title-20px-medium font-[number:var(--title-20px-medium-font-weight)] text-text-2 text-[length:var(--title-20px-medium-font-size)] tracking-[var(--title-20px-medium-letter-spacing)] leading-[var(--title-20px-medium-line-height)] whitespace-nowrap [font-style:var(--title-20px-medium-font-style)]">
              <input type="text" className="-ml-8 w-20 text-black" placeholder={inp} />
            </div>
          </div>
          <div className="relative w-[41px] h-[44px] -ml-px bg-secondary-2 rounded-[0px_4px_4px_0px] overflow-hidden">
            <CiSquarePlus onClick={()=>setInp(inp+1)} className="!left-[9px] !absolute !w-[24px] !h-[24px] !top-[10px]" color="white" />
          </div>
        </div>
       <button onClick={()=>addCart({CartImage:obj.img,Price:obj.price})} button="small" className="!absolute !left-[1072px] !top-[519px] bg-red rounded w-48 h-12 text-white"  hover={false}  >Buy Now</button>
        <div className="absolute w-[399px] h-[180px] top-[603px] left-[897px] rounded-[4px] overflow-hidden border border-solid border-[#00000080]">
          <div className="absolute w-[399px] h-px top-[90px] left-0 opacity-50">
            <img className="absolute w-[399px] h-px -top-px left-0 object-cover" alt="Line" src="line-1.svg" />
          </div>
          <div className="inline-flex items-center gap-[16px] absolute top-[24px] left-[16px]">
            <CiDeliveryTruck  className="!relative !w-[40px] !h-[40px]" />
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                Free Delivery
              </div>
              <p className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[18px] underline whitespace-nowrap">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-[16px] absolute top-[106px] left-[16px]">
            <TfiReload  className="!relative !w-[40px] !h-[40px]" />
            <div className="inline-flex flex-col items-start gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-medium font-[number:var(--title-16px-medium-font-weight)] text-black text-[length:var(--title-16px-medium-font-size)] tracking-[var(--title-16px-medium-letter-spacing)] leading-[var(--title-16px-medium-line-height)] whitespace-nowrap [font-style:var(--title-16px-medium-font-style)]">
                Return Delivery
              </div>
              <p className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                <span className="font-title-12px-medium font-[number:var(--title-12px-medium-font-weight)] text-black text-[length:var(--title-12px-medium-font-size)] tracking-[var(--title-12px-medium-letter-spacing)] leading-[var(--title-12px-medium-line-height)] [font-style:var(--title-12px-medium-font-style)]">
                  Free 30 Days Delivery Returns.{" "}
                </span>
                <span className="underline">Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
 export default SingleProducts
