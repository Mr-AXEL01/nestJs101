import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get() // GET /products
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }
    
}
