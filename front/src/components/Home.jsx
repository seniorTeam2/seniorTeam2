import React, { useEffect, useState } from 'react'
import FlashSales from './FlashSales.jsx';
import { FaArrowRight } from "react-icons/fa";
import BrowseCategory from './BrowseCategory.jsx';
import BestSellingProducts from './BestSellingProducts.jsx';
import Details from './Details.jsx';
import Footer from './Footer.jsx'
import { Link, NavLink,useNavigate } from "react-router-dom";
import axios from 'axios'
import ExploreProd from './ExploreProd.jsx'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import AccountDropDown from './AccountDropDown';
const Home = ({singleAdd,handlerFuntion,searching,refresh,setRefresh,refresh1,setRefresh1,counter}) => {


  const addCart=(obj)=>{
    axios.post("http://localhost:3000/api/cart/addCart",obj).then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))
  }
  const navigate=useNavigate()
    const[products,setProducts]=useState([])
    const[exp,setExp]=useState([])
    const[flash,setFlash]=useState([])
    const[categories,setCategories]=useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/products/allProducts`)
        .then(r=>{setProducts(r.data);console.log(r.data)
          let d=r.data.filter(e=>{
            return e.Discount
          })
          setFlash(d)
          setExp(r.data.slice(0,8)) 
           }).catch(err=>console.log(err))
    },[])

    
    const[e,setE]=useState('')
const[showAcc,setShowAcc]=useState(false)
  return (
    
           
    <div>

<div className='fixed w-full bg-white z-10 '>
        <nav >
        <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
            <span className=' text-lg underline cursor-pointer ml-11'>Shop Now!</span>
            <select name='English' className='absolute right-5 text-white bg-black'>
                <option >English</option>
            </select>
        </div>
        <div className='flex justify-center gap-8 mt-11 mb-6 '>
        <h1 className='absolute left-20 font-bold text-3xl mb-7'> ℰ-ℳ𝒶𝓁𝓁 🛒</h1> 
        <NavLink to={'/home'} style={{marginLeft:"25%"}}>Home</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/AboutUs'}>AboutUs</NavLink>
        <NavLink to={'/'} style={{marginRight:'5%'}}>Sing up</NavLink>
        <div className='w-auto h-8 flex float-right gap-16  right-10 top-20'>
            <input
            onChange={(e)=>setE(e.target.value)}
             type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9'/>
           <IoSearchOutline onClick={()=>{searching(e)
            navigate('/AllProducts')} } size={25} className=' right-15 top-1 ' style={{marginLeft: '-17%'}}/>
            <FaRegHeart size={25}/>
            <div style={{right: '16%','top': '55%'}} className='w-5 h-5 bg-red rounded-full absolute text-white flex justify-center items-center'>{counter}</div>
            <AiOutlineShoppingCart className='cursor-pointer' size={25} onClick={()=>navigate('/cart')} />
            <CgProfile size={25} onClick={()=>setShowAcc(!showAcc)}/>
           {showAcc&& <AccountDropDown/>}
        </div>
        </div>
       </nav>
           <hr className='text-gray-300'/>

    </div>

           <hr className='text-gray-300'/>
           <div className=' flex justify-start m-11 gap-32 mt-40'>
           <div id="unique">
           <Link><h1>women's fashion</h1></Link>
           <Link><h1>men's fashion</h1></Link>
           <Link ><h1>Electronics</h1></Link>
           <Link><h1>Home & LifeStyle</h1></Link>
           <Link><h1>Medecine</h1></Link>
           <Link><h1>Sports & Outdoor</h1></Link>
           <Link><h1>Baby's & Toys</h1></Link>
           <Link><h1>Groceries & Pets</h1></Link>
           <Link><h1>Health & Beauty</h1></Link>
           </div>
           <div className=' w-4/5 h-96 bg-black grid grid-cols-2'>
            <div className='flex items-center ml-32'>
            <div className='grid gap-8'>
            <span>
            <h1 className='text-white float-right text-2xl ml-4 mt-3'>iPhone 14 Series</h1>
            <img className=' w-12 overflow-hidden' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD8/vz////z9fO2uLYICAj3+fdLS0vm6OZ4eXjw8vDr7eujpaMpKimfoJ9rbGuMjYyrravf4d+wsbBDQ0OKi4rP0c/Z29m7vLs6OjrBw8FPUE+UlZTT1dNzdHMbGxtXWFcWFxZjZGOAgYB1dnVHSEclJSUxMjEvMC8ZGRnBCm4CAAAHTklEQVR4nO2d63ayTAyFIbylFK0WULCeq7Xtd/83+IG2th6YQbIxweXzq6s/ZmU7wxwyScZxtPL1/PwsbUNzvC7HKRG50nY0xPAp9gt5rutJm9II09lOnXubCgcjfy/vJhVO/8q7PYWD1DvUd2sKJ3Ss77YUfvmn+lzXlzYLR++sQMqk7YIRnNOXK5xKGwbiIzwv0KUXadMwrM9MMd8KpU3D0CvT51JH2jYISalAlxJp4xD8KxfoUl/aOgBTg0CXvqTN4/NkFBi+SdvH5s0k0KWxtH18OmaFS2n7uCxKdjL7QSptIJvyhXCncChtIJeNWaBLr9IWcvEtAlu/oRnaunAubSGTgU1g65eKsU3hk7SFTF5tAgNpC7mMLArdibSFTKxdOJK2kIvhULjFa/2pwrYWrqUN5PJi2a+l0gayMXch+QNpA7nMLV24lDaQjflQcQv+p9jou2j7ZsaxbUnbP8s4TmRyIN6CQNOOjWJp4yAYBEbStmEov6e4kcu0Mjc33cIsuqVbchvaab+H+5uzCulWRmjBOYWULaXNAnKqkOiftFFQjhQSuT1pk8AcKCSKb2IXc8BeIeVkK2lzGqBL34RR9CBtTCP0vE44epkupe24c4fHwx+kbdkzefyB6ZDfTMcZ/WE0nm6EnW/v8/4sC/7YFGdpf14n2ufhfR5vGzrcEhSrStKXOnmsEm8n69gm8i49zg5T/1jdQZP++Pqu8EmSlZm0NWqWVI02WKwTv7Sl3xbD5L1RQUdMw3J5e5GdKho/E1tLvw3GV9M4DisZlWsMzDfyD1FwNgS6tMEgWVxB39Ct9qPvfveg/PQwyaq39PujNR60OE0vMyoX+a93JjxmMJpdKu+7vaBRjW+9GmblItOjhfJlVvHrO9tcgxFT60u+mkOrOuHw+5tcJWGntrxda15TMVNrhl27xbvbTY9X0HqNNRLJvzHHE1aVyW3ju6XsEy7wfQYyDgOl6DTaJerXR0HeB1SgJSBUAuydvy0UTQbCDVSdAvNeRA3UpU6BhUTMNlXhN/gDzRBr/0qvQMzlv+IeLACE4BgjYOQh4q4ZmXKBLnfFMCaYyUMZd6YxJpjJw4/qNyeYSUP0yBVoDzqXhAChmn3NAiGxqOYcQWEIkLRgiecVhRACDWF28kDCpS90jF4VTDy4ZoEbhEBTOK8wBIkzWkjLKAeUGaW3C1E5tIrPFJjUry9pGaWg8rxtOXRiEKoGmFaBsC7k3DI1CixiuiTkXB7IdrTAkugpBi5zSG0XogTayjpIgctb0LrcEyrz5FPpZ4j7CrX6Z2ATqda7GGDZGq0Xorh6Ekr9F7gUvg+tEw0soM1WfUQMlECt226Md2aL0tsKYCKm0tMvsCqttJQSgAqVdiGwIoFShcB02rtCGe4K7wrvCuW5K7wrvCuU567wrrAFCoFP6+hUePvnQ2SGjFaFOE+UVoU4T5RShUB/qVaFBCu7pPRiBlgm2vRKkSQ4hUp93kB/ot50Q1Qavtq7J9jDFw/8xPuGoP9AEpXeAQMfRdQaToMLN9EabYLrRKXRJgWgF2b19iEqWmGgNBjDxa36ipPWQGui3mQL1FHf8lSKKKCXAxUrBH2KeqeaHH8JUKi7VAQi+1DzVONCjlGK1/wCAkiU1mABsCpq9Ub9wJeo1pPxA/sgtVC8cdvBLmui9hS8h2JecoLy0kIFzPJCyivTbCGXVcnUk7a/CjRjpD1r9e0fQl6vfrZXKxS6nMd1W6Iwn3DqxjDoqshqgmo+5D1pjcK6aW0PYZsk1upEzd6aI2oGTG1apLCmo1jtLdsxtZ1TSpPYTqnv62/LXFPfNdWG7bdb7E7rCmzLvobjXWzFXMPpQmclbX0VeCF9bThD8eoqKXcNF3CjMtX7a6jDfJ5NfSfyfcPap1N+lUi1RbF2IO71dX+JiByFleYLYUwcmOJOpBDyhofi6RSVoaB2OiUP9VSpWoX1vIhnUBrbzjpUHKFznOKqmyn12ABrfzkqPTbIci45A4UKwa/PqyuHCe5CR10wH/tYeIqyqyi69NnoCqiKV8SP0Zw3aVV/IfwjnTmfejoRluN1hJpSdQRKLDlFTShYU+8BaxmnwLz1E1Ss+4AHAQ1oiKyFvT56HvlPsckxWrBxhSU2LTA/ZQgLxJW8LkU0F4Ni8JlJnUSk48KALyaxiRPFORZSPo1rCRTLVUB6D22IOPqvKVDkxI8sZ1aFl4tXfjpCucDiWvECG3NBXhaP5k875uM4Di4Ted0huuPNq2hhLiVIHk8SIybDtLpICYGO81HloJGLiCZlRVcWTrfaeKX3qyr7JbJ9jOSHXUsb/aBj00g+7O2Oi3k1ScwNjyqVB1gHJo2EeyKoDotuiXH54BtFlY+q65FXJpJSVNmd2mSnX1IxdV5aeuwlPf0ki3+wMvBArKK/o6xQN3uqU1ptuc6CX5XFX0GPlX6HZJ7uF/I47TNqc6yGabhrJ0jn1zgKVudjMYyiKBnwK4+8PW8B2OQ4/wO0jJg01bFlgwAAAABJRU5ErkJggg==" alt="" />
            </span>
            <h1 className='text-5xl text-white	'>Up to 10%<br/> of Voucher</h1>
            </div>
            <button id='button-home' className='text-white absolute underline'>Shop Now</button>
            <FaArrowRight id='arrow-id' color='white' size={25}/>

            </div>
            <img className=' w-full' src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_810,w_1440,x_0,y_0/dpr_2.0/c_limit,w_600/f_jpg/fl_lossy,q_auto/v1663274763/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large_zkrjt9" alt="" />
           </div>
           </div>
          
            <hr id="hr-unique" className=' rotate-90 w-96 absolute top-16 text-gray-300'/>
<FlashSales refresh1={refresh1} setRefresh1={setRefresh1} refresh={refresh} setRefresh={setRefresh}  products={flash} addCart={addCart} singleAdd={singleAdd} />
<BrowseCategory  handlerFuntion={handlerFuntion}/>
<BestSellingProducts refresh={refresh} setRefresh={setRefresh}/>
<ExploreProd products={exp} />
<Details/>
<Footer/>

    </div>

  )
}

export default Home