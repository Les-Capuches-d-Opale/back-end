const mongoose = require('mongoose');

const requests = [
    {
    name: "La quête de Dieu",
    description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
    questGiver: "Le prètre",
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [{
        _id: "5cabe64dcf0d4447fa60f5e5",
        experience: Math.floor(Math.random() * 10)
    }, {
        _id: "5cabe64dcf0d4447fa60f5e1",
        experience: Math.floor(Math.random() * 10)
    }, {
        _id: "5cabe64dcf0d4447fa60f5e4",
        experience: Math.floor(Math.random() * 10)
    }],
    awardedExperience: Math.floor(Math.random() * 10),
    dateDebut: "2022-10-01"
},
{
    name: "La quête de la Vérité",
    description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
    questGiver: "Le mage",
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [{
        _id: "5cabe64dcf0d4447fa60f5e9",
        experience: Math.floor(Math.random() * 10)
    }, {
        _id: "5cabe64dcf0d4447fa60f5e8",
        experience: Math.floor(Math.random() * 10)
    }],
    awardedExperience: Math.floor(Math.random() * 10),
    dateDebut: "2022-11-03"
},
{
    name: "La quête fiévreuse",
    description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
    questGiver: "Le medecin",
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [{
        _id: "5cabe64dcf0d4447fa60f5e2",
        experience: Math.floor(Math.random() * 10)
    }],
    awardedExperience: Math.floor(Math.random() * 10),
    dateDebut: "2022-20-01"
}]

export = requests.map((request) => {
    return {
        name: request.name,
        description: request.description,
        pictureUrl: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
        questGiver: request.questGiver,
        bounty: request.bounty,
        duration: request.bounty,
        requiredProfiles: request.requiredProfiles,
        awardedExperience: request.awardedExperience,
        dateDebut: request.dateDebut,
        status: "Unassigned"
    };
});
