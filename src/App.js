import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { Layout } from './layout'
import { Home, Videos } from './pages'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("test");

  /* Load from firebase */
  function getData() {
    setLoading(true)
    ref.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach(document => {
        items.push(document.data())
      })
      setData(items)
      setLoading(false)
    })
  }

  useEffect(() => {
    getData();
  }, [])

  if (loading) {
    return <h1>Loading..</h1>
  }

  return (
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
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
