import React from 'react'
import { Link } from 'react-router-dom'

import elephant from '../../assets/elephant.png'
import '../Nav/Nav.css'

const ProjectNav = ({githubHandle}) => {

  return(
    <aside className='nav-bar-proj'>
      <Link className='logo' to={`/${githubHandle}`} >
        <img className='logo' src={elephant} alt='elephant logo' />
      </Link >
      <Link to='/'>
        <button className='s-button-primary-inverse'>Logout</button>
      </Link>
    </aside>)

}

export default ProjectNav