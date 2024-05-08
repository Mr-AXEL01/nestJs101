import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Get() // GET /products
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id') // GET /products/:id
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(id);
    }

    @Post() // POST /products
    create(@Body(ValidationPipe) CreateProductDto:CreateProductDto) { 
        return this.productsService.create(CreateProductDto);
    }
    
}
