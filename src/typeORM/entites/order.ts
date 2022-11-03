import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer";

@Entity({name:'orders'})
export class Order{
    @PrimaryGeneratedColumn()
    id:number;

    // @ManyToOne(() => Customer)
    // @JoinTable()

    @ManyToOne(type => Customer, customer => customer.orders) customer: Customer; 
    customerId:number

    @Column()
    total:number

    @Column()
    createdAt:Date

    @Column()
    updatedAt:Date
}