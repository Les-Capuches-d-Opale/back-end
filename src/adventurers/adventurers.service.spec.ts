import { AdministratorsService } from 'src/administrators/administrators.service';
import { TransactionsService } from './../transactions/transactions.service';
import { QuestsService } from './../quests/quests.service';
import { Adventurer } from './entities/adventurer.entity';
import { AdventurersService } from 'src/adventurers/adventurers.service';
import { getConnectionToken, getModelToken } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { Speciality } from './entities/speciality.entity';
import { Quest } from 'src/quests/entities/quest.entity';
import { RequestsService } from 'src/requests/requests.service';
import { Request } from 'src/requests/entities/request.entity';
import { HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Administrator } from 'src/administrators/entities/administrator.entity';

describe('Adventurers Service', () => {
  let adventurersService: AdventurersService;
  let adventurernModel: Model<Adventurer>;
  let questModel: Model<Quest>;
  let specialityModel: Model<Speciality>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AdventurersService,
        QuestsService,
        RequestsService,
        TransactionsService,
        AdministratorsService,
        {
          provide: getModelToken('Adventurer'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Adventurer),
            find: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            where: jest.fn(),
            populate: jest.fn(),
            lean: jest.fn(),
            exec: jest.fn(),
            create: jest.fn(),
          },
        },
        {
          provide: getModelToken('Speciality'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Speciality),
            findById: jest.fn(),
            find: jest.fn(),
            exec: jest.fn(),
          },
        },
        {
          provide: getModelToken('Quest'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Quest),
            find: jest.fn(),
            populate: jest.fn(),
            exec: jest.fn(),
            count: jest.fn(),
            limit: jest.fn(),
            skip: jest.fn(),
          },
        },
        {
          provide: getModelToken('Request'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Request),
          },
        },
        {
          provide: getModelToken('Transaction'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Transaction),
          },
        },
        {
          provide: getModelToken('Administrator'),
          useValue: {
            constructor: jest.fn().mockResolvedValue(Administrator),
          },
        },
        {
          provide: getConnectionToken(),
          useValue: {},
        },
      ],
    }).compile();

    adventurersService = module.get<AdventurersService>(AdventurersService);

    adventurernModel = module.get<Model<Adventurer>>(
      getModelToken(Adventurer.name),
    );

    questModel = module.get<Model<Quest>>(getModelToken(Quest.name));

    specialityModel = module.get<Model<Speciality>>(
      getModelToken(Speciality.name),
    );
  });

  it('should be defined', () => {
    expect(adventurersService).toBeDefined();
  });

  describe('findAll', () => {
    describe('when using filterDTO with minLevel & exactLevel', () => {
      it('should throw an Error 400', async () => {
        try {
          await adventurersService.findAll({ minLevel: 1, exactLevel: 1 });
        } catch (error) {
          expect(error).toBeInstanceOf(HttpException);
          expect(error.getStatus()).toBe(400);
          expect(error.message).toBe('You can only use level or minLevel');
        }
      });
    });

    describe('when using filterDTO with name & minLevel & speciality', () => {
      it('should return a list of filtereds adventurers', async () => {
        const adventurers = [
          {
            name: 'Batman',
            speciality: 'ab12',
            experience: 23.08,
            baseDailyRate: 1.2,
            pictureURL:
              'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
          },
        ];

        const quests = [
          {
            _id: '61e17a4468b0dc460c0b2a6f',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e1',
              name: 'La quête de Dieu',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le prètre',
              bounty: 825,
              duration: 597055,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e1',
                    name: 'Archer',
                    description:
                      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e2',
                    name: 'Babare',
                    description:
                      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-01T00:00:00.000Z',
              status: 'Pending',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e2',
                name: 'Dr. Juan Glover',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e3',
                  name: 'Paladin',
                  description:
                    'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 64,
                experience: 21,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 1169.9554039118461,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17a4468b0dc460c0b2a70',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e2',
              name: 'La quête de la Vérité',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le mage',
              bounty: 729,
              duration: 109273,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e5',
                    name: 'Arcaniste',
                    description:
                      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 2,
              dateDebut: '2022-01-03T00:00:00.000Z',
              status: 'Failed',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17f465f9d984dd14e4d1a',
            updatedAt: '2022-01-14T13:48:54.569Z',
            createdAt: '2022-01-14T13:48:54.569Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e3',
              name: 'La quête fiévreuse',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le medecin',
              bounty: 101,
              duration: 509373,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 4,
              dateDebut: '2022-02-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1cbda3646aa2c5ea1ac80',
            updatedAt: '2022-01-14T19:15:38.416Z',
            createdAt: '2022-01-14T19:15:38.416Z',
            groups: [
              {
                _id: 'cabe64dcf0d4447fa60f5f17',
                name: 'Herman Johns',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e6',
                  name: 'Prêtre',
                  description:
                    'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 33,
                experience: 4,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e4',
              name: "A l'aube de la guéguerre",
              description:
                "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Madame la maire',
              bounty: 661,
              duration: 33694,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 3,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 5,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e8',
                    name: 'Forgeron',
                    description:
                      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 0,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e9',
                    name: 'Enchanteur',
                    description:
                      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-07T00:00:00.000Z',
              status: 'Unassigned',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1d1261f875d6aed61a817',
            updatedAt: '2022-01-14T19:38:14.893Z',
            createdAt: '2022-01-14T19:38:14.893Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e5',
              name: 'La quête de fifou',
              description:
                "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Merlin le sorceleur',
              bounty: 136,
              duration: 41726,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-04-22T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
        ];

        jest.spyOn(adventurernModel, 'find').mockReturnValueOnce({
          where: jest.spyOn(adventurernModel, 'where').mockReturnValueOnce({
            populate: jest
              .spyOn(adventurernModel, 'populate')
              .mockReturnValueOnce({
                lean: jest.fn().mockReturnValueOnce({
                  exec: jest.fn().mockResolvedValueOnce(adventurers),
                }),
              } as any),
          } as any),
        } as any);

        jest.spyOn(questModel, 'find').mockReturnValue({
          populate: jest.spyOn(questModel, 'populate').mockReturnValue({
            populate: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                skip: jest.fn().mockReturnValue({
                  exec: jest.fn().mockResolvedValueOnce(quests),
                } as any),
              } as any),
            } as any),
          } as any),
          count: jest.fn().mockResolvedValue(quests.length),
        } as any);

        expect(
          adventurersService.findAll({
            minLevel: 1,
            speciality: 'ab12',
            name: 'Batman',
          }),
        ).resolves.toEqual(adventurers);
      });
    });

    describe('when using filterDTO only with exactLevel', () => {
      it('should return a list of filtereds adventurers', async () => {
        const adventurers = [
          {
            name: 'Batman',
            speciality: 'ab12',
            experience: 23.08,
            baseDailyRate: 1.2,
            pictureURL:
              'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
          },
        ];

        const quests = [
          {
            _id: '61e17a4468b0dc460c0b2a6f',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e1',
              name: 'La quête de Dieu',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le prètre',
              bounty: 825,
              duration: 597055,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e1',
                    name: 'Archer',
                    description:
                      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e2',
                    name: 'Babare',
                    description:
                      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-01T00:00:00.000Z',
              status: 'Pending',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e2',
                name: 'Dr. Juan Glover',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e3',
                  name: 'Paladin',
                  description:
                    'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 64,
                experience: 21,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 1169.9554039118461,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17a4468b0dc460c0b2a70',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e2',
              name: 'La quête de la Vérité',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le mage',
              bounty: 729,
              duration: 109273,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e5',
                    name: 'Arcaniste',
                    description:
                      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 2,
              dateDebut: '2022-01-03T00:00:00.000Z',
              status: 'Failed',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17f465f9d984dd14e4d1a',
            updatedAt: '2022-01-14T13:48:54.569Z',
            createdAt: '2022-01-14T13:48:54.569Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e3',
              name: 'La quête fiévreuse',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le medecin',
              bounty: 101,
              duration: 509373,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 4,
              dateDebut: '2022-02-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1cbda3646aa2c5ea1ac80',
            updatedAt: '2022-01-14T19:15:38.416Z',
            createdAt: '2022-01-14T19:15:38.416Z',
            groups: [
              {
                _id: 'cabe64dcf0d4447fa60f5f17',
                name: 'Herman Johns',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e6',
                  name: 'Prêtre',
                  description:
                    'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 33,
                experience: 4,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e4',
              name: "A l'aube de la guéguerre",
              description:
                "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Madame la maire',
              bounty: 661,
              duration: 33694,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 3,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 5,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e8',
                    name: 'Forgeron',
                    description:
                      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 0,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e9',
                    name: 'Enchanteur',
                    description:
                      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-07T00:00:00.000Z',
              status: 'Unassigned',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1d1261f875d6aed61a817',
            updatedAt: '2022-01-14T19:38:14.893Z',
            createdAt: '2022-01-14T19:38:14.893Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e5',
              name: 'La quête de fifou',
              description:
                "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Merlin le sorceleur',
              bounty: 136,
              duration: 41726,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-04-22T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
        ];

        jest.spyOn(adventurernModel, 'find').mockReturnValueOnce({
          where: jest.spyOn(adventurernModel, 'where').mockReturnValueOnce({
            populate: jest
              .spyOn(adventurernModel, 'populate')
              .mockReturnValueOnce({
                lean: jest.fn().mockReturnValueOnce({
                  exec: jest.fn().mockResolvedValueOnce(adventurers),
                }),
              } as any),
          } as any),
        } as any);

        jest.spyOn(questModel, 'find').mockReturnValue({
          populate: jest.spyOn(questModel, 'populate').mockReturnValue({
            populate: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                skip: jest.fn().mockReturnValue({
                  exec: jest.fn().mockResolvedValueOnce(quests),
                } as any),
              } as any),
            } as any),
          } as any),
          count: jest.fn().mockResolvedValue(quests.length),
        } as any);

        expect(
          adventurersService.findAll({
            exactLevel: 23,
          }),
        ).resolves.toEqual(adventurers);
      });
    });

    describe('when using filterDTO with isAvailableNow true', () => {
      it('should return an array of adventurer available now', async () => {
        const adventurers = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 821.3513321148754,
          },
        ];

        const adventurersAvailable = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: true,
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: true,
            amount: 821.3513321148754,
          },
        ];

        const quests = [
          {
            _id: '61e17a4468b0dc460c0b2a6f',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e1',
              name: 'La quête de Dieu',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le prètre',
              bounty: 825,
              duration: 597055,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e1',
                    name: 'Archer',
                    description:
                      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e2',
                    name: 'Babare',
                    description:
                      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-01T00:00:00.000Z',
              status: 'Pending',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e2',
                name: 'Dr. Juan Glover',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e3',
                  name: 'Paladin',
                  description:
                    'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 64,
                experience: 21,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 1169.9554039118461,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17a4468b0dc460c0b2a70',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e2',
              name: 'La quête de la Vérité',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le mage',
              bounty: 729,
              duration: 109273,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e5',
                    name: 'Arcaniste',
                    description:
                      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 2,
              dateDebut: '2022-01-03T00:00:00.000Z',
              status: 'Failed',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17f465f9d984dd14e4d1a',
            updatedAt: '2022-01-14T13:48:54.569Z',
            createdAt: '2022-01-14T13:48:54.569Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e3',
              name: 'La quête fiévreuse',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le medecin',
              bounty: 101,
              duration: 509373,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 4,
              dateDebut: '2022-02-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1cbda3646aa2c5ea1ac80',
            updatedAt: '2022-01-14T19:15:38.416Z',
            createdAt: '2022-01-14T19:15:38.416Z',
            groups: [
              {
                _id: 'cabe64dcf0d4447fa60f5f17',
                name: 'Herman Johns',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e6',
                  name: 'Prêtre',
                  description:
                    'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 33,
                experience: 4,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e4',
                  name: 'Mage',
                  description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 5,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 821.3513321148754,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e4',
              name: "A l'aube de la guéguerre",
              description:
                "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Madame la maire',
              bounty: 661,
              duration: 33694,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 3,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 5,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e8',
                    name: 'Forgeron',
                    description:
                      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 0,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e9',
                    name: 'Enchanteur',
                    description:
                      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-07T00:00:00.000Z',
              status: 'Unassigned',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1d1261f875d6aed61a817',
            updatedAt: '2022-01-14T19:38:14.893Z',
            createdAt: '2022-01-14T19:38:14.893Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e5',
              name: 'La quête de fifou',
              description:
                "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Merlin le sorceleur',
              bounty: 136,
              duration: 41726,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-04-22T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
        ];

        jest.spyOn(adventurernModel, 'find').mockReturnValueOnce({
          where: jest.spyOn(adventurernModel, 'where').mockReturnValueOnce({
            populate: jest
              .spyOn(adventurernModel, 'populate')
              .mockReturnValueOnce({
                lean: jest.fn().mockReturnValueOnce({
                  exec: jest.fn().mockResolvedValueOnce(adventurers),
                } as any),
              } as any),
          } as any),
        } as any);

        jest.spyOn(questModel, 'find').mockReturnValue({
          populate: jest.spyOn(questModel, 'populate').mockReturnValue({
            populate: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                skip: jest.fn().mockReturnValue({
                  exec: jest.fn().mockReturnValue(quests),
                } as any),
              } as any),
            } as any),
          } as any),
          count: jest.fn().mockReturnValue(quests.length),
        } as any);

        const result = await adventurersService.findAll({
          isAvailableNow: true,
        });

        expect(result).toEqual(adventurersAvailable);
      });
    });

    describe('adventurer has no quest', () => {
      it('should return this one as isAvailableNow directly', async () => {
        const adventurers = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 821.3513321148754,
          },
        ];

        const adventurersAvailable = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: true,
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: false,
            amount: 821.3513321148754,
          },
        ];

        const quests = [
          {
            _id: '61e17a4468b0dc460c0b2a6f',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e1',
              name: 'La quête de Dieu',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le prètre',
              bounty: 825,
              duration: 59705500,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e1',
                    name: 'Archer',
                    description:
                      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e2',
                    name: 'Babare',
                    description:
                      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: new Date(),
              status: 'Pending',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17a4468b0dc460c0b2a70',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e2',
              name: 'La quête de la Vérité',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le mage',
              bounty: 729,
              duration: 109273,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e5',
                    name: 'Arcaniste',
                    description:
                      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 2,
              dateDebut: '2022-01-03T00:00:00.000Z',
              status: 'Failed',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17f465f9d984dd14e4d1a',
            updatedAt: '2022-01-14T13:48:54.569Z',
            createdAt: '2022-01-14T13:48:54.569Z',
            groups: [],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e3',
              name: 'La quête fiévreuse',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le medecin',
              bounty: 101,
              duration: 509373,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 4,
              dateDebut: '2022-02-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1cbda3646aa2c5ea1ac80',
            updatedAt: '2022-01-14T19:15:38.416Z',
            createdAt: '2022-01-14T19:15:38.416Z',
            groups: [
              {
                _id: 'cabe64dcf0d4447fa60f5f17',
                name: 'Herman Johns',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e6',
                  name: 'Prêtre',
                  description:
                    'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 33,
                experience: 4,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e4',
              name: "A l'aube de la guéguerre",
              description:
                "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Madame la maire',
              bounty: 661,
              duration: 33694,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 3,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 5,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e8',
                    name: 'Forgeron',
                    description:
                      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 0,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e9',
                    name: 'Enchanteur',
                    description:
                      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-07T00:00:00.000Z',
              status: 'Unassigned',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1d1261f875d6aed61a817',
            updatedAt: '2022-01-14T19:38:14.893Z',
            createdAt: '2022-01-14T19:38:14.893Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e5',
              name: 'La quête de fifou',
              description:
                "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Merlin le sorceleur',
              bounty: 136,
              duration: 41726,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-04-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
        ];

        jest.spyOn(adventurernModel, 'find').mockReturnValueOnce({
          where: jest.spyOn(adventurernModel, 'where').mockReturnValueOnce({
            populate: jest
              .spyOn(adventurernModel, 'populate')
              .mockReturnValueOnce({
                lean: jest.fn().mockReturnValueOnce({
                  exec: jest.fn().mockResolvedValueOnce(adventurers),
                }),
              } as any),
          } as any),
        } as any);

        jest.spyOn(questModel, 'find').mockReturnValue({
          populate: jest.spyOn(questModel, 'populate').mockReturnValue({
            populate: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                skip: jest.fn().mockReturnValue({
                  exec: jest.fn().mockReturnValue(quests),
                } as any),
              } as any),
            } as any),
          } as any),
          count: jest.fn().mockReturnValue(quests.length),
        } as any);

        const result = await adventurersService.findAll({});

        expect(result).toEqual(adventurersAvailable);
      });
    });

    describe('otherwise', () => {
      it('should return all adventurers', async () => {
        const adventurers = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            amount: 821.3513321148754,
          },
        ];

        const adventurersAvailable = [
          {
            _id: '7cabe64dcf0d4447fa60f5e1',
            name: 'Nicholas Ruecker',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e5',
              name: 'Arcaniste',
              description:
                'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000573',
                  name: 'Amulette du Boufcoul',
                  price: 60,
                  type: 'equipment',
                  durability: 88,
                  daysInUse: 81,
                  repairTime: '4.1',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1118',
                  name: 'Guilde victorieuse',
                  price: 75,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa000659',
                  name: 'Anneau en Mousse',
                  price: 66,
                  type: 'equipment',
                  durability: 38,
                  daysInUse: 9,
                  repairTime: '6.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0235',
                  name: "Potion d'oubli Percepteur : Rocher",
                  price: 18,
                  type: 'consumable',
                  charges: 7,
                  usedCharges: 7,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001807',
                  name: 'Cape Nécrotique',
                  price: 26,
                  type: 'equipment',
                  durability: 89,
                  daysInUse: 45,
                  repairTime: '6.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001882',
                  name: 'Anneau Vae',
                  price: 86,
                  type: 'equipment',
                  durability: 45,
                  daysInUse: 94,
                  repairTime: '6.4',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 44,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: true,
            amount: 7227.891722610902,
          },
          {
            _id: '7cabe64dcf0d4447fa60f5e3',
            name: 'Kenneth Dicki',
            speciality: {
              _id: '5cabe64dcf0d4447fa60f5e4',
              name: 'Mage',
              description:
                'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
              requiredItems: [
                {
                  _id: '1bfbe64dcf0d4447fa000510',
                  name: 'Anneau Rigami',
                  price: 83,
                  type: 'equipment',
                  durability: 13,
                  daysInUse: 2,
                  repairTime: '9.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1010',
                  name: 'Balistique',
                  price: 7,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0911',
                  name: "Potion d'Amélioration de Drakopin",
                  price: 24,
                  type: 'consumable',
                  charges: 1,
                  usedCharges: 1,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0708',
                  name: 'Eau de la Fontaine de Noffoub',
                  price: 35,
                  type: 'consumable',
                  charges: 8,
                  usedCharges: 8,
                },
                {
                  _id: '1bfbe64dcf0d4447fa001227',
                  name: 'Amulette de Cantile',
                  price: 72,
                  type: 'equipment',
                  durability: 99,
                  daysInUse: 36,
                  repairTime: '2.0',
                },
                {
                  _id: '1bfbe64dcf0d4447fa001669',
                  name: 'Ceinture Ding Dong',
                  price: 57,
                  type: 'equipment',
                  durability: 98,
                  daysInUse: 51,
                  repairTime: '7.8',
                },
                {
                  _id: '5cabe64dcf0d4447fa6e0634',
                  name: 'Racines de Jean Gimbre',
                  price: 33,
                  type: 'consumable',
                  charges: 10,
                  usedCharges: 10,
                },
                {
                  _id: '5cabe64dcf0d4447fa6e1352',
                  name: 'Selfie',
                  price: 7,
                  type: 'consumable',
                  charges: 5,
                  usedCharges: 5,
                },
                {
                  _id: '1bfbe64dcf0d4447fa002103',
                  name: 'Amuronce',
                  price: 54,
                  type: 'equipment',
                  durability: 50,
                  daysInUse: 34,
                  repairTime: '4.6',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000987',
                  name: 'Ceinture de Tolot',
                  price: 24,
                  type: 'equipment',
                  durability: 90,
                  daysInUse: 7,
                  repairTime: '2.3',
                },
                {
                  _id: '1bfbe64dcf0d4447fa000139',
                  name: 'Amulette du Craqueleur',
                  price: 30,
                  type: 'equipment',
                  durability: 10,
                  daysInUse: 83,
                  repairTime: '9.2',
                },
              ],
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            pictureUrl:
              'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
            baseDailyRate: 5,
            experience: 110,
            createdAt: '2022-01-14T13:27:31.388Z',
            updatedAt: '2022-01-14T13:27:31.390Z',
            isAvailableNow: false,
            amount: 821.3513321148754,
          },
        ];

        const quests = [
          {
            _id: '61e17a4468b0dc460c0b2a6f',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e1',
              name: 'La quête de Dieu',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le prètre',
              bounty: 825,
              duration: 59705500,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e1',
                    name: 'Archer',
                    description:
                      "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e2',
                    name: 'Babare',
                    description:
                      'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: new Date(),
              status: 'Pending',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e3',
                name: 'Kenneth Dicki',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17a4468b0dc460c0b2a70',
            request: {
              _id: '9cabe64dcf0d4447fa60f5e2',
              name: 'La quête de la Vérité',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le mage',
              bounty: 729,
              duration: 109273,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 8,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e5',
                    name: 'Arcaniste',
                    description:
                      'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 2,
              dateDebut: '2022-01-03T00:00:00.000Z',
              status: 'Failed',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          {
            _id: '61e17f465f9d984dd14e4d1a',
            updatedAt: '2022-01-14T13:48:54.569Z',
            createdAt: '2022-01-14T13:48:54.569Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e1',
                name: 'Nicholas Ruecker',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e5',
                  name: 'Arcaniste',
                  description:
                    'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 44,
                experience: 110,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 7227.891722610902,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e3',
              name: 'La quête fiévreuse',
              description:
                'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Le medecin',
              bounty: 101,
              duration: 509373,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 1,
                },
              ],
              awardedExperience: 4,
              dateDebut: '2022-02-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1cbda3646aa2c5ea1ac80',
            updatedAt: '2022-01-14T19:15:38.416Z',
            createdAt: '2022-01-14T19:15:38.416Z',
            groups: [
              {
                _id: 'cabe64dcf0d4447fa60f5f17',
                name: 'Herman Johns',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e6',
                  name: 'Prêtre',
                  description:
                    'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 33,
                experience: 4,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
              {
                _id: '7cabe64dcf0d4447fa60f5e6',
                name: 'Billy Carroll',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e9',
                  name: 'Enchanteur',
                  description:
                    'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 2,
                experience: 8,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e4',
              name: "A l'aube de la guéguerre",
              description:
                "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Madame la maire',
              bounty: 661,
              duration: 33694,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e6',
                    name: 'Prêtre',
                    description:
                      'Les prêtres sont plus que capables de défendre l’honneur de leur dieu au combat, ce sont généralement des combattants vaillants et compétents. Ils sont aussi des protecteurs de la paix et de la justice.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 3,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e4',
                    name: 'Mage',
                    description:
                      'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 5,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e8',
                    name: 'Forgeron',
                    description:
                      'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 0,
                },
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e9',
                    name: 'Enchanteur',
                    description:
                      'Les enchanteurs excellent dans l’art de troubler et de déstabiliser leurs ennemis tout en encourageant leurs amis à toujours se dépasser. Ils savent manier à la fois les armes et la magie',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 4,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-10-07T00:00:00.000Z',
              status: 'Unassigned',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
          {
            _id: '61e1d1261f875d6aed61a817',
            updatedAt: '2022-01-14T19:38:14.893Z',
            createdAt: '2022-01-14T19:38:14.893Z',
            groups: [
              {
                _id: '7cabe64dcf0d4447fa60f5e4',
                name: 'Rhonda Bailey',
                speciality: {
                  _id: '5cabe64dcf0d4447fa60f5e8',
                  name: 'Forgeron',
                  description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                  createdAt: '2022-01-14T13:27:31.390Z',
                  updatedAt: '2022-01-14T13:27:31.392Z',
                },
                pictureUrl:
                  'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                baseDailyRate: 93,
                experience: 107,
                createdAt: '2022-01-14T13:27:31.388Z',
                updatedAt: '2022-01-14T13:27:31.390Z',
                amount: 15087.880060452298,
              },
            ],
            request: {
              _id: '9cabe64dcf0d4447fa60f5e5',
              name: 'La quête de fifou',
              description:
                "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
              pictureUrl:
                'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
              questGiver: 'Merlin le sorceleur',
              bounty: 136,
              duration: 41726,
              requiredProfiles: [
                {
                  speciality: {
                    _id: '5cabe64dcf0d4447fa60f5e3',
                    name: 'Paladin',
                    description:
                      'Les paladins sont des champions sacrés de la loi et du bien, mais certains se dévouent à des causes particulières avec un zèle exceptionnel. Ils jurent solennellement de résoudre des problèmes spécifiques ou de mourir en essayant.',
                    createdAt: '2022-01-14T13:27:31.390Z',
                    updatedAt: '2022-01-14T13:27:31.392Z',
                  },
                  experience: 7,
                },
              ],
              awardedExperience: 0,
              dateDebut: '2022-04-01T00:00:00.000Z',
              status: 'Accepted',
              createdAt: '2022-01-14T13:27:31.390Z',
              updatedAt: '2022-01-14T13:27:31.392Z',
            },
            __v: 0,
          },
        ];

        jest.spyOn(adventurernModel, 'find').mockReturnValueOnce({
          where: jest.spyOn(adventurernModel, 'where').mockReturnValueOnce({
            populate: jest
              .spyOn(adventurernModel, 'populate')
              .mockReturnValueOnce({
                lean: jest.fn().mockReturnValueOnce({
                  exec: jest.fn().mockResolvedValueOnce(adventurers),
                }),
              } as any),
          } as any),
        } as any);

        jest.spyOn(questModel, 'find').mockReturnValue({
          populate: jest.spyOn(questModel, 'populate').mockReturnValue({
            populate: jest.fn().mockReturnValue({
              limit: jest.fn().mockReturnValue({
                skip: jest.fn().mockReturnValue({
                  exec: jest.fn().mockReturnValue(quests),
                } as any),
              } as any),
            } as any),
          } as any),
          count: jest.fn().mockReturnValue(quests.length),
        } as any);

        const result = await adventurersService.findAll({});

        expect(result).toEqual(adventurersAvailable);
      });
    });
  });

  describe('findOne', () => {
    describe('when adventurer id exist', () => {
      it('should return an adventurer', () => {
        const adventurer = {
          _id: '7cabe64dcf0d4447fa60f5e1',
          name: 'Nicholas Ruecker',
          speciality: {
            _id: '5cabe64dcf0d4447fa60f5e5',
            name: 'Arcaniste',
            description:
              'Les arcanistes étudient toutes les magies. Ils sont toujours à l’affût de nouvelles formes de magie, pour comprendre comment elles fonctionnent et, dans bien des cas, pour puiser dans leurs énergies afin de satisfaire leurs besoins.',
            requiredItems: [
              {
                _id: '1bfbe64dcf0d4447fa001882',
                name: 'Anneau Vae',
                price: 86,
                type: 'equipment',
                durability: 45,
                daysInUse: 94,
                repairTime: '6.4',
              },
            ],
            createdAt: '2022-01-14T13:27:31.390Z',
            updatedAt: '2022-01-14T13:27:31.392Z',
          },
          pictureUrl:
            'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
          baseDailyRate: 44,
          experience: 110,
          createdAt: '2022-01-14T13:27:31.388Z',
          updatedAt: '2022-01-14T13:27:31.390Z',
          amount: 7227.891722610902,
          isAvailableNow: true,
        };

        jest.spyOn(adventurernModel, 'findById').mockReturnValueOnce({
          populate: jest
            .spyOn(adventurernModel, 'populate')
            .mockReturnValueOnce({
              exec: jest.fn().mockResolvedValueOnce(adventurer),
            } as any),
        } as any);

        expect(
          adventurersService.findOne('7cabe64dcf0d4447fa60f5e1'),
        ).resolves.toEqual(adventurer);
      });
    });

    describe('when adventurer id does not exist', () => {
      it('should return an adventurer', async () => {
        jest.spyOn(adventurernModel, 'findById').mockReturnValueOnce({
          populate: jest
            .spyOn(adventurernModel, 'populate')
            .mockReturnValueOnce({
              exec: jest.fn().mockResolvedValueOnce(null),
            } as any),
        } as any);

        try {
          await adventurersService.findOne('7cabe64dcf0d4447fa60f5e1');
        } catch (error) {
          expect(error.message).toEqual(
            `Adventurer #7cabe64dcf0d4447fa60f5e1 not found`,
          );
        }
      });
    });
  });

  describe('create', () => {
    describe('when adventurer is valid', () => {
      it('should return a new adventurer', async () => {
        const adventurer = {
          name: 'Batman',
          speciality: 'af4c245e1d8a4f8a9d7e8c7f',
          experience: 23.08,
          baseDailyRate: 1.2,
          pictureURL:
            'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
        };

        jest.spyOn(adventurernModel, 'create').mockReturnValueOnce({
          save: jest.fn().mockResolvedValueOnce(adventurer),
        } as any);

        expect(adventurersService.create(adventurer)).resolves.toEqual(
          adventurer,
        );
      });
    });
  });

  describe('updateExp', () => {
    it('should update the adventurer exp', async () => {
      const updateExp = {
        experience: 20,
      };

      const adventurer = {
        _id: '7cabe64dcf0d4447fa60f5e1',
        name: 'Batman',
        speciality: 'af4c245e1d8a4f8a9d7e8c7f',
        experience: 23.08,
        baseDailyRate: 1.2,
        pictureURL:
          'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
      };

      const adventurerUpdated = {
        ...adventurer,
        experience: adventurer.experience + updateExp.experience,
      };

      jest
        .spyOn(adventurernModel, 'findByIdAndUpdate')
        .mockResolvedValueOnce(adventurerUpdated as any);

      expect(
        adventurersService.updateExp('7cabe64dcf0d4447fa60f5e1', updateExp),
      ).resolves.toEqual(adventurerUpdated);
    });
  });

  describe('getAllSpecialities', () => {
    it('should return an array of adventurer speciality', () => {
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

      jest.spyOn(specialityModel, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(specialities),
      } as any);

      expect(adventurersService.getAllSpecialities()).resolves.toEqual(
        specialities,
      );
    });
  });
});
