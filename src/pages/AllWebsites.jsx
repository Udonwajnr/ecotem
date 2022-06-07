import React from 'react'
import Cards from '../components/Cards'
import '../assets/css/AllWebsite.css'
import Layout from '../components/Layout'
import '../assets/css/css/AllWebsite.css'
import { Oval } from 'react-loader-spinner';


const AllWebsites = ({data,loader}) => { 
  return (
    <Layout showHeader={true} showSidebar={true}>

          <div className='all__sites'>
              {/* filter options should be included */}

              <div className="all__sites__header">
                <h2>Templates</h2>
              </div>
            {
                !loader?
                  <div className="all__cards">
                {data?.map((data)=>{
                  return (
                    <Cards key={data.id} {...data} />
                  )
                })}
              </div>
                :
                <div className="loader">
                    <Oval color='#cbc19d' secondaryColor='#cbc19d' />
                  </div>
              
              }
                  
          </div>
    </Layout>
   
  )
}

export default AllWebsites