import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import Landing from '../Landing/Landing';
import UserLanding from '../UserLanding/UserLanding';
import './App.css';
import ProjectDashboard from '../ProjectDashboard/ProjectDashboard';
// import { useQuery } from '@apollo/client';
// import { GET_USER } from '../..';
// import Nav from '../Nav/Nav';
// import NewProject from '../NewProject/NewProject';

import './App.css'

const App = () => {
  
  const { search } = useLocation();
  
  const values = queryString.parse(search, {arrayFormat: 'bracket'});


  return (
    <section className="app">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/:githubName' render={({match}) => {
        return <UserLanding query={values}/>}} 
        />
        <Route exact path='/:githubName/:projectId' render={({match}) => {
          const projects = JSON.parse((localStorage.getItem('allProjects')))
          console.log(projects)
          const selectedProject = projects.find(currentProject => currentProject.id === parseInt(match.params.id))
          return <ProjectDashboard project={selectedProject}/>}} 
          />

   
      </Switch>
      {/* <ProjectDashboard /> */}
    </section>
  )
};

export default App;