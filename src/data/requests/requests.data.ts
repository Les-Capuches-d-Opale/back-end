const mongoose = require('mongoose');
const items = require('../items/item.data');

const randomItems = (items) => {
  return items
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 8 + 4));
};

const requests = [
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e1'),
    name: 'La quête de Dieu',
    description:
      'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
    questGiver: 'Le prètre',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e2'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10),
    duration: Math.floor(Math.random() * 1000000),
    dateDebut: '2022-10-01',
    status: 'Pending',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e2'),
    name: 'La quête de la Vérité',
    description:
      'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
    questGiver: 'Le mage',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e4'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10),
    duration: Math.floor(Math.random() * 1000000),
    dateDebut: '2022-11-03',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e3'),
    name: 'La quête fiévreuse',
    description:
      'Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux',
    questGiver: 'Le medecin',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10),
    duration: Math.floor(Math.random() * 1000000),
    dateDebut: '2022-02-01',
    status: 'Unassigned',
  },
];

export = requests.map((request) => {
  return {
    _id: request._id,
    name: request.name,
    description: request.description,
    pictureUrl:
      'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
    questGiver: request.questGiver,
    bounty: request.bounty,
    duration: request.duration,
    requiredProfiles: request.requiredProfiles,
    awardedExperience: request.awardedExperience,
    dateDebut: request.dateDebut,
    status: request.status,
  };
});
