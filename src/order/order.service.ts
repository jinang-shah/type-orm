import { Body, Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "../typeORM/entites/order";
import { CreateOrderParam, UpdateOrderParam } from "../utils/type";
import { Repository } from "typeorm";

@Injectable()
export class OrderService{
    constructor(@InjectRepository(Order) private orderRepository:Repository<Order>){}

    createOrder(createOrderDetails: CreateOrderParam){
         const newOrder = this.orderRepository.create({...createOrderDetails,createdAt:new Date(), updatedAt:new Date()});
         return this.orderRepository.save(newOrder);
    }

    deleteOrder(id:number){
        return this.orderRepository.delete(id);
    }

    updateOrder(id:number, updateOrderDetails: UpdateOrderParam){
        return this.orderRepository.update(id, {...updateOrderDetails,updatedAt:new Date()});
    }

    findOrders(){
        return this.orderRepository.find();
    }
}