import React from 'react'

const TextBox = React.forwardRef((props, ref) => (
  <div
    className='flex flex-col w-96'>
    <label
      className='text-xl font-thin mb-1 pl-1 pb-2'>
      {props.label}
    </label>
    <input
      ref={ref}
      className='px-5 py-3 focus:outline-none focus:border-blue-300'
      type={props.type}
      placeholder={props.placeholder}
    />
  </div>
))

export default TextBox
