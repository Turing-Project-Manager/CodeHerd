import { gql } from '@apollo/client';

export const getUserInfo = gql`
  type Query {
   
    project(id: ID!)
    user(id: ID!)
    users
    usersProjects(userId: ID!)
  }

`