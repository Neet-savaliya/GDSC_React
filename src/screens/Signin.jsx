import React from 'react'

export const Signin = () => {
    return (
        <div className=' flex flex-col  w-full items-center justify-center h-screen text bg-white'>

        <div className='shadow-slate-700 hover:drop-shadow-md border-[3px] border-black
        rounded  p-6 flex flex-col justify-center text-slate-600'>
            <h1 className='text-5xl font-semibold text-teal-700'>Login</h1>
            <p className='mt-3 text-teal-600'>Enter Your Details Below</p>
            
            <input type='email' className='  border-b-2 focus:border-blue-700  rounded outline-none bg-transparent p-2 mb-2 mt-3' placeholder='Email'/>
            <input type='password' placeholder='password' className=' border-b-2 rounded focus:border-blue-700 outline-none bg-transparent p-2 mb-2 mt-3'/>
            <input type="submit" className='
            rounded mt-2
            p-2
            bg-red-500
            text-white
            hover:cursor-pointer 
            hover:bg-red-600' />
            <p className='p-2.5'>Don't have account ? <a className='text-blue-600 ' href="/register">Sign Up</a></p>
        </div>

        </div>
    )
}
