import React,{useState} from 'react'
import '../assets/css/Questions.css'
import {HiPlus} from 'react-icons/hi'
import { HiMinus } from 'react-icons/hi'


const Question = ({ title, answer }) => {
    const [btn, setBtn] =useState(false)

    const ToggleButton=()=>{
        setBtn(!btn)
    }


  return (
    <div className="question">
        <div className="questions" onClick={ToggleButton}>
            <div className='questions__header'>
                <h3>{title}</h3>
                {
                    btn?
                     <HiMinus size={25} />:
                    <HiPlus size={25} />
                }
            </div>
            {
                btn?
                <div className="question__answer">
                    <p>{answer}</p>                    
                </div>
                :
                null
            }
        </div> 
    </div>
  )
}

export default Question