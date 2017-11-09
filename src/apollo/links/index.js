import { ApolloLink } from 'apollo-link'

const token = 'token_token'

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      authorization: token
    }
  }))
  return forward(operation)
})
