const mongoose = require('mongoose');
const items = require('../items/item.data');

const randomItems = (items) => {
    return items
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 8 + 4));
};

const requests = [
    {
        name: "La quête de Dieu",
        description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
        questGiver: "Le prètre",
        bounty: Math.floor(Math.random() * 1000),
        requiredProfiles: [{
            speciality: {
                name: 'Archer',
                description:
                    "L'archer se consacre à la maîtrise de l'arc. Des années d'entraînement ont perfectionné ses compétences, il s'est affûté jour après jour sur des cibles, à la chasse ou à la guerre, faisant pleuvoir la mort sur les lignes ennemies.",
                requiredItems: randomItems(items)
            },
            experience: Math.floor(Math.random() * 10)
        }, {
            speciality: {
                name: 'Babare',
                description:
                    'Certains barbares sont véritablement sauvages et n’ont presque aucune connaissance des armes modernes. Ils apprennent à éviter les coups et à endurcir leur peau.',
                requiredItems: randomItems(items),
            },
            experience: Math.floor(Math.random() * 10)
        }, {
            speciality: {
                name: 'Mage',
                description:
                    'Ayant été initié à de sombres mystères, le mage a suivi une formation qui lui permet de manipuler le pouvoir des ombres pour renforcer ses incantations.',
                requiredItems: randomItems(items),
            },
            experience: Math.floor(Math.random() * 10)
        }],
        awardedExperience: Math.floor(Math.random() * 10),
        duration: Math.floor(Math.random() * 1000000),
        dateDebut: "2022-10-01"
    },
    {
        name: "La quête de la Vérité",
        description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
        questGiver: "Le mage",
        bounty: Math.floor(Math.random() * 1000),
        requiredProfiles: [{
            speciality: {
                name: 'Forgeron',
                description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                requiredItems: randomItems(items),
            },
            experience: Math.floor(Math.random() * 10)
        }, {
            speciality: {
                name: 'messagers',
                description: "C'est juste un gars de La Poste.",
                requiredItems: randomItems(items),
            },
            experience: Math.floor(Math.random() * 10)
        }],
        awardedExperience: Math.floor(Math.random() * 10),
        duration: Math.floor(Math.random() * 1000000),
        dateDebut: "2022-11-03"
    },
    {
        name: "La quête fiévreuse",
        description: "Essayant si tu peux Dérober quelques fleurs au beau jardin des cieux",
        questGiver: "Le medecin",
        bounty: Math.floor(Math.random() * 1000),
        requiredProfiles: [{
            speciality: {
                name: 'Forgeron',
                description:
                    'Armuriers extrêmement talentueux, les prêtres forgerons tirent leur inspiration de leur divinité pour produire les armes et les armures les plus parfaites possible et améliorer l’équipement utilisé par les armées de fidèles.',
                requiredItems: randomItems(items),
            },
            experience: Math.floor(Math.random() * 10)
        }],
        awardedExperience: Math.floor(Math.random() * 10),
        duration: Math.floor(Math.random() * 1000000),
        dateDebut: "2022-20-01"
    }]

export = requests.map((request) => {
    return {
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
        status: 'Unassigned',
    };
});
