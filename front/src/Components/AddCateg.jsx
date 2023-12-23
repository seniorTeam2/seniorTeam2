import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { NavLink,Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer.jsx';

const AddCateg = () => {


   const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [catName,setCatName] = useState("")
    const [ref,setRef] = useState(false)

    const navigate = useNavigate()
 console.log(catName)
 console.log(image)



  const addCat = (newCat) => {
    axios.post('http://localhost:3000/api/categories/addCategory',newCat).then((res)=>{navigate("/AdminCategories",{state:{refresh:ref}})})
    .catch((err)=>{console.log(err)})
  }

//Cloudinary //
    const uploadImage = () => {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "zmitpmpw")
      data.append("cloud_name","dfvgavtio")
      fetch("https://api.cloudinary.com/v1_1/dfvgavtio/image/upload",{
      method:"post",
      body: data
      })
      .then(res => res.json())
      .then(data => {setUrl(data.secure_url)})
      .catch(err => console.log(err))}
//***********************/
  return (
    <div>
      <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
         <NavLink to={'/addCategory'} >Add New Category</NavLink>
       <NavLink to={'/admin'}>Get Back to Administration </NavLink>
       </div>

     

    <div className='grid justify-center align-middle items-center box-border rounded-lg shadow-2xl border-black  mt-30 gap-x-64 bg-gray-200 h-auto w-2/4 ml-96 '>

        <div>
        <h1 className='text-xl font-bold text-red mt-8'>Name of Category :</h1> <br />
     <input className='bg-white shadow-md rounded pe-40 pt-2 pb-2 w-10/12 mb-4  text-center gap-40' placeholder='Category Name ' onChange={(e)=>{setCatName(e.target.value)}}/> 
    </div>
   
    <div className='fit-content mb-4 font-extrabold lg:text-xl'>
      <h1 className='text-xl font-bold text-red mt-8' > Picture of Category :</h1> <br />
    <Button component="label" variant="contained"  >
      <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
      </Button>

    <Button onClick={()=>{uploadImage()}}> <AddAPhotoIcon sx={{ width: 40, height: 40 }} /> <br/> </Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url}/>
      </div>

    </div>
    <h1 className='text-xl font-bold text-red mt-7'>Confirm :</h1>
    <Link to="/AdminCategories"> <button className='bg-black  mt-5 h-11 w-52 text-white mb-10 shadow-md rounded' onClick={()=>{addCat({NameCategory: catName, CategoryImage: url})}}>Join to Categories </button>
</Link>

    </div>
    
    <Footer/>
     </div>
  )
}

export default AddCateg;