import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import session from 'express-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.use(session({
  //   secret:'WJVNKJKJKJKJDKQFNLQKJNSLDJJF',
  //   resave:false,
  //   saveUninitialized:false,
  //   cookie:{
  //     maxAge:6000
  //   }
  // }))
  await app.listen(9000);
}
bootstrap();
