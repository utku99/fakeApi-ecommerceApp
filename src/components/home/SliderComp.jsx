import React from 'react'
import Slider from "react-slick"

const SliderComp = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <div>

      <Slider {...settings}>
        <div className='!flex items-center justify-between bg-gray-100 h-[400px]'>
          <div className='px-5'>
            <div className='text-5xl font-bold'>Lorem ipsum dolor sit.</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
        </div>
        <div className='!flex items-center justify-between bg-gray-100 h-[400px]'>
          <div className='px-5'>
            <div className='text-5xl font-bold'>Lorem ipsum dolor sit.</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
        </div>
      </Slider>

    </div>
  )
}

export default SliderComp
