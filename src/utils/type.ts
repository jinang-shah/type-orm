import { MinLength } from "class-validator"

export type CreateUserParam = {
    username:string,
    password:string
}

export type UpdateUserParam = {
    username:string,
    password:string
}


export type CreateCustomerParam = {
    name:string,
    email:string,
    contact:number
}

export type UpdateCustomerParam = {
    name:string,
    email:string,
    contact:number
}

export type UpdateOrderParam = {
    customerId:number,
    total:number
}

export type CreateOrderParam = {
    customerId:number,
    total:number
}