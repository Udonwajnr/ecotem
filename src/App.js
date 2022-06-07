import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AllWebsites from './pages/AllWebsites';
import About from './pages/About';
import Contact from './pages/Contact';
import request from 'graphql-request';

function App() {

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  const Website = async () => {
    const { websiteCards } = await request("https://api-eu-west-2.graphcms.com/v2/cl3rredwi9ep101z17qr9hs1v/master",
      `
    {
      websiteCards{
        id
        title
        description
        linkToBuyAtGumRoad
        previewOfTheWebsite
        image{
          url
          fileName
        }
      } 
    }
    `);
    setData(websiteCards)
    setLoader(false)
  }
  useEffect(() => {
    Website()
  }, [])

  return (
    <div className="App">
      <div className="nav-links">
        {/* Routes */}

        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/all' element={<AllWebsites data={data} loader={loader}/>} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
