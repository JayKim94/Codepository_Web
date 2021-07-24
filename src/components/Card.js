import React, { useState } from 'react';

function Card(props) {
  const [isHovering, setIsHovering] = useState(false)

  function formatURL() {
    const fullURL = props.video.url
    const index = fullURL.indexOf('/c/')
    return fullURL.substring(index + 3);
  }

  return (
    <div
      onClick={() => {
        window.open(props.video.url, '_blank').focus();
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='cursor-pointer w-72 h-82 rounded-xl shadow-xl bg-white flex flex-col justify-between items-center pt-8 my-4'>
      <div
        className={`px-7 mb-5 transition-all ${isHovering ? 'scale-110' : 'opacity-25'}`}>
        <img
          className='object-contain rounded-lg'
          src='https://picsum.photos/256/128'
        />
      </div>
      <span
        className="w-62 font-semibold text-xl my-1 text-center">
        {props.video.title}
      </span>
      <div
        className='flex flex-col'>
        <span
          className="w-48 text-blue-600 font-semibold text-center truncate">
          {props.video.author}
        </span>
        <span
          className="w-48 text-gray-400 text-sm text-center truncate">
          {formatURL()}
        </span>
      </div>
      <div
        className="justify-self-end w-full mt-8 text-white font-semibold bg-blue-500 rounded-b-lg text-center">
        <a
          className="block py-2 w-full h-full">
          View
        </a>
      </div>
    </div>
  )
}

export default Card
