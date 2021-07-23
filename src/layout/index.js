import React from 'react'
import Nav from './Nav'
import Search from './Search'

function Layout(props) {
  return (
    <div className='w-screen h-screen flex'>
      <Nav className='row-span-2' />
      <div
        className='w-full bg-gray-100'>
        <Search />
        <div
          className='px-12 py-5'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export { Layout, Nav };
