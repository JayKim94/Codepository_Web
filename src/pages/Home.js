import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <p
        className='text-xl font-bold text-gray-600 my-3'>
        Recommended by admin
      </p>
      <div className='flex flex-wrap w-full'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
