import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "../typeORM/entites/customer";
import { Order } from "../typeORM/entites/order";
import { CreateCustomerParam, CreateOrderParam, UpdateCustomerParam } from "../utils/type";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService{
    constructor(
        @InjectRepository(Customer) private customerRepository:Repository<Customer>, 
        @InjectRepository(Order) private orderRepository:Repository<Order>){}


    findCustomers(){ 
        return this.customerRepository.find()  
    }

    updateCustomer(id : number, updateCustomerDetails: UpdateCustomerParam){ 
        return this.customerRepository.update(id, {...updateCustomerDetails})
    }

    deleteCustomer(id:number){
        return this.customerRepository.delete(id)
    }

    createCustomer( createCustomerDetails: CreateCustomerParam){
        const newCustomer = this.customerRepository.create({...createCustomerDetails, createdAt:new Date(), updatedAt:new Date()})
        return this.customerRepository.save(newCustomer);
    }

    async createOrder(id:number, orderDetails:CreateOrderParam){
        const customer = this.customerRepository.findOneBy({id})
        if(!customer){
            throw new HttpException('User Not Found. Cannot make Order',HttpStatus.BAD_REQUEST)
        }

        const newOrder = this.orderRepository.create({...orderDetails, createdAt:new Date(), updatedAt:new Date()})
        return await this.orderRepository.save(newOrder);


    }
}