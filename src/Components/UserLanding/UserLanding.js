import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Project from '../Project/Project';
import UserProfile from '../UserProfile/UserProfile'
import './UserLanding.css'
import mockUsers from '../../mockData/mockUser.json';
import NewProject from '../NewProject/NewProject';
// import mockProjects from '../../mockData/mockProjects.json';




const UserLanding = () => {
    const [user, setUser] = useState({});
    // const [projects, setProjects] = useState([])
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
      setUser(mockUsers.users[0])
      // setProjects(mockProjects.projects)
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
        <button className='s-button-primary new-proj-btn' onClick={showProjectForm}>New Project</button>
        <UserProfile user={user} />
        <NewProject showForm={showForm} closeProjectForm={closeProjectForm}/>
      </section>
    </>
  )
}

export default UserLanding;