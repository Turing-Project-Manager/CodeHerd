import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql, 
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
      image
      name
      pronouns
      slackHandle
      workingStyles
    }
  }
`

export const GET_PROJECT = gql`
  query project($id: ID!) {
    project(id: $id) {
      collaborators{
        user {
          name
          image
          githubHandle
        }
      }
      id
      modNumber
      name
      owner {
        name
        id
        githubHandle
      }
      resources {
        content
        name
        resourceType
        tags
        id
      }
      summary
    }
  }
`

export const GET_COLLABORATOR = gql `
  query collaborator($id: ID!) {
    collaborator(id: $id) {
      id
      project
      user
    }
  }
`


export const GET_ALL_USER_PROJECTS = gql`
  query usersProjects($userId: ID!) {
    usersProjects(userId: $userId) {
      collaborators {
        user {
          name
          id
        }
      }
      id
      modNumber
      name
      owner {
        name
        id
        githubHandle
      }
      resources {
        name
      }
      summary
    }
  }
`

export const CREATE_RESOURCE = gql`
  mutation createResource( $userId: ID!, $name: String!, $projectId: ID!, $resourceType: String!, $content: String!, $tags: [String!] ) {
    createResource (input: {
      userId: $userId, 
      name: $name, 
      projectId: $projectId, 
      resourceType: $resourceType, 
      content: $content, 
      tags: $tags
    }) {
    resource {
      content
      id
      name
      project {
        collaborators {
          user {
            name
            id
          }
        }
        id
        modNumber
        name
        owner {
          name
          id
          githubHandle
        }
        resources {
          name
        }
        summary
      }
      resourceType
      tags
    }
  }
}


`
export const CREATE_COLLABORATOR = gql `
  mutation createCollaboration($userId: ID!, $email: String!, $projectId: ID!) {
    createCollaboration (input: {
      userId: $userId,
      email: $email,
      projectId: $projectId,
    }) {
      collaborator {
        id
        project {
          collaborators {
            user {
              name
              image
              githubHandle
            }
          }
        }
        user {
          name
          id
          image
        }
      }
    }
  }
`

export const EDIT_USER_INPUT = gql `
  mutation editUser($userId: ID!, $name: String!, $slackHandle: String, $workingStyles: String, $cohort: String, $pronouns: String ) {
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

export const DELETE_RESOURCE = gql`
  mutation deleteResource($userId: ID!, $projectId: ID!, $resourceId: ID!) {
    deleteResource (input: {
      userId: $userId
      projectId: $projectId
      resourceId: $resourceId
    }) {
    project {
      collaborators {
          user {
              name
          }
      }
      id
      modNumber
      name
      owner {
          name
          id
          githubHandle
      }
      resources {
          name
          id
      }
      summary
    }
    errors
  }
}


`


export const CREATE_PROJECT = gql `
  mutation createProject($name: String!, $summary: String!, $modNumber: String!, $ownerId: ID! ) {
    createProject (input: {
      name: $name,
      summary: $summary,
      modNumber: $modNumber,
      ownerId: $ownerId
    }) {
      project {
        collaborators {
            user {
                name
            }
        }
        id
        modNumber
        name
        owner {
            name
            id
            githubHandle
        }
        resources {
            name
        }
        summary
    }
    errors
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
//reportWebVitals();