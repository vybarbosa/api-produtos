import { ProductRepository } from '../graphql/repository'
import { Produto, ProdutoAlterar } from './interface';

class ProductService {
  private productRepository: ProductRepository;
  constructor(){
    this.productRepository = new ProductRepository();
  }
  products = async () => {
    return await this.productRepository.products();
  }
  createProduct = async ({ nome, descricao, quantidade }: Produto) => {
    return await this.productRepository.createProduct({ nome, descricao, quantidade });
  }
  updateProduct = async ({id, nome, descricao, quantidade }: ProdutoAlterar) => {
    return await this.productRepository.updateProduct({ id, nome, descricao, quantidade });
  }
  deleteProduct = async ({id}: {id: string}) => {
    const result = await this.productRepository.deleteProduct({ id });
    return result !== null;
  }
}

module.exports = new ProductService();