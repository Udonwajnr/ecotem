import React from 'react'
import img from '../assets/img/img.png'
import '../assets/css/Cards.css'
const Cards = ({ title, description,image, linkToBuyAtGumRoad,previewOfTheWebsite}) => {
  return (
    <div className='cards'>
        <div className="card-img">
            <img src={image?.url} alt="" />
        </div>
        <h3 className='card__title'>{title}</h3>
        <p  className='card__body'>{description}</p>
        <div className="btns">
        <a href={previewOfTheWebsite} rel="noopener" target='_blank'>Live preview</a>
        <a href={linkToBuyAtGumRoad} rel="noopener" target='_blank' className='buy__price'>Buy</a>
        </div>
    </div>
  )
}

export default Cards