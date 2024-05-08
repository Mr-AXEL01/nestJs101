import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({required: true})
    name: String;

    @Prop({ required: true , unique: true})
    email: String;

    @Prop({ required: true , minlength: 8})
    password: String;

    @Prop({ required: true , enum: ['ADMIN', 'DEVELOPER', 'MANAGER']})
    role: String;

}

export const UserSchema = SchemaFactory.createForClass(User);
