import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../../users/user.service';
import { comparePassword } from '../../../utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService:UserService, private jwtService:JwtService){}

    async validateUser(username:string, pass:string):Promise<any>{
        console.log("----->  Inside AuthService validateUser");

        const user = await this.userService.findUserByEmail(username);
        const matched = comparePassword(pass, user.password)
        if(user && matched){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }


    async login(user:any){
        const payload = {username:user.username, sub:user.userId};
        console.log("----->  Inside Service Login");

        return {
            access_token : this.jwtService.sign(payload)
        }
    }
}
