import { gql } from "apollo-server";

const produtoType = gql`
  type Produto {
    id: String!
    nome: String!
    descricao: String
    quantidade: Int
    createdAt: String
  }

  type Query {
    products: [Produto]!
  }

  type Mutation {
    createProduct(nome: String!, descricao: String, quantidade: Int): Produto!
    updateProduct(id: String!, nome: String!, descricao: String, quantidade: Int): Produto!
    deleteProduct(id: String!): Boolean!
  }
`;

export default produtoType;