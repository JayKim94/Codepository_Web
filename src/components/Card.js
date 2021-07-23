import React from 'react'

function Card() {
  return (
    <div
      className='w-64 rounded-xl shadow-xl bg-white flex flex-col items-center pt-8 my-4 mx-4'>
      <div
        className='object-contain my-5'>
        <img src='./youtube.png' width='36' height='36' />
      </div>
      <p
        className="font-semibold text-xl my-1">
        Video Title
      </p>
      <p
        className="text-gray-400 text-sm">
        Autor
      </p>
      <button
        className="justify-self-end w-full py-2 mt-8 text-white bg-blue-300 rounded-b-lg">
        View
      </button>

    </div>
  )
}

export default Card
