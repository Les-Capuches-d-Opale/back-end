const mongoose = require('mongoose');
const faker = require('faker');

const adventurers = [
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e1'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e5',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e2'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e3',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e3'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e4',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e4'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e8',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e5'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e7',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e6'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e9',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e7'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5f1',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: Math.floor(Math.random() * 10),
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e4',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: 8.6,
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e9'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e4',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: 14.1,
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5f0'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e5',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: 5.61,
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5f1'),
    name: faker.name.findName(),
    speciality: '5cabe64dcf0d4447fa60f5e5',
    baseDailyRate: Math.floor(Math.random() * 100),
    experience: 7.43,
  },
];

export = adventurers.map((adventurer) => {
  return {
    _id: adventurer._id,
    name: adventurer.name,
    speciality: adventurer.speciality,
    pictureUrl:
      'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
    baseDailyRate: adventurer.baseDailyRate,
    experience: adventurer.experience,
  };
});
