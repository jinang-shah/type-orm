import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { UserService } from "./user.service";

@Controller('users')
// @UseGuards(AuthGuard('local'))
export class UserController{

    constructor(private userService:UserService){}
    @Get()
    async getUsers(){
        return await this.userService.findUsers();
    }

    // @HttpException()
    @Post()
    async createUsers(@Body() createUserDto:CreateUserDto){
        const userExist  = await this.userService.findUserByEmail(createUserDto.username);
        console.log(userExist);
        
        if(userExist){
            return new HttpException("User Already exist with this Username",HttpStatus.EXPECTATION_FAILED)
        }
        return await this.userService.createUSer(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id:number, @Body() updateUSerDto:UpdateUserDto){
        return this.userService.updateUser(id, updateUSerDto)
    }

    @Delete(':id')
    async deleteUse(@Param('id', ParseIntPipe) id:number){
        return this.userService.deleteUser(id);
    }

}