import { Body, Controller, Delete, Get, Param, Patch, Post, Inject, Query } from '@nestjs/common';
import { PRODUCTS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct(){
    //return 'This action adds a new product';
  }

  @Get()
  findAllProduct( @Query() paginationDto: PaginationDto){
    return this.productsClient.send({ cmd: 'findAllProducts' }, paginationDto );
    //return 'This action returns all products';
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return 'This action returns product by id '+ id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string){
    return 'This action deletes product by id '+ id;
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() body: any
  ){
    return 'This action updates product by id '+ id;
  }
}
