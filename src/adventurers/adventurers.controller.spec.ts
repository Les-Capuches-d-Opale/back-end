import { AdventurersService } from 'src/adventurers/adventurers.service';
import { AdventurersController } from './adventurers.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('Adventurer Controller', () => {
  let adventurersController: AdventurersController;
  let adventurersService: AdventurersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdventurersController],
      providers: [
        {
          provide: AdventurersService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            getAllSpecialities: jest.fn(),
            create: jest.fn(),
            updateExp: jest.fn(),
          },
        },
      ],
    }).compile();

    adventurersController = module.get<AdventurersController>(
      AdventurersController,
    );
    adventurersService = module.get<AdventurersService>(AdventurersService);
  });

  it('should be defined', () => {
    expect(adventurersController).toBeDefined();
  });

  describe('getAll', () => {
    describe('when using queryFilterDTO', () => {
      it('should return filtered adventurers', async () => {
        const adventurers = [
          {
            _id: 'abc123',
            name: 'Johny',
            exp: 0,
            speciality: 'abc123',
          } as any,
          {
            _id: 'abc124',
            name: 'Johnson',
            exp: 0,
            speciality: 'abc123',
          } as any,
        ];

        jest
          .spyOn(adventurersService, 'findAll')
          .mockResolvedValueOnce(adventurers);

        expect(
          adventurersController.findAll({
            name: 'John',
            speciality: 'abc123',
          }),
        ).resolves.toEqual(adventurers);
      });
    });

    describe('otherwise', () => {
      it('should return all adventurers', async () => {
        const adventurers = [
          {
            _id: 'abc123',
            name: 'Johny',
            exp: 0,
            speciality: 'abc123',
          } as any,
          {
            _id: 'abc124',
            name: 'Johnson',
            exp: 0,
            speciality: 'abc123',
          } as any,
        ];

        jest
          .spyOn(adventurersService, 'findAll')
          .mockResolvedValueOnce(adventurers);

        expect(adventurersController.findAll({})).resolves.toEqual(adventurers);
      });
    });
  });

  describe('findOne', () => {
    describe('when using an existing adventurer Id', () => {
      it('should return an adventurer', async () => {
        const adventurer = {
          name: 'Batman',
          speciality: 'af4c245e1d8a4f8a9d7e8c7f',
          experience: 23.08,
          baseDailyRate: 1.2,
          pictureURL:
            'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
        };

        jest
          .spyOn(adventurersService, 'findOne')
          .mockResolvedValueOnce(adventurer as any);

        expect(adventurersController.findOne('abc123')).resolves.toEqual(
          adventurer,
        );
      });
    });
  });

  describe('getSpecialities', () => {
    it('should return an array of speciality', async () => {
      const specialities = [
        {
          _id: '5cabe64dcf0d4447fa60f5e1',
          name: 'Archer',
          description:
            "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
          createdAt: '2022-01-14T13:27:31.390Z',
          updatedAt: '2022-01-14T13:27:31.392Z',
        },
        {
          _id: '5cabe64dcf0d4447fa60f5e2',
          name: 'Babare',
          description:
            'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
          createdAt: '2022-01-14T13:27:31.390Z',
          updatedAt: '2022-01-14T13:27:31.392Z',
        },
      ];

      jest
        .spyOn(adventurersService, 'getAllSpecialities')
        .mockResolvedValueOnce(specialities as any);

      expect(adventurersController.getSpecialities()).resolves.toEqual(
        specialities,
      );
    });
  });

  describe('create', () => {
    it('should return a new adventurer', async () => {
      const adventurer = {
        name: 'Batman',
        speciality: 'af4c245e1d8a4f8a9d7e8c7f',
        experience: 23.08,
        baseDailyRate: 1.2,
        pictureURL:
          'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
      };

      jest
        .spyOn(adventurersService, 'create')
        .mockResolvedValueOnce(adventurer as any);

      expect(adventurersController.create(adventurer)).resolves.toEqual(
        adventurer,
      );
    });
  });

  describe('updateExp', () => {
    it('should return & update the experience of an adventurer (by his Id)', async () => {
      const adventurer = {
        _id: 'abc123',
        name: 'Batman',
        speciality: 'af4c245e1d8a4f8a9d7e8c7f',
        experience: 23.08,
        baseDailyRate: 1.2,
        pictureURL:
          'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
      };

      jest
        .spyOn(adventurersService, 'updateExp')
        .mockResolvedValueOnce(adventurer as any);

      expect(
        adventurersController.updateExp('abc123', adventurer),
      ).resolves.toEqual(adventurer);
    });
  });
});
