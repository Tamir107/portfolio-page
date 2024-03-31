import React from 'react'

function Navbar() {
    return (
        <div className='bg-[#070F2B] text-[#535C91] flex justify-between p-4 w-[100%]'>
            <h1 className=''>logo</h1>
            <div className='flex gap-4'>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}

export default Navbar
