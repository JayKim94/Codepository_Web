import React from 'react'

function Search() {
  return (
    <div
      className='min-h-bar flex items-center justify-end px-10'>
      <div
        className='flex gap-4'>
        <input
          className='border px-5 rounded focus:outline-none'
          type='text'
          placeholder='Search resources...'
        />
        <button
          className='py-1.5 px-2.5 text-white border bg-blue-500 rounded shadow'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    </div>
  )
}

export default Search
