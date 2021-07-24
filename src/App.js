import React from 'react'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { firebase, firebaseConfig } from './firebase'

import { Layout } from './layout'
import { Home, Videos, Login } from './pages'

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <Router>
        <div className="App overflow-hidden w-full">
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/videos">
                <Videos />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </FirebaseAuthProvider>
  );
}

export default App;
