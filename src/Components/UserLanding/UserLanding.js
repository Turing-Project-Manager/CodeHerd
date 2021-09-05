import React, { useEffect, useState } from 'react';
import { GET_USER, GET_ALL_USER_PROJECTS } from '../..';
import { useQuery } from '@apollo/client';
import Nav from '../Nav/Nav';
import ProjectList from '../ProjectList/ProjectList';
// import Landing from '../Landing/Landing';
//import Project from '../Project/Project';
import UserProfile from '../UserProfile/UserProfile'
import './UserLanding.css'
// import mockUsers from '../../mockData/mockUser.json';
import NewProject from '../NewProject/NewProject';
// import mockProjects from '../../mockData/mockProjects.json';




const UserLanding = ({query}) => {
  let id;
  if (query.info) {
    let currentUser = JSON.parse(query.info)
    id = currentUser.id
    localStorage.setItem('userId', id )
  } else if (localStorage.getItem('userId')) {
    id = localStorage.getItem('userId');
  } else {
    console.error("No user is logged in")
  }

    const [user, setUser] = useState({});
    const [showForm, setShowForm] = useState(false)
    const [projects, setProjects] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { data, loading, error } = useQuery(GET_USER, {
      variables: { id }
    })
    const allProjects = useQuery(GET_ALL_USER_PROJECTS, {
      variables: { userId: id }
    })
    
    useEffect(() => {
      
      if(!!error) {
        console.log(error)
      }
      
      if(!loading && data) {
        
        setUser(data.user)
      }
      
      if (!allProjects.loading && allProjects.data) {
        
        setProjects(allProjects.data.usersProjects)
      }

        
    }, [data, loading, allProjects]);
    
  

    

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
        <UserProfile user={user} query={query} />
        {!!projects ? 
        <ProjectList 
          projects={projects} 
          user={user}
        /> : 'Loading' }
        {/* <Landing />  */}
    
        {!!user ? <NewProject user={user} showForm={showForm} closeProjectForm={closeProjectForm}/> : 'Loading'}
      </section>
    </>
  )
}

export default UserLanding;