import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../typeORM/entites/user";
import { ecodePassword } from "../utils/bcrypt";
import { CreateUserParam, UpdateUserParam } from "../utils/type";
import { Repository } from "typeorm";

@Injectable()
export class UserService{

    constructor(@InjectRepository(User) private userRepository:Repository<User>){}

    findUsers(){
        console.log('lllllllllllll');
        
        return this.userRepository.find();
    }

    findUserByEmail(username:string){
        return this.userRepository.findOneBy({username});
    }

    createUSer(userDetails:CreateUserParam){
        const password = ecodePassword(userDetails.password);
        const newUser = this.userRepository.create({...userDetails, createdAt:new Date(), password})
        return this.userRepository.save(newUser);
    }

    updateUser(id:number, updateUserDetails:UpdateUserParam){
        return this.userRepository.update({id},{...updateUserDetails})
    }

    deleteUser(id:number){
        return this.userRepository.delete(id);
    }
}