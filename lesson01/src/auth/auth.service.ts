import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'schemas/user.schema';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signUp(CreateUserDto: CreateUserDto): Promise<{ access_token: string }> {
        // Check if the user with the provided email already exists
        const existingUser = await this.usersService.findOneByEmail(CreateUserDto.email);
        if (existingUser) {
            throw new UnauthorizedException('This email is already used');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(CreateUserDto.password, 10);

        // Create the new user with the hashed password
        const newUser = await this.usersService.create({
            ...CreateUserDto,
            password: hashedPassword,
        });

        // Generate JWT token for the new user
        const payload = { sub: newUser._id, email: newUser.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signIn(
        email: string, 
        pass: string
        ): Promise<{ access_token: string }> {
        const user: User | null = await this.usersService.findOneByEmail(email);
        if (!user || user.password !== pass) {
            throw new NotFoundException();
        }
        const payload = { sub: user._id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}
