import React from 'react'
import '../assets/css/css/sidebar.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { motion} from 'framer-motion'

const Sidebar = ({ sidebar, handleSideBar}) => {
  return (
    //   using framer motion
    <motion.div
    animate={{ 
              translateX:sidebar?0:'100vw',
            //   x:'100%'

    }}
    transition={{duration:1}}
    className={sidebar?'sidebar active':'sidebar'}
    initial={{
        translateX:'100vh',

    }}
     >
          <div className="exit-icons" onClick={handleSideBar}>
              <FaTimes size={30} />
          </div>
          <div className="side__nav__links">
              <ul>
                  <li>
                      <Link to={'/'} className='links'>Home</Link>
                  </li>
                  <li>
                      <Link to={'/all'} className='links'>Sites</Link>
                  </li>
                  <li>
                      <Link to={'/about'} className='links'>About</Link>
                  </li>
                  <li>
                      <Link to={'/contact'} className='links'>Contact</Link>
                  </li>
              </ul>
          </div>
          
    </motion.div>
  )
}

export default Sidebar