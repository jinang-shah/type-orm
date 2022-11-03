import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order";

@Entity('customers')
export class Customer{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    contact:number
    
    @Column()
    createdAt:Date

    @Column()
    updatedAt:Date

    @OneToMany(type => Order, order => order.customerId) orders: Order[];  

}