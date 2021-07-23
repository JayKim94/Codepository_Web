import React from 'react'
import { NavLink } from 'react-router-dom'

const navs = [
  {
    key: 0,
    path: '/',
    name: 'Home',
    icon: './home.png'
  },
  {
    key: 1,
    path: '/videos',
    name: 'Videos',
    icon: './youtube.png'
  }
]

function Nav() {
  return (
    <nav
      className='h-screen w-80 shadow flex-column items-center border-b border-white z-10 shadow-2xl'>
      <div
        className='flex items-center w-full gap-3 pl-6 py-6 border-b'>
        <img src='./search.png' width='24' height='24' />
        <span
          className='font-semibold text-blue-400 text-xl'>Codepo</span>
      </div>
      <ul
        className='flex-column px-1 py-12 justify-center gap-10'>
        {navs.map(navItem => (
          <li>
            <NavLink
              className='flex w-full border-l-4 border-transparent items-center gap-5 pl-5 py-3 opacity-40'
              key={navItem.key}
              activeClassName='shadow-inner border-blue-500 pl-0 opacity-80'
              exact
              to={navItem.path}>
              <img
                src={navItem.icon}
                className='object-contain w-6 h-6'
              />
              <span
                className='text-m text-semibold'>
                {navItem.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav >
  )
}

export default Nav
