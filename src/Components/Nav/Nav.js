import React, { useState } from 'react';
import NewProject from '../NewProject/NewProject';
import elephant from '../../assets/elephant.png'
import './Nav.css'
import '../App/App.css'
const Nav = () => {
  const [showForm, setShowForm] = useState(false)


  const showProjectForm = () => {
    setShowForm(true)
  }

  const closeProjectForm = () => {
    setShowForm(false)
  }

  return(
  <aside className='nav-bar'>
    <img className='logo' src={elephant} alt='elephant logo' />
    <NewProject showForm={showForm} closeProjectForm={closeProjectForm}/>
    <button className='s-button-primary' onClick={showProjectForm}>New Project</button>
    <button className='s-button-primary-inverse'>Logout</button>
  </aside>)
}

export default Nav