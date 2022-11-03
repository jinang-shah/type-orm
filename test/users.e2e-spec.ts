import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('UsersController E2E Test', ()=>{
    let app : INestApplication;
    const CREATE_USER_URL = '/users';

    beforeAll(async ()=>{
        const moduleFixture:TestingModule = await  Test.createTestingModule({
            imports:[AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    })

    it('should create new user', ()=>{
        
        return request(app.getHttpServer()).post(CREATE_USER_URL).send({
            username : "jinangjinang",
            password:"1234"
        })
        .expect(201);
    })

    it('should return a 400 when invalid username',()=>{
        return request(app.getHttpServer()).post(CREATE_USER_URL).send({
            username:"an",
            password:"1234"
        })
        .expect(400);
    })


})