import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUp = () => {
  return (
   <div className='container'>
    
    <img src="https://i.pinimg.com/564x/51/e9/2c/51e92c074426a5b582bdbacc90fa0bc7.jpg" alt="" className='image'/>
      <Card className="max-w-md mx-auto p-4 rounded-md text-black bg-white">
        
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Create your <span className="text-[#7747ff]">account</span></div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Enter you details below </div>
        <form className="flex flex-col gap-3">
          <div className="block relative"> 
            <Typography type="label" color="gray">Name</Typography>
            <Input type="email" color="lightBlue" placeholder="Enter your name" />
          </div>
          <div className="block relative"> 
            <Typography type="label" color="gray">Email</Typography>
            <Input type="password" color="lightBlue" placeholder="Enter your email" />
          </div>
          <div className="block relative"> 
            <Typography type="label" color="gray">Password</Typography>
            <Input type="password" color="lightBlue" placeholder="Enter your password" />
          </div>
          <div>
            <a className="text-sm text-[#7747ff]" href="#">Forgot your password?</a>
          </div   >
          <Button color="lightBlue" ripple="light" className="w-max mx-auto">Create account </Button>
        </form>
        
        <div className="text-sm text-center mt-4">Don’t have an account yet? <a className="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div>
  
      </Card>
   </div>
  
    
  );
};

export default SignUp;
