import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    /*
    * set the CRUD controller
    *
    */

    @Get()
    findAll(): string {
        return 'all products';
    }

    @Get(':id')
    findOne(@Param('id') id : string) {
        return `this the pproduct that have the id ${id}`;
    }

    @Post()
    create()

}
