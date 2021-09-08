import React from 'react'
import { Link } from 'react-router-dom'

import elephant from '../../assets/elephant.png'
import './NotFound.css'

const NotFound = () => {

  return (
    <section className='not-found'>
      <h3 className='page'>Page could not be found, please try again later.</h3>
      <Link to='/'>
        <img className='elephant' src={elephant} alt='grey elephant' />
      </Link>
    </section>
  )
}

export default NotFound