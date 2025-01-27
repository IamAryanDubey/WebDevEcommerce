import React from 'react'
import Header from '../components/Header'
import ItemsContainer from '../components/ItemsContainer'
import db from '../components/db.json';

const Homepage = () => {
  return (
    <div>
      <Header/>
      <div className=''>
        <ItemsContainer items={db}/> 
      </div>
    </div>
  )
}

export default Homepage
