import React, { useRef, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { firebase, googleProvider } from '../firebase'

import TextBox from '../components/TextBox';

function Login(props) {
  const loginButton = useRef(null);
  const history = useHistory();

  firebase.auth().languageCode = 'en'

  function onSubmit(e) {
    e.preventDefault();
    loginButton.current.innerText = 'Sorry, email login is currently not available'
  }

  function onGoogleLogin() {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then(result => {
      }).catch(err => {
        console.error(err.message);
      })
  }

  useEffect(() => {
    if (props.user) {

      history.push('/')
    };
  });

  return (
    <form
      onSubmit={onSubmit}
      className='w-full flex flex-col items-center justify-center'>
      <span className='w-96 text-left text-2xl font-semibold mb-5 mt-10'>
        Be a contributor
      </span>
      <span className='w-96 text-left text-md mb-5 text-gray-500'>
        Share your resources with the community! <br /> Videos, documents, images, whatever helps with learning programming :D
      </span>
      <div
        className='flex flex-col w-96'>
        <TextBox
          label='E-mail'
          type='email'
          placeholder='Your email address'
        />
        <TextBox
          label='Password'
          type='password'
          placeholder='Your password'
        />
      </div>
      <button
        ref={loginButton}
        className='rounded opacity-50 border border-gray-300 w-96 py-2 font-semibold mt-5 mb-3 hover:bg-blue-600 hover:text-white'
        type='submit'>
        Login
      </button>
      <button
        onClick={onGoogleLogin}
        className='rounded relative border border-gray-300 shadow w-96 py-2 font-semibold flex items-center justify-center'
        type='button'>
        <img
          className='absolute left-5'
          src="./google_logo.png" width="18" height="18" alt="sign in with google" />
        <span className='text-gray-600'>
          Sign in with Google
        </span>
      </button>
      <div
        className='my-10'>
        <span
          className='text-gray-600'>
          Not a member yet?
        </span>
        <Link
          to='/login'
          className='inline-block mx-1 text-blue-600 font-semibold underline'>
          Join Now
        </Link>
      </div>
    </form >
  )
}

export default Login
