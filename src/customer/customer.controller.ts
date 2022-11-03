import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateOrderDto } from "../order/dtos/createOrder.dto";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dtos/createCustomer.dto";
import { UpdateCustomerDto } from "./dtos/updateCustomer.dto";

@Controller('customers')
export class CustomerController{
    constructor(private customerService:CustomerService){}
    
    @Get()
    async getCustomer(){
        return await this.customerService.findCustomers();
    }

    @Put(':id')
    async updateCustomer(@Param('id', ParseIntPipe) id:number, @Body() updateCustomerDto: UpdateCustomerDto){
        return await this.customerService.updateCustomer(id, updateCustomerDto);
    }

    @Delete(':id')
    async deleteCustomer(@Param('id', ParseIntPipe) id:number){
        return await this.customerService.deleteCustomer(id);
    }

    @Post()
    async createCustomer(@Body() createCustomerDto:CreateCustomerDto){
        return await this.customerService.createCustomer(createCustomerDto);
    }

    @Post()
    async createOrder(@Param('id', ParseIntPipe) id:number, @Body() createOrderDto:CreateOrderDto){
        return await this.customerService.createOrder(id, createOrderDto);
    }
}