import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import UserPanel from '../components/UserPanel';
import Button from '../components/Button';
import NavMenu from './NavMenu';

const navs = [
  {
    key: 0,
    path: '/videos',
    name: 'Videos',
    menu: [
      {
        title: 'Youtube',
        icon: './youtube.png',
        alt: 'Youtube videos'
      },
      {
        title: 'Other sources',
        icon: './youtube.png',
        alt: 'Other sources'
      }
    ]
  },
  {
    key: 1,
    path: '/',
    name: 'Documents',
    menu: [
      {
        title: 'Articles',
        icon: './youtube.png',
        alt: 'Youtube videos'
      },
      {
        title: 'Studies',
        icon: './youtube.png',
        alt: 'Other sources'
      }
    ]
  }
]

function TopBar(props) {
  const history = useHistory()

  const Logo = () => (
    <NavLink
      to='/'
      className='flex gap-3'>
      <img src='./search.png' width='24' height='24' />
      <span
        className='font-semibold text-blue-400 text-xl'>
        Codepo
      </span>
    </NavLink>
  );

  const NavLinks = () => (
    <ul className='flex'>
      {navs.map((item) => (<li key={item.key}><NavMenu item={item} /></li>))}
    </ul>
  );

  const UserStatus = (user) => {
    if (user) {
      return (
        <div
          className='flex gap-5'>
          <UserPanel user={user} />
          {user.role === 'admin' && (
            <button
              onClick={() => history.push('/upload')}
              className='bg-blue-500 shadow rounded text-white text-sm font-semibold px-5'>
              Upload
            </button>
          )}
        </div>
      );
    } else {
      return (
        <Button
          className='mx-10 py-1.5 px-5 text-white border bg-blue-500 rounded shadow flex items-center gap-2'>
          <NavLink
            to='/login'
            className='font-semibold text-sm'>
            Log In
          </NavLink>
        </Button>
      );
    }
  }

  const SearchBox = () => (
    <div
      className='flex gap-2 mr-5'>
      <input
        className='w-72 border px-5 rounded outline-none focus:outline-none focus:bg-blue-100 focus:placeholder-blue-100 focus:shadow transition-all'
        type='text'
        placeholder='Search resources...'
      />
      <button
        className='py-1.5 px-2.5 text-white border bg-blue-500 rounded shadow'>
        <i className='fa fa-search'></i>
      </button>
    </div>
  );

  return (
    <div
      className='flex items-center justify-end px-32 py-10'>
      <div
        className='self-align-start flex items-center w-full gap-10'>
        {Logo()}
        {NavLinks()}
        {SearchBox()}
      </div>
      <div
        className='flex-none flex'>
        {UserStatus(props.user)}
      </div>
    </div>
  )
}

export default TopBar
