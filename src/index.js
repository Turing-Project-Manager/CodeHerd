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
export const EDIT_USER_INPUT = gql `
  mutation editUser($input: EditUserInput) {
    editUser(input: $input) {
      userId
      name
      slackHandle
      workingStyles
      cohort
      pronouns
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