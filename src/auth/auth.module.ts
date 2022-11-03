import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../typeORM/entites/user';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './constants';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategy } from './utils/jwt.strategy';
import { LocalStrategy } from './utils/local.strategy';

@Module({
  imports:[UsersModule, TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'60s'}
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
