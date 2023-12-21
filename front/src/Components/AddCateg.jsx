import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { NavLink,Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer'

const AddCateg = () => {

  const [categ,setCateg]= useState([])
   const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [file,setFile]=useState(null);
    const [refresh,setRefresh]= useState(false);
    const [catName,setCatName] = useState("")
 

    useEffect(()=>{
      axios.get('http://localhost:3000/api/categories/allCategories').then((res)=>{setCateg(res.data)})
      .catch((err)=>{console.log(err)})
  },[refresh])

  const addCat = (newCat) => {
    axios.post('http://localhost:3000/api/categories/addCategory',newCat).then((res)=>{setRefresh(res.data)})
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
      .then(data => {setUrl(data.url) })
      .catch(err => console.log(err))}
//***********************/
  return (
    <div>
      <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
         <NavLink to={'/addCategory'} >Add New Category</NavLink>
       <NavLink to={'/admin'}>Get Back to Administration </NavLink>
       </div>

     

    <div className='grid justify-center align-middle items-center  mt-40 gap-x-64 bg-gray-300 h-96 w-2/4 ml-96 rounded-t'>

        <div>
        <h1 className='flex text-left mb-4 font-extrabold lg:text-xl'>Add a Name for your Category :</h1> <br />
     <input className='bg-white shadow-md rounded pe-40 pt-6 pb-5 mb-4 text-center gap-40' placeholder='Category Name ' onChange={(e)=>{setCatName(e.target.value)}}/> 
    </div>
   
    <div className='mb-4 font-extrabold lg:text-xl'>
      <h1  >Add picture for your Category :</h1> <br />
    <Button component="label" variant="contained"  >
      Upload Image
      <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
      </Button>

    <Button onClick={()=>{uploadImage()}}> Add <AddAPhotoIcon sx={{ width: 40, height: 40 }} /></Button>
    <div>
      <img className='h-auto max-w-lg rounded-lg cursor-pointer drop-shadow-2xl' src={url}/>
      </div>

    </div>
    <Link to="/AdminCategories"> <button className='bg-black  mt-5 h-11 w-52 text-white ' onClick={()=>{addCat({NameCategory: catName, CategoryImage: image})}}>Join to Categories </button>
</Link>

    </div>
    
    <Footer/>
     </div>
  )
}

export default AddCateg;