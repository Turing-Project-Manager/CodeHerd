import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { GET_USER } from '../..';
import { useQuery } from '@apollo/client';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import UserLanding from '../UserLanding/UserLanding';
import ProjectDashboard from '../ProjectDashboard/ProjectDashboard';
import './App.css';

import NewProject from '../NewProject/NewProject';
import './App.css'

const App = () => {
  
  const { search } = useLocation();
  
  const values = queryString.parse(search, {arrayFormat: 'bracket'});


  return (
    <section className="app">
      <Switch>
        <Route exact path='/' component={Landing} />
        {/* <Route exact path='/userLanding' component={Landing} /> */}

        <Route path='/:githubName' render={({match}) => {
          console.log(match)
        return <UserLanding query={values}/>}} 
        />

   
      </Switch>
      {/* <ProjectDashboard /> */}
    </section>
  )
};

export default App;