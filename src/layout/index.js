import React from 'react'
import TopBar from './TopBar'

function Layout(props) {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <TopBar user={props.user} />
      <div
        className='px-44 py-10'>
        {props.children}
      </div>
    </div>
  )
}

export { Layout };
