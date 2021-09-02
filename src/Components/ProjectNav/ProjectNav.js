import React from 'react'

import elephant from '../../assets/elephant.png'
import '../Nav/Nav.css'

const ProjectNav = () => {

  return(
    <aside className='nav-bar-proj'>
      <img className='logo' src={elephant} alt='elephant logo' />
      <section className='project-nav'>
        <button className='s-button proj-nav-btn coll-btn'>Collaborators</button>
        <button className='s-button proj-nav-btn'>Resources</button>
        <button className='s-button proj-nav-btn'>Templates</button>
      </section>
      <button className='s-button-primary-inverse'>Logout</button>
    </aside>)

}

export default ProjectNav