import React from 'react'

function Button({ children, width }) {
  return (
    <button
      className={`${width ?? ''} mx-10 py-1.5 px-5 text-white border bg-blue-500 rounded shadow flex justify-center items-center gap-2`}>
      {children}
    </button>
  )
}

export default Button
