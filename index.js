import { GraphQLServer } from 'graphql-yoga'
import resolver from './graphql/movie/movieResolver'

const server = new GraphQLServer({
    typeDefs: 'graphql/movie/movie.graphql',
    resolvers: resolver
})

server.start({
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'PUT', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
}, () => {
    console.log('server has start!')
})