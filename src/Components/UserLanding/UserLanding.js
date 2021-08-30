import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import UserProfile from '../UserProfile/UserProfile'
import './UserLanding.css'
import mockUsers from '../../mockData/mockUser.json';
// import mockProjects from '../../mockData/mockProjects.json';




const UserLanding = () => {
    const [user, setUser] = useState({});
    // const [projects, setProjects] = useState([])

    useEffect(() => {
      setUser(mockUsers.users[0])
      // setProjects(mockProjects.projects)
    }, []);
    
    
  return (
    <>
      <Nav />
      <UserProfile user={user} />
    </>
  )
}

export default UserLanding;