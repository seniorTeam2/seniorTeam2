import React, { useEffect, useState } from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const BrowseCategory = ({handlerFuntion}) => {
  const navigate=useNavigate()
  



const[change,setChange]=useState(false)
const[index,setIndex]=useState(1)
  return (
    <div className='ml-10'>
        <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>Categories</h1>
  </div>
    <h1 className='text-5xl font-medium mb-20'>Browse By Category</h1>
    <div onClick={()=>{setChange(true);setIndex(index-1)}}  style={{'top':'219%'}} className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div onClick={()=>{setChange(true);setIndex(index+1)}} style={{'top':'219%'}} className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0'><FaArrowRight /></div>
   
<div className='flex gap-6'>
<div  tabIndex={0} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('Phones')};
                    }}    style={{background : change&&index===1 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
                  setIndex(1)}}
                
                >
                    <div>
        <IoIosPhonePortrait size={90} style={{ color: change&&index===1 ? 'white' : 'black',
                                                }} />
        <h1 className='ml-5' style={{color: change&&index===1 ? 'white' : 'black',}}>Phones</h1>
        </div>
        </div>
        <div tabIndex={1} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('HeadPhones')};
                    }} style={{background : change&&index===2 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
                  setIndex(2)
     }}>
        <div>
        <CiHeadphones size={90} style={{ color: change&&index===2 ? 'white' : 'black',
                                                }}/>
       <h1 className='ml-5' style={{color: change&&index===2 ? 'white' : 'black',}}>HeadPhones</h1>
        </div>
        </div>
        <div tabIndex={2} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('SmartWatch')};
                    }} style={{background : change&&index===3 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
              setIndex(3)}}>
        <div>
        <BsSmartwatch size={90}  style={{ color: change&&index===3 ? 'white' : 'black',
                                                }} />
       <h1 className='ml-5' style={{color: change&&index===3 ? 'white' : 'black',}}>SmartWatch</h1>
        </div>
        </div>
        <div tabIndex={3} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('Camera')};
                    }} style={{background : change&&index===4 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
                setIndex(4)}}>
        <div>
        <IoCameraOutline  size={90} style={{ color: change&&index===4 ? 'white' : 'black',
                                                }}/>
        <h1 className='ml-5' style={{color: change&&index===4 ? 'white' : 'black',}}>Camera</h1>
        </div>
        </div>
        <div tabIndex={4} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('Computers')};
                    }} style={{background : change&&index===5 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
      setIndex(5)}}>
        <div>
        <HiOutlineComputerDesktop  style={{ color: change&&index===5 ? 'white' : 'black',
                                                }} size={90} />
        <h1 className='ml-5' style={{color: change&&index===5 ? 'white' : 'black',}}>Computers</h1>
        </div>
        </div>
        <div tabIndex={5} 
    onKeyDown={(e) => {
  if (e.key === "Enter") {
      handlerFuntion('Gaming')};
                    }} style={{background : change&&index===6 ? '#db4444':'white'}} className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>{setChange(true)
      setIndex(6)}}>
        <div>
        <SiYoutubegaming  size={90} style={{ color: change&&index===6 ? 'white' : 'black',
                                                }}/>
       <h1 className='ml-5' style={{color: change&&index===6 ? 'white' : 'black',}}>Gaming</h1>
        </div>
        </div>
        </div>
   
   
  
    <hr className='text-gray-300 w-5/6 mb-14'/>
    </div>
  )
}

export default BrowseCategory