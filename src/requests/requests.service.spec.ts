import { RequestsService } from './requests.service';
import { QuestStatus, Request } from './entities/request.entity';
import { getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Speciality } from 'src/adventurers/entities/speciality.entity';

describe('Transactions Service', () => {
  let requestsService: RequestsService;
  let requestModel: Model<Request>;
  let specialityModel: Model<Speciality>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RequestsService,
        {
          provide: getModelToken('Request'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Request),
            updateOne: jest.fn(),
            populate: jest.fn(),
            find: jest.fn(),
            equals: jest.fn(),
            where: jest.fn(),
            lean: jest.fn(),
            exec: jest.fn(),
            count: jest.fn(),
          },
        },
        {
          provide: getModelToken('Speciality'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Speciality),
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    requestsService = module.get<RequestsService>(RequestsService);

    requestModel = module.get<Model<Request>>(getModelToken(Request.name));
    specialityModel = module.get<Model<Speciality>>(
      getModelToken(Speciality.name),
    );
  });

  it('should be defined', () => {
    expect(requestsService).toBeDefined();
  });

  describe('setStatusByID', () => {
    it('should update the request status', async () => {
      const request = {
        _id: 'abc123',
        status: 'Pending',
      } as any;

      jest.spyOn(requestModel, 'updateOne').mockResolvedValue(request);

      expect(
        requestsService.setStatusByID('abc123', QuestStatus.Pending),
      ).resolves.toEqual(request);
    });
  });

  describe('findAll', () => {
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
              speciality: '5cabe64dcf0d4447fa60f5e6',
              experience: 9,
            },
            {
              speciality: '5cabe64dcf0d4447fa60f5e1',
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

      jest.spyOn(requestModel, 'find').mockReturnValueOnce({
        where: jest.fn().mockReturnValueOnce({
          populate: jest.spyOn(requestModel, 'populate').mockReturnValueOnce({
            equals: jest.fn().mockReturnValueOnce({
              equals: jest.fn().mockReturnValueOnce({
                skip: jest.fn().mockReturnValueOnce({
                  limit: jest.fn().mockReturnValueOnce({
                    lean: jest.fn().mockReturnValueOnce({
                      exec: jest.fn().mockResolvedValue(requests),
                    }),
                  } as any),
                } as any),
              } as any),
            } as any),
          } as any),
        } as any),
      } as any);

      jest.spyOn(specialityModel, 'findById').mockReturnValue({
        _id: '5cabe64dcf0d4447fa60f5e6',
        name: 'Prêtre',
        description:
          'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
        createdAt: '2022-01-13T14:59:32.198Z',
        updatedAt: '2022-01-13T14:59:32.207Z',
      } as any);

      jest.spyOn(requestModel, 'find').mockReturnValueOnce({
        where: jest.fn().mockReturnValueOnce({
          equals: jest.fn().mockReturnValueOnce({
            equals: jest.fn().mockReturnValueOnce({
              count: jest.fn().mockResolvedValueOnce(1),
            } as any),
          } as any),
        } as any),
      } as any);

      const counts = 1;

      const requestsReturned = [
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

      expect(requestsService.findAll({})).resolves.toEqual({
        requests: requestsReturned,
        counts,
      });
    });
  });
});
