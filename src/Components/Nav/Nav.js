import React from 'react';
import elephant from '../../assets/elephant.png'
import './Nav.css'
import '../App/App.css'
const Nav = () => {

  return(
  <aside className='nav-bar'>
    <img className='logo' src={elephant} alt='elephant logo' />
    <button className='s-button-primary-inverse'>Logout</button>
  </aside>)
}

export default Nav