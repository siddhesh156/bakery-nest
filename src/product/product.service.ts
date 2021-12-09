import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from 'src/interfaces/product.interface';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = new this.productModel(createProductDto);
    return createProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  getProduct(): object {
    return ['Bread', 'Cake', 'Pastry', 'Sweets'];
  }
}
