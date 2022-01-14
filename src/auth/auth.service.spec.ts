import { JwtModule, JwtService } from '@nestjs/jwt';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { Administrator } from 'src/administrators/entities/administrator.entity';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { ConfigModule } from '@nestjs/config';

const mockAdministrator = (
  _id: 'abc123',
  username = 'username',
  email = 'email@email.com',
  password = 'password-123', // not encrypted
) => ({
  username,
  email,
  password,
});

const mockAdministratorPasswordHashed = async () => ({
  username: 'username',
  email: 'valide@gmail.com',
  password: await bcrypt.hash('password-123', 10),
});

describe('AuthService', () => {
  let service: AuthService;
  let administratorModel: Model<Administrator>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({}),
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '24h' },
        }),
      ],
      providers: [
        AuthService,
        AdministratorsService,
        {
          provide: getModelToken('Administrator'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Administrator),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    administratorModel = module.get<Model<Administrator>>(
      getModelToken(Administrator.name),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validate user', () => {
    describe('when user ID is valid', () => {
      it('should return the user', async () => {
        const userID = {
          email: 'valide@email.com',
          password: 'password-123',
        };

        const mockAdminTest = mockAdministrator(
          'abc123',
          'username',
          'valide@gmail.com',
          'password-123',
        );

        const mockAdminTestHashed = await mockAdministratorPasswordHashed();

        jest.spyOn(administratorModel, 'findOne').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTestHashed),
        } as any);

        const { password, ...result } = mockAdminTest;

        const user = await service.validateUser(userID.email, userID.password);

        expect(user).toEqual(result);
      });
    });

    describe('when user password is not the same', () => {
      it('should return null', async () => {
        const userID = {
          email: 'valide@email.com',
          password: 'invalid-123',
        };

        const mockAdminTestHashed = await mockAdministratorPasswordHashed();

        jest.spyOn(administratorModel, 'findOne').mockReturnValueOnce({
          exec: jest.fn().mockResolvedValueOnce(mockAdminTestHashed),
        } as any);

        const user = await service.validateUser(userID.email, userID.password);

        expect(user).toEqual(null);
      });
    });

    describe('when user ID are wrong', () => {
      it('should return null', async () => {
        const userID = {
          email: 'invalide@email.com',
          password: 'password-123',
        };

        const mockAdminTest = mockAdministrator(
          'abc123',
          'username',
          'valide@gmail.com',
          'password-123',
        );

        jest.spyOn(administratorModel, 'findOne').mockReturnValueOnce({
          exec: jest.fn().mockReturnValueOnce(undefined),
        } as any);

        const { password, ...result } = mockAdminTest;

        const user = await service.validateUser(userID.email, userID.password);

        expect(user).toEqual(null);
      });
    });
  });

  describe('login', () => {
    it('should return access token', async () => {
      const mockAdminTest = {
        _doc: {
          _id: 'abc123',
          username: 'username',
        },
      };

      expect(await service.login(mockAdminTest)).toHaveProperty('access_token');
    });
  });
});
