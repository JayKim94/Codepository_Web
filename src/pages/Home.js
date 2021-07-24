import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'
import Card from '../components/Card'
import { CSSTransitionGroup } from 'react-transition-group'

function Home() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection("youtube");

  /* Load from firebase */
  function getData() {
    setLoading(true)
    ref.onSnapshot((snapshot) => {
      if (!snapshot) return;

      const items = [];
      snapshot.forEach(document => {
        items.push(document.data())
      })
      setData(items)
      setLoading(false)
    })
  }

  function RecentlyAddedCards() {
    if (loading) {
      return (
        <div
          className="text-center">
          <h2
            className='text-2xl mt-72'>Loading...</h2>
        </div>
      )
    }

    return (
      <div
        className='flex flex-wrap justify-center gap-x-5 py-5 w-full overflow-y-auto'>
        {data.map((item, i) => (
          <Card key={i} video={item} />
        ))}
      </div>
    );
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <p
        className='text-2xl font-bold text-gray-600'>
        Recently Added
      </p>
      {RecentlyAddedCards()}
    </div >
  )
}

export default Home
