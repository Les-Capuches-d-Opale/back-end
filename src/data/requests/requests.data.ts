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
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-10-01',
    dateFin: '2022-10-04',
    status: 'Accepted',
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
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e4'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-01-03',
    dateFin: '2022-10-04',
    status: 'Pending',
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
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-02-01',
    dateFin: '2022-02-04',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e4'),
    name: "A l'aube de la guéguerre",
    description:
      "Les gens meurent et sont méchants ! Trouvez un endroit pour mettre à l'abri les femmes et les enfants.",
    questGiver: 'Madame la maire',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e4'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e9'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10),
    dateDebut: '2022-10-07',
    dateFin: '2022-10-15',
    status: 'Accepted',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e5'),
    name: 'La quête de fifou',
    description:
      "A la recherche des joyaux de la couronne de la reine d'Angleterre qui a aussi perdu son corgi préféré, cette petite race de chien si mignon et court sur pattes. Trouves-les sinon je te défonce !",
    questGiver: 'Merlin le sorceleur',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-04-22',
    dateFin: '2022-04-27',
    status: 'Unassigned',
  },

  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e6'),
    name: 'Amnésie',
    description:
      'Un ou plusieurs PJ se réveillent sans souvenir récents, et se retrouvent au cœur d’un problème qu’ils ne comprennent pas. Ils doivent trouver la cause de cette amnésie et entre-temps résoudre les problèmes qu’ils découvrent.',
    questGiver: 'Damso',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-02-24',
    dateFin: '2022-03-02',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e7'),
    name: 'Base secrète',
    description:
      'Les PJ, au cours d’un voyage ou d’une exploration, tombent sur un nid de Méchants qui préparent un Truc Méchant. Soit ils trouvent un moyen de rapporter l’information aux Gentils, soit ils s’infiltrent et neutralisent la base eux-mêmes, ou encore une combinaison des deux.',
    questGiver: 'James Bond',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },

      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
        experience: Math.floor(Math.random() * 10),
      },

      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-01-27',
    dateFin: '2022-01-30',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e8'),
    name: 'Capture du drapeau',
    description:
      'Les PJ ont pour mission de s’emparer d’un objectif militaire pour les Gentils. Les Méchants du coin s’y opposent. Le scénario tactique habituel.',
    questGiver: 'Captaine Flame',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-02-10',
    dateFin: '2022-02-14',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e9'),
    name: 'Souvenir éternel',
    description:
      "Voler / Acheter journal de Lorie à l'antiquaire affable de Noblecour",
    questGiver: 'Jeune homme mélancolique',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e7'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-03-03',
    dateFin: '2022-03-04',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('cabe64dcf0d4447fa60f5e10'),
    name: 'Mauvaises graines',
    description: 'Voler / Acheter du fumier à un homme du village	',
    questGiver: 'Fermier aimable',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-02-10',
    dateFin: '2022-02-13',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('cabe64dcf0d4447fa60f5e11'),
    name: 'Kaia, la mère des dragons',
    description:
      'Scruter / Questionner un fermier sur le Gué Ouest de Ruisseclair puis trouver un oeuf géant dans la zone',
    questGiver: 'Jeune fille cherchant un oeuf',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e2'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-02-24',
    dateFin: '2022-02-31',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('cabe64dcf0d4447fa60f5e12'),
    name: 'Le code des bandits',
    description:
      "Guider / Séduire un jeune homme dans la taverne d'Ombrelle OU : Scruter / Questionner la Matrone de l'orphelinat à Vainc-Perchis",
    questGiver: 'Brigand vétéran',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-04-22',
    dateFin: '2022-04-27',
    status: 'Unassigned',
  },
  {
    _id: new mongoose.Types.ObjectId('cabe64dcf0d4447fa60f5e13'),
    name: 'A travers les bois	',
    description:
      "Séduire avec Primrose et la conduire à l'homme en vert dans la partie haute de Graben",
    questGiver: 'Dame raffinée',
    bounty: Math.floor(Math.random() * 1000),
    requiredProfiles: [
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e2'),
        experience: Math.floor(Math.random() * 10),
      },
      {
        speciality: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
        experience: Math.floor(Math.random() * 10),
      },
    ],
    awardedExperience: Math.floor(Math.random() * 10) + 1,
    dateDebut: '2022-04-19',
    dateFin: '2022-04-20',
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
    dateFin: new Date(request.dateFin),
    requiredProfiles: request.requiredProfiles,
    awardedExperience: request.awardedExperience,
    dateDebut: new Date(request.dateDebut),
    status: request.status,
  };
});
