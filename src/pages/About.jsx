import React from 'react'
import Layout from '../components/Layout'
import '../assets/css/About.css'
import '../assets/css/css/About.css'
import pic from '../assets/img/image.jpg'
const About = () => {
  return (
    <Layout showHeader={true} showFooter={true} showSidebar={true}>
      <div className='about'>
        <div className="about__header">
          <h2>About Me</h2>
        </div>
        <div className="about__body">
          <div className="about__img">
            <img src={pic} alt="profile-image" />
          </div>
          <article>
            Hi!. My name is Umoh. I'm a self-taught frontend developer with 2 years experience.I'm passionate about creating exquisite e-commerce design template for businesses.
            Ecotem is a web development startup that create e-commerce frontend websites  with cool functionality for user . I use popular technologies to build our websites such as
            html ,css, and js in building our websites.
          </article>
        </div>
      </div>
    </Layout>
  )
}

export default About