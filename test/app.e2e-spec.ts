import { Administrator } from './../src/administrators/entities/administrator.entity';
import { AdministratorsService } from './../src/administrators/administrators.service';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, HttpException } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from './../src/app.module';
import { JwtAuthGuard } from '../src/auth/jwt-auth.guard';
import { AdventurersService } from '../src/adventurers/adventurers.service';
import { ItemsService } from '../src/items/items.service';

describe('API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/capuches-opale-bdd'),
        AppModule,
      ],
    }).compile();

    jest.spyOn(JwtAuthGuard.prototype, 'canActivate').mockReturnValue(true);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('ADVENTURERS', () => {
    describe('GET ADVENTURERS', () => {
      describe('GET /adventurers', () => {
        it('should return a list of adventurers', () => {
          return request(app.getHttpServer())
            .get('/adventurers')
            .expect(HttpStatus.OK);
        });
      });

      describe('GET /adventurers with exactLevel & minLevel query', () => {
        it('should throw a BAD REQUEST ERROR', () => {
          return request(app.getHttpServer())
            .get('/adventurers?exactLevel=23&minLevel=20')
            .expect(HttpStatus.BAD_REQUEST);
        });
      });

      describe('GET /adventurers with filters', () => {
        it('should be OK', () => {
          return request(app.getHttpServer())
            .get(
              '/adventurers?minLevel=20&name=Jul&speciality=5cabe64dcf0d4447fa60f5e5&isAvailableNow=true',
            )
            .expect(HttpStatus.OK);
        });
      });
    });

    describe('POST ADVENTURERS', () => {
      describe('POST /adventurers with good values', () => {
        it('should return a CREATED STATUS CODE', () => {
          return request(app.getHttpServer())
            .post('/adventurers')
            .send({
              name: 'Batman',
              speciality: 'af4c245e1d8a4f8a9d7e8c7f',
              experience: 23.08,
              baseDailyRate: 1.2,
              pictureURL:
                'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
            })
            .expect(HttpStatus.CREATED);
        });
      });
    });

    describe('GET ADVENTURERS SPECIALITIES', () => {
      describe('Get /adventurers/specialities', () => {
        it('should return a OK STATUS CODE & an array', () => {
          return request(app.getHttpServer())
            .get('/adventurers/specialities')
            .expect(HttpStatus.OK)
            .expect((res) => {
              expect(res.body).toBeInstanceOf(Array);
            });
        });
      });
    });

    describe('GET AN ADVENTURER', () => {
      describe('Get /adventurers/:id', () => {
        it('should return a adventurer with existing id', () => {
          jest
            .spyOn(AdventurersService.prototype, 'findOne')
            .mockResolvedValueOnce({ _id: '5f4b8f9f9c9d4400008b4567' } as any);

          return request(app.getHttpServer())
            .get('/adventurers/5cabe64dcf0d4447fa60f5e5')
            .expect(HttpStatus.OK)
            .expect((res) => {
              expect(res.body).toBeInstanceOf(Object);
            });
        });
      });

      describe('Get /adventurers/:id who doesnt exist', () => {
        it('should throw a NOT FOUND ERROR', () => {
          return request(app.getHttpServer())
            .get('/adventurers/5cabe64dcf0d4447fa60f5e5')
            .expect(HttpStatus.NOT_FOUND);
        });
      });
    });

    describe('PUT AN ADVENTURER', () => {
      describe('Put /adventurers/:id', () => {
        it('should return a adventurer updated with existing id', () => {
          jest
            .spyOn(AdventurersService.prototype, 'updateExp')
            .mockResolvedValueOnce({ _id: '5f4b8f9f9c9d4400008b4567' } as any);

          return request(app.getHttpServer())
            .put('/adventurers/5cabe64dcf0d4447fa60f5e5')
            .expect(HttpStatus.OK)
            .expect((res) => {
              expect(res.body).toBeInstanceOf(Object);
            });
        });
      });

      describe('Put /adventurers/:id who doesnt exist', () => {
        it('should throw a NOT FOUND ERROR', () => {
          return request(app.getHttpServer())
            .put('/adventurers/5cabe64dcf0d4447fa60f5e5')
            .send({ experience: 10 })
            .expect(HttpStatus.NOT_FOUND);
        });
      });
    });
  });

  describe('ITEMS', () => {
    describe('GET ITEMS', () => {
      describe('GET /items with no filters', () => {
        it('should return list of items', () => {
          return request(app.getHttpServer())
            .get('/items')
            .expect(HttpStatus.OK);
        });
      });

      describe('GET /items with filters', () => {
        it('should return a list of filtered items (25 max)', () => {
          jest
            .spyOn(ItemsService.prototype, 'findAll')
            .mockReturnValueOnce([...new Array(25)] as any);

          return request(app.getHttpServer())
            .get('/items?type=consumable&limit=25&offset=0')
            .expect(HttpStatus.OK)
            .expect((res) => res.body.length === 25);
        });
      });
    });

    describe('BUY ITEM', () => {
      describe('GET /items/buy/:id with invalid id', () => {
        it('should throw a NOT FOUND STATUS', () => {
          return request(app.getHttpServer())
            .get('/item/buy/5cabe64dcf0d4447fa60f5e5')
            .expect(HttpStatus.NOT_FOUND);
        });
      });
    });
  });
});
