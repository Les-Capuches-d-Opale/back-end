import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/capuches-opale-bdd'),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('TEST example [GET /]', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(HttpStatus.NOT_FOUND)
      .then(({ body }) => {
        expect(body).toEqual({
          error: 'Not Found',
          message: 'Cannot GET /',
          statusCode: 404,
        });
      });
  });

  it.todo('Create all routes tests...]');

  afterAll(async () => {
    await app.close();
  });
});
