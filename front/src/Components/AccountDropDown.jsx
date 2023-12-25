import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { BsBasket3 } from "react-icons/bs";
import { MdFreeCancellation } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const AccountDropDown = () => {
  const navigate=useNavigate()
  return (
    <div style={{backgroundColor: 'rgba(128, 128, 128, 0.53)',
      left: '76%',
      position:' absolute',
      marginTop: '3%',
      width: '14%'}} id="drop-account"  className='bg-back w-10 h-60 text-white grid grid-rows-5 rounded'>
        <div className='flex flex-row-reverse gap-2' style={{'margin-right': '9%'}}>
        <h1 className=' float-right cursor-pointer' onClick={()=>navigate('/edit')}>Manage Account</h1>
        <VscAccount  size={30}/>
          
            

        </div>
        <div className='flex flex-row-reverse gap-2' style={{'margin-right': '37%'}}>
        <h1 className='float-right cursor-pointer' onClick={()=>navigate('/cart')}>My Order</h1>
        <BsBasket3  size={30}/>
            
           

        </div>
        <div className='flex flex-row-reverse gap-2' style={{    'margin-right': '10%'}}>
            <h1 className='float-right cursor-pointer'>My Cancellations</h1>
            <MdFreeCancellation size={30}/>

        </div>
        <div className='flex flex-row-reverse gap-2' style={{    'margin-right': '28%'}}>
            <h1 className='cursor-pointer'>My Reviews</h1>
            <FaRegStar size={30}/>

        </div>
        <div className='flex flex-row-reverse gap-2' style={{'margin-right': '45%'}}>
            <h1 className='cursor-pointer' onClick={()=>navigate('/login')}>Logout</h1>
            <CiLogout size={30}/>

        </div>

    </div>
  )
}

export default AccountDropDown