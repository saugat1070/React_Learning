import React from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import Card from '../../components/card'

function Home() {
  return (
    <Layout >
        <div className=' ml-5 flex justify-center flex-wrap space-x-5'>
        <Card/>
        <Card />
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card/>
       
        </div>
    </Layout> 
    )
}

export default Home