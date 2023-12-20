import React from 'react'
//onProgress
const EditProfile = () => {
    return (
        <div className='ml-10 mt-10 mr-10'>
            <h1 className='text-gray-400'>Home / <span className='text-black'>My Account</span></h1>
            <h1 className='float-right'>Welcome Name</h1>
            <div className='grid grid-cols-2 mt-24'>
                <div>
                    <h1>Manage My Account</h1>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Profile</h3>
                    <h3 className='ml-10 mt-4 text-gray-400'>Adress Book</h3>
                    <h3 className='ml-10 mt-4 text-gray-400 mb-5'>My Payment Options</h3>
                    <h1>My Orders</h1>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Returns</h3>
                    <h3 className='ml-10 mt-4 text-gray-400'>My Cancellations</h3>
                    <h1 className='mt-4'>My WishList</h1>
                    </div>
                <div className='shadow w-5/6 h-5/6 bg-black'>

                
                </div>

            </div>

        </div>
    )
}

export default EditProfile