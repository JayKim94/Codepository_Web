import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavMenu(props) {
  const [isHovering, setIsHovering] = useState(false)

  const DropDown = (menu) => {
    return (
      <ul
        onMouseEnter={() => setIsHovering(true)}
        className={`transition-opacity duration-300 absolute -bottom-24 left-0 flex flex-col w-72 gap-3 bg-white p-5 rounded shadow-lg ${isHovering ? '' : 'hide'}`}>
        {menu.map((navItem, i) => (
          <li
            key={i}
            className='flex items-center gap-3 text-gray-800 hover:text-blue-600'>
            <img src={navItem.icon} width="16" height="16" alt={navItem.alt} />
            <span
              className='font-semibold'>{navItem.title}
            </span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <NavLink
      className='relative w-full border-l-4 border-transparent px-5 py-3 hover:text-blue-400'
      key={props.item.key}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      exact
      to={props.item.path}>
      <span
        className='text-lg text-gray-700 font-semibold'>
        {props.item.name}
      </span>
      {DropDown(props.item.menu)}
    </NavLink>
  )
}

export default NavMenu
