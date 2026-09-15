import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import Data from '../assets/assets';
import Rating from '../ui/Rating';
import { FaLock, FaStar, FaTruck } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdRefresh } from 'react-icons/io';
import Products from '../ui/Products';

const Home = () => {

  // /////////////// Timer DAta ////////////////

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 4,2027 00:00:00").getTime();

    interval = setInterval(() => {
      let nowTime = new Date().getTime();
      let distance = countdownDate - nowTime;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000)),
        hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)),
        minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000)),
        seconds = Math.floor((distance % (60 * 1000)) / (1000));

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }


    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    };
  })



  return (
    <>
      {/* div ke andar div banane ke liye .>. */}
      {/* ul>li.link*5>a+p */}
      <div className='bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] min-h-screen bg-cover bg-center bg-fixed bg-gray-950'>
        <div className="bg-gradient-to-b from-black/95 via-black/40 to-black/95 min-h-screen w-full flex justify-center items-center flex-col px-4 gap-5 pt-27">
          <div className="font-Kaushan  text-3xl">
            Hurry, Black Friday is Almost Here!
          </div>
          <div className='text-8xl text-white gothic font-bold tracking-wide uppercase text-center leading-30'>
            Time Left Until Our  <br />
            <span className='text-[#FF4955]'>Biggest Sale of the Year <br />begins</span>
          </div>
          <Button text={"set reminder"} />

          <div className="flex gap-10 mt-20">
            <div className="border border-white w-60 h-60 flex flex-col justify-center items-center gap-1 text-white uppercase">
              <p className="gothic text-9xl">{timerDays}</p>
              <p className="">days</p>
            </div>
            <div className="border border-white w-60 h-60 flex flex-col justify-center items-center gap-1 text-white uppercase">
              <p className="gothic text-9xl">{timerHours}</p>
              <p className="">hours</p>
            </div>
            <div className="border border-white w-60 h-60 flex flex-col justify-center items-center gap-1 text-white uppercase">
              <p className="gothic text-9xl">{timerMinutes}</p>
              <p className="">minutes</p>
            </div>
            <div className="border border-white w-60 h-60 flex flex-col justify-center items-center gap-1 text-white uppercase">
              <p className="gothic text-9xl">{timerSeconds}</p>
              <p className="">seconds</p>
            </div>
          </div>
        </div>
        <div className="bg-black py-10">
          <div className=" mx-4 md:mx-20 bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-006.jpg)] bg-center bg-cover min-h-[500px] md:h-auto overflow-hidden">
            <div className='flex gap-1 py-20'>
              <div className="w-180 px-10">
                <p className='font-Kaushan text-3xl'>
                  Up to 50% Off
                </p>
                <p className="gothic text-4xl md:text-7xl mt-5 uppercase text-white leading-tight">
                  Grab Your Favorites Before They're Gone
                </p>
                <div className="text-[#DAD7DA] mt-5 max-w-md">
                  You can trust us to bring you the latest technology at <br /> unbeatable prices. Don’t miss this limited-time opportunity to <br />
                  upgrade your audio game. Grab your perfect pair now!
                </div>
                <div className='mt-10'>
                  <Button text={"SHOP NOW"} />
                </div>
              </div>
              <div className="w-90">
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphone-01.png" alt="" />
              </div>

            </div>
          </div>

          <div className="mt-20 w-full">
            <div className="flex gap-4">
              <div className="w-135 h-100 ml-20">
                <div className='font-Kaushan text-2xl md:text-3xl'>Black Friday Exclusive</div>
                <div className=" gothic text-4xl md:text-7xl uppercase mt-5 text-white leading-tight">
                  Save big: <span className='text-[#FF4955]'>Up to 75%</span> <br />
                  <span className='text-[#FF4955]'>Off </span>on Headphones
                </div>
                <div className='text-white mt-10'>
                  You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game.
                </div>
                <div className="mt-10">
                  <Button text={"SHOP NOW"} />
                </div>
              </div>
              <div className="w-40 h-45 mt-27">
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/image.jpg" alt="" className='rounded-sm h-full' />
              </div>
              <div className="w-100 h-100">
                <img src="https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/headphones-img-02.jpg" alt="" className='rounded-sm' />
              </div>
            </div>
          </div>

          <div className="mt-25 text-center font-Kaushan text-2xl md:text-3xl ">
            Unbelievable Discounts Await You
          </div>
          <div className="gothic text-4xl md:text-7xl mt-10 uppercase text-white text-center">
            Black Friday Madness is Here!
          </div>

          <div className="mt-20 grid grid-cols-4 gap-7 px-25">
            {Data.slice(0, 4).map((item) => {
              return (
                <Products item={item} />
              )
            })}
          </div>

          <div className="bg-black mt-25">
            <div className=" mx-4 md:mx-20 bg-[url(https://websitedemos.net/black-friday-04/wp-content/uploads/sites/1419/2023/11/bg-07.jpg)] bg-center bg-cover min-h-[400px] md:h-150 overflow-hidden relative">
              <div className="absolute bg-black/60 h-full w-full flex flex-col justify-center items-center ">
                <div className="font-Kaushan text-3xl font-semibold">Limited-Time Offer</div>
                <div className="gothic text-white text-4xl md:text-7xl mt-5 uppercase">Save Big: Up to <span className='text-[#FF4955]'>60% Off </span> on All
                </div>
                <div className="gothic text-white text-4xl md:text-7xl mt-3 uppercase">Headphones</div>
                <div className='uppercase text-white gothic text-2xl mt-5'>
                  Act Fast Before They're Gone
                </div>
                <div className='mt-10'>
                  <Button text={"SHOP NOW"} />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-20 flex px-20 mb-30'>
            <div className="w-140"></div>
            <div className="w-140">
              <div className="font-Kaushan text-2xl">Why Choose BlackFridayShop?</div>
              <div className="gothic uppercase text-7xl mt-5 text-white">
                the joy of shopping <br /> at its best
              </div>
              <div className='gap-10 grid grid-cols-2 mt-10'>

                <div className="w-60  text-white">

                  <FaTruck className='text-4xl mb-4' />
                  <p className='uppercase gothic text-xl md:text-2xl'>Free Shipping</p>
                  <div className="mt-3 text-gray-400 max-w-[240px] mb-8">
                    Delight in seamless free shipping, enhancing your shopping experience.
                  </div>


                  <FaLocationDot className='text-4xl mb-4' />
                  <p className='uppercase gothic text-xl md:text-2xl'>Order Tracking</p>
                  <div className="mt-3 text-gray-400 max-w-[240px] mb-8">
                    Track your order effortlessly with our streamlined system.
                  </div>
                </div>

                <div className="w-60 text-white">

                  <FaLock className='text-4xl mb-4' />
                  <p className='uppercase gothic text-xl md:text-2xl'>Secure Payments</p>
                  <div className="mt-3 text-gray-400 max-w-[240px] mb-13">
                    Shop with confidence using our secure payment methods.
                  </div>


                  <IoMdRefresh className='text-4xl mb-4' />
                  <p className='uppercase gothic text-xl md:text-2xl'>Order Tracking</p>
                  <div className="mt-3 text-gray-400 max-w-[240px] mb-8">
                    Celebrate worry-free shopping with our hassle-free returns.
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-10 mx-4 md:mx-20 bg-[url(https://img.freepik.com/premium-photo/woman-listening-music-while-relaxing-forest_1048944-609671.jpg)] min-h-[500px] md:h-160 bg-cover bg-center relative bg-fixed">
            <div className="bg-black/70 h-full w-full py-20 px-4 md:px-20">
              <div className="font-Kaushan mt-15 text-2xl md:text-3xl font-semibold text-[#ff4955]">
                What Our Clients Say
              </div>
              <div className="gothic text-4xl md:text-7xl mt-10 text-white uppercase leading-tight mb-15">
                Customer testimonials
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className='w-120'>
                  <div className="flex text-2xl text-[#F0AD4E]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <div className="mt-5 font-semibold text-gray-300 max-w-md mx-auto md:mx-0">
                    "I couldn't be happier with my Black Friday Shop experience. <br />
                    The deals were incredible, and the quality of the products I <br />
                    purchased exceeded my expectation."
                  </div>
                  <div className="mt-5 font-bold text-white">James Oliver</div>
                </div>

                <div className='w-120'>
                  <div className="flex text-2xl text-[#F0AD4E]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <div className="mt-5 font-semibold text-gray-300 max-w-md mx-auto md:mx-0">
                    "Absolutely thrilled with my experience at this online store! <br />
                    The selection is fantastic, the prices are unbeatable, and the <br />customer service is top-notch."
                  </div>
                  <div className="mt-5 font-bold text-white">Daniel Taylor</div>
                </div>

              </div>
            </div>
          </div>

          <div className="border-b border-[#1E2939]"></div>
          <div className='bg-[url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)] min-h-screen bg-cover bg-center bg-fixed bg-gray-950'>
            <div className="bg-gradient-to-b from-black/95 via-black/40 to-black/95 min-h-screen w-full text-center ">
              <div className="font-Kaushan text-2xl md:text-3xl font-semibold mt-20">
                Black Friday Sale
              </div>
              <div className="gothic text-4xl md:text-7xl mt-10 text-white uppercase leading-tight">
                Save Big: Up to <span className='text-[#FF4955]'>60% Off </span> on All Products
              </div>
              <div className="mt-8 text-lg text-gray-300">
                    Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings <br />
                    and cutting-edge technology. It’s time to secure the best deals and upgrade your <br />
                    experience.
              </div>
              <div className='mt-10'>
                <Button text={"SHOP DEALS"} />
              </div>
              <div className="border-b border-gray-800 ml-50 mt-20 w-220 "></div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home