import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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

    @Patch(':id') // PATCH /products/:id
    update(@Param('id') id: string, @Body(ValidationPipe) UpdateProductDto: UpdateProductDto) {
        return this.productsService.update(id, UpdateProductDto);
    }
    
}
