import React from 'react'
import Question from './Question'
import { faq } from './questions'
import '../assets/css/Reviews.css'

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className="review">
            <h2>Frequently asked questions</h2>
        </div>
        <div className="review__body">
            {faq?.map((faq,index)=>{
                return (
                          <Question key={index} title={faq.title} answer={faq.answer}/>
                )
            })}      
        </div>

    </div>
  )
}

export default Reviews