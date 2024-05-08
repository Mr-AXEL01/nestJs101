import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @Post('register')
    async register(@Body() CreateUserDto: CreateUserDto) {
      await this.authService.signUp(CreateUserDto);
      return { message: 'User registered successfully' };
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }

}
