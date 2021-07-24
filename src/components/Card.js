import React from 'react';

function Card(props) {

  return (
    <div
      className='w-64 h-72 rounded-xl shadow-xl bg-white flex flex-col justify-between items-center pt-8 my-4'>
      <div
        className='object-contain my-5'>
        <img src='./youtube.png' width='36' height='36' />
      </div>
      <span
        className="w-60 font-semibold text-xl my-1 text-center">
        {props.videos.title}
      </span>
      <span
        className="w-40 text-gray-400 text-sm text-center truncate">
        {props.videos.url}
      </span>
      <div
        className="justify-self-end w-full mt-8 text-white font-semibold bg-blue-500 rounded-b-lg text-center">
        <a
          className="block py-2 w-full h-full"
          href={props.videos.url}
          target="_blank">
          View
        </a>
      </div>
    </div>
  )
}

export default Card
