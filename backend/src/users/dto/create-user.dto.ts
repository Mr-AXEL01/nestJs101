import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;

    @IsEnum(["DEVELOPER" , "MANAGER" , "ADMIN"], {
        message: 'Valid role required'
    })
    role: "DEVELOPER" | "MANAGER" | "ADMIN";
    
}