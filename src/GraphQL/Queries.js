import { gql } from '@apollo/client';

export const getUserInfo = gql`
  query {
    project(id: ID!)
    user(id: ID!)
    users
    usersProjects(userId: ID!)
  }

`