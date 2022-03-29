import { ApolloServer, gql } from 'apollo-server';

import { schema } from './schema';

export const server = new ApolloServer({
    schema
})

server.listen({ port: 4001 }).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)

})