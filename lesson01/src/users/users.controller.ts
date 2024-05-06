import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    * POST /users
    * PATCH /users/:id
    * DELETE /users/:id
    */

    @Get() // GET /users
    findAll() {
        return []
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    @Post() // POST /users
    create(@Body() user: {}) {
        return user
    }

}
