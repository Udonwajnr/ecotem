import React from 'react'
import '../assets/css/Websites.css'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import '../assets/css/css/Websites.css'
const Websites = ({data}) => {
  return (
    <div className='websites'>
        <div className="websites__header">
            <h3>Websites</h3>
            <p>Feel free to pick any E-commerce site of your Choice</p>
            
        </div>
        <div className="website__cards">
            {/* show 4 most recent */}
            {
              data?.slice(0,3).map((data)=>{
                  return (
                    <Cards key={data.id} {...data}  />
                  )
              })
         }
             
        </div> 
        <div className="see__more">
            <Link to={'/all'} href="" className='see__more'>see more</Link>
        </div>
    </div>
  )
}

export default Websites