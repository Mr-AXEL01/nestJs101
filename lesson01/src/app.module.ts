import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://MrAxel-01:3GqpiUBaO5NAkh6g@mraxel-01.fb1qxgu.mongodb.net/learning?retryWrites=true&w=majority') , UsersModule, AuthModule, ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
