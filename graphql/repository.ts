import { randomUUID } from 'node:crypto'
import { Produto, ProdutoAlterar } from './interface';

const Product = require('../database/models/produtos')

export class ProductRepository {
    products = async () => {
        return await Product.findAll({
          order: [['createdAt', 'DESC']]
        });
    };

    createProduct = async ({ nome, descricao, quantidade }: Produto) => {
        const newProduct = {
          id: randomUUID(),
          nome,
          descricao,
          quantidade,
          createdAt: new Date()
        };
        return await Product.create(newProduct);
    };

    updateProduct = async ({id, nome, descricao, quantidade}: ProdutoAlterar ) => {
        const product = await Product.findOne({ where: {id: id}})
        product.nome = nome
        product.descricao = descricao
        product.quantidade = quantidade
        return await product.save();
    };

    deleteProduct = async ({ id }: { id:string }) => {
        const product = await Product.findOne({ where: {id: id}})
        const result =  await product.destroy();
        return result !== null;
    };


}

