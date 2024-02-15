import { Produto, ProdutoAlterar } from "./interface";
const ProductService = require('../graphql/services')

const resolversProduto = {
    Query: {
        products: async () => {
          return await ProductService.products();
        }
    },
     Mutation: {
        createProduct: async (_:any,{ nome, descricao, quantidade}: Produto) => {
            return await ProductService.createProduct({ nome, descricao, quantidade });
        },
        updateProduct: async (_:any,{id, nome, descricao, quantidade}: ProdutoAlterar) => {
            return await ProductService.updateProduct({id, nome, descricao, quantidade});
        },
        deleteProduct: async (_:any, {id}: {id: String}) => {
            const result = await ProductService.deleteProduct({ id })
            return result;
        }
    }    
}

module.exports = resolversProduto;