import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";



const ContactAdmin = () => {


  const handleSub = (ev) => {
    alert("Thank you! We'll be in touch soon.")
    ev.preventDefault();
  }


  return (

    <div>
        <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Make Discount on your sales and win Gold Coupon </h3></div>
            <div className='flex justify-center gap-8 mt-11 mb-6'>
        <NavLink to={'/seller'} >Home</NavLink>
        <NavLink to={'/contactAdmin'}>Contact Administration</NavLink>
        <NavLink to={'/addforsale'}>Add For Sale</NavLink>
        <NavLink to={'/addforsale'}>All My Sales </NavLink>

        <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
            <CgProfile size={25} />
        </div>
        </div>
            
    <form onSubmit={()=>{handleSub()}}
      className="ml-96">
      <div className="pt-0 mb-3 my-28">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="relative w-3/4  px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="relative w-3/4  px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className="relative w-3/4 h-96 px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="hover:shadow-lg px-6 py-3 mb-1 mr-1 text-sm font-bold text-black uppercase rounded shadow "
          type="submit"> Send message  </button>
      </div>
    </form>


    </div>
  );
};

export default ContactAdmin;