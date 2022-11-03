import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateOrderDto } from "./dtos/createOrder.dto";
import { UpdateOrderDto } from "./dtos/updateOrder.dto";
import { OrderService } from "./order.service";

@Controller('orders')
export class OrderController{
    constructor(private orderService:OrderService){}

    @Get()
    async findOrders(){
        return await this.orderService.findOrders();
    }

    @Post()
    async createOrders(@Body() createOrderDto:CreateOrderDto){
        return await this.orderService.createOrder(createOrderDto);
    }
    
    @Put(':/id')
    async updateOrder(
        @Param('id', ParseIntPipe) id:number, 
        @Body() updateOrderDto:UpdateOrderDto){
            return await this.orderService.updateOrder(id, updateOrderDto);
    }

    @Delete(':/id')
    async deleteOrder(@Param('id', ParseIntPipe) id:number){
        return await this.orderService.deleteOrder(id);
    }
}