# CodeHerd

### Table of Contents
- [Overview](#overview)
- [Learning Goals](#learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Libraries & Other Technology](#libraries-&-other-technology)
- [Future Features](#future-features)
- [Contributors](#contributors)


## Overview

Turing students obtain a lot of knowledge about coding and the world of software development during their time here. As we have brought on more knowledge and the projects become more complicated, we've noticed one thing: we don't have a single resource at our finger tips to keep track of all things project related. We spend hours sorting through tabs, looking back into Slack message history, all to find the links and documents necessary for our project. CodeHerd is our solution. CodeHerd is a project management app where Turing students can store all the links to their projects. They can keep track of project collaborators and resources they may use for each individual project. And they can go back in time to view resources they have collected for previous projects. While this original version of CodeHerd is simple in its execution, it holds the promise of becoming a robust application that is the answer to many Turing student needs. 

# Learning Goals
  * Demonstrate working knowledge of functional components with hooks
  * Work in conjunction with a backend team to build a full project from the ground up
  * Build upon the foundational skills of React  
  * Utilizes React Router for url navigation
  * Utilize graphQL to query and mutate data on the backend
  * Testing performed with Cypress to better understand asynch JS
  
# Instructions for Viewing
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project
 
 **OR** view the deployed application via Heroku [here](https://codeherd.herokuapp.com/)
  


# Walkthrough
   **This app is currently desktop only. It is built with Turing students - who are rarely away from their computers - in mind. **
  
- A user can authorize GitHub to log in.

![NoTrips](https://user-images.githubusercontent.com/78318468/128789482-715c7803-d0ec-4f35-bb99-60b9fb9d6951.gif)

 
- A user has a landing page for their profile and projects. Here they can edit their profile information, view past projects, and create a new project.
  

 <img src="https://user-images.githubusercontent.com/78318468/128789550-be34f785-9275-4bfc-aaca-6870bddbe432.gif" width="350" height="642"/>

  
- When a user clicks on the 'View Project' button, they are taken to a project dashboard. This dashboard will always start out empty. Here they can add project collaborators and resources, as well as view some pre-made templates that can be used for PRs and DTRs.
 <img src="https://user-images.githubusercontent.com/78318468/128789625-082b4749-2d89-429d-8d21-2558a1752952.gif" width="350" height="642"/>
  
 <img src="https://user-images.githubusercontent.com/78318468/128789635-94d36c20-bbc3-4d15-acae-59a64f5c521a.gif" width="350" height="642"/>

 
  
# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>graphQL</td>
    <td>Cypress</td>
    <td>JavaScript</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/graphql.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"/></td>
  </tr>
</table>
  
 # Libraries & Other Technology
  * [Query String](https://github.com/sindresorhus/query-string)
  * [Apollo Client for graphQL](https://www.apollographql.com/docs/)
  
  
# Future Features 
 
  - User ability to go to collaborator profile pages
  - Additional error handling and redirects 
  - User ability to upload files
  - User ability to create a DTR document within the application that lives in the dashboard
  - User ability to edit and delete resources/collaborators
  
# Contributors
 <table>
  <tr>
    <td><a href="https://github.com/ashton-huxtable">Ashton Huxtable</td>
    <td><a href="https://github.com/shawnmcmahon">Shawn McMahon</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/78318468?v=4" alt="Ashton Huxtable avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/73731359?v=4" alt="Shawn McMahon avatar"/></td>
  </tr>
  <tr>
    <td><a href="https://github.com/lcpulzone">Leigh Cepriano Pulzone</td>
    <td><a href="https://github.com/twarbelow">Taija Warbelow</td>
    <td><a href="https://github.com/zachjamesgreen">Zach Green</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/73005101?v=4" alt="Leigh Cepriano Pulzone avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/10294841?v=4" alt="Taija Warbelow avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/7896916?v=4" alt="Zach Green avatar"/></td>
  </tr>
</table>

Project Manager:  
  [Brian Zanti](https://github.com/BrianZanti)
  
  
A Mod 4 Capstone Project with Turing School of Software & Design 
  
