import { Model } from 'mongoose';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('Requests Controller', () => {
  let requestsController: RequestsController;
  let requestsService: RequestsService;
  let requestsModel: Model<Request>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestsController],
      providers: [
        {
          provide: RequestsService,
          useValue: {
            findAll: jest.fn(),
            filterAll: jest.fn(),
          },
        },
      ],
    }).compile();

    requestsController = module.get<RequestsController>(RequestsController);
    requestsService = module.get<RequestsService>(RequestsService);
  });

  it('should be defined', () => {
    expect(requestsController).toBeDefined();
  });

  describe('getAll', () => {
    it('should return a array of requests', async () => {
      const requests = [
        {
          _id: '9cabe64dcf0d4447fa60f5e3',
          name: 'La quête fiévreuse',
          description:
            'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
          pictureUrl:
            'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
          questGiver: 'Le medecin',
          bounty: 837,
          duration: 565850,
          requiredProfiles: [
            {
              speciality: {
                _id: '5cabe64dcf0d4447fa60f5e6',
                name: 'Prêtre',
                description:
                  'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                createdAt: '2022-01-13T14:59:32.198Z',
                updatedAt: '2022-01-13T14:59:32.207Z',
              },
              experience: 9,
            },
            {
              speciality: {
                _id: '5cabe64dcf0d4447fa60f5e6',
                name: 'Prêtre',
                description:
                  'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                createdAt: '2022-01-13T14:59:32.198Z',
                updatedAt: '2022-01-13T14:59:32.207Z',
              },
              experience: 4,
            },
          ],
          awardedExperience: 8,
          dateDebut: '2022-02-01',
          status: 'Unassigned',
          createdAt: '2022-01-13T14:59:32.198Z',
          updatedAt: '2022-01-13T14:59:32.207Z',
        },
      ];

      const counts = 1;
      jest.spyOn(requestsService, 'filterAll').mockResolvedValue(requests);

      expect(requestsController.getAll({})).resolves.toEqual(requests);
    });
  });
});
