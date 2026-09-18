import React from 'react'

const About = () => {
    return (
        <>
            <div className='bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] min-h-screen bg-cover bg-center bg-fixed bg-gray-950'>
                <div className="bg-gradient-to-b from-black/95 via-black/40 to-black/95 min-h-screen w-full">
                    <div className="text-center font-extralight text-xl md:text-2xl text-[#ff4955] pt-45 font-Kaushan">A Few Words</div>
                    <div className="text-center font-extralight text-white text-6xl md:text-8xl mt-2 uppercase gothic">About Us</div>

                    <div className="mt-10 mx-auto bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/about-02.jpg)] h-80 w-[90%] md:w-[80%] rounded-md bg-cover bg-center relative bg-fixed ">

                    </div>

                    <div className="font-extralight md:text-4xl text-3xl text-[#ff4955] md:pt-45 pt-20  md:px-30 px-8 font-Kaushan">Our Story</div>
                    <div className="font-extralight text-white text-4xl leading-12 md:text-7xl md:leading-25 xxl:text-8xl mt-4 md:px-30 px-8 uppercase gothic">
                        Our story is one of <br />
                        <span className='text-[#ff4955]'>
                            passion, perseverance, <br />
                            and commitment
                        </span>
                    </div>

                    <div className="grid grid-cols-2 m-auto w-[90%] md:w-[80%] gap-20 text-white mt-20">
                        <div className="text-2xl md:text-3xl gothic uppercase ">
                            Our journey began when a group of dedicated individuals, fueled by a shared love for exceptional deals and unmatched savings, came together to create a shopping experience like no other
                        </div>
                        <div className=' md:text-lg text-sm  text-gray-300'>
                            Founded in 2008, BlackFridayShop set out with a simple mission – to make Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips. Over the years, we've dedicated ourselves to curating the finest selection of products.

                            <div className='mt-5'>
                                What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the finest products, establishing partnerships with trusted brands that share our commitment to excellence.
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] md:w-[80%] m-auto mt-20'>
                        <div className="bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/about-01.jpg)] min-h-[300px] md:h-120 bg-cover bg-center rounded-lg overflow-hidden">
                            <div className="bg-black/70 h-full w-full items-center justify-center pt-20 text-white">
                                <div className="text-center uppercase gothic text-xl md:text-3xl">
                                    boundless love for saving
                                </div>
                                <div className="text-xl md:text-2xl mt-6 leading-relaxed text-center font-Kaushan">
                                    <span className='text-white'> "We've scoured the market for the finest products, establishing partnerships with  <br />
                                        trusted brands that share our commitment to excellence!"
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] md:w-[80%] m-auto mt-20 grid grid-cols-2 gap-10'>
                        <div className='border border-white'>
                            <div className="font-extralight md:text-4xl text-3xl pt-10 font-Kaushan">Our Values</div>
                            <div className="font-extralight text-white text-4xl md:text-7xl mt-4 md:px-30 px-8 uppercase gothic">
                                Our values are at the heart of everything we do
                            </div>
                        </div>
                    </div>









                    <div className="h-300"></div>
                </div>
            </div>
        </>
    )
}

export default About