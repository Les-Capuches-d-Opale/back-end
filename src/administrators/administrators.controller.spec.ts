import { ConfigModule } from '@nestjs/config';
import { AuthService } from './../auth/auth.service';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { AdministratorsController } from './administrators.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';

const mockAdministratorLogin = {
  email: 'valide@email.com',
  password: 'password-123',
};

describe('Administrator Controller', () => {
  let administratorsController: AdministratorsController;
  let administratorsService: AdministratorsService;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '24h' },
        }),
      ],
      controllers: [AdministratorsController],
      providers: [
        {
          provide: AdministratorsService,
          useValue: {
            getOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                name: 'testCat1',
                breed: 'testBreed1',
                age: 4,
                _id: id,
              }),
            ),
          },
        },
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn(),
          },
        },
      ],
    }).compile();

    administratorsController = module.get<AdministratorsController>(
      AdministratorsController,
    );
    administratorsService = module.get<AdministratorsService>(
      AdministratorsService,
    );
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(administratorsController).toBeDefined();
  });

  describe('login', () => {
    it('should return a access token', async () => {
      const accessToken = jest
        .spyOn(authService, 'validateUser')
        .mockResolvedValueOnce({
          accessToken: 'accessToken',
        });

      expect(
        await administratorsController.login('', mockAdministratorLogin),
      ).resolves.toEqual({
        accessToken: 'accessToken',
      });
    });
  });
});
