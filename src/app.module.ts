import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order } from './typeORM/entites/order';
import { User } from './typeORM/entites/user';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './typeORM/entites/customer';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'jinang@312',
    database: 'Inventory',
    entities: [User, Order, Customer],
    synchronize: true,
  }), UsersModule, CustomerModule, OrderModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource){}
}
