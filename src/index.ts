import { ApolloServer, gql } from 'apollo-server';

import { context } from './context';
import { schema } from './schema';

export const server = new ApolloServer({
    schema,
    context
})

server.listen({ port: 4001 }).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)

})