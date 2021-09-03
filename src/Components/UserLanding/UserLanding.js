import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import ProjectList from '../ProjectList/ProjectList';
import Landing from '../Landing/Landing';
//import Project from '../Project/Project';
import UserProfile from '../UserProfile/UserProfile'
import './UserLanding.css'
import mockUsers from '../../mockData/mockUser.json';
import NewProject from '../NewProject/NewProject';
import mockProjects from '../../mockData/mockProjects.json';




const UserLanding = () => {
    const [user, setUser] = useState({});
    const [showForm, setShowForm] = useState(false)
    const [projects, setProjects] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      setUser(mockUsers.users[0])
      setProjects(mockProjects.projects)
    }, []);
    

    const showProjectForm = () => {
      setShowForm(true)
    }
  
    const closeProjectForm = () => {
      setShowForm(false)
    }

  return (
    <>
      <Nav />
      <section className='profile-projects'>
        {/* <button className='s-button-primary new-proj-btn' onClick={showProjectForm}>New Project</button>
        <NewProject showForm={showForm} closeProjectForm={closeProjectForm}/> */}
        <UserProfile user={user} />
        <ProjectList 
          projects={projects} 
          user={user}
        />
        {/* <Landing />  */}
    
        <NewProject showForm={showForm} closeProjectForm={closeProjectForm}/>
      </section>
    </>
  )
}

export default UserLanding;