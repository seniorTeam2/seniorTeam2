import React from 'react'
import Navbar from './Navbar'
import ReactStars from 'react-stars'

function SingleProducts() {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <>
    <Navbar/>
    <div className='ml-40 mt-10 '>
         <h1 className='text-gray-300'>Home /  
        <span className='text-black'> SingleProduct</span>
      </h1>
      <div className='float-right w-[309px] h-[24px] mt-10 mr-48'>
        <div className='  className="fixed w-[309px] top-0 left-0 font-heading-24px-semibold font-[number:var(--heading-24px-semibold-font-weight)] text-text-2 text-[length:var(--heading-24px-semibold-font-size)] tracking-[var(--heading-24px-semibold-letter-spacing)] leading-[var(--heading-24px-semibold-line-height)] [font-style:var(--heading-24px-semibold-font-style)]'>
        Havic HV G-92 Gamepad
        </div>
      </div>
      <div className='float-right mt-20'>
      <ReactStars className='float-right mt-20 m-32'
        count={5} 
        onChange={ratingChanged}
        size={20}
        color2={'#ffd700'}
        style={{'margin-right': '-314px'}}
        />
      </div>
      
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default SingleProducts