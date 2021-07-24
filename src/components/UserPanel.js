import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebase'

function UserPanel({ user }) {
  const [isOpened, setIsOpened] = useState(false);
  const panelRef = useRef(null);
  const history = useHistory();

  function onLogOut() {
    firebase.auth().signOut();
    window.location.reload();
    history.push('/');
  }

  const Panel = (user) => {
    if (!isOpened) return (<></>);

    const header = () => (
      <div
        className='flex items-center gap-5 mb-5 px-5 pt-5'>
        <img
          className='rounded-full shadow'
          src='https://picsum.photos/42' width='42' height='42' />
        <div
          className='flex flex-col'>
          <span
            className='font-bold text-gray-600 tracking-tight'>
            {user.displayName}
          </span>
          <span
            className='text-sm text-blue-800 tracking-tight'>
            {user.email}
          </span>
        </div>
      </div>
    )

    const panelMenu = () => (
      <ul
        className='border-t border-b pl-7 py-5 flex flex-col gap-2'>
        <li>
          <Link
            className='flex gap-3 items-center text-gray-500 hover:text-blue-500'
            to='/'>
            <i className="w-4 fa fa-user text-xl" aria-hidden="true"></i>
            <span
              className='text-sm font-semibold'>
              My Profile
            </span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-3 items-center text-gray-500 hover:text-blue-500'
            to='/'>
            <i className="w-4 fa fa-cog text-xl" aria-hidden="true"></i>
            <span
              className='text-sm font-semibold'>
              Settings
            </span>
          </Link>
        </li>
        <li>
          <Link
            className='flex gap-3 items-center text-gray-500 hover:text-blue-500'
            to='/'>
            <i className="w-4 fa fa-question-circle text-xl" aria-hidden="true"></i>
            <span
              className='text-sm font-semibold'>
              Support
            </span>
          </Link>
        </li>
      </ul>
    );

    return (
      <div
        ref={panelRef}
        className='z-50 absolute fadeInOnEnter w-80 -left-72 -bottom-72 rounded shadow-lg flex flex-col bg-white'>
        {header()}
        {panelMenu()}
        <button
          onClick={onLogOut}
          className='text-red-400 text-xs font-semibold py-3 rounded-b hover:bg-red-400 hover:text-white'>
          Log Out
        </button>
      </div >
    );
  }

  return (
    <div
      onClick={() => setIsOpened(!isOpened)}
      className='relative cursor-pointer flex items-center gap-2'>
      <img
        className='rounded-full shadow'
        src='https://picsum.photos/36' width='36' height='36' />
      {Panel(user)}
    </div>
  )
}

export default UserPanel
