import { Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){
        console.log("----->  Inside Authcontroller constructor");
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req){
        console.log("----->  Inside Authcontroller login method");
        return this.authService.login(req.user);
    }

    @Get('')
    async getAuthSession(@Session() session:Record<string, any>){
        console.log(23, session);
    }
}
