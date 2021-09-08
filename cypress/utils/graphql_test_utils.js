import mockUser from '../fixtures/mockUser.json'
import mockProjects from '../fixtures/mockProjects.json'
import mockUserEdit from '../fixtures/mockUserEdit.json'
import singleProject from '../fixtures/single_project.json'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
  if (hasOperationName(req, operationName) && operationName === 'user') {
    req.alias = `gql${operationName}Query`
    req.reply((res) => {
      res.body.data = mockUser
    });
  }
  if (hasOperationName(req, operationName) && operationName === 'usersProjects') {
    req.alias = `gql${operationName}Query`
    req.reply((res) => {
      res.body.data = mockProjects
    });
  }
  if (hasOperationName(req, operationName) && operationName === 'project') {
    req.alias = `gql${operationName}Query`
    req.reply((res) => {
      res.body.data = singleProject
    })
  }
}


export const aliasMutation = (req, operationName) => {
  if (hasOperationName(req, operationName) && operationName === 'editUser') {
    req.alias = `gql${operationName}Mutation`
    req.reply((res) => {
      res.body.data = mockUserEdit
    })
  }
}

// export const aliasMutation = (req, operationName) => {
//   if (hasOperationName(req, operationName)) {
//     req.alias = `gql${operationName}Mutation`
//   }
// }

// export const aliasNewProjectMutation = (req, operationName) => {
//   if (hasOperationName(req, operationName)) {
//     req.reply((res) => {
//       res.body.data.projects.length = 5
//       res.body.data.projects[4].name = 'Rock Paper Scissors'
//       res.body.data.projects[4].modNumber = '1'
//     })
//   }
// }