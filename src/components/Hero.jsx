import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col flex-1 w-[100%] md:flex-row'>
            <div className='flex flex-col justify-center items-center text-[#9290C3] bg-red-600 flex-1'>
                <h1>Hello, my name is Tamir!</h1>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, pariatur facere? Tempore dignissimos beatae iure vero voluptates dolorem nihil laborum at nesciunt aliquam impedit, fugit commodi. Repudiandae molestias eius voluptatum?</h3>
            </div>
            <div className='flex-1 bg-gray-600'>
                {/* <p>Hello, my name is Tamir!</p> */}
            </div>
        </div>
    )
}

export default Hero
