import React from 'react'

import elephant from '../../assets/elephant.png'
import '../Nav/Nav.css'

const ProjectNav = () => {

  return(
    <aside className='nav-bar'>
      <img className='logo' src={elephant} alt='elephant logo' />
      <section className='project-nav'>
        <button>Resources</button>
        <button>Templates</button>
        <button>Collaborators</button>
      </section>
      <button className='s-button-primary-inverse'>Logout</button>
    </aside>)

}

export default ProjectNav