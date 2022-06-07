import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Reviews from '../components/Reviews'
import Websites from '../components/Websites'

const Home = ({ data }) => {


    return (
        <Layout showHeader={true} showFooter={true} showSidebar={true}>
            <Hero />
            <Websites data={data} />
            <Reviews />
        </Layout>
    )
}

export default Home