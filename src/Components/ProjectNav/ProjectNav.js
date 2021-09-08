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
      <section className='project-nav'>
        <button className='s-button proj-nav-btn coll-btn'>Collaborators</button>
        <button className='s-button proj-nav-btn'>Resources</button>
        <button className='s-button proj-nav-btn'>Templates</button>
      </section>
      <Link to='/'>
        <button className='s-button-primary-inverse'>Logout</button>
      </Link>
    </aside>)

}

export default ProjectNav