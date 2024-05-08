import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}

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
