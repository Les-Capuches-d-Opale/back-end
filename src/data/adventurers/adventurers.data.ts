const mongoose = require('mongoose');
var faker = require('faker');

const adventurers = [
    {
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e5",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    },
    {
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e3",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    },
    {
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e4",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    },
    {
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e2",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    },
    {
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e7",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    }
    ,{
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e9",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    }
    ,{
        name: faker.name.findName(),
        speciality: "5cabe64dcf0d4447fa60f5e1",
        baseDailyRate: Math.floor(Math.random() * 100),
        experience: Math.floor(Math.random() * 10),
    }
]


export = adventurers.map((adventurer) => {
    return {
        name: adventurer.name,
        speciality: adventurer.speciality,
        pictureUrl: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
        baseDailyRate: adventurer.baseDailyRate,
        experience: adventurer.experience,
    };
});