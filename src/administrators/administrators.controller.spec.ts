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

const mockAdministratorLoginError = {
  email: 'invalid@email.com',
  password: 'password-123',
};

const mockAdministratorUpdate = {
  username: 'updateUsername',
};

const mockAdministratorUpdated = {
  _id: 'abc123',
  username: mockAdministratorUpdate.username,
  email: 'kirby64@hotmail.com',
  password: 'password-123',
  wallet: 625130,
  items: [
    {
      durability: 10,
      daysInUse: 4,
      repairTime: 1.5,
      charges: 10,
      usedCharges: 2,
      name: 'Sword',
      price: 16.5,
      request: '61bf9b9b0be9cf45263b6f2d',
      type: 'equipment',
    },
  ],
  payments: [
    {
      amount: 10,
      type: 'QuestBounty',
      date: '2020-06-01T00:00:00.000Z',
    },
  ],
};

const mockAdministratorGet = {
  _id: 'abc123',
  username: 'username',
  email: 'kirby64@hotmail.com',
  password: 'password-123',
  wallet: 625130,
  items: [
    {
      durability: 10,
      daysInUse: 4,
      repairTime: 1.5,
      charges: 10,
      usedCharges: 2,
      name: 'Sword',
      price: 16.5,
      request: '61bf9b9b0be9cf45263b6f2d',
      type: 'equipment',
    },
  ],
  payments: [
    {
      amount: 10,
      type: 'QuestBounty',
      date: '2020-06-01T00:00:00.000Z',
    },
  ],
};

const req = {
  user: {
    _id: 'abc123',
  },
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
            update: jest.fn(),
            getOne: jest.fn(),
          },
        },
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn(),
            login: jest.fn(),
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
    it('should return a access token if valid ID', async () => {
      jest.spyOn(authService, 'login').mockResolvedValueOnce({
        accessToken: 'accessToken',
      } as any);

      expect(
        administratorsController.login('', mockAdministratorLogin),
      ).resolves.toEqual({
        accessToken: 'accessToken',
      });
    });

    it('should throw an Error if invalid ID', async () => {
      jest.spyOn(authService, 'login').mockResolvedValueOnce({
        statusCode: 401,
        message: 'Unauthorized',
      } as any);

      expect(
        administratorsController.login('', mockAdministratorLoginError),
      ).resolves.toEqual({
        statusCode: 401,
        message: 'Unauthorized',
      });
    });
  });

  describe('update administrator', () => {
    it('should update a administrator', async () => {
      jest
        .spyOn(administratorsService, 'update')
        .mockResolvedValueOnce(mockAdministratorUpdated as any);

      expect(
        administratorsController.update(req, mockAdministratorUpdate),
      ).resolves.toEqual(mockAdministratorUpdated);
    });

    it('otherwise', () => {
      jest.spyOn(administratorsService, 'update').mockResolvedValueOnce({
        statusCode: 401,
        message: 'Unauthorized',
      } as any);

      expect(administratorsController.update(req, {})).resolves.toEqual({
        statusCode: 401,
        message: 'Unauthorized',
      });
    });
  });

  describe('get administrator informations', () => {
    it('should get a administrator', async () => {
      jest
        .spyOn(administratorsService, 'getOne')
        .mockResolvedValueOnce(mockAdministratorGet as any);

      expect(administratorsController.getOne(req)).resolves.toEqual(
        mockAdministratorGet,
      );
    });

    it('otherwise', () => {
      jest.spyOn(administratorsService, 'getOne').mockResolvedValueOnce({
        statusCode: 401,
        message: 'Unauthorized',
      } as any);

      expect(administratorsController.getOne(req)).resolves.toEqual({
        statusCode: 401,
        message: 'Unauthorized',
      });
    });
  });
});
