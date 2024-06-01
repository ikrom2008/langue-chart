import React, { useEffect, useState } from 'react'
import './Hero.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
function Hero() {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          showSlide(1);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);
      
      const showSlide = (n) => {
        setSlideIndex((prevIndex) => (prevIndex + n) % 3);
      };
      slideIndex < 0 ? setSlideIndex(2) : ''
  return (
    <div className='hero'>
      <div className="Slider">
        <div className="slider">
          <div className="slide fade" style={{ display: slideIndex === 0 ? 'flex' : 'none'}}>
            <img  src="https://images.uzum.uz/cn31ofps99ouqbftr6a0/main_page_banner.jpg"alt="Slide 1" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 1 ? 'flex' : 'none'}}>
            <img src="https://images.uzum.uz/cn5242p25kub33f3d95g/main_page_banner.jpg" alt="Slide 2" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 2 ? 'flex' : 'none'}}>
            <img src="https://images.uzum.uz/cn0dkhhs99ouqbft9tjg/main_page_banner.jpg" alt="Slide 3" />
          </div>
        </div>
        <div className="controls">
          <button className='prev' onClick={() => showSlide(-1)}><IoIosArrowBack /></button>
          <button className='next' onClick={() => showSlide(1)}><IoIosArrowForward /></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
