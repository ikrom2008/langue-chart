import React, { useEffect, useState } from 'react'
import './Hero.css'
import banner1 from '../../assets/cp47vqffrr80f2glo6ag.jpg'
import banner2 from '../../assets/cp6uknnj2e4qlbisugtg.jpg'
import banner3 from '../../assets/cp3is5k0u44tu6dq05rg.jpg'
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
            <img  src={banner1} alt="Slide 1" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 1 ? 'flex' : 'none'}}>
            <img src={banner2} alt="Slide 2" />
          </div>
          <div className="slide fade" style={{ display: slideIndex === 2 ? 'flex' : 'none'}}>
            <img src={banner3} alt="Slide 3" />
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
