import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import firebase from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

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
      <div className="App">
        <Nav />
        {data.map((item) => <h1>{item.Title}</h1>)}
      </div>
    </Router>
  );
}

export default App;
