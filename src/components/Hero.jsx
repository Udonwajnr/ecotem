import React from 'react'
import '../assets/css/Hero.css'
import '../assets/css/css/Hero.css'
import heroImage from '../assets/img/trim.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__info">
              <h1>Get any html E-commerce Template of Your Choice for your Business at Affordable Prices</h1>
        </div>
        <div className="hero__img">
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero