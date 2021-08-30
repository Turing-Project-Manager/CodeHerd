import React from 'react';
import elephant from '../../assets/elephant.png'
import './Nav.css'
const Nav = () => {

  return(
  <aside className='nav-bar'>
    <img src={elephant} alt='elephant logo' />
    <button>Logout</button>
  </aside>)
}

export default Nav