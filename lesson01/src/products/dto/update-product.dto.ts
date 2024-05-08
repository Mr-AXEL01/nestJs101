import { CreateUserDto } from "./create-product.dto";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateUserDto extends PartialType(CreateUserDto) {  }