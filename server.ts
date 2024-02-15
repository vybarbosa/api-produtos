import { ApolloServer } from "apollo-server";
import resolversProduto  from "./graphql/resolvers";
import produtoType from "./graphql/schema";

const server = new ApolloServer({
    typeDefs: [produtoType],
    resolvers: [resolversProduto]
})

server.listen().then(({ url }) => {
    console.log(`Http server running ${url}`);
})