import mockUser from '../fixtures/mockUser.json'
import mockProjects from '../fixtures/mockProjects.json'
import mockUserEdit from '../fixtures/mockUserEdit.json'

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (req, operationName) => {
  const { body } = req
  return (
    body.hasOwnProperty('operationName') && body.operationName === operationName
  )
}

// Alias query if operationName matches
export const aliasUserQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.reply((res) => {
      res.body.data = mockUser;
    });
  }
}

export const aliasProjectsQuery = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.reply((res) => {
      res.body.data = mockProjects;
    });
  }
}

// Alias mutation if operationName matches
export const aliasProfileMutation = (req, operationName) => {
  if (hasOperationName(req, operationName)) {
    req.reply((res) => {
      res.body.data.user.name = 'Ashton H.'
      res.body.data.user.cohort = '2105'
    })
  }
}