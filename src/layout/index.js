import { FirebaseAuthConsumer } from '@react-firebase/auth';
import React from 'react'
import TopBar from './TopBar'

function Layout(props) {
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user, providerId }) => {
        return (
          <div className='w-full h-screen flex'>
            <div
              className='w-full bg-gray-100'>
              <TopBar user={user} />
              <div
                className='px-60 py-10'>
                {props.children}
              </div>
            </div>
          </div>
        );
      }}
    </FirebaseAuthConsumer>
  )
}

export { Layout };
