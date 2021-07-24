import React, { useState, useEffect } from 'react'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import { FirestoreProvider } from '@react-firebase/firestore'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { firebase, firebaseConfig } from './firebase'

import { Layout } from './layout'
import { Home, Videos, Login, Upload } from './pages'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) return;

      const usersRef = firebase.firestore().collection('users')

      usersRef
        .doc(user.uid)
        .update({
          displayName: user.displayName,
          email: user.email
        });

      usersRef
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUser(doc.data())
        }).catch(err => console.error(err))
    })
  })

  return (
    <Router>
      <div className="App overflow-x-hidden w-full bg-gray-100">
        <Layout user={user}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/videos">
              <Videos />
            </Route>
            <Route path="/login">
              <Login user={user} />
            </Route>
            <Route path="/upload">
              <FirestoreProvider firebase={firebase} {...firebaseConfig}>
                <Upload user={user} />
              </FirestoreProvider>
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
