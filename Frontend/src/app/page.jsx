import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-6xl'>
      <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
        Find Your Next <span className='text-slate-500'>Perfect</span>
        <br />

        Place With Ease
      </h1>
      <div className='text-gray-400 text-xs sm:text-sm'>
        Real Estate Is The Best Place To Find Your Next
        Perfect Place To Live.
        <br />
        We Have A Range Of Properties For You To
        Choose From.
      </div>
      <img src="C:\Users\user\Desktop/th.jpg" alt="image" />

    </div>
  )
}
export default Home;