import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {
  return (
    <main className="md-max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        {/*Stories*/}
        <Stories />
        <Posts />
        {/*Posts*/}
      </section>
      <section className="hidden md:col-span-1 xl:inline-grid">
        {/*Mini Profile*/}
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
        {/*Suggestions*/}
      </section>
    </main>
  )
}

export default Feed
