import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql, 
  useMutation
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://codeherdapi.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export const GET_USER = gql `
  query user($id: ID!){
    user (id: $id) {
      cohort
      email
      githubHandle
      id
      name
      pronouns
      slackHandle
      workingStyles
    }
  }
`
export const GET_ALL_USER_PROJECTS = gql`
  query usersProjects($userId: ID!) {
    userProjects($userId: ID!) {
      collaborators 
      id
      modNumber
      name
      owner 
      projectRepo
      resources
      summary
    }
  }
`

export const EDIT_USER_INPUT = gql `
  mutation ($userId: ID!, $name: String!, $slackHandle: String, $workingStyles: [String!], $cohort: String, $pronouns: String ) {
    editUser(input: {
      userId: $userId,
      name: $name,
      slackHandle: $slackHandle,
      workingStyles: $workingStyles, 
      cohort: $cohort, 
      pronouns: $pronouns
    }) {
      user {
        cohort
        email
        githubHandle
        id
        name
        pronouns
        slackHandle
        workingStyles
    }
  }

}
`

export const CREATE_NEW_PROJECT = gql`
  mutation creatNewProject($input: CreateNewProject) {
    createNewProject(input: $input) {
      name
      summary
      modNumber
      ownerId
    }
  }
` 

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();