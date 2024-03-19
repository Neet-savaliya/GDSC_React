import React from 'react'

function Home() {
  return (
    <div className='flex items-center justify-start p-2 '>
        <h1>
        Home
       </h1>
       <ul type="none" className='flex items-center p-3 justify-between'>
        <li className='p-2'> <a href='/login' className='text-lime-600 cursor-pointer'> login</a></li>
        <li className='p-2'> <a href='/register' className='text-lime-600 cursor-pointer'> register</a></li>
       </ul>

    </div>
  )
}

export default Home