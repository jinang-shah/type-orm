import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../typeORM/entites/customer';
import { Order } from '../typeORM/entites/order';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
    imports:[TypeOrmModule.forFeature([Customer, Order])],
    controllers:[CustomerController],
    providers:[CustomerService],
    exports:[]
})
export class CustomerModule {}
