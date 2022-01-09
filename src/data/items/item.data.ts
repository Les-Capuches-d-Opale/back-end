const mongoose = require('mongoose');

const consumables = [
  {
    id: 0,
    name: 'Pomme',
  },
  {
    id: 1,
    name: 'Potion de Soin supérieure',
  },
  {
    id: 2,
    name: 'Potion de Soin',
  },
  {
    id: 3,
    name: "Bière d'Amakna",
  },
  {
    id: 4,
    name: "Pain d'Incarnam",
  },
  {
    id: 5,
    name: 'Borodinski',
  },
  {
    id: 6,
    name: 'Michette',
  },
  {
    id: 7,
    name: 'Biscotte',
  },
  {
    id: 8,
    name: 'Fougasse',
  },
  {
    id: 9,
    name: 'Pain aux Céréales',
  },
  {
    id: 10,
    name: 'Mantou',
  },
  {
    id: 11,
    name: 'Carasau',
  },
  {
    id: 12,
    name: "Pain aux Flocons d'Avoine",
  },
  {
    id: 13,
    name: 'Pain de Seigle',
  },
  {
    id: 14,
    name: 'Potion de Rappel',
  },
  {
    id: 15,
    name: 'Potion Ghetto Raide',
  },
  {
    id: 16,
    name: "Parchemin d'Ivoire",
  },
  {
    id: 17,
    name: 'Parchemin Blanc',
  },
  {
    id: 18,
    name: 'Parchemin Doré',
  },
  {
    id: 19,
    name: 'Petit Parchemin de Force',
  },
  {
    id: 20,
    name: 'Parchemin de Kolizétons',
  },
  {
    id: 21,
    name: "Petit Parchemin d'Intelligence",
  },
  {
    id: 22,
    name: 'Pain Consistant',
  },
  {
    id: 23,
    name: 'Parchemin de Bûcheron',
  },
  {
    id: 24,
    name: 'Parchemin de Forgeron',
  },
  {
    id: 25,
    name: 'Parchemin de Forgeur de dagues',
  },
  {
    id: 26,
    name: 'Parchemin de Sculpteur',
  },
  {
    id: 27,
    name: 'Parchemin de Sculpteur de bâtons',
  },
  {
    id: 28,
    name: 'Parchemin de Sculpteur de baguettes',
  },
  {
    id: 29,
    name: 'Parchemin de Sort Flamiche',
  },
  {
    id: 30,
    name: 'Parchemin de Sort Libération',
  },
  {
    id: 31,
    name: 'Parchemin de Sort Foudroiement',
  },
  {
    id: 32,
    name: "Parchemin de Sort Invocation d'Arakne",
  },
  {
    id: 33,
    name: 'Brioche Dorée',
  },
  {
    id: 34,
    name: 'Pain au curry sans curry',
  },
  {
    id: 35,
    name: 'Parchemin de Force',
  },
  {
    id: 36,
    name: 'Grand Parchemin de Force',
  },
  {
    id: 37,
    name: 'Puissant Parchemin de Force',
  },
  {
    id: 38,
    name: "Petit Parchemin d'Agilité",
  },
  {
    id: 39,
    name: "Parchemin d'Agilité",
  },
  {
    id: 40,
    name: "Grand Parchemin d'Agilité",
  },
  {
    id: 41,
    name: "Puissant Parchemin d'Agilité",
  },
  {
    id: 42,
    name: 'Petit Parchemin de Sagesse',
  },
  {
    id: 43,
    name: 'Parchemin de Sagesse',
  },
  {
    id: 44,
    name: 'Grand Parchemin de Sagesse',
  },
  {
    id: 45,
    name: 'Puissant Parchemin de Sagesse',
  },
  {
    id: 46,
    name: 'Petit Parchemin de Vitalité',
  },
  {
    id: 47,
    name: 'Parchemin de Vitalité',
  },
  {
    id: 48,
    name: 'Grand Parchemin de Vitalité',
  },
  {
    id: 49,
    name: 'Petit Parchemin de Chance',
  },
  {
    id: 50,
    name: 'Puissant Parchemin de Vitalité',
  },
  {
    id: 51,
    name: 'Parchemin de Chance',
  },
  {
    id: 52,
    name: 'Grand Parchemin de Chance',
  },
  {
    id: 53,
    name: 'Puissant Parchemin de Chance',
  },
  {
    id: 54,
    name: "Parchemin d'Intelligence",
  },
  {
    id: 55,
    name: "Grand Parchemin d'Intelligence",
  },
  {
    id: 56,
    name: "Puissant Parchemin d'Intelligence",
  },
  {
    id: 57,
    name: 'Clé en Roche de Ded Aléïcar',
  },
  {
    id: 58,
    name: 'Parchemin de Boulanger',
  },
  {
    id: 59,
    name: 'Parchemin de Cordonnier',
  },
  {
    id: 60,
    name: 'Shigekax Citron',
  },
  {
    id: 61,
    name: 'Shigekax Fraise',
  },
  {
    id: 62,
    name: 'Shigekax Menthe',
  },
  {
    id: 63,
    name: 'Shigekax Cerise',
  },
  {
    id: 64,
    name: 'Vertgely',
  },
  {
    id: 65,
    name: 'Rougely',
  },
  {
    id: 66,
    name: 'Blugely',
  },
  {
    id: 67,
    name: 'Multygely',
  },
  {
    id: 68,
    name: 'Potion de Mini Soin',
  },
  {
    id: 69,
    name: 'Potion de Mini Soin Supérieure',
  },
  {
    id: 70,
    name: 'Potion Eau de fée',
  },
  {
    id: 71,
    name: 'Sang de Likrone',
  },
  {
    id: 72,
    name: 'Rune de Transport',
  },
  {
    id: 73,
    name: 'Lâcher les gaz',
  },
  {
    id: 74,
    name: 'Potion Dantegoulesque',
  },
  {
    id: 75,
    name: 'Potion Pahoa Raide',
  },
  {
    id: 76,
    name: 'Potion Raide Boule',
  },
  {
    id: 77,
    name: 'Pain des Champs',
  },
  {
    id: 78,
    name: 'Pain des Villes',
  },
  {
    id: 79,
    name: 'Poisson Pané Frit',
  },
  {
    id: 80,
    name: 'Poisson Igloo Frit',
  },
  {
    id: 81,
    name: 'Bâton de Crabe',
  },
  {
    id: 82,
    name: 'Bâton de Crabe Exotique',
  },
  {
    id: 83,
    name: 'Poisson-Chaton Fumé',
  },
  {
    id: 84,
    name: 'Poisson-Tigre Fumé',
  },
  {
    id: 85,
    name: 'Bar Grillé',
  },
  {
    id: 86,
    name: 'Beignet de Greuvette',
  },
  {
    id: 87,
    name: 'Goujon en Tranche',
  },
  {
    id: 88,
    name: 'Aile de Raie',
  },
  {
    id: 89,
    name: 'Carpette Vapeur',
  },
  {
    id: 90,
    name: 'Carpe Vapeur',
  },
  {
    id: 91,
    name: 'Kralamoure Grillé',
  },
  {
    id: 92,
    name: 'Perche Sautée',
  },
  {
    id: 93,
    name: 'Chaton-Perche Sauté',
  },
  {
    id: 94,
    name: "Sardine à l'Étouffée",
  },
  {
    id: 95,
    name: "Sardine à l'huile ***",
  },
  {
    id: 96,
    name: "Sardine Sombre à l'Étouffée",
  },
  {
    id: 97,
    name: 'Bar Iton Grillé',
  },
  {
    id: 98,
    name: 'Beignet de Greuvette Horreur',
  },
  {
    id: 99,
    name: 'Goujon Kiye en Tranche',
  },
  {
    id: 100,
    name: 'Aile de Raie de Farle',
  },
  {
    id: 101,
    name: 'Truite Flambée',
  },
  {
    id: 102,
    name: 'Truite Ancestrale Flambée',
  },
  {
    id: 103,
    name: 'Brochet Farci',
  },
  {
    id: 104,
    name: 'Brochet Tupe-Halett Farci',
  },
  {
    id: 105,
    name: 'Aileron de Requin',
  },
  {
    id: 106,
    name: 'Aileron de Requin Marché-Libre',
  },
  {
    id: 107,
    name: 'Kralamoure Unique Grillé',
  },
  {
    id: 108,
    name: 'Bière du Feubuk',
  },
  {
    id: 109,
    name: 'Pain Doré',
  },
  {
    id: 110,
    name: 'Briochette',
  },
  {
    id: 111,
    name: 'Briochette magique',
  },
  {
    id: 112,
    name: 'Pain Gouin',
  },
  {
    id: 113,
    name: 'Pain de Seigle Résistant',
  },
  {
    id: 114,
    name: "Sucre d'Orge",
  },
  {
    id: 115,
    name: "Pain aux Flocons d'Avoine Aurifère",
  },
  {
    id: 116,
    name: 'Bière du Chabrulé',
  },
  {
    id: 117,
    name: 'Bière de la Tabasse',
  },
  {
    id: 118,
    name: 'Bière du Alakarte',
  },
  {
    id: 119,
    name: 'Bière de la Bagrutte',
  },
  {
    id: 120,
    name: 'Bière de la Chopenbois',
  },
  {
    id: 121,
    name: 'Bière du Pinchaut',
  },
  {
    id: 122,
    name: 'Bière du Ferayeur',
  },
  {
    id: 123,
    name: 'Blopisier empoisonné',
  },
  {
    id: 124,
    name: "Petite Fée d'Artifice Rouge",
  },
  {
    id: 125,
    name: 'Bonbon de Consolation',
  },
  {
    id: 126,
    name: 'Bonbon Rouge Surpuissant',
  },
  {
    id: 127,
    name: 'Pain du Pinchaut',
  },
  {
    id: 128,
    name: 'Potion de Foyer',
  },
  {
    id: 129,
    name: 'Pain Gre',
  },
  {
    id: 130,
    name: 'Pain Tahde',
  },
  {
    id: 131,
    name: "Fée d'Artifice Rouge",
  },
  {
    id: 132,
    name: "Grande Fée d'Artifice Rouge",
  },
  {
    id: 133,
    name: "Petite Fée d'Artifice Rouge Tournoyante",
  },
  {
    id: 134,
    name: "Fée d'Artifice Rouge Tournoyante",
  },
  {
    id: 135,
    name: "Grande Fée d'Artifice Rouge Tournoyante",
  },
  {
    id: 136,
    name: "Petite Fée d'Artifice Rouge Fontaine",
  },
  {
    id: 137,
    name: "Fée d'Artifice Rouge Fontaine",
  },
  {
    id: 138,
    name: "Grande Fée d'Artifice Rouge Fontaine",
  },
  {
    id: 139,
    name: "Petite Fée d'Artifice Rouge Crépitante",
  },
  {
    id: 140,
    name: "Fée d'Artifice Rouge Crépitante",
  },
  {
    id: 141,
    name: "Grande Fée d'Artifice Rouge Crépitante",
  },
  {
    id: 142,
    name: "Petite Fée d'Artifice Rouge Virevoltante",
  },
  {
    id: 143,
    name: "Fée d'Artifice Rouge Virevoltante",
  },
  {
    id: 144,
    name: "Grande Fée d'Artifice Rouge Virevoltante",
  },
  {
    id: 145,
    name: "Petite Fée d'Artifice Verte",
  },
  {
    id: 146,
    name: "Fée d'Artifice Verte",
  },
  {
    id: 147,
    name: "Grande Fée d'Artifice Verte",
  },
  {
    id: 148,
    name: "Petite Fée d'Artifice Verte Tournoyante",
  },
  {
    id: 149,
    name: "Fée d'Artifice Verte Tournoyante",
  },
  {
    id: 150,
    name: "Grande Fée d'Artifice Verte Tournoyante",
  },
  {
    id: 151,
    name: "Petite Fée d'Artifice Verte Fontaine",
  },
  {
    id: 152,
    name: "Fée d'Artifice Verte Fontaine",
  },
  {
    id: 153,
    name: "Grande Fée d'Artifice Verte Fontaine",
  },
  {
    id: 154,
    name: "Petite Fée d'Artifice Verte Crépitante",
  },
  {
    id: 155,
    name: "Fée d'Artifice Verte Crépitante",
  },
  {
    id: 156,
    name: "Grande Fée d'Artifice Verte Crépitante",
  },
  {
    id: 157,
    name: "Petite Fée d'Artifice Verte Virevoltante",
  },
  {
    id: 158,
    name: "Fée d'Artifice Verte Virevoltante",
  },
  {
    id: 159,
    name: "Grande Fée d'Artifice Verte Virevoltante",
  },
  {
    id: 160,
    name: "Petite Fée d'Artifice Bleue",
  },
  {
    id: 161,
    name: "Fée d'Artifice Bleue",
  },
  {
    id: 162,
    name: "Grande Fée d'Artifice Bleue",
  },
  {
    id: 163,
    name: "Petite Fée d'Artifice Bleue Tournoyante",
  },
  {
    id: 164,
    name: "Fée d'Artifice Bleue Tournoyante",
  },
  {
    id: 165,
    name: "Grande Fée d'Artifice Bleue Tournoyante",
  },
  {
    id: 166,
    name: "Petite Fée d'Artifice Bleue Fontaine",
  },
  {
    id: 167,
    name: "Fée d'Artifice Bleue Fontaine",
  },
  {
    id: 168,
    name: "Grande Fée d'Artifice Bleue Fontaine",
  },
  {
    id: 169,
    name: "Petite Fée d'Artifice Bleue Crépitante",
  },
  {
    id: 170,
    name: "Fée d'Artifice Bleue Crépitante",
  },
  {
    id: 171,
    name: "Grande Fée d'Artifice Bleue Crépitante",
  },
  {
    id: 172,
    name: "Petite Fée d'Artifice Bleue Virevoltante",
  },
  {
    id: 173,
    name: "Fée d'Artifice Bleue Virevoltante",
  },
  {
    id: 174,
    name: "Grande Fée d'Artifice Bleue Virevoltante",
  },
  {
    id: 175,
    name: "Petite Fée d'Artifice Jaune",
  },
  {
    id: 176,
    name: "Fée d'Artifice Jaune",
  },
  {
    id: 177,
    name: "Grande Fée d'Artifice Jaune",
  },
  {
    id: 178,
    name: "Petite Fée d'Artifice Jaune Tournoyante",
  },
  {
    id: 179,
    name: "Fée d'Artifice Jaune Tournoyante",
  },
  {
    id: 180,
    name: "Grande Fée d'Artifice Jaune Tournoyante",
  },
  {
    id: 181,
    name: "Petite Fée d'Artifice Jaune Fontaine",
  },
  {
    id: 182,
    name: "Fée d'Artifice Jaune Fontaine",
  },
  {
    id: 183,
    name: "Grande Fée d'Artifice Jaune Fontaine",
  },
  {
    id: 184,
    name: "Petite Fée d'Artifice Jaune Crépitante",
  },
  {
    id: 185,
    name: "Fée d'Artifice Jaune Crépitante",
  },
  {
    id: 186,
    name: "Grande Fée d'Artifice Jaune Crépitante",
  },
  {
    id: 187,
    name: "Petite Fée d'Artifice Jaune Virevoltante",
  },
  {
    id: 188,
    name: "Fée d'Artifice Jaune Virevoltante",
  },
  {
    id: 189,
    name: "Grande Fée d'Artifice Jaune Virevoltante",
  },
  {
    id: 190,
    name: "Grande Fée d'Artifice Invocatrice de Tofu",
  },
  {
    id: 191,
    name: "Petite Fée d'Artifice Multicolore",
  },
  {
    id: 192,
    name: "Fée d'Artifice Multicolore",
  },
  {
    id: 193,
    name: "Grande Fée d'Artifice Multicolore",
  },
  {
    id: 194,
    name: "Petite Fée d'Artifice Multicolore Tournoyante",
  },
  {
    id: 195,
    name: "Fée d'Artifice Multicolore Tournoyante",
  },
  {
    id: 196,
    name: "Grande Fée d'Artifice Multicolore Tournoyante",
  },
  {
    id: 197,
    name: "Petite Fée d'Artifice Multicolore Fontaine",
  },
  {
    id: 198,
    name: "Fée d'Artifice Multicolore Fontaine",
  },
  {
    id: 199,
    name: "Grande Fée d'Artifice Multicolore Fontaine",
  },
  {
    id: 200,
    name: "Petite Fée d'Artifice Multicolore Crépitante",
  },
  {
    id: 201,
    name: "Fée d'Artifice Multicolore Crépitante",
  },
  {
    id: 202,
    name: "Grande Fée d'Artifice Multicolore Crépitante",
  },
  {
    id: 203,
    name: "Petite Fée d'Artifice Multicolore Virevoltante",
  },
  {
    id: 204,
    name: "Fée d'Artifice Multicolore Virevoltante",
  },
  {
    id: 205,
    name: "Grande Fée d'Artifice Multicolore Virevoltante",
  },
  {
    id: 206,
    name: 'Booden glace',
  },
  {
    id: 207,
    name: 'Cône Wayal',
  },
  {
    id: 208,
    name: 'Glace Bontarienne',
  },
  {
    id: 209,
    name: 'Magma Brâkmarien',
  },
  {
    id: 210,
    name: 'Sucette Tofu',
  },
  {
    id: 211,
    name: 'Sucette Trool',
  },
  {
    id: 212,
    name: 'Hot Dog de Tofu',
  },
  {
    id: 213,
    name: 'Burger de Trool',
  },
  {
    id: 214,
    name: 'Frites de Tournesol Sauvage',
  },
  {
    id: 215,
    name: 'Lailait',
  },
  {
    id: 216,
    name: "Bière d'Astrub",
  },
  {
    id: 217,
    name: 'Boules du Minotoboule',
  },
  {
    id: 218,
    name: 'Potion de cité : Brâkmar',
  },
  {
    id: 219,
    name: 'Potion de cité : Bonta',
  },
  {
    id: 220,
    name: 'Une fiole de Pandaburg',
  },
  {
    id: 221,
    name: 'Une fiole de Pandapiler',
  },
  {
    id: 222,
    name: 'Une fiole de Pandapils',
  },
  {
    id: 223,
    name: 'Une fiole de Pandneken',
  },
  {
    id: 224,
    name: 'Panda au chocolat',
  },
  {
    id: 225,
    name: 'Carré de Chocolat au Lait',
  },
  {
    id: 226,
    name: 'Carré de Chocolat Blanc',
  },
  {
    id: 227,
    name: 'Carré de Chocolat Noir',
  },
  {
    id: 228,
    name: "Potion d'oubli Percepteur : Armure aqueuse",
  },
  {
    id: 229,
    name: "Potion d'oubli Percepteur : Armure Incandescente",
  },
  {
    id: 230,
    name: "Potion d'oubli Percepteur : Armure Terrestre",
  },
  {
    id: 231,
    name: "Potion d'oubli Percepteur : Armure Venteuse",
  },
  {
    id: 232,
    name: "Potion d'oubli Percepteur : Flamme",
  },
  {
    id: 233,
    name: "Potion d'oubli Percepteur 'Cyclone'",
  },
  {
    id: 234,
    name: "Potion d'oubli Percepteur : Vague",
  },
  {
    id: 235,
    name: "Potion d'oubli Percepteur : Rocher",
  },
  {
    id: 236,
    name: "Potion d'oubli Percepteur : Mot Soignant",
  },
  {
    id: 237,
    name: "Potion d'oubli Percepteur : Désenvoutement",
  },
  {
    id: 238,
    name: "Potion d'oubli Percepteur : Compulsion de masse",
  },
  {
    id: 239,
    name: "Potion d'oubli Percepteur : Déstabilisation",
  },
  {
    id: 240,
    name: "Potion d'oubli Percepteur : Pods",
  },
  {
    id: 241,
    name: "Potion d'oubli Percepteur : Nombre de percepteur",
  },
  {
    id: 242,
    name: "Potion d'oubli Percepteur : Prospection",
  },
  {
    id: 243,
    name: "Potion d'oubli Percepteur 'Expérience'",
  },
  {
    id: 244,
    name: 'Pointer du doigt',
  },
  {
    id: 245,
    name: 'Œuf de Larve Dorée',
  },
  {
    id: 246,
    name: 'Bière du Ripate',
  },
  {
    id: 247,
    name: 'Abreuvoir en Frêne',
  },
  {
    id: 248,
    name: 'Abreuvoir en Chêne',
  },
  {
    id: 249,
    name: 'Abreuvoir en Érable',
  },
  {
    id: 250,
    name: 'Abreuvoir en Châtaignier',
  },
  {
    id: 251,
    name: 'Abreuvoir en Charme',
  },
  {
    id: 252,
    name: 'Abreuvoir en Noyer',
  },
  {
    id: 253,
    name: 'Abreuvoir en Merisier',
  },
  {
    id: 254,
    name: 'Abreuvoir en If',
  },
  {
    id: 255,
    name: 'Abreuvoir en Ébène',
  },
  {
    id: 256,
    name: 'Abreuvoir en Orme',
  },
  {
    id: 257,
    name: 'Abreuvoir en Bombu',
  },
  {
    id: 258,
    name: 'Abreuvoir en Oliviolet',
  },
  {
    id: 259,
    name: 'Abreuvoir en Bambou',
  },
  {
    id: 260,
    name: 'Abreuvoir en Bambou Sombre',
  },
  {
    id: 261,
    name: 'Abreuvoir en Bambou Sacré',
  },
  {
    id: 262,
    name: 'Abreuvoir Classique',
  },
  {
    id: 263,
    name: 'Mangeoire Classique',
  },
  {
    id: 264,
    name: 'Mangeoire en Frêne',
  },
  {
    id: 265,
    name: 'Mangeoire en Chêne',
  },
  {
    id: 266,
    name: 'Mangeoire en If',
  },
  {
    id: 267,
    name: 'Mangeoire en Ébène',
  },
  {
    id: 268,
    name: 'Mangeoire en Orme',
  },
  {
    id: 269,
    name: 'Mangeoire en Érable',
  },
  {
    id: 270,
    name: 'Mangeoire en Charme',
  },
  {
    id: 271,
    name: 'Mangeoire en Châtaignier',
  },
  {
    id: 272,
    name: 'Mangeoire en Noyer',
  },
  {
    id: 273,
    name: 'Mangeoire en Merisier',
  },
  {
    id: 274,
    name: 'Mangeoire en Bombu',
  },
  {
    id: 275,
    name: 'Mangeoire en Oliviolet',
  },
  {
    id: 276,
    name: 'Mangeoire en Bambou',
  },
  {
    id: 277,
    name: 'Mangeoire en Bambou Sombre',
  },
  {
    id: 278,
    name: 'Mangeoire en Bambou Sacré',
  },
  {
    id: 279,
    name: 'Caresseur en Plume de Tofu',
  },
  {
    id: 280,
    name: 'Caresseur en Plume de Piou Bleu',
  },
  {
    id: 281,
    name: 'Caresseur en Plume de Piou Violet',
  },
  {
    id: 282,
    name: 'Baffeur Classique',
  },
  {
    id: 283,
    name: 'Baffeur en Châtaignier',
  },
  {
    id: 284,
    name: 'Baffeur en Chêne',
  },
  {
    id: 285,
    name: 'Caresseur Classique',
  },
  {
    id: 286,
    name: 'Baffeur en If',
  },
  {
    id: 287,
    name: 'Dragofesse Classique',
  },
  {
    id: 288,
    name: 'Dragofesse en Cuir de Boostache Prépubère',
  },
  {
    id: 289,
    name: 'Dragofesse en Cuir de Boufton Noir',
  },
  {
    id: 290,
    name: 'Dragofesse en Cuir de Bouftou',
  },
  {
    id: 291,
    name: 'Corne de Brume',
  },
  {
    id: 292,
    name: 'Abreuvoir en Bois Ancestral',
  },
  {
    id: 293,
    name: 'Abreuvoir en Bois Envoûté',
  },
  {
    id: 294,
    name: 'Abreuvoir en Bois de Tronknyde',
  },
  {
    id: 295,
    name: 'Abreuvoir en Bambou Doré',
  },
  {
    id: 296,
    name: 'Abreuvoir en Bambou Magique',
  },
  {
    id: 297,
    name: 'Abreuvoir en Bois de Bambouto',
  },
  {
    id: 298,
    name: 'Abreuvoir en Bois de Bambouto Sacré',
  },
  {
    id: 299,
    name: 'Abreuvoir en Bois de Kokoko',
  },
  {
    id: 300,
    name: 'Mangeoire en Bois Ancestral',
  },
  {
    id: 301,
    name: 'Mangeoire en Bois Envoûté',
  },
  {
    id: 302,
    name: 'Mangeoire en Bambou Doré',
  },
  {
    id: 303,
    name: 'Mangeoire en Bambou Magique',
  },
  {
    id: 304,
    name: 'Mangeoire en Bois de Bambouto',
  },
  {
    id: 305,
    name: 'Mangeoire en Bois de Bambouto Sacré',
  },
  {
    id: 306,
    name: 'Mangeoire en Bois de Kokoko',
  },
  {
    id: 307,
    name: 'Mangeoire en Bois de Tronknyde',
  },
  {
    id: 308,
    name: 'Dragofesse en Cuir de Chef de Guerre Bouftou',
  },
  {
    id: 309,
    name: 'Dragofesse en Cuir de Bouftou Royal',
  },
  {
    id: 310,
    name: 'Dragofesse en Cuir de Gargrouille',
  },
  {
    id: 311,
    name: 'Dragofesse en Cuir de Dragon Cochon',
  },
  {
    id: 312,
    name: 'Dragofesse en Cuir de Cochon de Lait',
  },
  {
    id: 313,
    name: 'Dragofesse en Cuir Violet de Bwork',
  },
  {
    id: 314,
    name: 'Dragofesse en Cuir de Porkass',
  },
  {
    id: 315,
    name: 'Dragofesse en Cuir Noir',
  },
  {
    id: 316,
    name: 'Dragofesse en Cuir de Sanglier des Plaines',
  },
  {
    id: 317,
    name: 'Dragofesse en Cuir de Minotoror',
  },
  {
    id: 318,
    name: 'Caresseur en Plume de Piou Vert',
  },
  {
    id: 319,
    name: 'Caresseur en Plume de Piou Rouge',
  },
  {
    id: 320,
    name: 'Caresseur en Plume de Piou Jaune',
  },
  {
    id: 321,
    name: 'Caresseur en Plume de Piou Rose',
  },
  {
    id: 322,
    name: 'Caresseur en Plume de Tofu Maléfique',
  },
  {
    id: 323,
    name: 'Caresseur en Plume de Corbac',
  },
  {
    id: 324,
    name: 'Caresseur en Plume de Kwak de Glace',
  },
  {
    id: 325,
    name: 'Caresseur en Plume de Kwak de Flamme',
  },
  {
    id: 326,
    name: 'Caresseur en Plume de Kwak de Vent',
  },
  {
    id: 327,
    name: 'Caresseur en Plume de Kwak de Terre',
  },
  {
    id: 328,
    name: 'Caresseur en Plume du Dernier Poolay',
  },
  {
    id: 329,
    name: 'Caresseur en Plume Pointue de Kwak',
  },
  {
    id: 330,
    name: 'Caresseur en Plume du Maître Corbac',
  },
  {
    id: 331,
    name: 'Caresseur en Plume de Tofu Royal',
  },
  {
    id: 332,
    name: 'Baffeur en Ébène',
  },
  {
    id: 333,
    name: 'Baffeur en Orme',
  },
  {
    id: 334,
    name: 'Baffeur en Érable',
  },
  {
    id: 335,
    name: 'Baffeur en Charme',
  },
  {
    id: 336,
    name: 'Baffeur en Frêne',
  },
  {
    id: 337,
    name: 'Baffeur en Noyer',
  },
  {
    id: 338,
    name: 'Baffeur en Merisier',
  },
  {
    id: 339,
    name: 'Baffeur en Bambou',
  },
  {
    id: 340,
    name: 'Baffeur en Bombu',
  },
  {
    id: 341,
    name: 'Baffeur en Oliviolet',
  },
  {
    id: 342,
    name: 'Baffeur en Bambou Sombre',
  },
  {
    id: 343,
    name: 'Baffeur en Bambou Sacré',
  },
  {
    id: 344,
    name: 'Baffeur en Bois Ancestral',
  },
  {
    id: 345,
    name: 'Baffeur en Bois Envoûté',
  },
  {
    id: 346,
    name: 'Baffeur en Bois de Tronknyde',
  },
  {
    id: 347,
    name: 'Baffeur en Bambou Doré',
  },
  {
    id: 348,
    name: 'Baffeur en Bois de Kokoko',
  },
  {
    id: 349,
    name: 'Baffeur en Bambou Magique',
  },
  {
    id: 350,
    name: 'Baffeur en Bois de Bambouto',
  },
  {
    id: 351,
    name: 'Baffeur en Bois de Bambouto Sacré',
  },
  {
    id: 352,
    name: 'Foudroyeur en Frêne',
  },
  {
    id: 353,
    name: 'Foudroyeur en Chêne',
  },
  {
    id: 354,
    name: 'Foudroyeur en If',
  },
  {
    id: 355,
    name: 'Foudroyeur en Ébène',
  },
  {
    id: 356,
    name: 'Foudroyeur en Orme',
  },
  {
    id: 357,
    name: 'Foudroyeur en Érable',
  },
  {
    id: 358,
    name: 'Foudroyeur en Charme',
  },
  {
    id: 359,
    name: 'Foudroyeur en Châtaignier',
  },
  {
    id: 360,
    name: 'Foudroyeur en Noyer',
  },
  {
    id: 361,
    name: 'Foudroyeur en Merisier',
  },
  {
    id: 362,
    name: 'Foudroyeur en Bombu',
  },
  {
    id: 363,
    name: 'Foudroyeur en Oliviolet',
  },
  {
    id: 364,
    name: 'Foudroyeur en Bambou',
  },
  {
    id: 365,
    name: 'Foudroyeur en Bambou Sombre',
  },
  {
    id: 366,
    name: 'Foudroyeur en Bambou Sacré',
  },
  {
    id: 367,
    name: 'Foudroyeur en Bois Ancestral',
  },
  {
    id: 368,
    name: 'Foudroyeur en Bois Envoûté',
  },
  {
    id: 369,
    name: 'Foudroyeur en Bois de Tronknyde',
  },
  {
    id: 370,
    name: 'Foudroyeur en Bambou Doré',
  },
  {
    id: 371,
    name: 'Foudroyeur en Bambou Magique',
  },
  {
    id: 372,
    name: 'Foudroyeur en Bois de Bambouto',
  },
  {
    id: 373,
    name: 'Foudroyeur en Bois de Bambouto Sacré',
  },
  {
    id: 374,
    name: 'Foudroyeur en Bois de Kokoko',
  },
  {
    id: 375,
    name: 'Foudroyeur Classique',
  },
  {
    id: 376,
    name: 'Le Saut Sifflard',
  },
  {
    id: 377,
    name: 'Bonbon Energétique',
  },
  {
    id: 378,
    name: 'Bière de Bwork',
  },
  {
    id: 379,
    name: 'Fragment Magique',
  },
  {
    id: 380,
    name: 'Ballon Jaune Magique',
  },
  {
    id: 381,
    name: 'Ballon Rouge Magique',
  },
  {
    id: 382,
    name: 'Plat de Filtounga',
  },
  {
    id: 383,
    name: 'Cervelle de vampire',
  },
  {
    id: 384,
    name: 'Moumoules frites',
  },
  {
    id: 385,
    name: 'Gâtrool Industriel',
  },
  {
    id: 386,
    name: 'Œuf de piou',
  },
  {
    id: 387,
    name: "Limonade d'Incarnam",
  },
  {
    id: 388,
    name: 'Cawotte Maudite',
  },
  {
    id: 389,
    name: 'Ballon Bleu Magique',
  },
  {
    id: 390,
    name: 'Ballon Vert Magique',
  },
  {
    id: 391,
    name: 'Nisitik Miditik',
  },
  {
    id: 392,
    name: 'Piment confit',
  },
  {
    id: 393,
    name: 'Potion de Foyer de Guilde',
  },
  {
    id: 394,
    name: 'Potion Bulbique',
  },
  {
    id: 395,
    name: 'Shigekax Caramel',
  },
  {
    id: 396,
    name: 'Shigekax Banane',
  },
  {
    id: 397,
    name: 'Shigekax Orange',
  },
  {
    id: 398,
    name: 'Shigekax Poire',
  },
  {
    id: 399,
    name: 'Shigekax Pomme',
  },
  {
    id: 400,
    name: 'Shigekax Chocolat',
  },
  {
    id: 401,
    name: 'Shigekax Vanille',
  },
  {
    id: 402,
    name: 'Shigekax Melon',
  },
  {
    id: 403,
    name: "Potion d'enclos de Guilde",
  },
  {
    id: 404,
    name: 'Potion de rappel prismatique',
  },
  {
    id: 405,
    name: 'Parchemin de Sort Invocation de Chaferfu',
  },
  {
    id: 406,
    name: 'Pawchemin de la Cawotte',
  },
  {
    id: 407,
    name: 'Ballotin de chocolat',
  },
  {
    id: 408,
    name: "Fée d'artifice invocatrice de cœurs",
  },
  {
    id: 409,
    name: 'Shigekax Passion',
  },
  {
    id: 410,
    name: 'Shigekax Amande',
  },
  {
    id: 411,
    name: 'Shigekax Reinette',
  },
  {
    id: 412,
    name: 'Shigekax Griotte',
  },
  {
    id: 413,
    name: 'Shigekax Indigo',
  },
  {
    id: 414,
    name: 'Shigekax Coco',
  },
  {
    id: 415,
    name: 'Shigekax Prune',
  },
  {
    id: 416,
    name: 'Shigekax Praline',
  },
  {
    id: 417,
    name: 'Shigekax Mirabelle',
  },
  {
    id: 418,
    name: 'Shigekax Acidulé',
  },
  {
    id: 419,
    name: 'Plat de Gravette',
  },
  {
    id: 420,
    name: 'Salade Houbée',
  },
  {
    id: 421,
    name: 'Pain Trépide',
  },
  {
    id: 422,
    name: 'Salace de poissons',
  },
  {
    id: 423,
    name: "Ordre d'exécution.",
  },
  {
    id: 424,
    name: 'Elixir Pandawa',
  },
  {
    id: 425,
    name: 'Elixir Sacrieur',
  },
  {
    id: 426,
    name: 'Elixir Eniripsa',
  },
  {
    id: 427,
    name: 'Elixir Sadida',
  },
  {
    id: 428,
    name: 'Elixir Crâ',
  },
  {
    id: 429,
    name: 'Elixir Iop',
  },
  {
    id: 430,
    name: 'Elixir Ecaflip',
  },
  {
    id: 431,
    name: 'Elixir Xélor',
  },
  {
    id: 432,
    name: 'Elixir Féca',
  },
  {
    id: 433,
    name: 'Elixir Enutrof',
  },
  {
    id: 434,
    name: 'Elixir Osamodas',
  },
  {
    id: 435,
    name: 'Elixir Sram',
  },
  {
    id: 436,
    name: 'Parchemin de Bijoutier',
  },
  {
    id: 437,
    name: 'Parchemin de Joaillomage',
  },
  {
    id: 438,
    name: 'Parchemin de Boucher',
  },
  {
    id: 439,
    name: 'Parchemin de Bricoleur',
  },
  {
    id: 440,
    name: 'Parchemin de Forgemage',
  },
  {
    id: 441,
    name: 'Parchemin de Forgeur de Marteaux',
  },
  {
    id: 442,
    name: 'Parchemin de Forgemage de Marteaux',
  },
  {
    id: 443,
    name: 'Parchemin de Forgeur de Pelles',
  },
  {
    id: 444,
    name: 'Parchemin de Forgemage de Pelles',
  },
  {
    id: 445,
    name: 'Parchemin de Sculptemage de Bâtons',
  },
  {
    id: 446,
    name: 'Parchemin de Sculptemage de Baguettes',
  },
  {
    id: 447,
    name: 'Parchemin de Forgemage de Dagues',
  },
  {
    id: 448,
    name: 'Parchemin de Sculptemage',
  },
  {
    id: 449,
    name: 'Parchemin de Forgeur de Haches',
  },
  {
    id: 450,
    name: 'Parchemin de Forgemage de Haches',
  },
  {
    id: 451,
    name: 'Parchemin de Façonneur',
  },
  {
    id: 452,
    name: 'Parchemin de Mineur',
  },
  {
    id: 453,
    name: 'Parchemin de Poissonnier',
  },
  {
    id: 454,
    name: 'Parchemin de Tailleur',
  },
  {
    id: 455,
    name: 'Parchemin de Costumage',
  },
  {
    id: 456,
    name: "Parchemin d'Alchimiste",
  },
  {
    id: 457,
    name: 'Parchemin de Paysan',
  },
  {
    id: 458,
    name: 'Parchemin de Chasseur',
  },
  {
    id: 459,
    name: 'Parchemin de Pêcheur',
  },
  {
    id: 460,
    name: 'Parchemin de Cordomage',
  },
  {
    id: 461,
    name: 'Parchemin de Sort Apprivoisement de monture',
  },
  {
    id: 462,
    name: "Parchemin de Sort Capture d'âmes",
  },
  {
    id: 463,
    name: 'Parchemin de Sort Marteau de Moon',
  },
  {
    id: 464,
    name: 'Parchemin de Sort Boomerang perfide',
  },
  {
    id: 465,
    name: 'Brioche à la viande de bouftou',
  },
  {
    id: 466,
    name: 'Abragland',
  },
  {
    id: 467,
    name: 'Coffre de Jorbak',
  },
  {
    id: 468,
    name: 'Potion de crapaud-mufle',
  },
  {
    id: 469,
    name: 'Parchemin des Flaqueux',
  },
  {
    id: 470,
    name: 'Potion de HmmMmm',
  },
  {
    id: 471,
    name: 'Shigekax Kill Coos',
  },
  {
    id: 472,
    name: "Potion d'Amélioration d'Atouin",
  },
  {
    id: 473,
    name: "Potion d'Amélioration de Bébé Pandawa",
  },
  {
    id: 474,
    name: "Potion d'Amélioration de Bilby",
  },
  {
    id: 475,
    name: "Potion d'Amélioration de Bwak",
  },
  {
    id: 476,
    name: "Potion d'Amélioration de Bworky",
  },
  {
    id: 477,
    name: "Potion d'Amélioration de Chacha",
  },
  {
    id: 478,
    name: "Potion d'Amélioration de Chacha Angora",
  },
  {
    id: 479,
    name: "Potion d'Amélioration de Chacha Tigré",
  },
  {
    id: 480,
    name: "Potion d'Amélioration de Crocodaille",
  },
  {
    id: 481,
    name: "Potion d'Amélioration d'Ecureuil Chenapan",
  },
  {
    id: 482,
    name: "Potion d'Amélioration de Fëanor",
  },
  {
    id: 483,
    name: "Potion d'Amélioration de Koalak Sanguin",
  },
  {
    id: 484,
    name: "Potion d'Amélioration de Kouin-Kouin",
  },
  {
    id: 485,
    name: "Potion d'Amélioration de Léopardo",
  },
  {
    id: 486,
    name: "Potion d'Amélioration de Mini Wa",
  },
  {
    id: 487,
    name: "Potion d'Amélioration de Nomoon",
  },
  {
    id: 488,
    name: "Potion d'Amélioration de Péki",
  },
  {
    id: 489,
    name: "Potion d'Amélioration de Petit Chacha Blanc",
  },
  {
    id: 490,
    name: "Potion d'Amélioration de Petit Chienchien Noir",
  },
  {
    id: 491,
    name: "Potion d'Amélioration de Pioute",
  },
  {
    id: 492,
    name: "Potion d'Amélioration de Ross",
  },
  {
    id: 493,
    name: "Potion d'Amélioration de Vilain Petit Corbac",
  },
  {
    id: 494,
    name: "Potion d'Amélioration de Wabbit",
  },
  {
    id: 495,
    name: "Potion d'Amélioration de Walk",
  },
  {
    id: 496,
    name: "Potion d'Amélioration de Willy le Relou",
  },
  {
    id: 497,
    name: "Potion d'Amélioration de Marcassin",
  },
  {
    id: 498,
    name: "Potion d'Amélioration de Miniminotot",
  },
  {
    id: 499,
    name: "Potion d'Amélioration de Tiwabbit Kiafin",
  },
  {
    id: 500,
    name: "Potion d'Amélioration de Dragoune Noire",
  },
  {
    id: 501,
    name: "Potion d'Amélioration de Bouloute du Parrain",
  },
  {
    id: 502,
    name: "Potion d'Amélioration de Gelutin",
  },
  {
    id: 503,
    name: "Potion d'Amélioration de Shushu de Rushu",
  },
  {
    id: 504,
    name: "Potion d'Amélioration de Vampyrette",
  },
  {
    id: 505,
    name: 'Potion de soin du débutant',
  },
  {
    id: 506,
    name: 'Pain du débutant',
  },
  {
    id: 507,
    name: 'Poisson Deukloche du débutant',
  },
  {
    id: 508,
    name: 'Mexicanos du débutant',
  },
  {
    id: 509,
    name: "Potion d'Amélioration de Dragoune Dorée",
  },
  {
    id: 510,
    name: "Potion d'Amélioration de Chercheur d'Ogrines",
  },
  {
    id: 511,
    name: 'Potion de soin larvesque',
  },
  {
    id: 512,
    name: 'Craqueloroche',
  },
  {
    id: 513,
    name: 'Chapain',
  },
  {
    id: 514,
    name: 'Monstre Pain',
  },
  {
    id: 515,
    name: 'Monstre Pain consommable',
  },
  {
    id: 516,
    name: "Potion d'Amélioration de Raknaille",
  },
  {
    id: 517,
    name: "Potion d'Amélioration de Meuch",
  },
  {
    id: 518,
    name: "Potion d'Amélioration de Tofoudre",
  },
  {
    id: 519,
    name: "Potion d'Amélioration de Pykur",
  },
  {
    id: 520,
    name: 'Cervelle de larve',
  },
  {
    id: 521,
    name: "Fée d'artifice festive",
  },
  {
    id: 522,
    name: "Potion d'Amélioration de Chacha des Glaces",
  },
  {
    id: 523,
    name: "Potion d'Amélioration de Tifoux Tigré",
  },
  {
    id: 524,
    name: "Potion d'Amélioration de Chienchien Tigré",
  },
  {
    id: 525,
    name: "Potion d'Amélioration de Kouin-Kouin Noir",
  },
  {
    id: 526,
    name: "Potion d'Amélioration de Chauffe-souris Délavée",
  },
  {
    id: 527,
    name: "Potion d'Amélioration de Gupin",
  },
  {
    id: 528,
    name: 'Úridnac',
  },
  {
    id: 529,
    name: 'Plume Vibrante de mansot',
  },
  {
    id: 530,
    name: 'Apéwicube',
  },
  {
    id: 531,
    name: "Fée d'artifice Térik",
  },
  {
    id: 532,
    name: "Trésor maudit d'Az le Tech",
  },
  {
    id: 533,
    name: 'Friswein',
  },
  {
    id: 534,
    name: 'Frigrowka',
  },
  {
    id: 535,
    name: "Viande d'aventurier",
  },
  {
    id: 536,
    name: 'Pain de Frostiz',
  },
  {
    id: 537,
    name: 'Pain de Frostiz soufflé',
  },
  {
    id: 538,
    name: 'Potion Torboyo',
  },
  {
    id: 539,
    name: 'Potion Raide Rêve',
  },
  {
    id: 540,
    name: 'Potion Étoilée',
  },
  {
    id: 541,
    name: 'Poisskaille en Fricassée',
  },
  {
    id: 542,
    name: 'Poisskaille Givré en Fricassée',
  },
  {
    id: 543,
    name: 'Pizza au boudin de boufmouth',
  },
  {
    id: 544,
    name: 'Bonbon à la Menthe du Petit Prospecteur',
  },
  {
    id: 545,
    name: 'Bonbon à la Menthe du Prospecteur',
  },
  {
    id: 546,
    name: 'Bonbon à la Menthe du Petit Apprenti',
  },
  {
    id: 547,
    name: "Bonbon à la Menthe de l'Apprenti",
  },
  {
    id: 548,
    name: "Potion d'Amélioration de Cromeugnon",
  },
  {
    id: 549,
    name: "Potion d'Amélioration de Médugivre",
  },
  {
    id: 550,
    name: "Potion d'Amélioration d'Ecumouth",
  },
  {
    id: 551,
    name: "Potion d'Amélioration de Givrefoux",
  },
  {
    id: 552,
    name: 'Coffre Vorace endormi',
  },
  {
    id: 553,
    name: 'Fantaisie Eliatrope',
  },
  {
    id: 554,
    name: 'Sac de Fantaisies Eliatropes',
  },
  {
    id: 555,
    name: "Potion d'Amélioration de Gwo Tofu Ventripotent",
  },
  {
    id: 556,
    name: "Potion d'Amélioration de Kanigloups",
  },
  {
    id: 557,
    name: "Potion d'Amélioration de Bulbisou",
  },
  {
    id: 558,
    name: "Potion d'Amélioration de Blérodoudou",
  },
  {
    id: 559,
    name: "Potion d'Amélioration de Bisouglours",
  },
  {
    id: 560,
    name: 'Paire de skis rustiques jetables',
  },
  {
    id: 561,
    name: 'Paire de skis glissants jetables',
  },
  {
    id: 562,
    name: 'Paire de skis sombres jetables',
  },
  {
    id: 563,
    name: 'Paire de skis souples jetables',
  },
  {
    id: 564,
    name: "Potion d'Amélioration de Platypus",
  },
  {
    id: 565,
    name: "Potion d'Amélioration de Serpète",
  },
  {
    id: 566,
    name: 'Elixir Roublard',
  },
  {
    id: 567,
    name: "Potion d'Amélioration de Tofüm",
  },
  {
    id: 568,
    name: 'Bûche de Nowel rassie',
  },
  {
    id: 569,
    name: "Potion d'Amélioration de Phénix",
  },
  {
    id: 570,
    name: 'Bonbon de Nowel',
  },
  {
    id: 571,
    name: 'Elixir Zobal',
  },
  {
    id: 572,
    name: 'Agent infectieux de la rosissure',
  },
  {
    id: 573,
    name: 'Téméraire',
  },
  {
    id: 574,
    name: 'Sylvestre',
  },
  {
    id: 575,
    name: 'Criminel',
  },
  {
    id: 576,
    name: 'Être Frigorifié',
  },
  {
    id: 577,
    name: 'Super Héros',
  },
  {
    id: 578,
    name: 'Se mettre en colère',
  },
  {
    id: 579,
    name: 'Saluer',
  },
  {
    id: 580,
    name: "S'allonger",
  },
  {
    id: 581,
    name: "S'agenouiller",
  },
  {
    id: 582,
    name: 'Rire',
  },
  {
    id: 583,
    name: 'Refuser',
  },
  {
    id: 584,
    name: 'Pleurer',
  },
  {
    id: 585,
    name: 'Pierre Feuille Ciseaux',
  },
  {
    id: 586,
    name: 'Offrir un cadeau',
  },
  {
    id: 587,
    name: 'Montrer son arme',
  },
  {
    id: 588,
    name: 'Montrer sa peur',
  },
  {
    id: 589,
    name: 'Manolias',
  },
  {
    id: 590,
    name: 'Mains sur les hanches',
  },
  {
    id: 591,
    name: 'Jouer de la trompette',
  },
  {
    id: 592,
    name: 'Jouer de la flûte',
  },
  {
    id: 593,
    name: 'Fleurs',
  },
  {
    id: 594,
    name: 'Faire un signe de la main',
  },
  {
    id: 595,
    name: 'Faire un bisou',
  },
  {
    id: 596,
    name: 'Croiser les bras',
  },
  {
    id: 597,
    name: 'Applaudir',
  },
  {
    id: 598,
    name: 'Trace de pneu',
  },
  {
    id: 599,
    name: 'Joie',
  },
  {
    id: 600,
    name: 'Lire un livre',
  },
  {
    id: 601,
    name: 'Lever le pouce',
  },
  {
    id: 602,
    name: 'Baisser le pouce',
  },
  {
    id: 603,
    name: 'Sautiller',
  },
  {
    id: 604,
    name: 'Jouer du Tambour',
  },
  {
    id: 605,
    name: 'Bâiller',
  },
  {
    id: 606,
    name: 'Faire coucou',
  },
  {
    id: 607,
    name: 'Manolias',
  },
  {
    id: 608,
    name: 'Trace',
  },
  {
    id: 609,
    name: 'Coquetel Enséfal',
  },
  {
    id: 610,
    name: 'Coquetel Lurique',
  },
  {
    id: 611,
    name: 'Coquetel Emaque',
  },
  {
    id: 612,
    name: "Potion d'Amélioration de Dragouf",
  },
  {
    id: 613,
    name: 'Pique-nique Vulkain',
  },
  {
    id: 614,
    name: 'Rations de Survie en Milieu Touristique',
  },
  {
    id: 615,
    name: 'Soupe au Plimok',
  },
  {
    id: 616,
    name: 'Fricassée de Thongue Salée',
  },
  {
    id: 617,
    name: 'Kipik en Chocolat',
  },
  {
    id: 618,
    name: 'Paquet Cadeau en Chocolat',
  },
  {
    id: 619,
    name: 'Peluche en Chocolat',
  },
  {
    id: 620,
    name: 'Bonhomme de Neige en Sucre Glace',
  },
  {
    id: 621,
    name: 'Kanigrou Hivernal en Sucre Glace',
  },
  {
    id: 622,
    name: 'Yiti des Neiges en Sucre Glace',
  },
  {
    id: 623,
    name: "Mini Nuit' en Sucre Glace",
  },
  {
    id: 624,
    name: "Traîneau en Pain d'Épices",
  },
  {
    id: 625,
    name: 'Boole de neige',
  },
  {
    id: 626,
    name: 'Fée Érie de Nowel',
  },
  {
    id: 627,
    name: 'Bûche de Nowel',
  },
  {
    id: 628,
    name: "Potion d'Amélioration de Hurledent",
  },
  {
    id: 629,
    name: "Potion d'Amélioration de Tofu Givré",
  },
  {
    id: 630,
    name: "Potion d'Amélioration de Sourisette",
  },
  {
    id: 631,
    name: "Potion d'Amélioration de Scarakiri",
  },
  {
    id: 632,
    name: "Potion d'Amélioration de Rauleur",
  },
  {
    id: 633,
    name: "Potion d'Amélioration de Meulourd",
  },
  {
    id: 634,
    name: 'Racines de Jean Gimbre',
  },
  {
    id: 635,
    name: 'Étiquette à remplir',
  },
  {
    id: 636,
    name: "Potion d'Amélioration de Mékrabe",
  },
  {
    id: 637,
    name: "Potion d'Amélioration de Ploup",
  },
  {
    id: 638,
    name: "Fée d'artifice blanche de Pwâk",
  },
  {
    id: 639,
    name: "Fée d'artifice bleue de Pwâk",
  },
  {
    id: 640,
    name: "Fée d'artifice jaune de Pwâk",
  },
  {
    id: 641,
    name: "Fée d'artifice verte de Pwâk",
  },
  {
    id: 642,
    name: "Fée d'artifice rouge de Pwâk",
  },
  {
    id: 643,
    name: 'Coquetel Éportation',
  },
  {
    id: 644,
    name: 'Krokillage Rouge',
  },
  {
    id: 645,
    name: 'Krokillage Jaune',
  },
  {
    id: 646,
    name: "Potion d'Amélioration de Kroliméa",
  },
  {
    id: 647,
    name: 'Potion de changement de blason de guilde',
  },
  {
    id: 648,
    name: 'Potion de renommage de guilde',
  },
  {
    id: 649,
    name: 'Poisskaille Givré en Ragoût',
  },
  {
    id: 650,
    name: 'Elixir Steamer',
  },
  {
    id: 651,
    name: 'Ballon Baladeur Magique',
  },
  {
    id: 652,
    name: 'Avoir froid',
  },
  {
    id: 653,
    name: 'Se prosterner',
  },
  {
    id: 654,
    name: 'Avoir chaud',
  },
  {
    id: 655,
    name: 'Gonfler ses muscles',
  },
  {
    id: 656,
    name: 'Lire une carte',
  },
  {
    id: 657,
    name: 'Poing levé',
  },
  {
    id: 658,
    name: 'Pied de nez',
  },
  {
    id: 659,
    name: "Attirer l'attention",
  },
  {
    id: 660,
    name: 'Motus',
  },
  {
    id: 661,
    name: 'Se frotter les mains',
  },
  {
    id: 662,
    name: "Bonbon d'Halouine",
  },
  {
    id: 663,
    name: 'Potion de Bibliotemple',
  },
  {
    id: 664,
    name: 'Sukette à la Fraise',
  },
  {
    id: 665,
    name: 'Sukette à la Pomme',
  },
  {
    id: 666,
    name: 'Sukette au Citron',
  },
  {
    id: 667,
    name: 'Sukette à la Prune',
  },
  {
    id: 668,
    name: 'Gumizes',
  },
  {
    id: 669,
    name: 'Bonbon Zaï Planant',
  },
  {
    id: 670,
    name: 'Bonbon Zaï Hallucinogène',
  },
  {
    id: 671,
    name: 'Halouine',
  },
  {
    id: 672,
    name: 'Bonbon du Prospecteur',
  },
  {
    id: 673,
    name: 'Bonbon du Formateur',
  },
  {
    id: 674,
    name: "Potion d'Amélioration de Sakochère",
  },
  {
    id: 675,
    name: 'Fiole de Chichala',
  },
  {
    id: 676,
    name: 'Piou',
  },
  {
    id: 677,
    name: 'Encourager',
  },
  {
    id: 678,
    name: 'Beignet de Karnaval',
  },
  {
    id: 679,
    name: 'Pochette-Surprise',
  },
  {
    id: 680,
    name: 'Barre Rabmarac au Caramel',
  },
  {
    id: 681,
    name: 'Barre Rabmarac à la Fraise',
  },
  {
    id: 682,
    name: 'Barre Rabmarac au Citron',
  },
  {
    id: 683,
    name: "Barre Rabmarac à l'Orange",
  },
  {
    id: 684,
    name: 'Barre Rabmarac au Kola',
  },
  {
    id: 685,
    name: 'Barre Rabmarac au Nougat',
  },
  {
    id: 686,
    name: 'Pyrofuego',
  },
  {
    id: 687,
    name: "Potion d'Amélioration de Balafreux",
  },
  {
    id: 688,
    name: 'Bouboule de Neige en Sucre Glace',
  },
  {
    id: 689,
    name: 'Craqueleur des Glaces en Sucre Glace',
  },
  {
    id: 690,
    name: 'Sakai Firefoux en Sucre Glace',
  },
  {
    id: 691,
    name: 'Brioche de Nowel',
  },
  {
    id: 692,
    name: 'Monstre Brioche de Nowel',
  },
  {
    id: 693,
    name: 'Potion de Kerubim',
  },
  {
    id: 694,
    name: 'Écrire',
  },
  {
    id: 695,
    name: "Potion d'Amélioration de Kafarce",
  },
  {
    id: 696,
    name: "Potion d'Amélioration de Bulbouture",
  },
  {
    id: 697,
    name: "Potion d'Amélioration de Kokulte",
  },
  {
    id: 698,
    name: "Potion d'Amélioration de Toukancre",
  },
  {
    id: 699,
    name: "Perle d'Âme",
  },
  {
    id: 700,
    name: "Bouf'gomme au Goût Sauvage",
  },
  {
    id: 701,
    name: "Bouf'gomme à la Pêche",
  },
  {
    id: 702,
    name: "Bouf'gomme Fraîcheur Lavande",
  },
  {
    id: 703,
    name: 'Boufballe Surprise',
  },
  {
    id: 704,
    name: "Parchemin de Sort Maîtrise d'Arme",
  },
  {
    id: 705,
    name: 'Bouteille de Cocalane',
  },
  {
    id: 706,
    name: 'Serviette égarée',
  },
  {
    id: 707,
    name: 'Longue-Vue',
  },
  {
    id: 708,
    name: 'Eau de la Fontaine de Noffoub',
  },
  {
    id: 709,
    name: "Potion de renommage d'alliance",
  },
  {
    id: 710,
    name: "Potion de changement de blason d'alliance",
  },
  {
    id: 711,
    name: "Fée d'artifice Invocatrice de Boufton Noir",
  },
  {
    id: 712,
    name: "Fée d'artifice Invocatrice de Boufton Blanc",
  },
  {
    id: 713,
    name: "Fée d'artifice Invocatrice de Moucherons",
  },
  {
    id: 714,
    name: "Fée d'artifice Etoilée",
  },
  {
    id: 715,
    name: "Fée d'artifice Glandiose",
  },
  {
    id: 716,
    name: "Fée d'artifice Culottée",
  },
  {
    id: 717,
    name: "Fée d'artifice Feignante",
  },
  {
    id: 718,
    name: "Fée d'artifice de Kamas",
  },
  {
    id: 719,
    name: "Fée d'artifice Musicale",
  },
  {
    id: 720,
    name: "Fée d'artifice Champouf",
  },
  {
    id: 721,
    name: "Fée d'artifice Cawotte",
  },
  {
    id: 722,
    name: "Fée d'artifice Fleurie",
  },
  {
    id: 723,
    name: 'Potion de Vigile',
  },
  {
    id: 724,
    name: "Potion d'Amélioration de Boskito",
  },
  {
    id: 725,
    name: 'Potion de Croque-mort',
  },
  {
    id: 726,
    name: 'Potion de Guérisseur',
  },
  {
    id: 727,
    name: 'Potion de Temple des alliances',
  },
  {
    id: 728,
    name: "Fée d'artifice Invocatrice d'Arakne",
  },
  {
    id: 729,
    name: "Fée d'artifice Nuageuse",
  },
  {
    id: 730,
    name: 'Mimibiote',
  },
  {
    id: 731,
    name: 'Cawotte pouwwite',
  },
  {
    id: 732,
    name: 'Cocawotte',
  },
  {
    id: 733,
    name: "Potion d'Amélioration de Fosfo",
  },
  {
    id: 734,
    name: "Potion d'invocation de Percepteur",
  },
  {
    id: 735,
    name: 'Potion de Grobid',
  },
  {
    id: 736,
    name: 'Abreuvoir du Tournesol Affamé',
  },
  {
    id: 737,
    name: 'Abreuvoir du Bulbig Brozeur',
  },
  {
    id: 738,
    name: 'Abreuvoir du Wa Wabbit',
  },
  {
    id: 739,
    name: 'Abreuvoir de Moon',
  },
  {
    id: 740,
    name: 'Abreuvoir du Rasboul Majeur',
  },
  {
    id: 741,
    name: 'Abreuvoir de Sphincter Cell',
  },
  {
    id: 742,
    name: 'Abreuvoir du Kimbo',
  },
  {
    id: 743,
    name: 'Abreuvoir de Fuji Givrefoux',
  },
  {
    id: 744,
    name: 'Abreuvoir du Glourséleste',
  },
  {
    id: 745,
    name: 'Abreuvoir du Minotot',
  },
  {
    id: 746,
    name: 'Abreuvoir de Missiz Frizz',
  },
  {
    id: 747,
    name: 'Abreuvoir de Merkator',
  },
  {
    id: 748,
    name: "Foudroyeur de Mob l'Éponge",
  },
  {
    id: 749,
    name: 'Foudroyeur du Kwakwa',
  },
  {
    id: 750,
    name: 'Foudroyeur de Blop Royal',
  },
  {
    id: 751,
    name: 'Foudroyeur du Meulou',
  },
  {
    id: 752,
    name: 'Foudroyeur du Maître Corbac',
  },
  {
    id: 753,
    name: 'Foudroyeur de Ben le Ripate',
  },
  {
    id: 754,
    name: "Foudroyeur de l'Obsidiantre",
  },
  {
    id: 755,
    name: 'Foudroyeur de Grolloum',
  },
  {
    id: 756,
    name: 'Foudroyeur de Tengu Givrefoux',
  },
  {
    id: 757,
    name: 'Foudroyeur du Kolosso',
  },
  {
    id: 758,
    name: 'Foudroyeur de Klime',
  },
  {
    id: 759,
    name: 'Foudroyeur du Comte Harebourg',
  },
  {
    id: 760,
    name: 'Baffeur du Bouftou Royal',
  },
  {
    id: 761,
    name: 'Baffeur du Corailleur Magistral',
  },
  {
    id: 762,
    name: 'Baffeur de Gelée Royale',
  },
  {
    id: 763,
    name: 'Baffeur du Koulosse',
  },
  {
    id: 764,
    name: 'Baffeur du Rat Blanc',
  },
  {
    id: 765,
    name: 'Baffeur du Mansot Royal',
  },
  {
    id: 766,
    name: "Baffeur d'Ougah",
  },
  {
    id: 767,
    name: 'Baffeur du Korriandre',
  },
  {
    id: 768,
    name: 'Baffeur du Kralamoure Géant',
  },
  {
    id: 769,
    name: 'Baffeur du Bworker',
  },
  {
    id: 770,
    name: 'Baffeur de Sylargh',
  },
  {
    id: 771,
    name: 'Baffeur de Nileza',
  },
  {
    id: 772,
    name: 'Dragofesse du Scarabosse Doré',
  },
  {
    id: 773,
    name: 'Dragofesse de la Shin Larve',
  },
  {
    id: 774,
    name: 'Dragofesse de Gourlo le Terrible',
  },
  {
    id: 775,
    name: "Dragofesse de l'Abraknyde Ancestral",
  },
  {
    id: 776,
    name: 'Dragofesse en Cuir de Sanglacier',
  },
  {
    id: 777,
    name: 'Dragofesse du Rat Noir',
  },
  {
    id: 778,
    name: 'Dragofesse du Tynril',
  },
  {
    id: 779,
    name: 'Dragofesse en Cuir de Maho Givrefoux',
  },
  {
    id: 780,
    name: 'Dragofesse du Minotot',
  },
  {
    id: 781,
    name: 'Dragofesse du Glourséleste',
  },
  {
    id: 782,
    name: 'Dragofesse du Kimbo',
  },
  {
    id: 783,
    name: 'Dragofesse de Grolloum',
  },
  {
    id: 784,
    name: 'Dragofesse de Klime',
  },
  {
    id: 785,
    name: 'Dragofesse de Missiz Frizz',
  },
  {
    id: 786,
    name: 'Caresseur en Plume de Fesse du Kido',
  },
  {
    id: 787,
    name: 'Caresseur de Boostache',
  },
  {
    id: 788,
    name: 'Caresseur des Forgerons',
  },
  {
    id: 789,
    name: 'Caresseur du Craqueleur Légendaire',
  },
  {
    id: 790,
    name: 'Caresseur du Wa Wobot',
  },
  {
    id: 791,
    name: 'Caresseur du Royalmouth',
  },
  {
    id: 792,
    name: 'Caresseur du Tanukouï San',
  },
  {
    id: 793,
    name: 'Caresseur en Plume de Serpiplume',
  },
  {
    id: 794,
    name: "Caresseur de l'Obsidiantre",
  },
  {
    id: 795,
    name: 'Caresseur de Fuji Givrefoux',
  },
  {
    id: 796,
    name: 'Caresseur de Tengu Givrefoux',
  },
  {
    id: 797,
    name: "Caresseur d'Ougah",
  },
  {
    id: 798,
    name: 'Caresseur de Nileza',
  },
  {
    id: 799,
    name: 'Caresseur de Merkator',
  },
  {
    id: 800,
    name: 'Mangeoire de Batofu',
  },
  {
    id: 801,
    name: 'Mangeoire de la Bworkette',
  },
  {
    id: 802,
    name: 'Mangeoire du Kanniboul Ebil',
  },
  {
    id: 803,
    name: 'Mangeoire de Daïgoro',
  },
  {
    id: 804,
    name: 'Mangeoire du Maître Pandore',
  },
  {
    id: 805,
    name: 'Mangeoire de Crocabulia',
  },
  {
    id: 806,
    name: 'Mangeoire du Bworker',
  },
  {
    id: 807,
    name: 'Mangeoire de Tengu Givrefoux',
  },
  {
    id: 808,
    name: 'Mangeoire du Korriandre',
  },
  {
    id: 809,
    name: 'Mangeoire du Kolosso',
  },
  {
    id: 810,
    name: 'Mangeoire du Comte Harebourg',
  },
  {
    id: 811,
    name: 'Mangeoire de Sylargh',
  },
  {
    id: 812,
    name: 'Foudroyeur du Chafer Rōnin',
  },
  {
    id: 813,
    name: 'Baffeur de Nelween',
  },
  {
    id: 814,
    name: 'Dragofesse de Dramak',
  },
  {
    id: 815,
    name: 'Mangeoire du Dragon Cochon',
  },
  {
    id: 816,
    name: 'Abreuvoir du Blop Multicolore Royal',
  },
  {
    id: 817,
    name: 'Foudroyeur du Chêne Mou',
  },
  {
    id: 818,
    name: 'Baffeur du Minotoror',
  },
  {
    id: 819,
    name: 'Dragofesse du Péki Péki',
  },
  {
    id: 820,
    name: 'Caresseur du Tofu Royal',
  },
  {
    id: 821,
    name: 'Mangeoire de Skeunk',
  },
  {
    id: 822,
    name: 'Offrir un Gâteau',
  },
  {
    id: 823,
    name: 'Huer',
  },
  {
    id: 824,
    name: 'Ola',
  },
  {
    id: 825,
    name: 'Boxer',
  },
  {
    id: 826,
    name: 'Agiter le drapeau blanc',
  },
  {
    id: 827,
    name: 'Cracheur de feu',
  },
  {
    id: 828,
    name: "Dragofesse d'Ombre",
  },
  {
    id: 829,
    name: 'Baffeur de Kanigroula',
  },
  {
    id: 830,
    name: "Potion d'Amélioration de Chachyène",
  },
  {
    id: 831,
    name: "Potion d'Amélioration de Black Tiwabbit",
  },
  {
    id: 832,
    name: 'Potion de Diligence',
  },
  {
    id: 833,
    name: 'Mains derrière le dos',
  },
  {
    id: 834,
    name: 'Ouvrir un portail de poche',
  },
  {
    id: 835,
    name: 'Localiser un portail',
  },
  {
    id: 836,
    name: 'Voile Eidolonique de Trésantène',
  },
  {
    id: 837,
    name: 'Voile Eidolonique de Père Phorreur',
  },
  {
    id: 838,
    name: 'Voile Eidolonique de Lévitrof',
  },
  {
    id: 839,
    name: 'Voile Eidolonique de Kamasterisk',
  },
  {
    id: 840,
    name: 'Loupe',
  },
  {
    id: 841,
    name: 'Supplier',
  },
  {
    id: 842,
    name: 'Se frapper le front',
  },
  {
    id: 843,
    name: 'Chercher un trésor',
  },
  {
    id: 844,
    name: 'Potion de Chasseur de Trésor',
  },
  {
    id: 845,
    name: 'Potion de Voyageur Dimensionnel',
  },
  {
    id: 846,
    name: 'Coffre insignifiant',
  },
  {
    id: 847,
    name: "Potion d'Amélioration de Snouffle",
  },
  {
    id: 848,
    name: "Potion d'Amélioration de Phortiche",
  },
  {
    id: 849,
    name: 'Coffre rouillé',
  },
  {
    id: 850,
    name: 'Coffre intrigant',
  },
  {
    id: 851,
    name: 'Coffre surprenant',
  },
  {
    id: 852,
    name: 'Coffre solide',
  },
  {
    id: 853,
    name: 'Coffre lourd',
  },
  {
    id: 854,
    name: 'Coffre étincelant',
  },
  {
    id: 855,
    name: 'Coffre imposant',
  },
  {
    id: 856,
    name: 'Coffre impressionnant',
  },
  {
    id: 857,
    name: 'Coffre magistral',
  },
  {
    id: 858,
    name: 'Coffre de loterie',
  },
  {
    id: 859,
    name: 'Dragofesse du roi Nidas',
  },
  {
    id: 860,
    name: 'Foudroyeur de Malléfisk',
  },
  {
    id: 861,
    name: 'Baffeur du Phossile',
  },
  {
    id: 862,
    name: 'Richissime',
  },
  {
    id: 863,
    name: "Caillou d'Enutrof",
  },
  {
    id: 864,
    name: 'Dragofesse de la Haute Truche',
  },
  {
    id: 865,
    name: 'Coffre de Gein',
  },
  {
    id: 866,
    name: 'Coffre de Frakacia',
  },
  {
    id: 867,
    name: 'Voile Eidolonique de Tromblion',
  },
  {
    id: 868,
    name: "Voile Eidolonique d'Eperfide",
  },
  {
    id: 869,
    name: 'Voile Eidolonique de Terristocrate',
  },
  {
    id: 870,
    name: 'Voile Eidolonique de Bourôliste',
  },
  {
    id: 871,
    name: "Potion d'Apisaphé",
  },
  {
    id: 872,
    name: "Potion d'Amélioration de Homlett",
  },
  {
    id: 873,
    name: 'Coffre de Dremoan',
  },
  {
    id: 874,
    name: "Coffre d'Ali Grothor",
  },
  {
    id: 875,
    name: 'Boîte de fragments insignifiante',
  },
  {
    id: 876,
    name: 'Boîte de fragments rouillée',
  },
  {
    id: 877,
    name: 'Boîte de fragments intrigante',
  },
  {
    id: 878,
    name: 'Boîte de fragments surprenante',
  },
  {
    id: 879,
    name: 'Boîte de fragments solide',
  },
  {
    id: 880,
    name: 'Boîte de fragments lourde',
  },
  {
    id: 881,
    name: 'Boîte de fragments étincelante',
  },
  {
    id: 882,
    name: 'Boîte de fragments imposante',
  },
  {
    id: 883,
    name: 'Boîte de fragments impressionnante',
  },
  {
    id: 884,
    name: 'Boîte de fragments magistrale',
  },
  {
    id: 885,
    name: 'Bière du Bourreau',
  },
  {
    id: 886,
    name: 'Phalange de Sram',
  },
  {
    id: 887,
    name: "Potion d'oubli de sort",
  },
  {
    id: 888,
    name: 'Explosif',
  },
  {
    id: 889,
    name: "Potion d'Amélioration de Tatouf",
  },
  {
    id: 890,
    name: 'Foudroyeur du Protozorreur',
  },
  {
    id: 891,
    name: 'Caresseur de la Reine des Voleurs',
  },
  {
    id: 892,
    name: 'Baffeur du Toxoliath',
  },
  {
    id: 893,
    name: 'Abreuvoir du Capitaine Ekarlatte',
  },
  {
    id: 894,
    name: 'Voile Eidolonique de Farfacette',
  },
  {
    id: 895,
    name: 'Voile Eidolonique de Vindeux',
  },
  {
    id: 896,
    name: 'Voile Eidolonique de Méjaire',
  },
  {
    id: 897,
    name: "Voile Eidolonique d'Ikargn",
  },
  {
    id: 898,
    name: 'Siffler',
  },
  {
    id: 899,
    name: 'Danse',
  },
  {
    id: 900,
    name: 'Kamarena',
  },
  {
    id: 901,
    name: 'Coffre de Fouduglen',
  },
  {
    id: 902,
    name: 'Montre en retard',
  },
  {
    id: 903,
    name: 'Montre en avance',
  },
  {
    id: 904,
    name: 'Sable de Xélor',
  },
  {
    id: 905,
    name: "Potion d'Amélioration de Blokus",
  },
  {
    id: 906,
    name: 'Intemporel',
  },
  {
    id: 907,
    name: "Coffre de l'Hyperscampe",
  },
  {
    id: 908,
    name: 'Coffre de Pantèroz',
  },
  {
    id: 909,
    name: 'Coffre de Brumen',
  },
  {
    id: 910,
    name: "Potion d'Amélioration d'Eliôme",
  },
  {
    id: 911,
    name: "Potion d'Amélioration de Drakopin",
  },
  {
    id: 912,
    name: 'Transcendant',
  },
  {
    id: 913,
    name: 'Elixir Eliotrope',
  },
  {
    id: 914,
    name: 'Colère de Bolgrot',
  },
  {
    id: 915,
    name: "Potion d'Amélioration de Tanuk",
  },
  {
    id: 916,
    name: "Potion d'Amélioration de Bloalak",
  },
  {
    id: 917,
    name: 'Abreuvoir de la Reine Nyée',
  },
  {
    id: 918,
    name: 'Mangeoire de Kankreblath',
  },
  {
    id: 919,
    name: 'Caresseur de Fraktale',
  },
  {
    id: 920,
    name: 'Dragofesse de XLII',
  },
  {
    id: 921,
    name: 'Baffeur de Vortex',
  },
  {
    id: 922,
    name: "Potion d'Amélioration de Moumoute",
  },
  {
    id: 923,
    name: 'Fée d’Artifice Colorée',
  },
  {
    id: 924,
    name: 'Vaporeux',
  },
  {
    id: 925,
    name: 'Potion Droïde',
  },
  {
    id: 926,
    name: 'Potion Raide Mhor',
  },
  {
    id: 927,
    name: 'Potion de Divination',
  },
  {
    id: 928,
    name: 'Potion Raide Dite',
  },
  {
    id: 929,
    name: 'Potion Agare',
  },
  {
    id: 930,
    name: 'Potion Religieuse',
  },
  {
    id: 931,
    name: 'Potion Géniale',
  },
  {
    id: 932,
    name: 'Potion de Marguerite',
  },
  {
    id: 933,
    name: 'Potion Jeud Raide',
  },
  {
    id: 934,
    name: 'Sang de Trooll',
  },
  {
    id: 935,
    name: 'Potion de Trois',
  },
  {
    id: 936,
    name: 'Potion Raide Emption',
  },
  {
    id: 937,
    name: 'Potion de Goku',
  },
  {
    id: 938,
    name: 'Potion Raide Izdaide',
  },
  {
    id: 939,
    name: "Larme d'Eniripsa",
  },
  {
    id: 940,
    name: 'Potion de Donzelle',
  },
  {
    id: 941,
    name: 'Potion Revitalisante',
  },
  {
    id: 942,
    name: 'Potion Fromagère',
  },
  {
    id: 943,
    name: 'Pain de Mie',
  },
  {
    id: 944,
    name: "Pain d'Épices",
  },
  {
    id: 945,
    name: 'Gaufre',
  },
  {
    id: 946,
    name: 'Gaufre en or',
  },
  {
    id: 947,
    name: 'Faluche',
  },
  {
    id: 948,
    name: 'Pain Prenelle',
  },
  {
    id: 949,
    name: 'Tortilla',
  },
  {
    id: 950,
    name: 'Burrito',
  },
  {
    id: 951,
    name: 'Fouée',
  },
  {
    id: 952,
    name: 'Anguille Rôtie',
  },
  {
    id: 953,
    name: 'Anguille Souroche Rôtie',
  },
  {
    id: 954,
    name: 'Dorade au four',
  },
  {
    id: 955,
    name: 'Daurade Royale au four',
  },
  {
    id: 956,
    name: 'Salace de Lotte',
  },
  {
    id: 957,
    name: 'Salace de Glotte',
  },
  {
    id: 958,
    name: 'Estouffade de Morue',
  },
  {
    id: 959,
    name: 'Estouffade de Morue Barbue',
  },
  {
    id: 960,
    name: 'Tanche en Matelote',
  },
  {
    id: 961,
    name: 'Tanche Hantée en Matelote',
  },
  {
    id: 962,
    name: 'Espadon Poêlé',
  },
  {
    id: 963,
    name: 'Espadon Quichotte Poêlé',
  },
  {
    id: 964,
    name: 'Bouillon de Chair',
  },
  {
    id: 965,
    name: 'Potion Axel Raide',
  },
  {
    id: 966,
    name: "Sachet d'Aubergines",
  },
  {
    id: 967,
    name: 'Sachet de Cendres Éternelles',
  },
  {
    id: 968,
    name: 'Sachet de Cerises',
  },
  {
    id: 969,
    name: 'Sachet de Citrons',
  },
  {
    id: 970,
    name: 'Tonneau de Jus Goûtu',
  },
  {
    id: 971,
    name: "Tonneau d'Eau Potable",
  },
  {
    id: 972,
    name: "Sachet d'Épices",
  },
  {
    id: 973,
    name: 'Sachet de Feuilles de Salace',
  },
  {
    id: 974,
    name: 'Sachet de Graisse Gélatineuse',
  },
  {
    id: 975,
    name: 'Sachet de Haricots',
  },
  {
    id: 976,
    name: "Tonneau d'Huile à Frire",
  },
  {
    id: 977,
    name: 'Sachet de Poivre',
  },
  {
    id: 978,
    name: 'Sachet de Sel',
  },
  {
    id: 979,
    name: "Sachet d'Oignons",
  },
  {
    id: 980,
    name: 'Sachet de Poudre de Perlinpainpain',
  },
  {
    id: 981,
    name: 'Sachet de Poudre Temporelle',
  },
  {
    id: 982,
    name: 'Sachet de Résine',
  },
  {
    id: 983,
    name: 'Tonneau de Sang de Scorbute',
  },
  {
    id: 984,
    name: 'Bière Atolmond',
  },
  {
    id: 985,
    name: 'Bière de Djaul',
  },
  {
    id: 986,
    name: 'Bière de la Misère',
  },
  {
    id: 987,
    name: 'Bière du Bwork',
  },
  {
    id: 988,
    name: 'Bûche de Frêne',
  },
  {
    id: 989,
    name: 'Bûche de Châtaignier',
  },
  {
    id: 990,
    name: 'Bûche de Noyer',
  },
  {
    id: 991,
    name: 'Bûche de Chêne',
  },
  {
    id: 992,
    name: 'Bûche de Bombu',
  },
  {
    id: 993,
    name: "Bûche d'Érable",
  },
  {
    id: 994,
    name: "Bûche d'Oliviolet",
  },
  {
    id: 995,
    name: "Bûche d'If",
  },
  {
    id: 996,
    name: 'Bûche de Bambou',
  },
  {
    id: 997,
    name: 'Bûche de Merisier',
  },
  {
    id: 998,
    name: 'Bûche de Noisetier',
  },
  {
    id: 999,
    name: "Bûche d'Ébène",
  },
  {
    id: 1000,
    name: 'Bûche de Kaliptus',
  },
  {
    id: 1001,
    name: 'Bûche de Charme',
  },
  {
    id: 1002,
    name: 'Bûche de Bambou Sombre',
  },
  {
    id: 1003,
    name: "Bûche d'Orme",
  },
  {
    id: 1004,
    name: 'Bûche de Bambou Sacré',
  },
  {
    id: 1005,
    name: 'Bûche de Tremble',
  },
  {
    id: 1006,
    name: 'Garde-à-vous',
  },
  {
    id: 1007,
    name: "Potion d'Amélioration de Bontique",
  },
  {
    id: 1008,
    name: "Potion d'Amélioration de Brâkarien",
  },
  {
    id: 1009,
    name: 'Baffeur de Kardorim',
  },
  {
    id: 1010,
    name: 'Balistique',
  },
  {
    id: 1011,
    name: 'Pêcheur',
  },
  {
    id: 1012,
    name: "S'abriter sous un parasol",
  },
  {
    id: 1013,
    name: 'Boulette de Viande',
  },
  {
    id: 1014,
    name: 'Beignet Astrubien',
  },
  {
    id: 1015,
    name: 'Beignet Astrubien Fortifiant',
  },
  {
    id: 1016,
    name: 'Roulade de Carne',
  },
  {
    id: 1017,
    name: 'Roulade de Carne Fortifiante',
  },
  {
    id: 1018,
    name: 'Papillote au Citron',
  },
  {
    id: 1019,
    name: 'Papillote Fortifiante au Citron',
  },
  {
    id: 1020,
    name: 'Salade Sufokienne',
  },
  {
    id: 1021,
    name: 'Salade Sufokienne Fortifiante',
  },
  {
    id: 1022,
    name: 'Friture Amaknéenne',
  },
  {
    id: 1023,
    name: 'Friture Amaknéenne Fortifiante',
  },
  {
    id: 1024,
    name: "Parmentier à l'Oignon",
  },
  {
    id: 1025,
    name: "Parmentier Fortifiant à l'Oignon",
  },
  {
    id: 1026,
    name: 'Terrine Bontarienne',
  },
  {
    id: 1027,
    name: 'Terrine Bontarienne Fortifiante',
  },
  {
    id: 1028,
    name: 'Pot-au-feu Goûteux',
  },
  {
    id: 1029,
    name: 'Pot-au-feu Goûteux Fortifiant',
  },
  {
    id: 1030,
    name: 'Poêlée Paysanne',
  },
  {
    id: 1031,
    name: 'Poêlée Paysanne Fortifiante',
  },
  {
    id: 1032,
    name: 'Pemmican aux Haricots',
  },
  {
    id: 1033,
    name: 'Pemmican Fortifiant aux Haricots',
  },
  {
    id: 1034,
    name: 'Grillade Brâkmarienne',
  },
  {
    id: 1035,
    name: 'Grillade Brâkmarienne Fortifiante',
  },
  {
    id: 1036,
    name: 'Marinade Sucrée-Salée',
  },
  {
    id: 1037,
    name: 'Marinade Sucrée-Salée Fortifiante',
  },
  {
    id: 1038,
    name: 'Boudin Noir',
  },
  {
    id: 1039,
    name: 'Boudin Noir Fortifiant',
  },
  {
    id: 1040,
    name: 'Daube aux Épices',
  },
  {
    id: 1041,
    name: 'Daube Fortifiante aux Épices',
  },
  {
    id: 1042,
    name: 'Mijoté Récréatif',
  },
  {
    id: 1043,
    name: 'Mijoté Récréatif Fortifiant',
  },
  {
    id: 1044,
    name: 'Filet Mignon',
  },
  {
    id: 1045,
    name: 'Filet Mignon Fortifiant',
  },
  {
    id: 1046,
    name: 'Quenelle Tijan',
  },
  {
    id: 1047,
    name: 'Quenelle Tijan Fortifiante',
  },
  {
    id: 1048,
    name: 'Andouillette de Gibier',
  },
  {
    id: 1049,
    name: 'Andouillette de Gibier Fortifiante',
  },
  {
    id: 1050,
    name: 'Saucisse Fumée',
  },
  {
    id: 1051,
    name: 'Saucisse Fumée Fortifiante',
  },
  {
    id: 1052,
    name: 'Émoticônes Chacha',
  },
  {
    id: 1053,
    name: 'Émoticônes Chienchien',
  },
  {
    id: 1054,
    name: 'Émoticônes Bilby',
  },
  {
    id: 1055,
    name: 'Émoticônes Halouine',
  },
  {
    id: 1056,
    name: 'Coffre de Kongoku',
  },
  {
    id: 1057,
    name: 'Coffre de Voldelor',
  },
  {
    id: 1058,
    name: 'Coffre du Guerrier du K.O.',
  },
  {
    id: 1059,
    name: "Coffre d'Anatak",
  },
  {
    id: 1060,
    name: 'Coffre de Zatoïshwan',
  },
  {
    id: 1061,
    name: "Potion d'Amélioration de Titard",
  },
  {
    id: 1062,
    name: 'Caresseur du Chouque',
  },
  {
    id: 1063,
    name: 'Éthylique',
  },
  {
    id: 1064,
    name: 'Bouillon de Chair Fortifiant',
  },
  {
    id: 1065,
    name: 'Élémentaire',
  },
  {
    id: 1066,
    name: "Potion d'Amélioration de Minikrone",
  },
  {
    id: 1067,
    name: 'Duelliste',
  },
  {
    id: 1068,
    name: 'Émoticônes Joris',
  },
  {
    id: 1069,
    name: "Potion d'Amélioration de Minimino",
  },
  {
    id: 1070,
    name: 'Bonbon Snik',
  },
  {
    id: 1071,
    name: "Potion d'amélioration d'El Scarador",
  },
  {
    id: 1072,
    name: "Potion d'amélioration de Croum",
  },
  {
    id: 1073,
    name: "Potion d'amélioration de Dragoune",
  },
  {
    id: 1074,
    name: "Potion d'amélioration de Tifoux",
  },
  {
    id: 1075,
    name: "Potion d'amélioration de Bouloute",
  },
  {
    id: 1076,
    name: "Potion d'amélioration de Fotome",
  },
  {
    id: 1077,
    name: "Potion d'Amélioration d'Abra Kadabra",
  },
  {
    id: 1078,
    name: "Coffre d'Atcham",
  },
  {
    id: 1079,
    name: 'Chanceux',
  },
  {
    id: 1080,
    name: "Pâtée d'Ecaflip",
  },
  {
    id: 1081,
    name: "Potion d'Amélioration de Chaperlipopette",
  },
  {
    id: 1082,
    name: 'Sanguinolent',
  },
  {
    id: 1083,
    name: 'Foudroyeur du Pounicheur',
  },
  {
    id: 1084,
    name: 'Caresseur de Ush',
  },
  {
    id: 1085,
    name: 'Mangeoire du Chalœil',
  },
  {
    id: 1086,
    name: "Potion d'Amélioration de Tirubim",
  },
  {
    id: 1087,
    name: "Potion d'Amélioration de Glub",
  },
  {
    id: 1088,
    name: "Potion d'Amélioration de Titcham",
  },
  {
    id: 1089,
    name: 'Bienfaisant',
  },
  {
    id: 1090,
    name: 'Psychotique',
  },
  {
    id: 1091,
    name: "Potion d'Amélioration de Kougnard",
  },
  {
    id: 1092,
    name: 'Diplôme de plongée',
  },
  {
    id: 1093,
    name: "Diplôme de R'lyugluglu",
  },
  {
    id: 1094,
    name: 'Diplôme des Trithons',
  },
  {
    id: 1095,
    name: 'Bière de la Foire',
  },
  {
    id: 1096,
    name: 'Animal',
  },
  {
    id: 1097,
    name: 'Indestructible',
  },
  {
    id: 1098,
    name: 'Coup fatal Iop',
  },
  {
    id: 1099,
    name: 'Gonfler un ballon',
  },
  {
    id: 1100,
    name: 'Expérimenter',
  },
  {
    id: 1101,
    name: 'Coucou',
  },
  {
    id: 1102,
    name: 'Se boucher les oreilles',
  },
  {
    id: 1103,
    name: "Potion d'Amélioration de Cube",
  },
  {
    id: 1104,
    name: 'Coup fatal Grougaloragran',
  },
  {
    id: 1105,
    name: 'Coup fatal Joris',
  },
  {
    id: 1106,
    name: 'Coup fatal Goultard',
  },
  {
    id: 1107,
    name: 'Coup fatal Otomaï',
  },
  {
    id: 1108,
    name: "Potion d'Amélioration de Phorrakna",
  },
  {
    id: 1109,
    name: "Potion d'Amélioration de Pholaine",
  },
  {
    id: 1110,
    name: "Potion d'Amélioration de Phorrilax",
  },
  {
    id: 1111,
    name: "Potion d'Amélioration de Mécaphor",
  },
  {
    id: 1112,
    name: 'Bière du désert',
  },
  {
    id: 1113,
    name: 'Bière cacterre',
  },
  {
    id: 1114,
    name: "Diplôme d'Allié émérite",
  },
  {
    id: 1115,
    name: 'Potion de Nevark',
  },
  {
    id: 1116,
    name: "Potion d'Amélioration de Dauge",
  },
  {
    id: 1117,
    name: 'Enragé',
  },
  {
    id: 1118,
    name: 'Guilde victorieuse',
  },
  {
    id: 1119,
    name: 'Coupe Dofus',
  },
  {
    id: 1120,
    name: 'Diplôme de Vainqueur de la Dofus Cup',
  },
  {
    id: 1121,
    name: 'Bière de Gisgoul',
  },
  {
    id: 1122,
    name: 'Bière de Sidimote',
  },
  {
    id: 1123,
    name: "Breuvage d'Erazal",
  },
  {
    id: 1124,
    name: "Potion d'Amélioration de Tofu Mesuré",
  },
  {
    id: 1125,
    name: "Potion d'Amélioration de Tofu Ventru",
  },
  {
    id: 1126,
    name: "Potion d'Amélioration de Chacharge",
  },
  {
    id: 1127,
    name: "Potion d'Amélioration de Tofu Poisseux",
  },
  {
    id: 1128,
    name: "Potion d'Amélioration de Tofu Charmant",
  },
  {
    id: 1129,
    name: "Potion d'Amélioration de Tofu Brâkmarien",
  },
  {
    id: 1130,
    name: "Potion d'Amélioration de Tofu Bontarien",
  },
  {
    id: 1131,
    name: "Potion d'Amélioration de Chacha Mesuré",
  },
  {
    id: 1132,
    name: "Potion d'Amélioration de Chacha Ventru",
  },
  {
    id: 1133,
    name: "Potion d'Amélioration de Chacha Poisseux",
  },
  {
    id: 1134,
    name: "Potion d'Amélioration de Chacha Charmant",
  },
  {
    id: 1135,
    name: "Potion d'Amélioration de Chacha Brâkmarien",
  },
  {
    id: 1136,
    name: "Potion d'Amélioration de Chacha Bontarien",
  },
  {
    id: 1137,
    name: "Potion d'Amélioration de Boune Mesuré",
  },
  {
    id: 1138,
    name: "Potion d'Amélioration de Boune Ventru",
  },
  {
    id: 1139,
    name: "Potion d'Amélioration de Boune Poisseux",
  },
  {
    id: 1140,
    name: "Potion d'Amélioration de Boune Charmant",
  },
  {
    id: 1141,
    name: "Potion d'Amélioration de Boune Brâkmarien",
  },
  {
    id: 1142,
    name: "Potion d'Amélioration de Boune Bontarien",
  },
  {
    id: 1143,
    name: "Potion d'Amélioration de Tofureur",
  },
  {
    id: 1144,
    name: "Potion d'Amélioration de Bounax",
  },
  {
    id: 1145,
    name: "Potion d'Amélioration de Kougnard Albâtre",
  },
  {
    id: 1146,
    name: 'Champignon Géant Comestible',
  },
  {
    id: 1147,
    name: 'Magmatique',
  },
  {
    id: 1148,
    name: 'Gladiateur',
  },
  {
    id: 1149,
    name: "Potion d'Amélioration de La Chose",
  },
  {
    id: 1150,
    name: 'Zombique',
  },
  {
    id: 1151,
    name: "Potion d'Amélioration de Bouftor",
  },
  {
    id: 1152,
    name: "Potion d'Amélioration de Bouflux",
  },
  {
    id: 1153,
    name: 'Mini part de bonheur',
  },
  {
    id: 1154,
    name: "Diplôme de Guerrier de l'été 647",
  },
  {
    id: 1155,
    name: "Potion d'autopilotage",
  },
  {
    id: 1156,
    name: "Potion d'Amélioration de Godron Mesuré",
  },
  {
    id: 1157,
    name: "Potion d'Amélioration de Godron Ventru",
  },
  {
    id: 1158,
    name: "Potion d'Amélioration de Godron Poisseux",
  },
  {
    id: 1159,
    name: "Potion d'Amélioration de Godron Charmant",
  },
  {
    id: 1160,
    name: "Potion d'Amélioration de Godron Brâkmarien",
  },
  {
    id: 1161,
    name: "Potion d'Amélioration de Godron Bontarien",
  },
  {
    id: 1162,
    name: "Potion d'Amélioration de Dragnir",
  },
  {
    id: 1163,
    name: "Diplôme d'ivoire",
  },
  {
    id: 1164,
    name: 'Diplôme de Miss/Mister Monde des Douze 648',
  },
  {
    id: 1165,
    name: 'Diplôme de la Classe Incarnée 648',
  },
  {
    id: 1166,
    name: "Potion d'Amélioration de Molosk",
  },
  {
    id: 1167,
    name: 'Coup Fatal Rushu',
  },
  {
    id: 1168,
    name: 'Coup Fatal Ecaflip',
  },
  {
    id: 1169,
    name: 'Coup Fatal Eniripsa',
  },
  {
    id: 1170,
    name: 'Coup Fatal Crâ',
  },
  {
    id: 1171,
    name: 'Coup Fatal Féca',
  },
  {
    id: 1172,
    name: 'Coup Fatal Sacrieur',
  },
  {
    id: 1173,
    name: 'Coup Fatal Sadida',
  },
  {
    id: 1174,
    name: 'Coup Fatal Osamodas',
  },
  {
    id: 1175,
    name: 'Coup Fatal Enutrof',
  },
  {
    id: 1176,
    name: 'Coup Fatal Sram',
  },
  {
    id: 1177,
    name: 'Coup Fatal Xélor',
  },
  {
    id: 1178,
    name: 'Coup Fatal Pandawa',
  },
  {
    id: 1179,
    name: 'Supporter Millenium S2',
  },
  {
    id: 1180,
    name: 'Supporter GamersOrigin S2',
  },
  {
    id: 1181,
    name: 'Supporter Batailleurs Glorieux S2',
  },
  {
    id: 1182,
    name: 'Supporter Free Bowisse S2',
  },
  {
    id: 1183,
    name: 'Supporter Out of Control S2',
  },
  {
    id: 1184,
    name: "Diplôme de Guerrier de l'hiver 648",
  },
  {
    id: 1185,
    name: "Fée d'artifice Trèfle",
  },
  {
    id: 1186,
    name: 'Abreuvoir du Mantiscore',
  },
  {
    id: 1187,
    name: 'Abreuvoir de Bethel Akarna',
  },
  {
    id: 1188,
    name: 'Abreuvoir de Meno',
  },
  {
    id: 1189,
    name: 'Foudroyeur du Comte Razof',
  },
  {
    id: 1190,
    name: 'Foudroyeur de Dazak Martegel',
  },
  {
    id: 1191,
    name: 'Foudroyeur de Larve de Koutoulou',
  },
  {
    id: 1192,
    name: 'Baffeur de Choudini',
  },
  {
    id: 1193,
    name: 'Baffeur de Dantinéa',
  },
  {
    id: 1194,
    name: 'Abreuvoir du Père Ver',
  },
  {
    id: 1195,
    name: 'Dragofesse de Solar',
  },
  {
    id: 1196,
    name: "Dragofesse d'Ilyzaelle",
  },
  {
    id: 1197,
    name: 'Caresseur de Tal Kasha',
  },
  {
    id: 1198,
    name: "Mangeoire d'El Piko",
  },
  {
    id: 1199,
    name: "Mangeoire d'Anerice la Shushess",
  },
  {
    id: 1200,
    name: 'Barbarbe',
  },
  {
    id: 1201,
    name: 'Chauffe',
  },
  {
    id: 1202,
    name: 'Morve Subite',
  },
  {
    id: 1203,
    name: 'Parchemin vierge',
  },
  {
    id: 1204,
    name: 'Parchemin lié',
  },
  {
    id: 1205,
    name: 'Lot de dix parchemins vierges',
  },
  {
    id: 1206,
    name: 'Coffre de Kolizétons',
  },
  {
    id: 1207,
    name: 'Diplôme de Magister Temporis I',
  },
  {
    id: 1208,
    name: 'Dragosaure',
  },
  {
    id: 1209,
    name: 'Supporter GamersOrigin S3',
  },
  {
    id: 1210,
    name: 'Supporter Millenium S3',
  },
  {
    id: 1211,
    name: 'Supporter Batailleurs Glorieux S3',
  },
  {
    id: 1212,
    name: 'Supporter Out of Control S3',
  },
  {
    id: 1213,
    name: 'Supporter OV S3',
  },
  {
    id: 1214,
    name: 'Krièk',
  },
  {
    id: 1215,
    name: 'Rune vers la Cache de Kankreblath',
  },
  {
    id: 1216,
    name: 'Rune vers le Cimetières des mastodontes',
  },
  {
    id: 1217,
    name: "Rune vers l'Arbre de Moon",
  },
  {
    id: 1218,
    name: 'Rune vers la Caverne du Koulosse',
  },
  {
    id: 1219,
    name: 'Rune vers le Mégalithe de Fraktale',
  },
  {
    id: 1220,
    name: 'Rune vers le Donjon des Kitsounes',
  },
  {
    id: 1221,
    name: 'Rune vers le Théâtre de Dramak',
  },
  {
    id: 1222,
    name: 'Rune vers la Grotte du Bworker',
  },
  {
    id: 1223,
    name: 'Rune vers la Canopée du Kimbo',
  },
  {
    id: 1224,
    name: 'Rune vers le Donjon des Dragoeufs',
  },
  {
    id: 1225,
    name: 'Rune vers le Donjon du Comte Harebourg',
  },
  {
    id: 1226,
    name: 'Mouchoir parfumé',
  },
  {
    id: 1227,
    name: "Potion d'aspect aléatoire",
  },
  {
    id: 1228,
    name: 'Déguisement de Dévhorreur',
  },
  {
    id: 1229,
    name: 'Déguisement de Champêtrouille',
  },
  {
    id: 1230,
    name: 'Déguisement de Cauchemarakne',
  },
  {
    id: 1231,
    name: 'Déguisement de Lanverne',
  },
  {
    id: 1232,
    name: 'Déguisement de Chauffe-Soutrille',
  },
  {
    id: 1233,
    name: "Déguisement de Bouftou d'Halouine",
  },
  {
    id: 1234,
    name: "Déguisement de Tofu d'Halouine",
  },
  {
    id: 1235,
    name: 'Sac Printanier',
  },
  {
    id: 1236,
    name: 'Sac de l’Agence Touriste',
  },
  {
    id: 1237,
    name: 'Sac du Kouin-Kouin noir',
  },
  {
    id: 1238,
    name: 'Sac du Garde Royal',
  },
  {
    id: 1239,
    name: 'Sac de Lolita',
  },
  {
    id: 1240,
    name: 'Sac Balnéaire',
  },
  {
    id: 1241,
    name: 'Sac de Ronces',
  },
  {
    id: 1242,
    name: 'Sac du Molosse',
  },
  {
    id: 1243,
    name: 'Sac de Magma',
  },
  {
    id: 1244,
    name: 'Sac Zombique',
  },
  {
    id: 1245,
    name: 'Sac Divin',
  },
  {
    id: 1246,
    name: 'Sac de la Crypte',
  },
  {
    id: 1247,
    name: 'Sac Colorivant',
  },
  {
    id: 1248,
    name: 'Sac Laineux',
  },
  {
    id: 1249,
    name: 'Coffre d’Ekar Hahib',
  },
  {
    id: 1250,
    name: 'Coffre de la Capitaine Hébreuze',
  },
  {
    id: 1251,
    name: 'Coffre de Marie Ride',
  },
  {
    id: 1252,
    name: 'Coffre de Machab le Sanguinaire',
  },
  {
    id: 1253,
    name: 'Potion de Mériana',
  },
  {
    id: 1254,
    name: 'Diplôme de Miss/Mister Monde des Douze 649',
  },
  {
    id: 1255,
    name: 'Diplôme de la Classe Incarnée 649',
  },
  {
    id: 1256,
    name: 'Coffre de Gronchon',
  },
  {
    id: 1257,
    name: 'Dragombre',
  },
  {
    id: 1258,
    name: "Potion d'Ombre Astrale",
  },
  {
    id: 1259,
    name: 'Bourse de reflets oniriques',
  },
  {
    id: 1260,
    name: 'Caisse de reflets oniriques',
  },
  {
    id: 1261,
    name: 'Pelleforte',
  },
  {
    id: 1262,
    name: 'Larme de crocodaille',
  },
  {
    id: 1263,
    name: 'Coffre de reflets oniriques',
  },
  {
    id: 1264,
    name: 'Souffle dracomique',
  },
  {
    id: 1265,
    name: "Potion d'attitude Dragombre",
  },
  {
    id: 1266,
    name: 'Cadeau de reflets oniriques',
  },
  {
    id: 1267,
    name: "Diplôme des douze travaux d'Hyrkul",
  },
  {
    id: 1268,
    name: 'Koukawa Citron',
  },
  {
    id: 1269,
    name: 'Koukawa Fraise',
  },
  {
    id: 1270,
    name: 'Koukawa Pomme',
  },
  {
    id: 1271,
    name: 'Koukawa Prune',
  },
  {
    id: 1272,
    name: 'Koukawabi Fraise Citron',
  },
  {
    id: 1273,
    name: 'Koukawabi Pomme Fraise',
  },
  {
    id: 1274,
    name: 'Koukawabi Prune Fraise',
  },
  {
    id: 1275,
    name: 'Koukawabi Pomme Citron',
  },
  {
    id: 1276,
    name: 'Koukawabi Pomme Prune',
  },
  {
    id: 1277,
    name: 'Koukawabi Prune Citron',
  },
  {
    id: 1278,
    name: 'Diplôme de Prospectus temporis II',
  },
  {
    id: 1279,
    name: 'Koukawa',
  },
  {
    id: 1280,
    name: 'Insectoïde',
  },
  {
    id: 1281,
    name: 'Burgreg',
  },
  {
    id: 1282,
    name: "Diplôme de Wa d'un jour",
  },
  {
    id: 1283,
    name: 'Diplôme de Fabophile',
  },
  {
    id: 1284,
    name: "Diplôme de l'Épi fané",
  },
  {
    id: 1285,
    name: 'Carré de Chocolat Noir à 99 %',
  },
  {
    id: 1286,
    name: 'Bonbon béni de la Prêtresse des Douze',
  },
  {
    id: 1287,
    name: 'Élixir uchronique',
  },
  {
    id: 1288,
    name: 'Anomalie',
  },
  {
    id: 1289,
    name: "J'ai faim",
  },
  {
    id: 1290,
    name: "J'ai trop mangé",
  },
  {
    id: 1291,
    name: 'Saut de Wapin',
  },
  {
    id: 1292,
    name: 'Coeur brisé',
  },
  {
    id: 1293,
    name: 'Diplôme de Guerrier saisonnier 649',
  },
  {
    id: 1294,
    name: 'Diplôme de Vainqueur de la Dofus Cup 649',
  },
  {
    id: 1295,
    name: 'Insigne de garde de Pwâk',
  },
  {
    id: 1296,
    name: 'Clochette ailée en chocolat',
  },
  {
    id: 1297,
    name: 'Diplôme de Waddictateur',
  },
  {
    id: 1298,
    name: 'Diplôme de Croqueur',
  },
  {
    id: 1299,
    name: 'Diplôme des cloches',
  },
  {
    id: 1300,
    name: 'Friandise Wadnozéam',
  },
  {
    id: 1301,
    name: 'Friandise Warkaïk',
  },
  {
    id: 1302,
    name: 'Friandise Chocoskargo',
  },
  {
    id: 1303,
    name: 'Friandise Kwakao',
  },
  {
    id: 1304,
    name: 'Friandise Torréfactueur',
  },
  {
    id: 1305,
    name: 'Friandise Pralicienne',
  },
  {
    id: 1306,
    name: 'Perlequin Acidulé',
  },
  {
    id: 1307,
    name: 'Perlequin Amande',
  },
  {
    id: 1308,
    name: 'Perlequin Banane',
  },
  {
    id: 1309,
    name: 'Perlequin Caramel',
  },
  {
    id: 1310,
    name: 'Perlequin Chocolat',
  },
  {
    id: 1311,
    name: 'Perlequin Coco',
  },
  {
    id: 1312,
    name: 'Perlequin Griotte',
  },
  {
    id: 1313,
    name: 'Perlequin Indigo',
  },
  {
    id: 1314,
    name: 'Perlequin Melon',
  },
  {
    id: 1315,
    name: 'Perlequin Mirabelle',
  },
  {
    id: 1316,
    name: 'Perlequin Orange',
  },
  {
    id: 1317,
    name: 'Perlequin Poire',
  },
  {
    id: 1318,
    name: 'Perlequin Pomme',
  },
  {
    id: 1319,
    name: 'Perlequin Praline',
  },
  {
    id: 1320,
    name: 'Perlequin Prune',
  },
  {
    id: 1321,
    name: 'Perlequin Reinette',
  },
  {
    id: 1322,
    name: 'Perlequin Vanille',
  },
  {
    id: 1323,
    name: "Potion d'attitude Enragé",
  },
  {
    id: 1324,
    name: "Potion d'attitude Élémentaire",
  },
  {
    id: 1325,
    name: "Potion d'attitude Pêcheur",
  },
  {
    id: 1326,
    name: "Potion d'attitude Sanguinolent",
  },
  {
    id: 1327,
    name: "Potion d'attitude Indestructible",
  },
  {
    id: 1328,
    name: "Potion d'attitude Psychotique",
  },
  {
    id: 1329,
    name: "Potion d'attitude Téméraire",
  },
  {
    id: 1330,
    name: "Potion d'attitude Manolias",
  },
  {
    id: 1331,
    name: "Potion d'attitude Criminel",
  },
  {
    id: 1332,
    name: "Potion d'attitude Écrire",
  },
  {
    id: 1333,
    name: "Potion d'attitude Offrir un gâteau",
  },
  {
    id: 1334,
    name: "Potion d'attitude Éthylique",
  },
  {
    id: 1335,
    name: "Potion d'attitude Vaporeux",
  },
  {
    id: 1336,
    name: "Potion d'attitude Zombique",
  },
  {
    id: 1337,
    name: "Potion d'attitude Colère de Bolgrot",
  },
  {
    id: 1338,
    name: "Potion d'attitude Richissime",
  },
  {
    id: 1339,
    name: "Potion d'attitude Sylvestre",
  },
  {
    id: 1340,
    name: "Potion d'attitude Intemporel",
  },
  {
    id: 1341,
    name: "Potion d'attitude Animal",
  },
  {
    id: 1342,
    name: "Potion d'attitude Chanceux",
  },
  {
    id: 1343,
    name: "Potion d'attitude Magmatique",
  },
  {
    id: 1344,
    name: "Potion d'attitude Bienfaisant",
  },
  {
    id: 1345,
    name: "Potion d'attitude Balistique",
  },
  {
    id: 1346,
    name: "Potion d'attitude Explosif",
  },
  {
    id: 1347,
    name: "Potion d'attitude Transcendant",
  },
  {
    id: 1348,
    name: "Potion d'attitude S'abriter sous un parasol",
  },
  {
    id: 1349,
    name: "Potion d'attitude Ça cadence",
  },
  {
    id: 1350,
    name: "Potion d'attitude Ola",
  },
  {
    id: 1351,
    name: "Paquet d'attitude aléatoire",
  },
  {
    id: 1352,
    name: 'Selfie',
  },
  {
    id: 1353,
    name: "Potion d'expérience",
  },
  {
    id: 1354,
    name: "Potion d'attitude Tambour",
  },
  {
    id: 1355,
    name: "Potion d'attitude Trompette",
  },
  {
    id: 1356,
    name: 'Danse du trool',
  },
  {
    id: 1357,
    name: 'Agiter ses cheveux',
  },
  {
    id: 1358,
    name: 'Signe du Shushu',
  },
  {
    id: 1359,
    name: 'Guitare électromagique',
  },
  {
    id: 1360,
    name: 'Chanter',
  },
  {
    id: 1361,
    name: 'Aura musicale',
  },
  {
    id: 1362,
    name: 'Diplôme de Métalleux',
  },
  {
    id: 1363,
    name: 'Diplôme de Guitariste survolté',
  },
  {
    id: 1364,
    name: 'Crocabulia',
  },
  {
    id: 1365,
    name: "Potion d'attitude Crocabulia",
  },
  {
    id: 1366,
    name: 'Perlequin Ananas',
  },
  {
    id: 1367,
    name: 'Perlequin Pastèque',
  },
  {
    id: 1368,
    name: 'Perlequin Mangue',
  },
];

const equipments = [
  {
    id: 0,
    name: 'Amulette du Hibou',
  },
  {
    id: 1,
    name: "Amulette de l'Ours",
  },
  {
    id: 2,
    name: 'Amulette du Loup',
  },
  {
    id: 3,
    name: 'Anneau de Sagesse',
  },
  {
    id: 4,
    name: 'Anneau de Chance',
  },
  {
    id: 5,
    name: "Anneau d'Agilité",
  },
  {
    id: 6,
    name: 'Bottes de Bowisse',
  },
  {
    id: 7,
    name: "L'Ecrabouilleur de Iop",
  },
  {
    id: 8,
    name: 'Ceinture de Puissance',
  },
  {
    id: 9,
    name: 'La Gougnole',
  },
  {
    id: 10,
    name: 'La Destinée Dorée',
  },
  {
    id: 11,
    name: 'La Broche Céleste',
  },
  {
    id: 12,
    name: 'Le Flan des Étoiles',
  },
  {
    id: 13,
    name: 'La Célébrité',
  },
  {
    id: 14,
    name: 'Ceinture du Tot',
  },
  {
    id: 15,
    name: 'Ceinture Vitalesque',
  },
  {
    id: 16,
    name: 'Ceinture Forcesque',
  },
  {
    id: 17,
    name: 'Ceinture Agilesque',
  },
  {
    id: 18,
    name: 'Anneau des Rocheuses',
  },
  {
    id: 19,
    name: 'La Larme du Bouftou',
  },
  {
    id: 20,
    name: "Collier de l'Arc en Ciel",
  },
  {
    id: 21,
    name: 'Sandales Tofuesques',
  },
  {
    id: 22,
    name: 'Bottes de Faillete',
  },
  {
    id: 23,
    name: 'Amulette du Kam Assutra',
  },
  {
    id: 24,
    name: 'Amulette de Krokette',
  },
  {
    id: 25,
    name: 'Amulette du Sram',
  },
  {
    id: 26,
    name: 'Amulette Deulegarnoulle',
  },
  {
    id: 27,
    name: 'Anneau Rak',
  },
  {
    id: 28,
    name: 'Bottes de Céleri-Thé',
  },
  {
    id: 29,
    name: "L'Anneau de Valeur",
  },
  {
    id: 30,
    name: "Ceinture d'Endurance",
  },
  {
    id: 31,
    name: "L'Ecaliseur",
  },
  {
    id: 32,
    name: 'Amulette du Chafer',
  },
  {
    id: 33,
    name: 'Amulette en Crabe',
  },
  {
    id: 34,
    name: 'Amulette du Marin',
  },
  {
    id: 35,
    name: 'Amulette du Pirate',
  },
  {
    id: 36,
    name: 'Chapeau Pointu',
  },
  {
    id: 37,
    name: 'Amulette du Pêcheur de Somoon',
  },
  {
    id: 38,
    name: 'Amulette des Abîmes',
  },
  {
    id: 39,
    name: 'Cape du Pirate',
  },
  {
    id: 40,
    name: 'Dofus Pourpre',
  },
  {
    id: 41,
    name: 'La Coiffe du Ploukosse',
  },
  {
    id: 42,
    name: 'Makroute',
  },
  {
    id: 43,
    name: 'Choipo Podlard',
  },
  {
    id: 44,
    name: 'Le Troma',
  },
  {
    id: 45,
    name: 'Pandawa',
  },
  {
    id: 46,
    name: 'Le Oiram',
  },
  {
    id: 47,
    name: 'Kritter',
  },
  {
    id: 48,
    name: 'Dora',
  },
  {
    id: 49,
    name: 'Dantgoule',
  },
  {
    id: 50,
    name: 'Masque Tromatisant',
  },
  {
    id: 51,
    name: "Crystal O'Boul",
  },
  {
    id: 52,
    name: 'Minotokorno',
  },
  {
    id: 53,
    name: 'Houde',
  },
  {
    id: 54,
    name: 'Lorko Kasko',
  },
  {
    id: 55,
    name: 'Korko Klako',
  },
  {
    id: 56,
    name: 'Jouik Krampe',
  },
  {
    id: 57,
    name: 'Gulliver',
  },
  {
    id: 58,
    name: 'Alliance de Silimelle',
  },
  {
    id: 59,
    name: 'Bottes de Ragalde',
  },
  {
    id: 60,
    name: 'Ceinture de Sécurité',
  },
  {
    id: 61,
    name: 'Dofus Émeraude',
  },
  {
    id: 62,
    name: 'Dofus Turquoise',
  },
  {
    id: 63,
    name: 'Cape de Bowisse',
  },
  {
    id: 64,
    name: 'Cape du Vampire',
  },
  {
    id: 65,
    name: 'Cape du Justicier',
  },
  {
    id: 66,
    name: 'Cape du Poolay Chogrelotant',
  },
  {
    id: 67,
    name: 'Koliet Aclou',
  },
  {
    id: 68,
    name: 'Gantie Royal',
  },
  {
    id: 69,
    name: 'Camaïneux',
  },
  {
    id: 70,
    name: 'Einekeineux',
  },
  {
    id: 71,
    name: 'Cape Edépée',
  },
  {
    id: 72,
    name: 'Cape Ellinie',
  },
  {
    id: 73,
    name: 'Cape Ulais',
  },
  {
    id: 74,
    name: 'Cape Abilité',
  },
  {
    id: 75,
    name: 'Cape Sulcorpe',
  },
  {
    id: 76,
    name: 'Cape du Coq Hû',
  },
  {
    id: 77,
    name: 'Cape de Mori Arty',
  },
  {
    id: 78,
    name: "Cape Maj'Hic",
  },
  {
    id: 79,
    name: 'Cape Itou Lascione',
  },
  {
    id: 80,
    name: 'Amulette du Bûcheron',
  },
  {
    id: 81,
    name: 'Bottes du Chat Buté',
  },
  {
    id: 82,
    name: 'Anneau Fortifiant',
  },
  {
    id: 83,
    name: 'Pendentif du Hibou Chétif',
  },
  {
    id: 84,
    name: 'Anneau Rexik',
  },
  {
    id: 85,
    name: 'Ceinture du Kobeer',
  },
  {
    id: 86,
    name: 'Cape de Bonne Espérance',
  },
  {
    id: 87,
    name: 'Abranneau',
  },
  {
    id: 88,
    name: 'Bottes de Kluh',
  },
  {
    id: 89,
    name: 'Anneau de Satisfaction',
  },
  {
    id: 90,
    name: 'Anneau Forcesque',
  },
  {
    id: 91,
    name: 'Anneau Agilesque',
  },
  {
    id: 92,
    name: 'Anneau Vitalesque',
  },
  {
    id: 93,
    name: 'Petit Anneau Magique',
  },
  {
    id: 94,
    name: 'Petit Anneau du Chanceux',
  },
  {
    id: 95,
    name: 'Grenouillette',
  },
  {
    id: 96,
    name: 'Ceinture de Chance',
  },
  {
    id: 97,
    name: 'Bottes de Force',
  },
  {
    id: 98,
    name: "Sandales d'Intelligence",
  },
  {
    id: 99,
    name: 'Bottes Agilesques',
  },
  {
    id: 100,
    name: 'Bottes de Chance',
  },
  {
    id: 101,
    name: 'Dragolyre',
  },
  {
    id: 102,
    name: 'Bottes de Concentration',
  },
  {
    id: 103,
    name: 'Bottes du Bouftou',
  },
  {
    id: 104,
    name: 'Bottes de Klime',
  },
  {
    id: 105,
    name: 'Bottes de Poursuite',
  },
  {
    id: 106,
    name: "Bottes d'Hogmeiser",
  },
  {
    id: 107,
    name: "Bottes Usées d'Hogmeiser",
  },
  {
    id: 108,
    name: "Bottes Dorées d'Hogmeiser",
  },
  {
    id: 109,
    name: 'Amulette de Silicate',
  },
  {
    id: 110,
    name: "La Feuille d'Automne",
  },
  {
    id: 111,
    name: 'Puissantes Bottes de Klime',
  },
  {
    id: 112,
    name: 'Cape de Rougeur',
  },
  {
    id: 113,
    name: 'Cape Bleutée',
  },
  {
    id: 114,
    name: 'Louffeur',
  },
  {
    id: 115,
    name: 'Bandeau Komintot',
  },
  {
    id: 116,
    name: 'Lisseur',
  },
  {
    id: 117,
    name: 'Cape Sombre',
  },
  {
    id: 118,
    name: 'Abracape',
  },
  {
    id: 119,
    name: 'Bandeau de Vitalité',
  },
  {
    id: 120,
    name: 'Cape du Mulou Fou',
  },
  {
    id: 121,
    name: 'Cape du Tofu Fou',
  },
  {
    id: 122,
    name: 'La Samoulaille',
  },
  {
    id: 123,
    name: 'Cape Hilère',
  },
  {
    id: 124,
    name: 'Cape Rice',
  },
  {
    id: 125,
    name: 'La Boufteuse',
  },
  {
    id: 126,
    name: 'Dofusteuse',
  },
  {
    id: 127,
    name: 'Cape Fulgurante',
  },
  {
    id: 128,
    name: 'Ceinture Fulgurante',
  },
  {
    id: 129,
    name: 'Couronne du Wa Wabbit',
  },
  {
    id: 130,
    name: 'Cape du Wa Wabbit',
  },
  {
    id: 131,
    name: 'Dofus Cawotte',
  },
  {
    id: 132,
    name: 'Citwouille',
  },
  {
    id: 133,
    name: 'Casque',
  },
  {
    id: 134,
    name: 'Ailes en bois',
  },
  {
    id: 135,
    name: 'Anneau du Mental',
  },
  {
    id: 136,
    name: 'Masque Kanniboul',
  },
  {
    id: 137,
    name: 'Médaille Oly',
  },
  {
    id: 138,
    name: 'Amulette de Xélor',
  },
  {
    id: 139,
    name: 'Amulette du Craqueleur',
  },
  {
    id: 140,
    name: 'Chance à Mulette',
  },
  {
    id: 141,
    name: 'Harmonie',
  },
  {
    id: 142,
    name: 'Accord',
  },
  {
    id: 143,
    name: 'Entente',
  },
  {
    id: 144,
    name: 'Emblème Livide',
  },
  {
    id: 145,
    name: 'Kabale',
  },
  {
    id: 146,
    name: 'Amulette Itby',
  },
  {
    id: 147,
    name: 'La Reinette',
  },
  {
    id: 148,
    name: 'Médaille Holy',
  },
  {
    id: 149,
    name: "L'Adelus",
  },
  {
    id: 150,
    name: 'Plimclik',
  },
  {
    id: 151,
    name: 'La Broche Hète',
  },
  {
    id: 152,
    name: 'La Chaîne Nhanor Kibrill',
  },
  {
    id: 153,
    name: 'Chaîne de la Liche',
  },
  {
    id: 154,
    name: 'Blessure du Sacrieur',
  },
  {
    id: 155,
    name: 'Le Bagueur',
  },
  {
    id: 156,
    name: "L'Anneau Dhyn",
  },
  {
    id: 157,
    name: "Chance d'Ecaflip",
  },
  {
    id: 158,
    name: 'Passé de Xélor',
  },
  {
    id: 159,
    name: "Souvenir d'Enutrof",
  },
  {
    id: 160,
    name: "L'Enutrofion",
  },
  {
    id: 161,
    name: 'La Mokette',
  },
  {
    id: 162,
    name: 'Alliance',
  },
  {
    id: 163,
    name: 'Abranneau Mou',
  },
  {
    id: 164,
    name: 'Abranneau Sombre',
  },
  {
    id: 165,
    name: 'Abramu',
  },
  {
    id: 166,
    name: 'Bottes de Maîtrise',
  },
  {
    id: 167,
    name: 'Bottes de Puissance',
  },
  {
    id: 168,
    name: "Bottes d'Anticipation",
  },
  {
    id: 169,
    name: 'Bottes de Nexus',
  },
  {
    id: 170,
    name: 'Artefact Feu',
  },
  {
    id: 171,
    name: 'Artefact Terre',
  },
  {
    id: 172,
    name: 'Artefact Air',
  },
  {
    id: 173,
    name: 'Artefact Eau',
  },
  {
    id: 174,
    name: 'Artefact Lumière',
  },
  {
    id: 175,
    name: 'Artefact Vie',
  },
  {
    id: 176,
    name: 'Fécaliseur du Magicien',
  },
  {
    id: 177,
    name: 'Fécaliseur du Guerrier',
  },
  {
    id: 178,
    name: 'Ambramulette Moskito',
  },
  {
    id: 179,
    name: 'Ambramulette Arackne',
  },
  {
    id: 180,
    name: "Bottes d'Apprentissage",
  },
  {
    id: 181,
    name: "Bottes de l'Apprenti Invocateur",
  },
  {
    id: 182,
    name: 'Ceinture Luthuthu',
  },
  {
    id: 183,
    name: 'Ceinture du Dodu Trembleur',
  },
  {
    id: 184,
    name: 'Ceinture des Vents',
  },
  {
    id: 185,
    name: 'Cape de Jules Yanos',
  },
  {
    id: 186,
    name: "Cape d'Elya Wood",
  },
  {
    id: 187,
    name: 'Petit Sac en Laine de Boufton',
  },
  {
    id: 188,
    name: 'Sac du Petit Récolteur',
  },
  {
    id: 189,
    name: 'Sac du Petit Aventurier',
  },
  {
    id: 190,
    name: 'Ceinture de Célérité',
  },
  {
    id: 191,
    name: 'Ceinture de Poche',
  },
  {
    id: 192,
    name: 'Sac du Récolteur',
  },
  {
    id: 193,
    name: 'Sac du Grand Récolteur',
  },
  {
    id: 194,
    name: 'Sac du Staca Noviste',
  },
  {
    id: 195,
    name: "Sac de l'Aventurier",
  },
  {
    id: 196,
    name: 'Sac du Grand Aventurier',
  },
  {
    id: 197,
    name: 'Force de Crocoburio',
  },
  {
    id: 198,
    name: 'Esprit de Crocoburio',
  },
  {
    id: 199,
    name: 'Puissance de Crocoburio',
  },
  {
    id: 200,
    name: 'Anneau Mèr',
  },
  {
    id: 201,
    name: 'Dragocoiffe Calcaire',
  },
  {
    id: 202,
    name: 'Casque du Chafer',
  },
  {
    id: 203,
    name: 'Cape Ouginak',
  },
  {
    id: 204,
    name: 'Cape du Corbac',
  },
  {
    id: 205,
    name: 'Bottes Volatiles',
  },
  {
    id: 206,
    name: 'Shako',
  },
  {
    id: 207,
    name: 'Makroute Sombre',
  },
  {
    id: 208,
    name: 'Le Ours',
  },
  {
    id: 209,
    name: 'Dora Sombre de Brave',
  },
  {
    id: 210,
    name: 'Champo',
  },
  {
    id: 211,
    name: 'Kraignosse',
  },
  {
    id: 212,
    name: 'Cape Brâkmarienne',
  },
  {
    id: 213,
    name: 'Cape Bontarienne',
  },
  {
    id: 214,
    name: 'La Croqueuse',
  },
  {
    id: 215,
    name: "L'Ami Léhunui",
  },
  {
    id: 216,
    name: "Ramoume l'Eternelle",
  },
  {
    id: 217,
    name: 'Puissante Ceinture Fulgurante',
  },
  {
    id: 218,
    name: 'La Végète Hâtif',
  },
  {
    id: 219,
    name: 'La Mouthmou',
  },
  {
    id: 220,
    name: 'Bottes de Lymphe a Tik',
  },
  {
    id: 221,
    name: 'Moon Boutse',
  },
  {
    id: 222,
    name: 'Bottes Tarsy',
  },
  {
    id: 223,
    name: 'Bottes Orino',
  },
  {
    id: 224,
    name: 'Cape de Bou',
  },
  {
    id: 225,
    name: 'Cape Flotteuse',
  },
  {
    id: 226,
    name: 'Cape Maimpa',
  },
  {
    id: 227,
    name: 'Cape Sanguine',
  },
  {
    id: 228,
    name: 'Bottes Animales',
  },
  {
    id: 229,
    name: 'La Brouteuse',
  },
  {
    id: 230,
    name: 'La Guenille',
  },
  {
    id: 231,
    name: 'La Poilue',
  },
  {
    id: 232,
    name: "L'Amulette du Puzzle de la Griffe",
  },
  {
    id: 233,
    name: 'Amulette du Badoul',
  },
  {
    id: 234,
    name: 'Amulette de la Boule',
  },
  {
    id: 235,
    name: 'Amulette de la Bouboule',
  },
  {
    id: 236,
    name: 'Dragolyre Remaniée',
  },
  {
    id: 237,
    name: 'Omelette Amulette',
  },
  {
    id: 238,
    name: 'La Bourgeonette',
  },
  {
    id: 239,
    name: 'Le foulard du Lard Fou',
  },
  {
    id: 240,
    name: 'La Lou Ptiote',
  },
  {
    id: 241,
    name: 'La Bibelaw',
  },
  {
    id: 242,
    name: "L'Œil de Kanigrou",
  },
  {
    id: 243,
    name: 'La Veaux Doux',
  },
  {
    id: 244,
    name: 'Bottes Animales Sombres',
  },
  {
    id: 245,
    name: 'Chtévu',
  },
  {
    id: 246,
    name: 'Ceinture du Rat',
  },
  {
    id: 247,
    name: 'Kwakoiffe de Flammes',
  },
  {
    id: 248,
    name: 'Abracaska',
  },
  {
    id: 249,
    name: 'Coiffe du Bouftou',
  },
  {
    id: 250,
    name: 'Kwape de Flammes',
  },
  {
    id: 251,
    name: 'Abracapa',
  },
  {
    id: 252,
    name: 'Cape Bouffante',
  },
  {
    id: 253,
    name: 'Kwakanneau de Flammes',
  },
  {
    id: 254,
    name: 'Anneau de Bouze le Clerc',
  },
  {
    id: 255,
    name: 'Anobra',
  },
  {
    id: 256,
    name: 'Kwakobottes de Flammes',
  },
  {
    id: 257,
    name: 'Boufbottes',
  },
  {
    id: 258,
    name: 'Abrabottes',
  },
  {
    id: 259,
    name: 'Amukwak de Flammes',
  },
  {
    id: 260,
    name: 'Amulette du Bouftou',
  },
  {
    id: 261,
    name: 'Araknamu',
  },
  {
    id: 262,
    name: 'Kwakture de Flammes',
  },
  {
    id: 263,
    name: 'Ceinture du Bouftou',
  },
  {
    id: 264,
    name: 'Abrature',
  },
  {
    id: 265,
    name: "L'Eni Kère",
  },
  {
    id: 266,
    name: 'Boufcoiffe Royale',
  },
  {
    id: 267,
    name: 'Anneau Royal du Bouftou',
  },
  {
    id: 268,
    name: 'Boufbottes Royales',
  },
  {
    id: 269,
    name: 'Amulette Royale du Bouftou',
  },
  {
    id: 270,
    name: 'Ceinture Royale du Bouftou',
  },
  {
    id: 271,
    name: 'Cape Bouffante Royale',
  },
  {
    id: 272,
    name: 'Gelocape',
  },
  {
    id: 273,
    name: 'Gelocoiffe',
  },
  {
    id: 274,
    name: 'Gelano',
  },
  {
    id: 275,
    name: 'Gelobottes',
  },
  {
    id: 276,
    name: 'Geloture',
  },
  {
    id: 277,
    name: 'Gelamu',
  },
  {
    id: 278,
    name: "Cape de l'Aventurier",
  },
  {
    id: 279,
    name: "Chapeau de l'Aventurier",
  },
  {
    id: 280,
    name: "Anneau de l'Aventurier",
  },
  {
    id: 281,
    name: "Bottes de l'Aventurier",
  },
  {
    id: 282,
    name: "Ceinture de l'aventurier",
  },
  {
    id: 283,
    name: "Amulette de l'Aventurier",
  },
  {
    id: 284,
    name: 'Végacoiffe',
  },
  {
    id: 285,
    name: 'Vegacape',
  },
  {
    id: 286,
    name: 'Vegamu',
  },
  {
    id: 287,
    name: 'Mégabottes',
  },
  {
    id: 288,
    name: 'Bottes Vioutifoule',
  },
  {
    id: 289,
    name: 'Mégature',
  },
  {
    id: 290,
    name: 'Ceinture Vioutifoule',
  },
  {
    id: 291,
    name: 'Carabottes',
  },
  {
    id: 292,
    name: 'Caracoiffe',
  },
  {
    id: 293,
    name: 'Caracape',
  },
  {
    id: 294,
    name: 'Kwape de Glace',
  },
  {
    id: 295,
    name: 'Kwakoiffe de Glace',
  },
  {
    id: 296,
    name: 'Kwakture de Glace',
  },
  {
    id: 297,
    name: 'Corbottes',
  },
  {
    id: 298,
    name: 'Corbacoiffe',
  },
  {
    id: 299,
    name: 'Corbacape Mastralis',
  },
  {
    id: 300,
    name: 'Caracape Minotoris',
  },
  {
    id: 301,
    name: 'Toady',
  },
  {
    id: 302,
    name: 'Ceinture Corbaquiale',
  },
  {
    id: 303,
    name: 'Ceinture Chouqueuse',
  },
  {
    id: 304,
    name: 'Ceinture Kokokette',
  },
  {
    id: 305,
    name: 'Ceinture Tortue Bleue',
  },
  {
    id: 306,
    name: 'Ceinture Tortue Verte',
  },
  {
    id: 307,
    name: 'Ceinture Tortue Rouge',
  },
  {
    id: 308,
    name: 'Ceinture Kolante',
  },
  {
    id: 309,
    name: 'Ceinture Banisation',
  },
  {
    id: 310,
    name: 'Ceinture Banisation Sauvage',
  },
  {
    id: 311,
    name: 'Ceinture du Kwabe',
  },
  {
    id: 312,
    name: 'Ceinture Mulante',
  },
  {
    id: 313,
    name: 'Ceinture Meulante',
  },
  {
    id: 314,
    name: 'Ceinture Dracochoune',
  },
  {
    id: 315,
    name: 'Ceinture Chafeuse',
  },
  {
    id: 316,
    name: 'Ceinture Piquante',
  },
  {
    id: 317,
    name: 'Ceinture Ouginakale',
  },
  {
    id: 318,
    name: 'Anneau Tribal',
  },
  {
    id: 319,
    name: 'Ceinture Bontarienne',
  },
  {
    id: 320,
    name: 'Ceinture Brâkmarienne',
  },
  {
    id: 321,
    name: 'La Xerbo',
  },
  {
    id: 322,
    name: 'Bottes de Satisfaction',
  },
  {
    id: 323,
    name: 'Amulette Argie',
  },
  {
    id: 324,
    name: 'Amulette du Craqueleur des Plaines',
  },
  {
    id: 325,
    name: 'La Maîtrise des Poupées',
  },
  {
    id: 326,
    name: 'Amulette du Renouveau',
  },
  {
    id: 327,
    name: 'Amulette Turquoise',
  },
  {
    id: 328,
    name: 'Corbacape',
  },
  {
    id: 329,
    name: "Ceinture de l'Amant d'Ha",
  },
  {
    id: 330,
    name: 'Amulette du Mineur Sombre',
  },
  {
    id: 331,
    name: "La Feuille d'Hiver",
  },
  {
    id: 332,
    name: 'La Feuille de Printemps',
  },
  {
    id: 333,
    name: "La Feuille d'Eté",
  },
  {
    id: 334,
    name: 'Anneau Forain',
  },
  {
    id: 335,
    name: "Anneau de l'Invocateur Satisfait",
  },
  {
    id: 336,
    name: 'Anneau de Loopine',
  },
  {
    id: 337,
    name: 'Amulette de Shika',
  },
  {
    id: 338,
    name: 'Anneau Nime',
  },
  {
    id: 339,
    name: 'Anneau du Jeune Vald',
  },
  {
    id: 340,
    name: 'Alliance de Farle',
  },
  {
    id: 341,
    name: "Bottes de l'Eleveur de Bouftous",
  },
  {
    id: 342,
    name: 'Souliers Vernis de Porkass',
  },
  {
    id: 343,
    name: 'Dragocoiffe Argile',
  },
  {
    id: 344,
    name: 'Dragocoiffe Ardoise',
  },
  {
    id: 345,
    name: 'Dragocoiffe Charbon',
  },
  {
    id: 346,
    name: 'Chapeau du Mineur Sombre',
  },
  {
    id: 347,
    name: 'Dora Bora',
  },
  {
    id: 348,
    name: 'Korko Kousto',
  },
  {
    id: 349,
    name: 'Casque du Bwork de Bronze',
  },
  {
    id: 350,
    name: 'Tongues Wabbits',
  },
  {
    id: 351,
    name: 'Slip Kangouwou du Wabbit GM',
  },
  {
    id: 352,
    name: 'Amulette "Dents de Wabbits"',
  },
  {
    id: 353,
    name: 'Oreilles de Wabbits',
  },
  {
    id: 354,
    name: 'Sac-Cawotte',
  },
  {
    id: 355,
    name: 'Anneau du Mineur Gogorifiant',
  },
  {
    id: 356,
    name: 'Bottes du Gardien des Égouts',
  },
  {
    id: 357,
    name: 'Chapeau du Marié',
  },
  {
    id: 358,
    name: 'Chapeau de la Mariée',
  },
  {
    id: 359,
    name: 'Cape Hucine',
  },
  {
    id: 360,
    name: "Coiffe de l'Homme Ours",
  },
  {
    id: 361,
    name: "Cape de l'Homme Ours",
  },
  {
    id: 362,
    name: "Bottes de l'Homme Ours",
  },
  {
    id: 363,
    name: "Alliance de l'Homme Ours",
  },
  {
    id: 364,
    name: "Amulette de l'Homme Ours",
  },
  {
    id: 365,
    name: "Ceinture de l'Homme Ours",
  },
  {
    id: 366,
    name: 'Amukwak de Glace',
  },
  {
    id: 367,
    name: 'Kwakanneau de Glace',
  },
  {
    id: 368,
    name: 'Fourbamulette',
  },
  {
    id: 369,
    name: 'Fourballiance',
  },
  {
    id: 370,
    name: 'Fourbabottes',
  },
  {
    id: 371,
    name: 'Ceinture Fourbissante',
  },
  {
    id: 372,
    name: 'Amukwak de Terre',
  },
  {
    id: 373,
    name: 'Amukwak du Vent',
  },
  {
    id: 374,
    name: 'Kwakanneau de Terre',
  },
  {
    id: 375,
    name: 'Kwakanneau de Vent',
  },
  {
    id: 376,
    name: 'Kwakobottes de Glace',
  },
  {
    id: 377,
    name: 'Kwakobottes de Terre',
  },
  {
    id: 378,
    name: 'Kwakobottes de Vent',
  },
  {
    id: 379,
    name: 'Kwape de Terre',
  },
  {
    id: 380,
    name: 'Kwape de Vent',
  },
  {
    id: 381,
    name: 'Kwakture de Terre',
  },
  {
    id: 382,
    name: 'Kwakture de Vent',
  },
  {
    id: 383,
    name: 'Kwakoiffe de Terre',
  },
  {
    id: 384,
    name: 'Kwakoiffe de Vent',
  },
  {
    id: 385,
    name: 'Fourbacapa',
  },
  {
    id: 386,
    name: 'Fourbacoiffe',
  },
  {
    id: 387,
    name: 'Epis de Farle',
  },
  {
    id: 388,
    name: 'Bracelet Magique de Farle',
  },
  {
    id: 389,
    name: 'Amulette Tude',
  },
  {
    id: 390,
    name: 'Sabots de Farle',
  },
  {
    id: 391,
    name: 'Cape de Farle',
  },
  {
    id: 392,
    name: 'Farlature',
  },
  {
    id: 393,
    name: 'Farlacoiffe',
  },
  {
    id: 394,
    name: 'Amulette des Champs',
  },
  {
    id: 395,
    name: 'Anneau Champêtre',
  },
  {
    id: 396,
    name: 'Anneau Thé',
  },
  {
    id: 397,
    name: 'Bottes Champêtres',
  },
  {
    id: 398,
    name: 'Capouze des Champs',
  },
  {
    id: 399,
    name: 'Ceinture Fleurie',
  },
  {
    id: 400,
    name: 'Coiffe Champêtre',
  },
  {
    id: 401,
    name: 'Cape Banale',
  },
  {
    id: 402,
    name: 'Cape Hivernale',
  },
  {
    id: 403,
    name: 'Cache oreilles',
  },
  {
    id: 404,
    name: 'Amulette du Chef Bwork',
  },
  {
    id: 405,
    name: 'Bracelet du Chef Bwork',
  },
  {
    id: 406,
    name: 'Bottes du Chef Bwork',
  },
  {
    id: 407,
    name: 'Cape du Chef Bwork',
  },
  {
    id: 408,
    name: 'Slip du Chef Bwork',
  },
  {
    id: 409,
    name: 'Casque du Chef Bwork',
  },
  {
    id: 410,
    name: 'Amulette du Chef Crocodaille',
  },
  {
    id: 411,
    name: 'Bracelet du Chef Crocodaille',
  },
  {
    id: 412,
    name: 'Pantoufles Crochues du Chef Crocodaille',
  },
  {
    id: 413,
    name: "Petit sac d'écolier du Chef Crocodaille",
  },
  {
    id: 414,
    name: 'Ceinture du Chef Crocodaille',
  },
  {
    id: 415,
    name: 'Coiffe du Chef Crocodaille',
  },
  {
    id: 416,
    name: 'Sanglature',
  },
  {
    id: 417,
    name: 'Pieds du Sanglier',
  },
  {
    id: 418,
    name: 'Anneau du Sanglier',
  },
  {
    id: 419,
    name: 'Araknoton',
  },
  {
    id: 420,
    name: 'Araknoture',
  },
  {
    id: 421,
    name: "L'Araknacoiffe",
  },
  {
    id: 422,
    name: 'Mos Kitano',
  },
  {
    id: 423,
    name: 'Sac du Petit Moskito',
  },
  {
    id: 424,
    name: 'Moskitogalurette',
  },
  {
    id: 425,
    name: 'Amulette du Moskito',
  },
  {
    id: 426,
    name: 'Anneau du Champ Champ',
  },
  {
    id: 427,
    name: 'Alliance Du Champ Champ',
  },
  {
    id: 428,
    name: 'Champcoiffe',
  },
  {
    id: 429,
    name: 'Cape du Champ Champ',
  },
  {
    id: 430,
    name: 'Amulette du Bandit',
  },
  {
    id: 431,
    name: 'Ceinture du Bandit',
  },
  {
    id: 432,
    name: 'Coiffe du Prespic',
  },
  {
    id: 433,
    name: 'Cape du Prespic',
  },
  {
    id: 434,
    name: 'Anneau du Prespic',
  },
  {
    id: 435,
    name: 'Ceinture du Prespic',
  },
  {
    id: 436,
    name: 'Casque du Craqueleur',
  },
  {
    id: 437,
    name: 'Craquelocape',
  },
  {
    id: 438,
    name: 'Bottes du Craqueleur',
  },
  {
    id: 439,
    name: 'Craquamulette',
  },
  {
    id: 440,
    name: 'Ceinture du Craqueleur',
  },
  {
    id: 441,
    name: 'Scaracoiffe Verte',
  },
  {
    id: 442,
    name: 'Scaracoiffe Rouge',
  },
  {
    id: 443,
    name: 'Scaracoiffe Blanche',
  },
  {
    id: 444,
    name: 'Scaracoiffe Bleue',
  },
  {
    id: 445,
    name: 'Scaracape Verte',
  },
  {
    id: 446,
    name: 'Scaracape Bleue',
  },
  {
    id: 447,
    name: 'Scaracape Rouge',
  },
  {
    id: 448,
    name: 'Scaracape Blanche',
  },
  {
    id: 449,
    name: 'Scaranneau Vert',
  },
  {
    id: 450,
    name: 'Scaranneau Rouge',
  },
  {
    id: 451,
    name: 'Scaranneau Blanc',
  },
  {
    id: 452,
    name: 'Scaranneau Bleu',
  },
  {
    id: 453,
    name: 'Scarature Verte',
  },
  {
    id: 454,
    name: 'Scarature Blanche',
  },
  {
    id: 455,
    name: 'Scarature Rouge',
  },
  {
    id: 456,
    name: 'Scarature Bleue',
  },
  {
    id: 457,
    name: 'Coiffe du Mulou',
  },
  {
    id: 458,
    name: 'Bottines du Mulou',
  },
  {
    id: 459,
    name: 'Cape du Mulou',
  },
  {
    id: 460,
    name: 'String du Mulou',
  },
  {
    id: 461,
    name: 'Anneau du Mulou',
  },
  {
    id: 462,
    name: 'Anneau du Bandit',
  },
  {
    id: 463,
    name: 'Dofus Vulbis',
  },
  {
    id: 464,
    name: 'Sulik',
  },
  {
    id: 465,
    name: 'Krokop',
  },
  {
    id: 466,
    name: 'Phalène',
  },
  {
    id: 467,
    name: 'Goyave',
  },
  {
    id: 468,
    name: 'Kannipiou',
  },
  {
    id: 469,
    name: 'Cape Ricéfini',
  },
  {
    id: 470,
    name: 'Cape Hôte',
  },
  {
    id: 471,
    name: 'Cape Houte',
  },
  {
    id: 472,
    name: 'Anneau Stradamus',
  },
  {
    id: 473,
    name: 'Anneau Fioutioure',
  },
  {
    id: 474,
    name: "Alliance d'Elya Wood",
  },
  {
    id: 475,
    name: 'Médaille Lahilama',
  },
  {
    id: 476,
    name: 'Bambamulette',
  },
  {
    id: 477,
    name: "Talisman du Faucheur d'Avoine",
  },
  {
    id: 478,
    name: 'La Résinette',
  },
  {
    id: 479,
    name: "Talisman d'Elya Wood",
  },
  {
    id: 480,
    name: "Cape du Désir O'Boul",
  },
  {
    id: 481,
    name: "La Doubitch O'Boul",
  },
  {
    id: 482,
    name: 'Ceinture de Sangroku',
  },
  {
    id: 483,
    name: 'Pendule du Gudule',
  },
  {
    id: 484,
    name: 'Casque de Maître Nabur',
  },
  {
    id: 485,
    name: 'Couronne du Roi Gelax',
  },
  {
    id: 486,
    name: 'Ceinture Noire de Frank Lee Bruce',
  },
  {
    id: 487,
    name: 'Dofus des Glaces',
  },
  {
    id: 488,
    name: 'Krépite',
  },
  {
    id: 489,
    name: 'Octovius',
  },
  {
    id: 490,
    name: 'Bouclier des Brigandins écorché',
  },
  {
    id: 491,
    name: "Bouclier d'entraînement",
  },
  {
    id: 492,
    name: 'Tongues Baques',
  },
  {
    id: 493,
    name: 'Larvamulette',
  },
  {
    id: 494,
    name: 'Larvabottes',
  },
  {
    id: 495,
    name: 'Larvasac',
  },
  {
    id: 496,
    name: 'Larvacoiffe',
  },
  {
    id: 497,
    name: 'Dofawa',
  },
  {
    id: 498,
    name: 'Dofus Ébène',
  },
  {
    id: 499,
    name: 'Dofus Ivoire',
  },
  {
    id: 500,
    name: 'Anneau Merta',
  },
  {
    id: 501,
    name: 'Alliance Ethnique',
  },
  {
    id: 502,
    name: "Anneau K'Tuelle",
  },
  {
    id: 503,
    name: 'Anneau Ha',
  },
  {
    id: 504,
    name: 'Anneau Hé',
  },
  {
    id: 505,
    name: 'Anneau Zocomial',
  },
  {
    id: 506,
    name: 'Anneau Vice',
  },
  {
    id: 507,
    name: 'Anneau Bsène',
  },
  {
    id: 508,
    name: 'Anneau Karina',
  },
  {
    id: 509,
    name: 'Anneau Piaume',
  },
  {
    id: 510,
    name: 'Anneau Rigami',
  },
  {
    id: 511,
    name: 'Médaille Kido',
  },
  {
    id: 512,
    name: 'Cape Huccino',
  },
  {
    id: 513,
    name: 'Ortiz',
  },
  {
    id: 514,
    name: 'Ceinture Sula',
  },
  {
    id: 515,
    name: 'Xénature',
  },
  {
    id: 516,
    name: 'Holoune',
  },
  {
    id: 517,
    name: 'Piruk',
  },
  {
    id: 518,
    name: 'Solomonk',
  },
  {
    id: 519,
    name: 'Blémiche',
  },
  {
    id: 520,
    name: 'Coiffe du Gaddie',
  },
  {
    id: 521,
    name: 'La Bertheuze',
  },
  {
    id: 522,
    name: 'La Bekille',
  },
  {
    id: 523,
    name: 'Koloss',
  },
  {
    id: 524,
    name: 'Kanistère',
  },
  {
    id: 525,
    name: 'Cape Pandawushu',
  },
  {
    id: 526,
    name: 'Bandeau Pandawushu',
  },
  {
    id: 527,
    name: 'Sandales Macien',
  },
  {
    id: 528,
    name: 'Sandales Humeuses',
  },
  {
    id: 529,
    name: 'Sandales Koliques',
  },
  {
    id: 530,
    name: 'Sandales Hambic',
  },
  {
    id: 531,
    name: 'Sandales Adin',
  },
  {
    id: 532,
    name: 'Sandales Ailuya',
  },
  {
    id: 533,
    name: 'Collier du Tanukouï San',
  },
  {
    id: 534,
    name: 'Chapeau Akwadala',
  },
  {
    id: 535,
    name: 'Chapeau Terrdala',
  },
  {
    id: 536,
    name: 'Chapeau Feudala',
  },
  {
    id: 537,
    name: 'Chapeau Aerdala',
  },
  {
    id: 538,
    name: 'Cape Akwadala',
  },
  {
    id: 539,
    name: 'Cape Terrdala',
  },
  {
    id: 540,
    name: 'Cape Feudala',
  },
  {
    id: 541,
    name: 'Cape Aerdala',
  },
  {
    id: 542,
    name: 'Ceinture Akwadala',
  },
  {
    id: 543,
    name: 'Ceinture Terrdala',
  },
  {
    id: 544,
    name: 'Ceinture Feudala',
  },
  {
    id: 545,
    name: 'Ceinture Aerdala',
  },
  {
    id: 546,
    name: 'Geta Akwadala',
  },
  {
    id: 547,
    name: 'Geta Terrdala',
  },
  {
    id: 548,
    name: 'Geta Feudala',
  },
  {
    id: 549,
    name: 'Geta Aerdala',
  },
  {
    id: 550,
    name: 'Alliance Akwadala',
  },
  {
    id: 551,
    name: 'Alliance Terrdala',
  },
  {
    id: 552,
    name: 'Alliance Feudala',
  },
  {
    id: 553,
    name: 'Alliance Aerdala',
  },
  {
    id: 554,
    name: 'Amulette Akwadala',
  },
  {
    id: 555,
    name: 'Amulette Terrdala',
  },
  {
    id: 556,
    name: 'Amulette Feudala',
  },
  {
    id: 557,
    name: 'Amulette Aerdala',
  },
  {
    id: 558,
    name: 'Coiffe du Kitsou',
  },
  {
    id: 559,
    name: 'Cape du Kitsou',
  },
  {
    id: 560,
    name: 'Anneau du Kitsou',
  },
  {
    id: 561,
    name: 'Amulette du Kitsou',
  },
  {
    id: 562,
    name: 'Sandales Titude',
  },
  {
    id: 563,
    name: 'Bottes Harry',
  },
  {
    id: 564,
    name: 'Cape Itaineflam',
  },
  {
    id: 565,
    name: "Coiffe du Bimd'Oule",
  },
  {
    id: 566,
    name: 'Capodindo',
  },
  {
    id: 567,
    name: 'Chapodindo',
  },
  {
    id: 568,
    name: 'Botodindo',
  },
  {
    id: 569,
    name: 'Anodindo',
  },
  {
    id: 570,
    name: 'Goldoture',
  },
  {
    id: 571,
    name: 'Ougalurette',
  },
  {
    id: 572,
    name: 'Dofus Ocre',
  },
  {
    id: 573,
    name: 'Amulette du Boufcoul',
  },
  {
    id: 574,
    name: 'Anneau du Boufcoul',
  },
  {
    id: 575,
    name: 'Bottes du Boufcoul',
  },
  {
    id: 576,
    name: 'Cape du Boufcoul',
  },
  {
    id: 577,
    name: 'Ceinture du Boufcoul',
  },
  {
    id: 578,
    name: 'Coiffe du Boufcoul',
  },
  {
    id: 579,
    name: 'Coiffe du Koulosse',
  },
  {
    id: 580,
    name: 'Sac du Koulosse',
  },
  {
    id: 581,
    name: 'Bottes du Koulosse',
  },
  {
    id: 582,
    name: "Ceinture d'une Femme en Or",
  },
  {
    id: 583,
    name: 'Couronne du Tofu Royal',
  },
  {
    id: 584,
    name: 'Amulette du Koalak',
  },
  {
    id: 585,
    name: 'Anneau du Koalak',
  },
  {
    id: 586,
    name: 'Bottes du Koalak',
  },
  {
    id: 587,
    name: 'Cape du Koalak',
  },
  {
    id: 588,
    name: 'Ceinture du Koalak',
  },
  {
    id: 589,
    name: 'Coiffe du Koalak',
  },
  {
    id: 590,
    name: 'Dofus Kaliptus',
  },
  {
    id: 591,
    name: 'Amulette du Tofu',
  },
  {
    id: 592,
    name: 'Anneau du Tofu',
  },
  {
    id: 593,
    name: 'Pantoufles du Tofu',
  },
  {
    id: 594,
    name: 'Cape du Tofu',
  },
  {
    id: 595,
    name: 'Ceinture du Tofu',
  },
  {
    id: 596,
    name: 'Kaskofu',
  },
  {
    id: 597,
    name: 'Scaracoiffe Dorée',
  },
  {
    id: 598,
    name: 'Scaracape Dorée',
  },
  {
    id: 599,
    name: 'Scarature Dorée',
  },
  {
    id: 600,
    name: 'Amulette Scarabosse Doré',
  },
  {
    id: 601,
    name: 'Anneau du Scarabosse Doré',
  },
  {
    id: 602,
    name: 'Scarabottes Dorées',
  },
  {
    id: 603,
    name: 'Amulette Paysanne',
  },
  {
    id: 604,
    name: 'Ceinturemuda du Paysan',
  },
  {
    id: 605,
    name: 'Bob du Paysan',
  },
  {
    id: 606,
    name: 'Mitaines Mitées du Paysan',
  },
  {
    id: 607,
    name: 'Bottes Paysannes',
  },
  {
    id: 608,
    name: 'Amuloumulette',
  },
  {
    id: 609,
    name: 'Sac du Paysan',
  },
  {
    id: 610,
    name: 'Scarature Noire',
  },
  {
    id: 611,
    name: 'Scaracoiffe Noire',
  },
  {
    id: 612,
    name: 'Scaracape Noire',
  },
  {
    id: 613,
    name: 'Scaranneau Noir',
  },
  {
    id: 614,
    name: 'Bottes Du Craqueleur Légendaire',
  },
  {
    id: 615,
    name: 'Casque du Craqueleur Légendaire',
  },
  {
    id: 616,
    name: 'Craquanneau Légendaire',
  },
  {
    id: 617,
    name: 'Amulette du Craqueleur Légendaire',
  },
  {
    id: 618,
    name: 'Ceinture du Craqueleur Légendaire',
  },
  {
    id: 619,
    name: 'Tête de Citwouille',
  },
  {
    id: 620,
    name: 'Kabuto',
  },
  {
    id: 621,
    name: 'Craquelocape Légendaire',
  },
  {
    id: 622,
    name: 'Amulette du Piou Rouge',
  },
  {
    id: 623,
    name: 'Amulette du Piou Bleu',
  },
  {
    id: 624,
    name: 'Amulette du Piou Violet',
  },
  {
    id: 625,
    name: 'Amulette du Piou Vert',
  },
  {
    id: 626,
    name: 'Amulette du Piou Jaune',
  },
  {
    id: 627,
    name: 'Amulette du Piou Rose',
  },
  {
    id: 628,
    name: 'Anneau du Piou Rouge',
  },
  {
    id: 629,
    name: 'Anneau du Piou Bleu',
  },
  {
    id: 630,
    name: 'Anneau du Piou Violet',
  },
  {
    id: 631,
    name: 'Anneau du Piou Vert',
  },
  {
    id: 632,
    name: 'Anneau du Piou Jaune',
  },
  {
    id: 633,
    name: 'Anneau du Piou Rose',
  },
  {
    id: 634,
    name: 'Sandales du Piou Rouge',
  },
  {
    id: 635,
    name: 'Sandales du Piou Bleu',
  },
  {
    id: 636,
    name: 'Sandales du Piou Violet',
  },
  {
    id: 637,
    name: 'Sandales du Piou Vert',
  },
  {
    id: 638,
    name: 'Sandales du Piou Jaune',
  },
  {
    id: 639,
    name: 'Sandales du Piou Rose',
  },
  {
    id: 640,
    name: 'Cape du Piou Rouge',
  },
  {
    id: 641,
    name: 'Cape du Piou Bleu',
  },
  {
    id: 642,
    name: 'Cape du Piou Vert',
  },
  {
    id: 643,
    name: 'Cape du Piou Violet',
  },
  {
    id: 644,
    name: 'Cape du Piou Rose',
  },
  {
    id: 645,
    name: 'Cape du Piou Jaune',
  },
  {
    id: 646,
    name: 'Ceinture du Piou Rouge',
  },
  {
    id: 647,
    name: 'Ceinture du Piou Bleu',
  },
  {
    id: 648,
    name: 'Ceinture du Piou Violet',
  },
  {
    id: 649,
    name: 'Ceinture du Piou Vert',
  },
  {
    id: 650,
    name: 'Ceinture du Piou Jaune',
  },
  {
    id: 651,
    name: 'Ceinture du Piou Rose',
  },
  {
    id: 652,
    name: 'Chapeau du Piou Rouge',
  },
  {
    id: 653,
    name: 'Chapeau du Piou Bleu',
  },
  {
    id: 654,
    name: 'Chapeau du Piou Violet',
  },
  {
    id: 655,
    name: 'Chapeau du Piou Vert',
  },
  {
    id: 656,
    name: 'Chapeau du Piou Jaune',
  },
  {
    id: 657,
    name: 'Chapeau du Piou Rose',
  },
  {
    id: 658,
    name: 'Amulette en Mousse',
  },
  {
    id: 659,
    name: 'Anneau en Mousse',
  },
  {
    id: 660,
    name: 'Bottes en Mousse',
  },
  {
    id: 661,
    name: 'Ceinture en Mousse',
  },
  {
    id: 662,
    name: 'Cape en Mousse',
  },
  {
    id: 663,
    name: 'Coiffe en Mousse',
  },
  {
    id: 664,
    name: 'Bandeau Kaliptus',
  },
  {
    id: 665,
    name: 'La Meulette',
  },
  {
    id: 666,
    name: 'Anneau du Meulou',
  },
  {
    id: 667,
    name: 'Bottes du Meulou',
  },
  {
    id: 668,
    name: 'Cape du Meulou',
  },
  {
    id: 669,
    name: 'Ceinture du Meulou',
  },
  {
    id: 670,
    name: 'Coiffe du Meulou',
  },
  {
    id: 671,
    name: 'Collier du Minotoror',
  },
  {
    id: 672,
    name: 'Anneau du Minotoror',
  },
  {
    id: 673,
    name: 'Bracelet du Minotot',
  },
  {
    id: 674,
    name: 'Anneau du Dragon Cochon',
  },
  {
    id: 675,
    name: 'Collier du Minotot',
  },
  {
    id: 676,
    name: 'Collier du Dragon Cochon',
  },
  {
    id: 677,
    name: 'Bottes du Minotoror',
  },
  {
    id: 678,
    name: 'Sandales du Minotot',
  },
  {
    id: 679,
    name: 'Mules du Dragon Cochon',
  },
  {
    id: 680,
    name: 'Cape du Minotoror',
  },
  {
    id: 681,
    name: 'Cape du Minotot',
  },
  {
    id: 682,
    name: 'Cape du Dragon Cochon',
  },
  {
    id: 683,
    name: 'Ceinture du Minotoror',
  },
  {
    id: 684,
    name: 'Ceinture du Minotot',
  },
  {
    id: 685,
    name: 'Coiffe du Minotot',
  },
  {
    id: 686,
    name: 'Coiffe du Dragon Cochon',
  },
  {
    id: 687,
    name: 'Cape Dragoeuf',
  },
  {
    id: 688,
    name: 'Casque Dragoeuf',
  },
  {
    id: 689,
    name: 'Ceinture du Dragoeuf',
  },
  {
    id: 690,
    name: 'Anneau du Dragoeuf',
  },
  {
    id: 691,
    name: 'Amulette du Dragoeuf',
  },
  {
    id: 692,
    name: 'Bottes du Dragoeuf',
  },
  {
    id: 693,
    name: 'Epis de Shika',
  },
  {
    id: 694,
    name: 'Bracelet Magique de Shika',
  },
  {
    id: 695,
    name: 'Sabots de Shika',
  },
  {
    id: 696,
    name: 'Cape de Shika',
  },
  {
    id: 697,
    name: 'Shikature',
  },
  {
    id: 698,
    name: 'Shikacoiffe',
  },
  {
    id: 699,
    name: 'Coiffe du Dragoeuf volant',
  },
  {
    id: 700,
    name: 'Coiffe de la Dragueuse',
  },
  {
    id: 701,
    name: 'Cape du Papa Nowel',
  },
  {
    id: 702,
    name: 'Chapeau du Papa Nowel',
  },
  {
    id: 703,
    name: 'Bottananas',
  },
  {
    id: 704,
    name: 'Cape du Petit Chapon Rouge',
  },
  {
    id: 705,
    name: 'Billréole',
  },
  {
    id: 706,
    name: 'Masque du Rat Noir',
  },
  {
    id: 707,
    name: 'Cape du Rat Noir',
  },
  {
    id: 708,
    name: 'Collier du Rat Noir',
  },
  {
    id: 709,
    name: 'Bottes du Rat Noir',
  },
  {
    id: 710,
    name: 'Ceinture du Rat Noir',
  },
  {
    id: 711,
    name: 'Anneau du Rat Noir',
  },
  {
    id: 712,
    name: 'Coiffe du Rat Blanc',
  },
  {
    id: 713,
    name: 'Cape du Rat Blanc',
  },
  {
    id: 714,
    name: 'Collier du Rat Blanc',
  },
  {
    id: 715,
    name: 'Gantelet du Rat Blanc',
  },
  {
    id: 716,
    name: 'Ceinture du Rat Blanc',
  },
  {
    id: 717,
    name: 'Bottes du Rat Blanc',
  },
  {
    id: 718,
    name: 'Coiffe Cérémoniale du Seigneur des Rats',
  },
  {
    id: 719,
    name: 'Cape Cérémoniale du Seigneur des Rats',
  },
  {
    id: 720,
    name: 'Collier Cérémonial du Seigneur des Rats',
  },
  {
    id: 721,
    name: 'Anneau Cérémonial du Seigneur des Rats',
  },
  {
    id: 722,
    name: 'Ceinture Cérémoniale du Seigneur des Rats',
  },
  {
    id: 723,
    name: 'Bottes Cérémoniales du Seigneur des Rats',
  },
  {
    id: 724,
    name: 'Abracaska Ancestral',
  },
  {
    id: 725,
    name: 'Abracapa Ancestrale',
  },
  {
    id: 726,
    name: 'Torque Ancestral',
  },
  {
    id: 727,
    name: 'Anneau Ancestral',
  },
  {
    id: 728,
    name: 'Protège-Tibias Ancestraux',
  },
  {
    id: 729,
    name: 'Abrature Ancestrale',
  },
  {
    id: 730,
    name: 'Talisman du Chêne Mou',
  },
  {
    id: 731,
    name: 'Anneau du Chêne Mou',
  },
  {
    id: 732,
    name: 'Tongues du dimanche du Chêne Mou',
  },
  {
    id: 733,
    name: 'Cape Usée du Chêne Mou',
  },
  {
    id: 734,
    name: 'String Automnal du Chêne Mou',
  },
  {
    id: 735,
    name: 'Coiffe du Chêne Mou',
  },
  {
    id: 736,
    name: 'La cape rouge',
  },
  {
    id: 737,
    name: 'Gobtroteur',
  },
  {
    id: 738,
    name: 'Ruskauffe',
  },
  {
    id: 739,
    name: 'Le Floude',
  },
  {
    id: 740,
    name: "La Cape S'loque",
  },
  {
    id: 741,
    name: 'Les Incrustes',
  },
  {
    id: 742,
    name: 'La Spamette',
  },
  {
    id: 743,
    name: 'Le Plussain',
  },
  {
    id: 744,
    name: "Le S'Mesme",
  },
  {
    id: 745,
    name: 'Casque Keutumedi',
  },
  {
    id: 746,
    name: 'Chapeau Leufère',
  },
  {
    id: 747,
    name: 'Chapeau Grave',
  },
  {
    id: 748,
    name: 'Bonnet Nufar',
  },
  {
    id: 749,
    name: 'Coiffe Fère',
  },
  {
    id: 750,
    name: 'Chapeau Tyron',
  },
  {
    id: 751,
    name: 'Bonnet Spairance',
  },
  {
    id: 752,
    name: 'Capuche Apin',
  },
  {
    id: 753,
    name: 'Chapeau Lithique',
  },
  {
    id: 754,
    name: 'Coiffe de Robbie Capuche',
  },
  {
    id: 755,
    name: 'Bonnet Toual',
  },
  {
    id: 756,
    name: 'Chapeau Taufeu',
  },
  {
    id: 757,
    name: 'Cape Aurale',
  },
  {
    id: 758,
    name: 'Cape Aillé',
  },
  {
    id: 759,
    name: 'Cape Routh',
  },
  {
    id: 760,
    name: 'Cape Huchon',
  },
  {
    id: 761,
    name: 'Cape Sulhit',
  },
  {
    id: 762,
    name: 'Cape Hitton',
  },
  {
    id: 763,
    name: 'Cape Ytale',
  },
  {
    id: 764,
    name: 'Cape Lyne',
  },
  {
    id: 765,
    name: 'Cape Wéra',
  },
  {
    id: 766,
    name: 'Cape Hulco',
  },
  {
    id: 767,
    name: 'Cape Hadosse',
  },
  {
    id: 768,
    name: 'Cape Haharnum',
  },
  {
    id: 769,
    name: 'Sangle Hynère',
  },
  {
    id: 770,
    name: 'Ceinture Buhlent',
  },
  {
    id: 771,
    name: 'Sangle Glinglin',
  },
  {
    id: 772,
    name: 'Ceinture Lupine',
  },
  {
    id: 773,
    name: 'Sangle Holon',
  },
  {
    id: 774,
    name: 'Ceinture Luthe',
  },
  {
    id: 775,
    name: 'Sangle Hans',
  },
  {
    id: 776,
    name: 'Ceinture Bodiézèle',
  },
  {
    id: 777,
    name: 'Sangle Huée',
  },
  {
    id: 778,
    name: 'Sangle Cible',
  },
  {
    id: 779,
    name: 'Gaine Hage',
  },
  {
    id: 780,
    name: 'Ceinture Gessant',
  },
  {
    id: 781,
    name: 'Bottes Antrin',
  },
  {
    id: 782,
    name: 'Charentaises à poils',
  },
  {
    id: 783,
    name: 'Bottes Hox',
  },
  {
    id: 784,
    name: 'Bottes Hairo',
  },
  {
    id: 785,
    name: 'Bottes Ulisme',
  },
  {
    id: 786,
    name: 'Bottes Hanik',
  },
  {
    id: 787,
    name: 'Tong Aclou',
  },
  {
    id: 788,
    name: 'Bottes Swana',
  },
  {
    id: 789,
    name: 'Dofus Nébuleux',
  },
  {
    id: 790,
    name: 'Coiffe du Tynril',
  },
  {
    id: 791,
    name: 'Le Nahitse',
  },
  {
    id: 792,
    name: 'Getas Bernacle',
  },
  {
    id: 793,
    name: 'Anneau Bhli',
  },
  {
    id: 794,
    name: 'Bague Houx',
  },
  {
    id: 795,
    name: 'Bague Héra',
  },
  {
    id: 796,
    name: 'Bague Harre',
  },
  {
    id: 797,
    name: 'Anneau Tassion',
  },
  {
    id: 798,
    name: 'Anneau Stalgik',
  },
  {
    id: 799,
    name: 'Anneau Zamour',
  },
  {
    id: 800,
    name: 'Anneau Raille',
  },
  {
    id: 801,
    name: 'Anneau Hell',
  },
  {
    id: 802,
    name: 'Anneau Tilus',
  },
  {
    id: 803,
    name: 'Anneau Pwal',
  },
  {
    id: 804,
    name: 'Anneau Pitale',
  },
  {
    id: 805,
    name: 'Chaussures Lepon-Davignon',
  },
  {
    id: 806,
    name: 'Bottes Antouche',
  },
  {
    id: 807,
    name: 'Bottes Deuradi',
  },
  {
    id: 808,
    name: 'Cape Souveraine du Roissingue',
  },
  {
    id: 809,
    name: 'Cape de la Ouassingue',
  },
  {
    id: 810,
    name: 'Masque du Sergent Zoth',
  },
  {
    id: 811,
    name: 'Coiffe du Disciple Zoth',
  },
  {
    id: 812,
    name: "Masque de l'Abrakleur clair",
  },
  {
    id: 813,
    name: "Masque de l'Abrakleur sombre",
  },
  {
    id: 814,
    name: 'Kaskargo',
  },
  {
    id: 815,
    name: 'Chapeau de Barbroussa',
  },
  {
    id: 816,
    name: 'Masque Vaudou Eth',
  },
  {
    id: 817,
    name: 'Masque Vaudou Jav',
  },
  {
    id: 818,
    name: 'Masque Vaudou Sarbak',
  },
  {
    id: 819,
    name: 'Masque Vaudou Ark',
  },
  {
    id: 820,
    name: 'Chapeau de Crocodaille Dandi',
  },
  {
    id: 821,
    name: 'Capuche Souveraine du Roissingue',
  },
  {
    id: 822,
    name: 'Capuche de la Ouassingue',
  },
  {
    id: 823,
    name: 'Chapeau de la Gamine Zoth',
  },
  {
    id: 824,
    name: 'Casque du Guerrier Zoth',
  },
  {
    id: 825,
    name: 'Coiffe du Maître Zoth',
  },
  {
    id: 826,
    name: 'Crack Sparrow’s Own Withered Hat',
  },
  {
    id: 827,
    name: 'Ceinture Rasboulaire du Rasboul',
  },
  {
    id: 828,
    name: 'Bottes Horchons',
  },
  {
    id: 829,
    name: 'Sceau Souverain du Roissingue',
  },
  {
    id: 830,
    name: 'Alliance de Corail',
  },
  {
    id: 831,
    name: 'Sandales Circulaires du Kimbo',
  },
  {
    id: 832,
    name: 'Ceinture Bitoufale de Prosper Youpla',
  },
  {
    id: 833,
    name: 'Zothulette',
  },
  {
    id: 834,
    name: 'Anneau Skargo',
  },
  {
    id: 835,
    name: 'Puissante Cape Fulgurante',
  },
  {
    id: 836,
    name: 'Cape de la Meupette',
  },
  {
    id: 837,
    name: "Bottines en bois d'abrakleur",
  },
  {
    id: 838,
    name: 'Ceinture sombre en Abrakleur',
  },
  {
    id: 839,
    name: 'Ceinture Claire en Abrakleur',
  },
  {
    id: 840,
    name: 'Palmano',
  },
  {
    id: 841,
    name: 'Krustoture',
  },
  {
    id: 842,
    name: 'Ouassulette',
  },
  {
    id: 843,
    name: "Voile d'encre",
  },
  {
    id: 844,
    name: 'Kralano',
  },
  {
    id: 845,
    name: 'Anneau Poli',
  },
  {
    id: 846,
    name: 'Amufafah',
  },
  {
    id: 847,
    name: 'Anneau Solo',
  },
  {
    id: 848,
    name: 'Casque amélioré',
  },
  {
    id: 849,
    name: 'Ailes en bois améliorées',
  },
  {
    id: 850,
    name: 'Casque du Bitouf Aérien',
  },
  {
    id: 851,
    name: 'Annolamour',
  },
  {
    id: 852,
    name: 'Chapeau de la Fin Patraque',
  },
  {
    id: 853,
    name: 'Cape de la Fin Patraque',
  },
  {
    id: 854,
    name: 'Blopanneau Griotte',
  },
  {
    id: 855,
    name: 'Blopanneau Reinette',
  },
  {
    id: 856,
    name: 'Blopanneau Coco',
  },
  {
    id: 857,
    name: 'Blopanneau Indigo',
  },
  {
    id: 858,
    name: 'Blopanneau Griotte Royal',
  },
  {
    id: 859,
    name: 'Blopanneau Reinette Royal',
  },
  {
    id: 860,
    name: 'Blopanneau Coco Royal',
  },
  {
    id: 861,
    name: 'Blopanneau Indigo Royal',
  },
  {
    id: 862,
    name: 'Ougamulette',
  },
  {
    id: 863,
    name: 'Anneau Colerette',
  },
  {
    id: 864,
    name: 'Anneau Chevelu',
  },
  {
    id: 865,
    name: 'Alliance Boletée',
  },
  {
    id: 866,
    name: 'Bottines des sous-bois',
  },
  {
    id: 867,
    name: 'Chaussons Pignons',
  },
  {
    id: 868,
    name: 'Caprin',
  },
  {
    id: 869,
    name: 'Capignon',
  },
  {
    id: 870,
    name: 'String Tue-Mouche',
  },
  {
    id: 871,
    name: 'Ceinture Mycosine',
  },
  {
    id: 872,
    name: 'Tranche des Sous-bois',
  },
  {
    id: 873,
    name: 'Ougature',
  },
  {
    id: 874,
    name: 'Chapignon',
  },
  {
    id: 875,
    name: 'Blopanneau Multicolore Royal',
  },
  {
    id: 876,
    name: 'Amublop Griotte',
  },
  {
    id: 877,
    name: 'Amublop Reinette',
  },
  {
    id: 878,
    name: 'Amublop Coco',
  },
  {
    id: 879,
    name: 'Amublop Indigo',
  },
  {
    id: 880,
    name: 'Amublop Griotte Royale',
  },
  {
    id: 881,
    name: 'Amublop Reinette Royale',
  },
  {
    id: 882,
    name: 'Amublop Coco Royale',
  },
  {
    id: 883,
    name: 'Amublop Indigo Royale',
  },
  {
    id: 884,
    name: 'Amublop Multicolore Royale',
  },
  {
    id: 885,
    name: 'Bloptes Griottes',
  },
  {
    id: 886,
    name: 'Bloptes Reinette',
  },
  {
    id: 887,
    name: 'Bloptes Coco',
  },
  {
    id: 888,
    name: 'Bloptes Indigo',
  },
  {
    id: 889,
    name: 'Bloptes Griotte Royales',
  },
  {
    id: 890,
    name: 'Bloptes Reinette Royales',
  },
  {
    id: 891,
    name: 'Bloptes Coco Royales',
  },
  {
    id: 892,
    name: 'Bloptes Indigo Royales',
  },
  {
    id: 893,
    name: 'Bloptes Multicolores Royales',
  },
  {
    id: 894,
    name: 'Blopture Griotte',
  },
  {
    id: 895,
    name: 'Blopture Reinette',
  },
  {
    id: 896,
    name: 'Blopture Coco',
  },
  {
    id: 897,
    name: 'Blopture Indigo',
  },
  {
    id: 898,
    name: 'Blopture Griotte Royale',
  },
  {
    id: 899,
    name: 'Blopture Reinette Royale',
  },
  {
    id: 900,
    name: 'Blopture Coco Royale',
  },
  {
    id: 901,
    name: 'Blopture Indigo Royale',
  },
  {
    id: 902,
    name: 'Blopture Multicolore Royale',
  },
  {
    id: 903,
    name: 'Bracelet Ventré',
  },
  {
    id: 904,
    name: 'Anneau Bliteré',
  },
  {
    id: 905,
    name: 'Amulette Ripage',
  },
  {
    id: 906,
    name: 'Cape Erforée',
  },
  {
    id: 907,
    name: 'Casque Harnage',
  },
  {
    id: 908,
    name: 'Bottes Répané',
  },
  {
    id: 909,
    name: 'Ceinture Toré',
  },
  {
    id: 910,
    name: 'Ceinture de Flash Gorgone',
  },
  {
    id: 911,
    name: 'Beignature',
  },
  {
    id: 912,
    name: 'Tartamulette',
  },
  {
    id: 913,
    name: 'Anneau Paupayahn',
  },
  {
    id: 914,
    name: 'Bottes Paupayahn',
  },
  {
    id: 915,
    name: 'Cape Obvijevan',
  },
  {
    id: 916,
    name: 'Chapeau Obvijevan',
  },
  {
    id: 917,
    name: 'Amulette Obvijevan',
  },
  {
    id: 918,
    name: 'Anneau Obvijevan',
  },
  {
    id: 919,
    name: 'Tutu Rose',
  },
  {
    id: 920,
    name: 'Chapblopignon',
  },
  {
    id: 921,
    name: 'Blopronne Royale',
  },
  {
    id: 922,
    name: 'Pantoufrelons',
  },
  {
    id: 923,
    name: 'Jambanneau',
  },
  {
    id: 924,
    name: 'Ceinture Lardière',
  },
  {
    id: 925,
    name: "Ceinture du bois de l'est",
  },
  {
    id: 926,
    name: "Bottes du bois de l'est",
  },
  {
    id: 927,
    name: 'Anneau Zest',
  },
  {
    id: 928,
    name: 'Bague Cristalline',
  },
  {
    id: 929,
    name: 'Ceinture Cristalline',
  },
  {
    id: 930,
    name: 'Pompamulette',
  },
  {
    id: 931,
    name: 'Pompanneau',
  },
  {
    id: 932,
    name: 'Le Kim',
  },
  {
    id: 933,
    name: 'Amunite',
  },
  {
    id: 934,
    name: 'Kralamansion',
  },
  {
    id: 935,
    name: 'Chapeau de la Sain Ballotin',
  },
  {
    id: 936,
    name: 'Souliers laqués du Parrain',
  },
  {
    id: 937,
    name: 'Grosse Bagouze du Parrain',
  },
  {
    id: 938,
    name: 'Caleçon à bretelles du Parrain',
  },
  {
    id: 939,
    name: 'Ceinture du Black Wab',
  },
  {
    id: 940,
    name: 'Bottines du Black Wab',
  },
  {
    id: 941,
    name: 'Sandales Papayou',
  },
  {
    id: 942,
    name: 'Les Sleumpettes',
  },
  {
    id: 943,
    name: 'Amulette Papayou',
  },
  {
    id: 944,
    name: 'Collier Sleump',
  },
  {
    id: 945,
    name: 'Anneau de Slait',
  },
  {
    id: 946,
    name: 'Bottes de Slait',
  },
  {
    id: 947,
    name: 'Bracelet du Tétounik',
  },
  {
    id: 948,
    name: 'Chaussures du Tétounik',
  },
  {
    id: 949,
    name: 'Fulgu au poing',
  },
  {
    id: 950,
    name: 'Golbottes',
  },
  {
    id: 951,
    name: 'Bottes Siks Won Naïne',
  },
  {
    id: 952,
    name: 'Ceinture Siks Won Naïne',
  },
  {
    id: 953,
    name: 'Anneau de la mort',
  },
  {
    id: 954,
    name: 'Les Chaplures',
  },
  {
    id: 955,
    name: 'La Chaplivate',
  },
  {
    id: 956,
    name: 'Anneau du Vampyre',
  },
  {
    id: 957,
    name: 'Amulette du Vampyre',
  },
  {
    id: 958,
    name: 'Ceinture du Vampyre',
  },
  {
    id: 959,
    name: 'Cape du Vampyre',
  },
  {
    id: 960,
    name: 'Bottes du Vampyre',
  },
  {
    id: 961,
    name: 'Masque du Vampyre',
  },
  {
    id: 962,
    name: 'Yugolette',
  },
  {
    id: 963,
    name: 'Yugoufle',
  },
  {
    id: 964,
    name: 'Yugure',
  },
  {
    id: 965,
    name: 'Bouclier trophée du Dark Vlad',
  },
  {
    id: 966,
    name: 'Bouclier trophée du Moon',
  },
  {
    id: 967,
    name: 'Bouclier trophée du Chêne Mou',
  },
  {
    id: 968,
    name: 'Bouclier trophée du Dragon Cochon',
  },
  {
    id: 969,
    name: 'Bouclier trophée du Kimbo',
  },
  {
    id: 970,
    name: 'Bouclier trophée du Wa Wabbit',
  },
  {
    id: 971,
    name: 'Bouclier trophée du Koulosse',
  },
  {
    id: 972,
    name: 'Bouclier trophée du Sphincter Cell',
  },
  {
    id: 973,
    name: 'Bouclier trophée du Bworker',
  },
  {
    id: 974,
    name: 'Chispottes',
  },
  {
    id: 975,
    name: 'Mitaines de Chisp',
  },
  {
    id: 976,
    name: 'Collertue',
  },
  {
    id: 977,
    name: 'Libottes',
  },
  {
    id: 978,
    name: "L'Esteban",
  },
  {
    id: 979,
    name: 'Anneau solaire',
  },
  {
    id: 980,
    name: 'Collier de Noké',
  },
  {
    id: 981,
    name: 'Oxano',
  },
  {
    id: 982,
    name: 'Bottines de la Denrée',
  },
  {
    id: 983,
    name: "L'oxolature",
  },
  {
    id: 984,
    name: 'Les Maidartes',
  },
  {
    id: 985,
    name: 'Gantelet du Real Boitar',
  },
  {
    id: 986,
    name: 'Gantelet des Bouftons Rouges',
  },
  {
    id: 987,
    name: 'Ceinture de Tolot',
  },
  {
    id: 988,
    name: 'Ceinture de Mounu',
  },
  {
    id: 989,
    name: 'Bottes du Real Boitar',
  },
  {
    id: 990,
    name: 'Bottes des Bouftons Rouges',
  },
  {
    id: 991,
    name: 'Amulette de Grüt',
  },
  {
    id: 992,
    name: 'Ceinture de Grüt',
  },
  {
    id: 993,
    name: 'Bottes de Grüt',
  },
  {
    id: 994,
    name: 'Anneau de Kocksis',
  },
  {
    id: 995,
    name: 'Bottes de Kocksis',
  },
  {
    id: 996,
    name: 'Ceinture de Kocksis',
  },
  {
    id: 997,
    name: 'Amulette de Gobeuf',
  },
  {
    id: 998,
    name: 'Ceinture de Gobeuf',
  },
  {
    id: 999,
    name: 'Anneau de Gobeuf',
  },
  {
    id: 1000,
    name: 'Amulette de Laikteur',
  },
  {
    id: 1001,
    name: 'Anneau de Laikteur',
  },
  {
    id: 1002,
    name: 'Bottes de Laikteur',
  },
  {
    id: 1003,
    name: 'Amulette de Rekto Topi',
  },
  {
    id: 1004,
    name: 'Ceinture de Rekto Topi',
  },
  {
    id: 1005,
    name: 'Bottes de Rekto Topi',
  },
  {
    id: 1006,
    name: 'Anneau de Grizou',
  },
  {
    id: 1007,
    name: 'Bottes de Grizou',
  },
  {
    id: 1008,
    name: 'Ceinture de Grizou',
  },
  {
    id: 1009,
    name: 'Casque du Roks Or',
  },
  {
    id: 1010,
    name: 'Cape du Roks Or',
  },
  {
    id: 1011,
    name: 'Anneau du Roks Or',
  },
  {
    id: 1012,
    name: 'Ceinture du Roks Or',
  },
  {
    id: 1013,
    name: "Amulette de l'intrépide",
  },
  {
    id: 1014,
    name: "Anneau de l'intrépide",
  },
  {
    id: 1015,
    name: "Bottes de l'intrépide",
  },
  {
    id: 1016,
    name: "Bouclier de l'intrépide",
  },
  {
    id: 1017,
    name: "Ceinture de l'intrépide",
  },
  {
    id: 1018,
    name: "Cape de l'intrépide",
  },
  {
    id: 1019,
    name: "Chapeau de l'intrépide",
  },
  {
    id: 1020,
    name: 'Casque de boufbowl',
  },
  {
    id: 1021,
    name: 'Banana Cape',
  },
  {
    id: 1022,
    name: 'Coiffe Wouaf',
  },
  {
    id: 1023,
    name: 'Boufbamu',
  },
  {
    id: 1024,
    name: 'Phéro-Cape',
  },
  {
    id: 1025,
    name: "Bottes d'Hulkrap",
  },
  {
    id: 1026,
    name: 'Bottes de Klüme',
  },
  {
    id: 1027,
    name: "Ceinture d'Hulkrap",
  },
  {
    id: 1028,
    name: 'Ceinture de Klüme',
  },
  {
    id: 1029,
    name: 'Ceinture de Kloug',
  },
  {
    id: 1030,
    name: "Amulette d'Hulkrap",
  },
  {
    id: 1031,
    name: 'Amulette de Kloug',
  },
  {
    id: 1032,
    name: 'Anneau de Klüme',
  },
  {
    id: 1033,
    name: 'Anneau de Kloug',
  },
  {
    id: 1034,
    name: 'Grozillamu',
  },
  {
    id: 1035,
    name: 'Dokille',
  },
  {
    id: 1036,
    name: 'Anneau du Corbeau Noir',
  },
  {
    id: 1037,
    name: 'Bottes du Corbeau Noir',
  },
  {
    id: 1038,
    name: 'Bottes de Rapine',
  },
  {
    id: 1039,
    name: 'Ceinture de Rapine',
  },
  {
    id: 1040,
    name: 'Amulette de Rapine',
  },
  {
    id: 1041,
    name: 'Sac ripant',
  },
  {
    id: 1042,
    name: 'Anneau de Phong Huss',
  },
  {
    id: 1043,
    name: 'Ceinture de Phong Huss',
  },
  {
    id: 1044,
    name: 'Bottes de Phong Huss',
  },
  {
    id: 1045,
    name: "Amulette d'Hectaupe",
  },
  {
    id: 1046,
    name: "Anneau d'Hectaupe",
  },
  {
    id: 1047,
    name: "Ceinture d'Hectaupe",
  },
  {
    id: 1048,
    name: 'Givrature',
  },
  {
    id: 1049,
    name: 'Givrabottes',
  },
  {
    id: 1050,
    name: 'Cordon Père au gnon',
  },
  {
    id: 1051,
    name: 'Clémentamulette',
  },
  {
    id: 1052,
    name: 'Clémentobottes',
  },
  {
    id: 1053,
    name: 'Ceinture Pomdeupin',
  },
  {
    id: 1054,
    name: 'Anneau Pomdeupin',
  },
  {
    id: 1055,
    name: 'Bottes de Lonne',
  },
  {
    id: 1056,
    name: 'Bottes de Boufbowl',
  },
  {
    id: 1057,
    name: 'Bague de Boufbowl',
  },
  {
    id: 1058,
    name: 'Ceinture de Gadjète',
  },
  {
    id: 1059,
    name: 'Anneau de Gadjète',
  },
  {
    id: 1060,
    name: 'Bottes de Grilliane',
  },
  {
    id: 1061,
    name: 'Amulette de Grilliane',
  },
  {
    id: 1062,
    name: 'Bottes du Nettoyeur de donjon',
  },
  {
    id: 1063,
    name: 'Bottes de Rapiat',
  },
  {
    id: 1064,
    name: 'Ceinture de Rapiat',
  },
  {
    id: 1065,
    name: 'Amulette de Rapiat',
  },
  {
    id: 1066,
    name: "Anneau d'Ougicle",
  },
  {
    id: 1067,
    name: "Ceinture d'Ougicle",
  },
  {
    id: 1068,
    name: "Amulette d'Ougicle",
  },
  {
    id: 1069,
    name: 'Anneau de Karotz',
  },
  {
    id: 1070,
    name: 'Amulette de Karotz',
  },
  {
    id: 1071,
    name: 'Bottes de Karotz',
  },
  {
    id: 1072,
    name: 'Anneau de Grouillot',
  },
  {
    id: 1073,
    name: 'Bottes de Grouillot',
  },
  {
    id: 1074,
    name: 'Ceinture de Grouillot',
  },
  {
    id: 1075,
    name: 'Bottes de Kubitus',
  },
  {
    id: 1076,
    name: 'Ceinture de Kubitus',
  },
  {
    id: 1077,
    name: 'Amulette de Kubitus',
  },
  {
    id: 1078,
    name: 'Anneau de Piggy Paupe',
  },
  {
    id: 1079,
    name: 'Ceinture de Piggy Paupe',
  },
  {
    id: 1080,
    name: 'Amulette de Piggy Paupe',
  },
  {
    id: 1081,
    name: 'Amupapier',
  },
  {
    id: 1082,
    name: 'Slipapier',
  },
  {
    id: 1083,
    name: 'Plumodales',
  },
  {
    id: 1084,
    name: 'Plumamulette',
  },
  {
    id: 1085,
    name: 'Anoppinz',
  },
  {
    id: 1086,
    name: 'Bottoppinz',
  },
  {
    id: 1087,
    name: 'Amusonnier',
  },
  {
    id: 1088,
    name: 'Ceintusonnier',
  },
  {
    id: 1089,
    name: 'Anauffe-souris',
  },
  {
    id: 1090,
    name: 'Bottauffe-souris',
  },
  {
    id: 1091,
    name: 'Bottinokio',
  },
  {
    id: 1092,
    name: 'Anokio',
  },
  {
    id: 1093,
    name: 'Bottes de Kabroule',
  },
  {
    id: 1094,
    name: 'Frimamulette',
  },
  {
    id: 1095,
    name: 'Frimanneau',
  },
  {
    id: 1096,
    name: 'Grésilanneau',
  },
  {
    id: 1097,
    name: 'Grésilobottes',
  },
  {
    id: 1098,
    name: 'Grésilocape',
  },
  {
    id: 1099,
    name: 'Frimature',
  },
  {
    id: 1100,
    name: 'Frimacoiffe',
  },
  {
    id: 1101,
    name: 'Amulette Ementaire',
  },
  {
    id: 1102,
    name: 'Coiffe du Royalmouth',
  },
  {
    id: 1103,
    name: 'Couronne du Mansot Royal',
  },
  {
    id: 1104,
    name: 'Chapeau de Ben le Ripate',
  },
  {
    id: 1105,
    name: "Casque de l'Obsidiantre",
  },
  {
    id: 1106,
    name: 'Amulette du Royalmouth',
  },
  {
    id: 1107,
    name: "Amulette de l'Obsidiantre",
  },
  {
    id: 1108,
    name: 'Anneau du Mansot Royal',
  },
  {
    id: 1109,
    name: 'Crochet de Ben le Ripate',
  },
  {
    id: 1110,
    name: "Bague de l'Obsidiantre",
  },
  {
    id: 1111,
    name: 'Cape du Mansot Royal',
  },
  {
    id: 1112,
    name: "Cape de l'Obsidiantre",
  },
  {
    id: 1113,
    name: 'Bottes du Royalmouth',
  },
  {
    id: 1114,
    name: "Bottes de l'Obsidiantre",
  },
  {
    id: 1115,
    name: 'Ceinture du Royalmouth',
  },
  {
    id: 1116,
    name: 'Ceinture de Ben le Ripate',
  },
  {
    id: 1117,
    name: "Casque de l'Écumouth",
  },
  {
    id: 1118,
    name: 'Coiffe du Fricochère',
  },
  {
    id: 1119,
    name: 'Fantômasque',
  },
  {
    id: 1120,
    name: 'Masque du Harpirate',
  },
  {
    id: 1121,
    name: 'Chapeau Pourih',
  },
  {
    id: 1122,
    name: 'Chapeau Stapokaliptik',
  },
  {
    id: 1123,
    name: 'Cape Ricieuse',
  },
  {
    id: 1124,
    name: 'Cape Tivante',
  },
  {
    id: 1125,
    name: 'Collier Yé',
  },
  {
    id: 1126,
    name: 'Talisman Choh',
  },
  {
    id: 1127,
    name: 'Talisman Doline',
  },
  {
    id: 1128,
    name: 'Slip Hie',
  },
  {
    id: 1129,
    name: 'Slip Noze',
  },
  {
    id: 1130,
    name: 'Sandales Gorithme',
  },
  {
    id: 1131,
    name: 'Sandales Binosse',
  },
  {
    id: 1132,
    name: 'Anneau Frage',
  },
  {
    id: 1133,
    name: 'Anneau Made',
  },
  {
    id: 1134,
    name: 'Anneau Nobstant',
  },
  {
    id: 1135,
    name: 'Anneau Tabéné',
  },
  {
    id: 1136,
    name: 'Bottes Hoktone',
  },
  {
    id: 1137,
    name: 'Pagniglou',
  },
  {
    id: 1138,
    name: 'Chapeau Tiche',
  },
  {
    id: 1139,
    name: 'Coiffe de Tengu Givrefoux',
  },
  {
    id: 1140,
    name: 'Cape de Tengu Givrefoux',
  },
  {
    id: 1141,
    name: 'Ceinture du Tengu Givrefoux',
  },
  {
    id: 1142,
    name: 'Bottes du Tengu Givrefoux',
  },
  {
    id: 1143,
    name: 'Cape du Korriandre',
  },
  {
    id: 1144,
    name: 'Amulette du Korriandre',
  },
  {
    id: 1145,
    name: 'Anneau du Korriandre',
  },
  {
    id: 1146,
    name: 'Coiffe de Kolosso',
  },
  {
    id: 1147,
    name: 'Ceinture de Kolosso',
  },
  {
    id: 1148,
    name: 'Anneau de Kolosso',
  },
  {
    id: 1149,
    name: 'Masque du Glourséleste',
  },
  {
    id: 1150,
    name: 'Cape du Glourséleste',
  },
  {
    id: 1151,
    name: 'Amulette du Glourséleste',
  },
  {
    id: 1152,
    name: 'Ceinture du Glourséleste',
  },
  {
    id: 1153,
    name: 'Bottes du Glourséleste',
  },
  {
    id: 1154,
    name: 'Chapeau Lichinelle',
  },
  {
    id: 1155,
    name: 'Chapeau Lisson',
  },
  {
    id: 1156,
    name: 'Chapeau Lochon',
  },
  {
    id: 1157,
    name: 'Cape Surde',
  },
  {
    id: 1158,
    name: 'Cape Peupret',
  },
  {
    id: 1159,
    name: 'Cape Hiculteur',
  },
  {
    id: 1160,
    name: 'Amulette Cætera',
  },
  {
    id: 1161,
    name: 'Amulette Héroclite',
  },
  {
    id: 1162,
    name: 'Amulette Hendart',
  },
  {
    id: 1163,
    name: 'Pagne du Soryo Givrefoux',
  },
  {
    id: 1164,
    name: 'Ceinture Hanium',
  },
  {
    id: 1165,
    name: 'Alliance Hestrale',
  },
  {
    id: 1166,
    name: 'Alliance Sorcelée',
  },
  {
    id: 1167,
    name: 'Bracelet Ming',
  },
  {
    id: 1168,
    name: 'Anneau Aimgéroks',
  },
  {
    id: 1169,
    name: 'Bottines Hertie',
  },
  {
    id: 1170,
    name: 'Bottines Hodore',
  },
  {
    id: 1171,
    name: 'Sandales Pinistes',
  },
  {
    id: 1172,
    name: 'Amulette Ementaire Deluxe',
  },
  {
    id: 1173,
    name: 'Racine Hueuse',
  },
  {
    id: 1174,
    name: 'Bleu Tofu',
  },
  {
    id: 1175,
    name: 'Collier de perles des îles',
  },
  {
    id: 1176,
    name: 'Stasili',
  },
  {
    id: 1177,
    name: 'La Ruche',
  },
  {
    id: 1178,
    name: 'Bottes en peau de Prespic',
  },
  {
    id: 1179,
    name: 'Elianneau',
  },
  {
    id: 1180,
    name: 'Platycap',
  },
  {
    id: 1181,
    name: 'Ceinture de Percimol',
  },
  {
    id: 1182,
    name: 'Slip Iholo',
  },
  {
    id: 1183,
    name: 'Bottes de Stroud',
  },
  {
    id: 1184,
    name: 'Ceinture de Stroud',
  },
  {
    id: 1185,
    name: 'Amulette du Boostache',
  },
  {
    id: 1186,
    name: 'Alliance du Kanniboul Ebil',
  },
  {
    id: 1187,
    name: 'Anneau du Boostache',
  },
  {
    id: 1188,
    name: 'Bottes du Kanniboul Ebil',
  },
  {
    id: 1189,
    name: 'Cape du Boostache',
  },
  {
    id: 1190,
    name: 'Ceinture du Boostache',
  },
  {
    id: 1191,
    name: 'Masque du Kanniboul Ebil',
  },
  {
    id: 1192,
    name: 'Kwakwanneau',
  },
  {
    id: 1193,
    name: 'Kwakwalliance',
  },
  {
    id: 1194,
    name: 'Kwakwaffe',
  },
  {
    id: 1195,
    name: 'Ceinture de Traçon',
  },
  {
    id: 1196,
    name: 'Bottes de Traçon',
  },
  {
    id: 1197,
    name: 'Amulette de Traçon',
  },
  {
    id: 1198,
    name: 'Anneau de Mirh',
  },
  {
    id: 1199,
    name: 'Ceinture de Mirh',
  },
  {
    id: 1200,
    name: 'Amulette de Mirh',
  },
  {
    id: 1201,
    name: 'Getas de Logram',
  },
  {
    id: 1202,
    name: 'Amulette de Logram',
  },
  {
    id: 1203,
    name: 'Anneau de Logram',
  },
  {
    id: 1204,
    name: 'Slip de Kalkanéus',
  },
  {
    id: 1205,
    name: 'Botte de Kalkanéus',
  },
  {
    id: 1206,
    name: 'Amulette de Kalkanéus',
  },
  {
    id: 1207,
    name: "Alliance d'Hichète",
  },
  {
    id: 1208,
    name: "Ceinture d'Hichète",
  },
  {
    id: 1209,
    name: "Amulette d'Hichète",
  },
  {
    id: 1210,
    name: "Bottes d'Haku",
  },
  {
    id: 1211,
    name: "Amulette d'Haku",
  },
  {
    id: 1212,
    name: "Anneau d'Haku",
  },
  {
    id: 1213,
    name: 'Ceinture Bine',
  },
  {
    id: 1214,
    name: 'Amulette de Nelween',
  },
  {
    id: 1215,
    name: 'Cape de Nelween',
  },
  {
    id: 1216,
    name: 'Bottes de Nelween',
  },
  {
    id: 1217,
    name: 'Ceinture de Nelween',
  },
  {
    id: 1218,
    name: 'Anneau Moutheur',
  },
  {
    id: 1219,
    name: 'Bague Moutheuze',
  },
  {
    id: 1220,
    name: 'Cape Mouthante',
  },
  {
    id: 1221,
    name: 'Amulette de Frigostine',
  },
  {
    id: 1222,
    name: 'Anneau de Frigostine',
  },
  {
    id: 1223,
    name: 'Ceinture de Frigostine',
  },
  {
    id: 1224,
    name: 'Bottes de Frigostine',
  },
  {
    id: 1225,
    name: 'Cape de Cantile',
  },
  {
    id: 1226,
    name: 'Anneau de Cantile',
  },
  {
    id: 1227,
    name: 'Amulette de Cantile',
  },
  {
    id: 1228,
    name: 'Bottes de Cantile',
  },
  {
    id: 1229,
    name: 'Anneau des Prophètes',
  },
  {
    id: 1230,
    name: 'Ceinture des Prophètes',
  },
  {
    id: 1231,
    name: 'Anneau de Guten Tak',
  },
  {
    id: 1232,
    name: 'Alliance de Guten Tak',
  },
  {
    id: 1233,
    name: 'Amulette de Guten Tak',
  },
  {
    id: 1234,
    name: 'Bague de Boréale',
  },
  {
    id: 1235,
    name: 'Ceinture de Boréale',
  },
  {
    id: 1236,
    name: 'Coiffe de Boréale',
  },
  {
    id: 1237,
    name: 'Bottes de Boréale',
  },
  {
    id: 1238,
    name: 'Cape du Professeur Xa',
  },
  {
    id: 1239,
    name: 'Anneau du Professeur Xa',
  },
  {
    id: 1240,
    name: 'Bottes du Professeur Xa',
  },
  {
    id: 1241,
    name: 'Amulette du Professeur Xa',
  },
  {
    id: 1242,
    name: 'Alliance Gloursonne',
  },
  {
    id: 1243,
    name: 'Bague Gloursonne',
  },
  {
    id: 1244,
    name: 'Coiffe du Glourséleste',
  },
  {
    id: 1245,
    name: 'Cape de la Fuji Givrefoux',
  },
  {
    id: 1246,
    name: 'Coiffe de la Fuji Givrefoux',
  },
  {
    id: 1247,
    name: 'Bottes de la Fuji Givrefoux',
  },
  {
    id: 1248,
    name: 'Anneau de la Fuji Givrefoux',
  },
  {
    id: 1249,
    name: 'Amourlette Hernel',
  },
  {
    id: 1250,
    name: 'Amourlette Hernelle',
  },
  {
    id: 1251,
    name: 'Ceinture de Glourdorak',
  },
  {
    id: 1252,
    name: 'Amulette du Gorgouille',
  },
  {
    id: 1253,
    name: 'Cape du Gorgouille',
  },
  {
    id: 1254,
    name: 'Gantelet du Gorgouille',
  },
  {
    id: 1255,
    name: 'Bottes du Gorgouille',
  },
  {
    id: 1256,
    name: 'Chapilozité',
  },
  {
    id: 1257,
    name: 'Capilozité',
  },
  {
    id: 1258,
    name: 'Bracilozité',
  },
  {
    id: 1259,
    name: 'Bottilozité',
  },
  {
    id: 1260,
    name: 'Coiffe Ainte',
  },
  {
    id: 1261,
    name: 'Masque Arpone',
  },
  {
    id: 1262,
    name: 'Cape Endaison',
  },
  {
    id: 1263,
    name: 'Cape Aircussion',
  },
  {
    id: 1264,
    name: 'Bottes Opsy',
  },
  {
    id: 1265,
    name: 'Sabots Taj',
  },
  {
    id: 1266,
    name: 'Sangle Hyssérine',
  },
  {
    id: 1267,
    name: 'Corde Ure',
  },
  {
    id: 1268,
    name: 'Mitaine Aibre',
  },
  {
    id: 1269,
    name: 'Bracelet Jande',
  },
  {
    id: 1270,
    name: 'Amulette du Krokilleur',
  },
  {
    id: 1271,
    name: 'Amulette de Grozilla',
  },
  {
    id: 1272,
    name: 'Anneau du Vulkain',
  },
  {
    id: 1273,
    name: 'Bracelet du Vulkain',
  },
  {
    id: 1274,
    name: 'Bottes du Vulkain',
  },
  {
    id: 1275,
    name: 'Bottes de Grozilla',
  },
  {
    id: 1276,
    name: 'Cape du Krokilleur',
  },
  {
    id: 1277,
    name: 'Sac de Voyage du Parfait Petit Vulkain',
  },
  {
    id: 1278,
    name: 'Ceinture du Krokilleur',
  },
  {
    id: 1279,
    name: 'Ceinture de Grozilla',
  },
  {
    id: 1280,
    name: 'Chapeau du Vulkain',
  },
  {
    id: 1281,
    name: 'Coiffe de Grozilla',
  },
  {
    id: 1282,
    name: 'Amulette Tétriste',
  },
  {
    id: 1283,
    name: 'Anneau Tétriste',
  },
  {
    id: 1284,
    name: 'Chapeau Parabiote',
  },
  {
    id: 1285,
    name: 'Cape Parabiote',
  },
  {
    id: 1286,
    name: 'Ceinture Parabiote',
  },
  {
    id: 1287,
    name: 'Bottes Parabiotes',
  },
  {
    id: 1288,
    name: 'Slip Vert',
  },
  {
    id: 1289,
    name: 'Borate',
  },
  {
    id: 1290,
    name: 'Souliers Vernis Bruns',
  },
  {
    id: 1291,
    name: 'Boracelet',
  },
  {
    id: 1292,
    name: 'Ceinture de Pandalida',
  },
  {
    id: 1293,
    name: 'Amulette de Mister Amakna',
  },
  {
    id: 1294,
    name: 'Amulette de Miss Amakna',
  },
  {
    id: 1295,
    name: 'Amulette de Mister Monde des Douze',
  },
  {
    id: 1296,
    name: 'Amulette de Miss Monde des Douze',
  },
  {
    id: 1297,
    name: "Anneau de l'Envahisseur",
  },
  {
    id: 1298,
    name: "Ceinture de l'Envahisseur",
  },
  {
    id: 1299,
    name: 'Tacleur mineur',
  },
  {
    id: 1300,
    name: 'Tacleur',
  },
  {
    id: 1301,
    name: 'Tacleur majeur',
  },
  {
    id: 1302,
    name: 'Fuyard mineur',
  },
  {
    id: 1303,
    name: 'Fuyard',
  },
  {
    id: 1304,
    name: 'Fuyard majeur',
  },
  {
    id: 1305,
    name: 'Ralentisseur mineur',
  },
  {
    id: 1306,
    name: 'Ralentisseur',
  },
  {
    id: 1307,
    name: 'Ralentisseur majeur',
  },
  {
    id: 1308,
    name: 'Engourdisseur mineur',
  },
  {
    id: 1309,
    name: 'Engourdisseur',
  },
  {
    id: 1310,
    name: 'Engourdisseur majeur',
  },
  {
    id: 1311,
    name: 'Fugitif mineur',
  },
  {
    id: 1312,
    name: 'Fugitif',
  },
  {
    id: 1313,
    name: 'Fugitif majeur',
  },
  {
    id: 1314,
    name: 'Insaisissable mineur',
  },
  {
    id: 1315,
    name: 'Insaisissable',
  },
  {
    id: 1316,
    name: 'Insaisissable majeur',
  },
  {
    id: 1317,
    name: 'Pousseur mineur',
  },
  {
    id: 1318,
    name: 'Pousseur',
  },
  {
    id: 1319,
    name: 'Pousseur majeur',
  },
  {
    id: 1320,
    name: 'Adamantin mineur',
  },
  {
    id: 1321,
    name: 'Adamantin',
  },
  {
    id: 1322,
    name: 'Adamantin majeur',
  },
  {
    id: 1323,
    name: 'Rempart mineur',
  },
  {
    id: 1324,
    name: 'Rempart',
  },
  {
    id: 1325,
    name: 'Rempart majeur',
  },
  {
    id: 1326,
    name: 'Cuirassé Air mineur',
  },
  {
    id: 1327,
    name: 'Cuirassé Air',
  },
  {
    id: 1328,
    name: 'Cuirassé Air majeur',
  },
  {
    id: 1329,
    name: 'Cuirassé Eau mineur',
  },
  {
    id: 1330,
    name: 'Cuirassé Eau',
  },
  {
    id: 1331,
    name: 'Cuirassé Eau majeur',
  },
  {
    id: 1332,
    name: 'Snarmulette',
  },
  {
    id: 1333,
    name: 'Cosmobracelet',
  },
  {
    id: 1334,
    name: 'Cuirassé Feu mineur',
  },
  {
    id: 1335,
    name: "Bouclier d'Incarnam",
  },
  {
    id: 1336,
    name: 'Sac à Main',
  },
  {
    id: 1337,
    name: 'Ceinture de Danioule',
  },
  {
    id: 1338,
    name: 'Coiffe de Daïgoro',
  },
  {
    id: 1339,
    name: 'Collier Rouge de Daïgoro',
  },
  {
    id: 1340,
    name: 'Pagne de Daïgoro',
  },
  {
    id: 1341,
    name: 'Cuirassé Feu',
  },
  {
    id: 1342,
    name: 'Cuirassé Feu majeur',
  },
  {
    id: 1343,
    name: 'Cuirassé Terre mineur',
  },
  {
    id: 1344,
    name: 'Cuirassé Terre',
  },
  {
    id: 1345,
    name: 'Cuirassé Terre majeur',
  },
  {
    id: 1346,
    name: 'Cuirassé Neutre mineur',
  },
  {
    id: 1347,
    name: 'Cuirassé Neutre',
  },
  {
    id: 1348,
    name: 'Cuirassé Neutre majeur',
  },
  {
    id: 1349,
    name: 'Ravageur Air',
  },
  {
    id: 1350,
    name: 'Ravageur Air majeur',
  },
  {
    id: 1351,
    name: 'Ravageur Air mineur',
  },
  {
    id: 1352,
    name: 'Ravageur Eau',
  },
  {
    id: 1353,
    name: 'Ravageur Eau majeur',
  },
  {
    id: 1354,
    name: 'Ravageur Eau mineur',
  },
  {
    id: 1355,
    name: 'Ravageur Feu',
  },
  {
    id: 1356,
    name: 'Ravageur Feu majeur',
  },
  {
    id: 1357,
    name: 'Ravageur Feu mineur',
  },
  {
    id: 1358,
    name: 'Ravageur Neutre',
  },
  {
    id: 1359,
    name: 'Ravageur Neutre mineur',
  },
  {
    id: 1360,
    name: 'Ravageur Neutre majeur',
  },
  {
    id: 1361,
    name: 'Ravageur Terre',
  },
  {
    id: 1362,
    name: 'Initiateur',
  },
  {
    id: 1363,
    name: 'Initiateur mineur',
  },
  {
    id: 1364,
    name: 'Initiateur majeur',
  },
  {
    id: 1365,
    name: 'Porteur mineur',
  },
  {
    id: 1366,
    name: 'Porteur',
  },
  {
    id: 1367,
    name: 'Porteur majeur',
  },
  {
    id: 1368,
    name: 'Soigneur mineur',
  },
  {
    id: 1369,
    name: 'Soigneur majeur',
  },
  {
    id: 1370,
    name: 'Soigneur',
  },
  {
    id: 1371,
    name: 'Acrobate mineur',
  },
  {
    id: 1372,
    name: 'Acrobate',
  },
  {
    id: 1373,
    name: 'Acrobate majeur',
  },
  {
    id: 1374,
    name: 'Joueur',
  },
  {
    id: 1375,
    name: 'Joueur majeur',
  },
  {
    id: 1376,
    name: 'Joueur mineur',
  },
  {
    id: 1377,
    name: 'Savant mineur',
  },
  {
    id: 1378,
    name: 'Savant majeur',
  },
  {
    id: 1379,
    name: 'Savant',
  },
  {
    id: 1380,
    name: 'Furibond mineur',
  },
  {
    id: 1381,
    name: 'Furibond',
  },
  {
    id: 1382,
    name: 'Furibond majeur',
  },
  {
    id: 1383,
    name: 'Survivant',
  },
  {
    id: 1384,
    name: 'Survivant majeur',
  },
  {
    id: 1385,
    name: 'Survivant mineur',
  },
  {
    id: 1386,
    name: 'Ravageur Terre majeur',
  },
  {
    id: 1387,
    name: 'Ravageur Terre mineur',
  },
  {
    id: 1388,
    name: 'Ceinturong',
  },
  {
    id: 1389,
    name: 'Amulettong',
  },
  {
    id: 1390,
    name: 'Pacmamulette',
  },
  {
    id: 1391,
    name: 'Pacmabottes',
  },
  {
    id: 1392,
    name: 'Raquettes Dugraal',
  },
  {
    id: 1393,
    name: 'Ceinture Abdominable',
  },
  {
    id: 1394,
    name: 'Amulette du Bibliothécaire',
  },
  {
    id: 1395,
    name: 'Bouclier du Survivant',
  },
  {
    id: 1396,
    name: 'Manteau du Glutin',
  },
  {
    id: 1397,
    name: 'Bonnet du Glutin',
  },
  {
    id: 1398,
    name: 'Caleçon Fourré du Glutin',
  },
  {
    id: 1399,
    name: 'Bracelet du Glutin',
  },
  {
    id: 1400,
    name: 'Cape du Nowel Cauchemardesque',
  },
  {
    id: 1401,
    name: 'Masque du Nowel Cauchemardesque',
  },
  {
    id: 1402,
    name: 'Porte-Malheur du Nowel Cauchemardesque',
  },
  {
    id: 1403,
    name: 'Bottes du Nowel Cauchemardesque',
  },
  {
    id: 1404,
    name: 'Sacoche de Redolphe',
  },
  {
    id: 1405,
    name: 'Coiffe de Redolphe',
  },
  {
    id: 1406,
    name: 'Licol de Redolphe',
  },
  {
    id: 1407,
    name: 'Sabots de Redolphe',
  },
  {
    id: 1408,
    name: 'Mes Petits Sabots',
  },
  {
    id: 1409,
    name: 'Peignentif',
  },
  {
    id: 1410,
    name: 'Gladialeçon',
  },
  {
    id: 1411,
    name: 'Gladiabottes',
  },
  {
    id: 1412,
    name: 'Bracelet du Minotoboule',
  },
  {
    id: 1413,
    name: 'Ceinturoduvet',
  },
  {
    id: 1414,
    name: 'Bottoduvet',
  },
  {
    id: 1415,
    name: 'Sabots Aiguilles de Féline',
  },
  {
    id: 1416,
    name: 'Collier de Féline',
  },
  {
    id: 1417,
    name: 'Katar Strophe',
  },
  {
    id: 1418,
    name: 'Kabuto du Chafer Rōnin',
  },
  {
    id: 1419,
    name: 'Pagne du Chafer Rōnin',
  },
  {
    id: 1420,
    name: 'Bottes du Chafer Primitif',
  },
  {
    id: 1421,
    name: 'Bandeau Rokwa',
  },
  {
    id: 1422,
    name: 'Ceinture de Brouce',
  },
  {
    id: 1423,
    name: 'Anneau de Brouce',
  },
  {
    id: 1424,
    name: 'Bottes de Brouce',
  },
  {
    id: 1425,
    name: "Amulette d'Otomaï",
  },
  {
    id: 1426,
    name: "Bottes d'Otomaï",
  },
  {
    id: 1427,
    name: 'Coiffe de Danathor',
  },
  {
    id: 1428,
    name: 'Amulette de Danathor',
  },
  {
    id: 1429,
    name: 'Ceinture de Danathor',
  },
  {
    id: 1430,
    name: "Couronne d'Allister",
  },
  {
    id: 1431,
    name: "Anneau d'Allister",
  },
  {
    id: 1432,
    name: "Bottes d'Allister",
  },
  {
    id: 1433,
    name: 'Cape de Léthaline',
  },
  {
    id: 1434,
    name: 'Ceinture de Léthaline',
  },
  {
    id: 1435,
    name: 'Bottes de Léthaline',
  },
  {
    id: 1436,
    name: "Coiffe d'Ogivol",
  },
  {
    id: 1437,
    name: "Cape d'Ogivol",
  },
  {
    id: 1438,
    name: "Ceinture d'Ogivol",
  },
  {
    id: 1439,
    name: 'Casque de Metag Robill',
  },
  {
    id: 1440,
    name: 'Caskoffre',
  },
  {
    id: 1441,
    name: 'Ceinture de Coffreté',
  },
  {
    id: 1442,
    name: 'Pendentiffre',
  },
  {
    id: 1443,
    name: 'Boffes Cottre',
  },
  {
    id: 1444,
    name: 'Amulette de Pwâk',
  },
  {
    id: 1445,
    name: 'Chapeau Potin',
  },
  {
    id: 1446,
    name: 'Cape Reski',
  },
  {
    id: 1447,
    name: 'Bottes Rolivan',
  },
  {
    id: 1448,
    name: 'Cape Rolivan',
  },
  {
    id: 1449,
    name: 'Ceinture Rolivan',
  },
  {
    id: 1450,
    name: 'Chapeau Rolivan',
  },
  {
    id: 1451,
    name: 'Bouclier de Guilde',
  },
  {
    id: 1452,
    name: 'Scaphandre Ojine',
  },
  {
    id: 1453,
    name: 'Sac Rebleux',
  },
  {
    id: 1454,
    name: 'Bottes Omates',
  },
  {
    id: 1455,
    name: 'Ceinture Blot',
  },
  {
    id: 1456,
    name: 'Steamanneau Maître',
  },
  {
    id: 1457,
    name: 'Amulette de Mini-Miss Amakna',
  },
  {
    id: 1458,
    name: 'Amulette de Mini-Mister Amakna',
  },
  {
    id: 1459,
    name: 'Bague Rafe',
  },
  {
    id: 1460,
    name: 'Bracelet Gume',
  },
  {
    id: 1461,
    name: "Bottes O'Feu",
  },
  {
    id: 1462,
    name: 'Bottes Hédivines',
  },
  {
    id: 1463,
    name: 'Ceinture Nikoti',
  },
  {
    id: 1464,
    name: 'Ceinture Teule',
  },
  {
    id: 1465,
    name: 'Annokami',
  },
  {
    id: 1466,
    name: 'Bottokami',
  },
  {
    id: 1467,
    name: 'Chapitrouille',
  },
  {
    id: 1468,
    name: 'Capitrouille',
  },
  {
    id: 1469,
    name: 'Ceintrouille',
  },
  {
    id: 1470,
    name: 'Dolmanax',
  },
  {
    id: 1471,
    name: 'Slip de Rechange du Captain Chafer',
  },
  {
    id: 1472,
    name: 'Troma du Vieux John',
  },
  {
    id: 1473,
    name: 'Diplamu',
  },
  {
    id: 1474,
    name: 'Diplanneau',
  },
  {
    id: 1475,
    name: 'Araknacoiffe Velue',
  },
  {
    id: 1476,
    name: 'Krosmangle',
  },
  {
    id: 1477,
    name: 'Krosmaussures',
  },
  {
    id: 1478,
    name: 'Ballerines Roses',
  },
  {
    id: 1479,
    name: 'Coffresac du Koalak',
  },
  {
    id: 1480,
    name: "Anneau d'Henual",
  },
  {
    id: 1481,
    name: "Ceinture d'Henual",
  },
  {
    id: 1482,
    name: "Coiffe d'Oshimo",
  },
  {
    id: 1483,
    name: "Amulette d'Oshimo",
  },
  {
    id: 1484,
    name: "Bottes d'Oshimo",
  },
  {
    id: 1485,
    name: 'Cape de Nevark',
  },
  {
    id: 1486,
    name: 'Amulette de Nevark',
  },
  {
    id: 1487,
    name: 'Ceinture de Nevark',
  },
  {
    id: 1488,
    name: 'Cape de Théodoran Ax',
  },
  {
    id: 1489,
    name: 'Amulette de Théodoran Ax',
  },
  {
    id: 1490,
    name: 'Bottes de Théodoran Ax',
  },
  {
    id: 1491,
    name: 'Coiffe de Padgref',
  },
  {
    id: 1492,
    name: 'Anneau de Padgref',
  },
  {
    id: 1493,
    name: 'Getas de Padgref',
  },
  {
    id: 1494,
    name: "Coiffe d'Hel Munster",
  },
  {
    id: 1495,
    name: "Cape d'Hel Munster",
  },
  {
    id: 1496,
    name: "Amulette d'Hel Munster",
  },
  {
    id: 1497,
    name: "Coiffe d'Aermyne",
  },
  {
    id: 1498,
    name: "Cape d'Aermyne",
  },
  {
    id: 1499,
    name: 'Cape Matelassée',
  },
  {
    id: 1500,
    name: 'Pantoufles Émar',
  },
  {
    id: 1501,
    name: 'Sabots Minables',
  },
  {
    id: 1502,
    name: 'Saponnet de Nowel',
  },
  {
    id: 1503,
    name: 'Chapeau de Kéké',
  },
  {
    id: 1504,
    name: 'Bouclier de Kéké',
  },
  {
    id: 1505,
    name: 'Bloqueur mineur',
  },
  {
    id: 1506,
    name: 'Bloqueur',
  },
  {
    id: 1507,
    name: 'Bloqueur majeur',
  },
  {
    id: 1508,
    name: 'Vagabond mineur',
  },
  {
    id: 1509,
    name: 'Vagabond',
  },
  {
    id: 1510,
    name: 'Vagabond majeur',
  },
  {
    id: 1511,
    name: 'Docteur mineur',
  },
  {
    id: 1512,
    name: 'Docteur',
  },
  {
    id: 1513,
    name: 'Docteur majeur',
  },
  {
    id: 1514,
    name: 'Forcené mineur',
  },
  {
    id: 1515,
    name: 'Forcené',
  },
  {
    id: 1516,
    name: 'Forcené majeur',
  },
  {
    id: 1517,
    name: 'Astucieux mineur',
  },
  {
    id: 1518,
    name: 'Astucieux',
  },
  {
    id: 1519,
    name: 'Astucieux majeur',
  },
  {
    id: 1520,
    name: 'Equilibriste mineur',
  },
  {
    id: 1521,
    name: 'Equilibriste',
  },
  {
    id: 1522,
    name: 'Equilibriste majeur',
  },
  {
    id: 1523,
    name: 'Taquin mineur',
  },
  {
    id: 1524,
    name: 'Taquin',
  },
  {
    id: 1525,
    name: 'Taquin majeur',
  },
  {
    id: 1526,
    name: 'Bastion mineur',
  },
  {
    id: 1527,
    name: 'Bastion',
  },
  {
    id: 1528,
    name: 'Bastion majeur',
  },
  {
    id: 1529,
    name: 'Saccageur Terre mineur',
  },
  {
    id: 1530,
    name: 'Saccageur Terre',
  },
  {
    id: 1531,
    name: 'Saccageur Terre majeur',
  },
  {
    id: 1532,
    name: 'Saccageur Neutre mineur',
  },
  {
    id: 1533,
    name: 'Saccageur Neutre',
  },
  {
    id: 1534,
    name: 'Saccageur Neutre majeur',
  },
  {
    id: 1535,
    name: 'Saccageur Feu mineur',
  },
  {
    id: 1536,
    name: 'Saccageur Feu',
  },
  {
    id: 1537,
    name: 'Saccageur Feu majeur',
  },
  {
    id: 1538,
    name: 'Saccageur Eau mineur',
  },
  {
    id: 1539,
    name: 'Saccageur Eau',
  },
  {
    id: 1540,
    name: 'Saccageur Eau majeur',
  },
  {
    id: 1541,
    name: 'Saccageur Air mineur',
  },
  {
    id: 1542,
    name: 'Saccageur Air',
  },
  {
    id: 1543,
    name: 'Saccageur Air majeur',
  },
  {
    id: 1544,
    name: 'Entraveur mineur',
  },
  {
    id: 1545,
    name: 'Entraveur',
  },
  {
    id: 1546,
    name: 'Entraveur majeur',
  },
  {
    id: 1547,
    name: 'Paralyseur mineur',
  },
  {
    id: 1548,
    name: 'Paralyseur',
  },
  {
    id: 1549,
    name: 'Paralyseur majeur',
  },
  {
    id: 1550,
    name: 'Imprenable mineur',
  },
  {
    id: 1551,
    name: 'Imprenable',
  },
  {
    id: 1552,
    name: 'Imprenable majeur',
  },
  {
    id: 1553,
    name: 'Evanescent mineur',
  },
  {
    id: 1554,
    name: 'Evanescent',
  },
  {
    id: 1555,
    name: 'Evanescent majeur',
  },
  {
    id: 1556,
    name: 'Bousculeur mineur',
  },
  {
    id: 1557,
    name: 'Bousculeur',
  },
  {
    id: 1558,
    name: 'Bousculeur majeur',
  },
  {
    id: 1559,
    name: 'Inflexible mineur',
  },
  {
    id: 1560,
    name: 'Inflexible',
  },
  {
    id: 1561,
    name: 'Inflexible majeur',
  },
  {
    id: 1562,
    name: 'Précurseur mineur',
  },
  {
    id: 1563,
    name: 'Précurseur',
  },
  {
    id: 1564,
    name: 'Précurseur majeur',
  },
  {
    id: 1565,
    name: 'Muraille Terre mineure',
  },
  {
    id: 1566,
    name: 'Muraille Terre',
  },
  {
    id: 1567,
    name: 'Muraille Terre majeure',
  },
  {
    id: 1568,
    name: 'Muraille Neutre mineure',
  },
  {
    id: 1569,
    name: 'Muraille Neutre',
  },
  {
    id: 1570,
    name: 'Muraille Neutre majeure',
  },
  {
    id: 1571,
    name: 'Muraille Feu mineure',
  },
  {
    id: 1572,
    name: 'Muraille Feu',
  },
  {
    id: 1573,
    name: 'Muraille Feu majeure',
  },
  {
    id: 1574,
    name: 'Muraille Eau mineure',
  },
  {
    id: 1575,
    name: 'Muraille Eau',
  },
  {
    id: 1576,
    name: 'Muraille Eau majeure',
  },
  {
    id: 1577,
    name: 'Muraille Air mineure',
  },
  {
    id: 1578,
    name: 'Muraille Air',
  },
  {
    id: 1579,
    name: 'Muraille Air majeure',
  },
  {
    id: 1580,
    name: 'Puissant mineur',
  },
  {
    id: 1581,
    name: 'Puissant',
  },
  {
    id: 1582,
    name: 'Puissant majeur',
  },
  {
    id: 1583,
    name: 'Robuste mineur',
  },
  {
    id: 1584,
    name: 'Robuste',
  },
  {
    id: 1585,
    name: 'Robuste majeur',
  },
  {
    id: 1586,
    name: 'Turbulent',
  },
  {
    id: 1587,
    name: 'Voyageur',
  },
  {
    id: 1588,
    name: 'Examinateur',
  },
  {
    id: 1589,
    name: 'Féroce mineur',
  },
  {
    id: 1590,
    name: 'Féroce',
  },
  {
    id: 1591,
    name: 'Féroce majeur',
  },
  {
    id: 1592,
    name: 'Masque du Frelon Noir',
  },
  {
    id: 1593,
    name: 'Ceinture du Frelon Noir',
  },
  {
    id: 1594,
    name: 'Glaglano',
  },
  {
    id: 1595,
    name: 'Glaglamu',
  },
  {
    id: 1596,
    name: 'Anneau Tamie',
  },
  {
    id: 1597,
    name: 'Bonnet Ko',
  },
  {
    id: 1598,
    name: 'Pèlerine d’Augilol',
  },
  {
    id: 1599,
    name: "Bottes d'Inferno",
  },
  {
    id: 1600,
    name: 'Bottes de Styx',
  },
  {
    id: 1601,
    name: 'Bottes de Mandrin',
  },
  {
    id: 1602,
    name: 'Bottes de Will Killson',
  },
  {
    id: 1603,
    name: 'Infernano',
  },
  {
    id: 1604,
    name: 'Styxano',
  },
  {
    id: 1605,
    name: 'Mandrano',
  },
  {
    id: 1606,
    name: 'Willkillsano',
  },
  {
    id: 1607,
    name: 'Scaphandre Magmatique',
  },
  {
    id: 1608,
    name: 'Bague Nostik',
  },
  {
    id: 1609,
    name: 'Masque de Klime',
  },
  {
    id: 1610,
    name: 'Cape de Klime',
  },
  {
    id: 1611,
    name: 'Ceinture de Klime',
  },
  {
    id: 1612,
    name: 'Bonnet Vicieux',
  },
  {
    id: 1613,
    name: 'Anneau Vicieux',
  },
  {
    id: 1614,
    name: 'Bottes Vicieuses',
  },
  {
    id: 1615,
    name: 'Cape Glaciale',
  },
  {
    id: 1616,
    name: 'Anneau Glacial',
  },
  {
    id: 1617,
    name: 'Ceinture Glaciale',
  },
  {
    id: 1618,
    name: 'Casque de Missiz Frizz',
  },
  {
    id: 1619,
    name: 'Alliance de Missiz Frizz',
  },
  {
    id: 1620,
    name: 'Bottes de Missiz Frizz',
  },
  {
    id: 1621,
    name: 'Coiffe Ranshi',
  },
  {
    id: 1622,
    name: 'Cape de Nileza',
  },
  {
    id: 1623,
    name: 'Amulette de Nileza',
  },
  {
    id: 1624,
    name: 'Bottes de Nileza',
  },
  {
    id: 1625,
    name: 'Bague Instable',
  },
  {
    id: 1626,
    name: 'Anneau Instable',
  },
  {
    id: 1627,
    name: 'Ceinture Instable',
  },
  {
    id: 1628,
    name: 'Capuche de Sylargh',
  },
  {
    id: 1629,
    name: 'Cape de Sylargh',
  },
  {
    id: 1630,
    name: 'Sangle de Sylargh',
  },
  {
    id: 1631,
    name: 'Coiffe du Kanimate',
  },
  {
    id: 1632,
    name: 'Cape du Kanimate',
  },
  {
    id: 1633,
    name: 'Amulette du Kanimate',
  },
  {
    id: 1634,
    name: 'Coiffe du Comte Harebourg',
  },
  {
    id: 1635,
    name: 'Anneau du Comte Harebourg',
  },
  {
    id: 1636,
    name: 'Bottes du Comte Harebourg',
  },
  {
    id: 1637,
    name: 'Coiffe Séculaire',
  },
  {
    id: 1638,
    name: 'Amulette Séculaire',
  },
  {
    id: 1639,
    name: 'Ceinture Séculaire',
  },
  {
    id: 1640,
    name: 'Masque du Granduk',
  },
  {
    id: 1641,
    name: 'Amulette du Granduk',
  },
  {
    id: 1642,
    name: 'Cape du Sinistrofu',
  },
  {
    id: 1643,
    name: 'Amulette du Sinistrofu',
  },
  {
    id: 1644,
    name: 'Bottes du Sinistrofu',
  },
  {
    id: 1645,
    name: 'Coiffe Cryochrone',
  },
  {
    id: 1646,
    name: 'Anneau Cryochrone',
  },
  {
    id: 1647,
    name: 'Amulette Cryochrone',
  },
  {
    id: 1648,
    name: 'Amulette du Cycloïde',
  },
  {
    id: 1649,
    name: 'Anneau du Cycloïde',
  },
  {
    id: 1650,
    name: 'Bottes du Cycloïde',
  },
  {
    id: 1651,
    name: 'Amulette du Strigide',
  },
  {
    id: 1652,
    name: 'Ceinture du Strigide',
  },
  {
    id: 1653,
    name: 'Bottes du Strigide',
  },
  {
    id: 1654,
    name: 'Amulette du Nocturlabe',
  },
  {
    id: 1655,
    name: 'Ceinture du Nocturlabe',
  },
  {
    id: 1656,
    name: 'Bottes du Nocturlabe',
  },
  {
    id: 1657,
    name: 'Sangle Aise',
  },
  {
    id: 1658,
    name: 'Cape Lati',
  },
  {
    id: 1659,
    name: 'Amulette Rangleur',
  },
  {
    id: 1660,
    name: 'Cape Ovri',
  },
  {
    id: 1661,
    name: 'Sangle Ouare',
  },
  {
    id: 1662,
    name: 'Sandales Ouzi',
  },
  {
    id: 1663,
    name: 'Cape au Logis',
  },
  {
    id: 1664,
    name: 'Talisman Songe',
  },
  {
    id: 1665,
    name: 'Bandeau Ktriné',
  },
  {
    id: 1666,
    name: 'Bottes Dogues',
  },
  {
    id: 1667,
    name: 'Dés de la Chance',
  },
  {
    id: 1668,
    name: 'Slip du Roi de Bonta',
  },
  {
    id: 1669,
    name: 'Ceinture Ding Dong',
  },
  {
    id: 1670,
    name: 'Phylactère Mic',
  },
  {
    id: 1671,
    name: 'Ceinture Hyolite',
  },
  {
    id: 1672,
    name: 'Calotte Spot',
  },
  {
    id: 1673,
    name: 'Binocle Airvoyant',
  },
  {
    id: 1674,
    name: 'Pendentif Oton',
  },
  {
    id: 1675,
    name: 'Anneau Stroplante',
  },
  {
    id: 1676,
    name: 'Amulette Stroplante',
  },
  {
    id: 1677,
    name: 'Justobottes',
  },
  {
    id: 1678,
    name: 'Justanneau',
  },
  {
    id: 1679,
    name: "Bouclier d'Alliance",
  },
  {
    id: 1680,
    name: 'Couronne du Wa Wobot',
  },
  {
    id: 1681,
    name: 'Cape du Wa Wobot',
  },
  {
    id: 1682,
    name: 'Ceinture du Wa Wobot',
  },
  {
    id: 1683,
    name: 'Casque du Blanc Pa Wabbit',
  },
  {
    id: 1684,
    name: 'Ceinture du Blanc Pa Wabbit',
  },
  {
    id: 1685,
    name: 'Bracelet du Blanc Pa Wabbit',
  },
  {
    id: 1686,
    name: 'Anneau du Wabbit Céphale',
  },
  {
    id: 1687,
    name: 'Amulette du Wabbit Céphale',
  },
  {
    id: 1688,
    name: 'Bottes du Wabbit Céphale',
  },
  {
    id: 1689,
    name: 'Bottes du Wabbit Garou',
  },
  {
    id: 1690,
    name: 'Cape du Wabbit Garou',
  },
  {
    id: 1691,
    name: 'Ceinture du Wabbit Garou',
  },
  {
    id: 1692,
    name: 'Chapokapi',
  },
  {
    id: 1693,
    name: 'Perruque de Iop',
  },
  {
    id: 1694,
    name: 'Masque Iproquo',
  },
  {
    id: 1695,
    name: 'Ceinture Hétorique',
  },
  {
    id: 1696,
    name: 'Bracelet Tmotiv',
  },
  {
    id: 1697,
    name: 'Brighellanière',
  },
  {
    id: 1698,
    name: 'Scaramouchapeau',
  },
  {
    id: 1699,
    name: 'Ceintulotté',
  },
  {
    id: 1700,
    name: 'Anomen Tengu',
  },
  {
    id: 1701,
    name: 'Shinchamu',
  },
  {
    id: 1702,
    name: 'Slipwaïï',
  },
  {
    id: 1703,
    name: 'Geishanneau',
  },
  {
    id: 1704,
    name: 'Kouinkano Noir',
  },
  {
    id: 1705,
    name: 'Kouinkano Jaune',
  },
  {
    id: 1706,
    name: 'Ninjamu Blanche',
  },
  {
    id: 1707,
    name: 'Ninjamu Noire',
  },
  {
    id: 1708,
    name: 'Ailobottes',
  },
  {
    id: 1709,
    name: 'Makiture',
  },
  {
    id: 1710,
    name: 'Dragoubottes Roses',
  },
  {
    id: 1711,
    name: 'Coiffe Médusoïde',
  },
  {
    id: 1712,
    name: 'Nageoiture',
  },
  {
    id: 1713,
    name: 'Nageanneau',
  },
  {
    id: 1714,
    name: 'Soubretture',
  },
  {
    id: 1715,
    name: 'Ceinture du Samouraï',
  },
  {
    id: 1716,
    name: 'Bottes Nō',
  },
  {
    id: 1717,
    name: 'Annolita',
  },
  {
    id: 1718,
    name: 'Koinkoiffe Rose',
  },
  {
    id: 1719,
    name: 'Insigne de Keukeuf',
  },
  {
    id: 1720,
    name: 'Dorabysses',
  },
  {
    id: 1721,
    name: 'Talisman Glouti',
  },
  {
    id: 1722,
    name: 'Anneau Tique',
  },
  {
    id: 1723,
    name: 'Casquipik',
  },
  {
    id: 1724,
    name: 'Pikottes',
  },
  {
    id: 1725,
    name: 'Pikano',
  },
  {
    id: 1726,
    name: 'Bandeau Culaire',
  },
  {
    id: 1727,
    name: 'Amulette Ikête',
  },
  {
    id: 1728,
    name: 'Cape Parition',
  },
  {
    id: 1729,
    name: 'Amulule',
  },
  {
    id: 1730,
    name: 'Obscture',
  },
  {
    id: 1731,
    name: 'Chaussures Hau',
  },
  {
    id: 1732,
    name: 'Anneau Kturne',
  },
  {
    id: 1733,
    name: 'Bottes Refois',
  },
  {
    id: 1734,
    name: 'Casqnoar',
  },
  {
    id: 1735,
    name: 'Cape des Justiciers',
  },
  {
    id: 1736,
    name: 'Glutonnet',
  },
  {
    id: 1737,
    name: 'Ceinture du Père Fwetar',
  },
  {
    id: 1738,
    name: 'Bottes du Père Fwetar',
  },
  {
    id: 1739,
    name: 'Anneau du Père Fwetar',
  },
  {
    id: 1740,
    name: 'Casque de Flèche Mauve',
  },
  {
    id: 1741,
    name: 'Cape de Flèche Mauve',
  },
  {
    id: 1742,
    name: 'Chaponion',
  },
  {
    id: 1743,
    name: 'Caponion',
  },
  {
    id: 1744,
    name: 'Bottes Donion',
  },
  {
    id: 1745,
    name: 'Anneau du Kaniblou',
  },
  {
    id: 1746,
    name: 'Ceinture du Kaniblou',
  },
  {
    id: 1747,
    name: 'Cape du Kaniblou',
  },
  {
    id: 1748,
    name: 'Coiffe de l’Orfélin',
  },
  {
    id: 1749,
    name: 'Ceinture de l’Orfélin',
  },
  {
    id: 1750,
    name: 'Amulette de l’Orfélin',
  },
  {
    id: 1751,
    name: 'Ceinture Karnaval',
  },
  {
    id: 1752,
    name: 'Bottes Karnaval',
  },
  {
    id: 1753,
    name: 'Casquête',
  },
  {
    id: 1754,
    name: 'Masque du Barbétoal',
  },
  {
    id: 1755,
    name: 'Cape du Barbétoal',
  },
  {
    id: 1756,
    name: 'Ceinture du Barbétoal',
  },
  {
    id: 1757,
    name: 'Couronne de Nidas',
  },
  {
    id: 1758,
    name: 'Anneau de Nidas',
  },
  {
    id: 1759,
    name: 'Tongues de Nidas',
  },
  {
    id: 1760,
    name: 'Amulette du Piloztère',
  },
  {
    id: 1761,
    name: 'Bracelet du Piloztère',
  },
  {
    id: 1762,
    name: 'Pantoufles du Piloztère',
  },
  {
    id: 1763,
    name: 'Coiffe du Lévitrof',
  },
  {
    id: 1764,
    name: 'Alliance du Lévitrof',
  },
  {
    id: 1765,
    name: 'Bottes du Lévitrof',
  },
  {
    id: 1766,
    name: 'Amulette du Kamasterisk',
  },
  {
    id: 1767,
    name: 'Bottes du Kamasterisk',
  },
  {
    id: 1768,
    name: 'Cape du Kamasterisk',
  },
  {
    id: 1769,
    name: 'Bottes Phossiles',
  },
  {
    id: 1770,
    name: 'Ceinture Phossile',
  },
  {
    id: 1771,
    name: 'Cape Phossile',
  },
  {
    id: 1772,
    name: 'Ceinture du Père Phorreur',
  },
  {
    id: 1773,
    name: 'Cape du Père Phorreur',
  },
  {
    id: 1774,
    name: 'Amulette du Père Phorreur',
  },
  {
    id: 1775,
    name: 'Cape Précieuse',
  },
  {
    id: 1776,
    name: 'Ceinture Précieuse',
  },
  {
    id: 1777,
    name: 'Bottes Précieuses',
  },
  {
    id: 1778,
    name: 'Casque du Berserkoffre',
  },
  {
    id: 1779,
    name: 'Ceinture du Berserkoffre',
  },
  {
    id: 1780,
    name: 'Bottes du Berserkoffre',
  },
  {
    id: 1781,
    name: 'Dotruche',
  },
  {
    id: 1782,
    name: 'Kamatongues',
  },
  {
    id: 1783,
    name: 'Kamature',
  },
  {
    id: 1784,
    name: 'Chapeau Truche',
  },
  {
    id: 1785,
    name: 'Ceintruche',
  },
  {
    id: 1786,
    name: 'Anneau Truche',
  },
  {
    id: 1787,
    name: 'Gruchape',
  },
  {
    id: 1788,
    name: 'Gruchaussures',
  },
  {
    id: 1789,
    name: 'Gruchette',
  },
  {
    id: 1790,
    name: 'Bottes de la Cour Sombre',
  },
  {
    id: 1791,
    name: 'Ceinture de la Cour Sombre',
  },
  {
    id: 1792,
    name: 'Cape de la Cour Sombre',
  },
  {
    id: 1793,
    name: 'Chapeau de Gein',
  },
  {
    id: 1794,
    name: 'Ceinture de Gein',
  },
  {
    id: 1795,
    name: 'Amulette de Gein',
  },
  {
    id: 1796,
    name: 'Ceinture de la Reine des Voleurs',
  },
  {
    id: 1797,
    name: 'Bottes de la Reine des Voleurs',
  },
  {
    id: 1798,
    name: 'Coiffe de la Reine des Voleurs',
  },
  {
    id: 1799,
    name: 'Bottes des Malveilleurs',
  },
  {
    id: 1800,
    name: 'Chapeau des Malveilleurs',
  },
  {
    id: 1801,
    name: 'Cape des Malveilleurs',
  },
  {
    id: 1802,
    name: 'Anneau du Katcheur',
  },
  {
    id: 1803,
    name: 'Bottes du Katcheur',
  },
  {
    id: 1804,
    name: 'Masque du Katcheur',
  },
  {
    id: 1805,
    name: 'Amulette Nécrotique',
  },
  {
    id: 1806,
    name: 'Bottes Nécrotiques',
  },
  {
    id: 1807,
    name: 'Cape Nécrotique',
  },
  {
    id: 1808,
    name: 'Bottes de Dremoan',
  },
  {
    id: 1809,
    name: 'Chapeau de Dremoan',
  },
  {
    id: 1810,
    name: 'Cape de Dremoan',
  },
  {
    id: 1811,
    name: 'Ceinture du Capitaine Ekarlatte',
  },
  {
    id: 1812,
    name: 'Bottes du Capitaine Ekarlatte',
  },
  {
    id: 1813,
    name: 'Gant du Capitaine Ekarlatte',
  },
  {
    id: 1814,
    name: "Casque d'Ali Grothor",
  },
  {
    id: 1815,
    name: "Amulette d'Ali Grothor",
  },
  {
    id: 1816,
    name: "Cape d'Ali Grothor",
  },
  {
    id: 1817,
    name: 'Masque de Frakacia',
  },
  {
    id: 1818,
    name: 'Bottes de Frakacia',
  },
  {
    id: 1819,
    name: 'Gant de Frakacia',
  },
  {
    id: 1820,
    name: 'Ceinture Verréhor',
  },
  {
    id: 1821,
    name: 'Amulette Verréhor',
  },
  {
    id: 1822,
    name: 'Baleinabottes',
  },
  {
    id: 1823,
    name: 'Pataugastrique',
  },
  {
    id: 1824,
    name: 'Kidibonnet',
  },
  {
    id: 1825,
    name: 'Maskrobe',
  },
  {
    id: 1826,
    name: 'Capchalot',
  },
  {
    id: 1827,
    name: 'Voilamibe',
  },
  {
    id: 1828,
    name: 'Anneau de Pol Ouatnos',
  },
  {
    id: 1829,
    name: 'Ceintacé',
  },
  {
    id: 1830,
    name: 'Protopagne',
  },
  {
    id: 1831,
    name: 'Amulette de Pol Ouatnos',
  },
  {
    id: 1832,
    name: 'Amibou',
  },
  {
    id: 1833,
    name: 'Chapibou',
  },
  {
    id: 1834,
    name: 'Capibou',
  },
  {
    id: 1835,
    name: 'Anneau des égarés',
  },
  {
    id: 1836,
    name: 'Bottes des égarés',
  },
  {
    id: 1837,
    name: 'Casque des égarés',
  },
  {
    id: 1838,
    name: 'Ceinture de Vortex',
  },
  {
    id: 1839,
    name: 'Sabots de Vortex',
  },
  {
    id: 1840,
    name: 'Cagoule de Vortex',
  },
  {
    id: 1841,
    name: 'Harpendentif',
  },
  {
    id: 1842,
    name: 'Capille',
  },
  {
    id: 1843,
    name: 'Bottarpille',
  },
  {
    id: 1844,
    name: 'Talisman Igans',
  },
  {
    id: 1845,
    name: 'Ceintrigue',
  },
  {
    id: 1846,
    name: 'Bottes Owesli',
  },
  {
    id: 1847,
    name: 'Bottes de XLII',
  },
  {
    id: 1848,
    name: 'Ceinture de XLII',
  },
  {
    id: 1849,
    name: 'Anneau de XLII',
  },
  {
    id: 1850,
    name: 'Ceinture de Soissanth',
  },
  {
    id: 1851,
    name: 'Coiffe de Soissanth',
  },
  {
    id: 1852,
    name: 'Pantoufles de Soissanth',
  },
  {
    id: 1853,
    name: 'Coiffe de Fraktale',
  },
  {
    id: 1854,
    name: 'Ceinture de Fraktale',
  },
  {
    id: 1855,
    name: 'Anneau de Fraktale',
  },
  {
    id: 1856,
    name: 'Anneau Xélomorphe',
  },
  {
    id: 1857,
    name: 'Bottes Xélomorphes',
  },
  {
    id: 1858,
    name: 'Cape Xélomorphe',
  },
  {
    id: 1859,
    name: 'Coiffe de Fouduglen',
  },
  {
    id: 1860,
    name: 'Bottes de Fouduglen',
  },
  {
    id: 1861,
    name: 'Amulette de Fouduglen',
  },
  {
    id: 1862,
    name: 'Corset Décodé',
  },
  {
    id: 1863,
    name: 'Anneau Bille',
  },
  {
    id: 1864,
    name: 'Cape Lumette',
  },
  {
    id: 1865,
    name: 'Casque Noix',
  },
  {
    id: 1866,
    name: 'Amulette Perle',
  },
  {
    id: 1867,
    name: 'Pendentif Curatif',
  },
  {
    id: 1868,
    name: 'Ceinture Anesthésiante',
  },
  {
    id: 1869,
    name: 'Alliance Apaisante',
  },
  {
    id: 1870,
    name: 'Masque de Pantèroz',
  },
  {
    id: 1871,
    name: 'String Fouetteur',
  },
  {
    id: 1872,
    name: 'Anneau Tranchant',
  },
  {
    id: 1873,
    name: 'Bracelet des Fonds marins',
  },
  {
    id: 1874,
    name: 'Sandales des Fonds marins',
  },
  {
    id: 1875,
    name: 'Masque des Fonds marins',
  },
  {
    id: 1876,
    name: 'Dofus des Veilleurs',
  },
  {
    id: 1877,
    name: 'Hotte de Nowel',
  },
  {
    id: 1878,
    name: 'Masque Rosmique',
  },
  {
    id: 1879,
    name: 'Cape Ortail',
  },
  {
    id: 1880,
    name: 'Bottes Ransitoires',
  },
  {
    id: 1881,
    name: 'Ceinture Billonnante',
  },
  {
    id: 1882,
    name: 'Anneau Vae',
  },
  {
    id: 1883,
    name: 'Cape Invisible',
  },
  {
    id: 1884,
    name: 'Coiffe Invisible',
  },
  {
    id: 1885,
    name: 'Anneau Tissé',
  },
  {
    id: 1886,
    name: 'Bottes Soyeuses',
  },
  {
    id: 1887,
    name: 'Coiffe de la Néfileuse',
  },
  {
    id: 1888,
    name: 'Amulette des Huit Yeux',
  },
  {
    id: 1889,
    name: 'Caparak',
  },
  {
    id: 1890,
    name: 'Gaine Nyée',
  },
  {
    id: 1891,
    name: 'Obstructeur mineur',
  },
  {
    id: 1892,
    name: 'Obstructeur',
  },
  {
    id: 1893,
    name: 'Obstructeur majeur',
  },
  {
    id: 1894,
    name: 'Déserteur mineur',
  },
  {
    id: 1895,
    name: 'Déserteur',
  },
  {
    id: 1896,
    name: 'Déserteur majeur',
  },
  {
    id: 1897,
    name: 'Guérisseur mineur',
  },
  {
    id: 1898,
    name: 'Guérisseur',
  },
  {
    id: 1899,
    name: 'Guérisseur majeur',
  },
  {
    id: 1900,
    name: 'Miraculé mineur',
  },
  {
    id: 1901,
    name: 'Miraculé',
  },
  {
    id: 1902,
    name: 'Miraculé majeur',
  },
  {
    id: 1903,
    name: 'Enragé mineur',
  },
  {
    id: 1904,
    name: 'Enragé',
  },
  {
    id: 1905,
    name: 'Enragé majeur',
  },
  {
    id: 1906,
    name: 'Érudit mineur',
  },
  {
    id: 1907,
    name: 'Érudit',
  },
  {
    id: 1908,
    name: 'Érudit majeur',
  },
  {
    id: 1909,
    name: 'Alliance des Forestiers',
  },
  {
    id: 1910,
    name: 'Printatanes',
  },
  {
    id: 1911,
    name: 'Printanneau',
  },
  {
    id: 1912,
    name: 'Cascadeur mineur',
  },
  {
    id: 1913,
    name: 'Cascadeur',
  },
  {
    id: 1914,
    name: 'Cascadeur majeur',
  },
  {
    id: 1915,
    name: 'Chanceux mineur',
  },
  {
    id: 1916,
    name: 'Chanceux',
  },
  {
    id: 1917,
    name: 'Chanceux majeur',
  },
  {
    id: 1918,
    name: 'Fortification mineure',
  },
  {
    id: 1919,
    name: 'Fortification',
  },
  {
    id: 1920,
    name: 'Fortification majeure',
  },
  {
    id: 1921,
    name: 'Dévastateur Terre mineur',
  },
  {
    id: 1922,
    name: 'Dévastateur Terre',
  },
  {
    id: 1923,
    name: 'Dévastateur Terre majeur',
  },
  {
    id: 1924,
    name: 'Dévastateur Neutre mineur',
  },
  {
    id: 1925,
    name: 'Dévastateur Neutre',
  },
  {
    id: 1926,
    name: 'Dévastateur Neutre majeur',
  },
  {
    id: 1927,
    name: 'Dévastateur Feu mineur',
  },
  {
    id: 1928,
    name: 'Dévastateur Feu',
  },
  {
    id: 1929,
    name: 'Dévastateur Feu majeur',
  },
  {
    id: 1930,
    name: 'Dévastateur Eau mineur',
  },
  {
    id: 1931,
    name: 'Dévastateur Eau',
  },
  {
    id: 1932,
    name: 'Dévastateur Eau majeur',
  },
  {
    id: 1933,
    name: 'Dévastateur Air mineur',
  },
  {
    id: 1934,
    name: 'Dévastateur Air',
  },
  {
    id: 1935,
    name: 'Dévastateur Air majeur',
  },
  {
    id: 1936,
    name: 'Temporiseur mineur',
  },
  {
    id: 1937,
    name: 'Temporiseur',
  },
  {
    id: 1938,
    name: 'Temporiseur majeur',
  },
  {
    id: 1939,
    name: 'Étourdisseur mineur',
  },
  {
    id: 1940,
    name: 'Étourdisseur',
  },
  {
    id: 1941,
    name: 'Étourdisseur majeur',
  },
  {
    id: 1942,
    name: 'Évasif mineur',
  },
  {
    id: 1943,
    name: 'Évasif',
  },
  {
    id: 1944,
    name: 'Évasif majeur',
  },
  {
    id: 1945,
    name: 'Cavaleur mineur',
  },
  {
    id: 1946,
    name: 'Cavaleur',
  },
  {
    id: 1947,
    name: 'Cavaleur majeur',
  },
  {
    id: 1948,
    name: 'Culbuteur mineur',
  },
  {
    id: 1949,
    name: 'Culbuteur',
  },
  {
    id: 1950,
    name: 'Culbuteur majeur',
  },
  {
    id: 1951,
    name: 'Solide mineur',
  },
  {
    id: 1952,
    name: 'Solide',
  },
  {
    id: 1953,
    name: 'Solide majeur',
  },
  {
    id: 1954,
    name: 'Fonceur mineur',
  },
  {
    id: 1955,
    name: 'Fonceur',
  },
  {
    id: 1956,
    name: 'Fonceur majeur',
  },
  {
    id: 1957,
    name: 'Carapace Terre mineur',
  },
  {
    id: 1958,
    name: 'Carapace Terre',
  },
  {
    id: 1959,
    name: 'Carapace Terre majeur',
  },
  {
    id: 1960,
    name: 'Carapace Neutre mineur',
  },
  {
    id: 1961,
    name: 'Carapace Neutre',
  },
  {
    id: 1962,
    name: 'Carapace Neutre majeur',
  },
  {
    id: 1963,
    name: 'Carapace Feu mineur',
  },
  {
    id: 1964,
    name: 'Carapace Feu',
  },
  {
    id: 1965,
    name: 'Carapace Feu majeur',
  },
  {
    id: 1966,
    name: 'Carapace Eau mineur',
  },
  {
    id: 1967,
    name: 'Carapace Eau',
  },
  {
    id: 1968,
    name: 'Carapace Eau majeur',
  },
  {
    id: 1969,
    name: 'Carapace Air mineur',
  },
  {
    id: 1970,
    name: 'Carapace Air',
  },
  {
    id: 1971,
    name: 'Carapace Air majeur',
  },
  {
    id: 1972,
    name: 'Vigoureux mineur',
  },
  {
    id: 1973,
    name: 'Vigoureux',
  },
  {
    id: 1974,
    name: 'Vigoureux majeur',
  },
  {
    id: 1975,
    name: 'Remueur',
  },
  {
    id: 1976,
    name: 'Nomade',
  },
  {
    id: 1977,
    name: 'Observateur',
  },
  {
    id: 1978,
    name: 'Sanguinaire mineur',
  },
  {
    id: 1979,
    name: 'Sanguinaire',
  },
  {
    id: 1980,
    name: 'Sanguinaire majeur',
  },
  {
    id: 1981,
    name: 'Casque de Kardorim',
  },
  {
    id: 1982,
    name: 'Cape de Kardorim',
  },
  {
    id: 1983,
    name: 'Bracelet de Kardorim',
  },
  {
    id: 1984,
    name: 'Coiffe Antôme',
  },
  {
    id: 1985,
    name: 'Cape Syché',
  },
  {
    id: 1986,
    name: 'Animulette',
  },
  {
    id: 1987,
    name: 'Sac à Main Renforcé',
  },
  {
    id: 1988,
    name: 'Ceinture du chasseur',
  },
  {
    id: 1989,
    name: 'Cocobottes',
  },
  {
    id: 1990,
    name: 'Dokoko',
  },
  {
    id: 1991,
    name: 'Masque Vaudou Tam',
  },
  {
    id: 1992,
    name: 'Cape de Moon',
  },
  {
    id: 1993,
    name: 'Amulette de Moon',
  },
  {
    id: 1994,
    name: 'Ceinture du Bretteur Céleste',
  },
  {
    id: 1995,
    name: 'Cape du Bretteur Céleste',
  },
  {
    id: 1996,
    name: 'Barbe de Zatoïshwan',
  },
  {
    id: 1997,
    name: 'Ceinture de Zatoïshwan',
  },
  {
    id: 1998,
    name: 'Amulette Voldelor',
  },
  {
    id: 1999,
    name: 'Ceinture Voldelor',
  },
  {
    id: 2000,
    name: 'Bottes Voldelor',
  },
  {
    id: 2001,
    name: 'Cape de Kongoku',
  },
  {
    id: 2002,
    name: "Boucle d'oreille de Kongoku",
  },
  {
    id: 2003,
    name: 'Ceinture de Kongoku',
  },
  {
    id: 2004,
    name: 'Cape du Capitaine Pirate',
  },
  {
    id: 2005,
    name: 'Chapeau du Capitaine Pirate',
  },
  {
    id: 2006,
    name: 'Alliance du Capitaine Pirate',
  },
  {
    id: 2007,
    name: 'Ceinture du K.O.',
  },
  {
    id: 2008,
    name: 'Amulette du K.O.',
  },
  {
    id: 2009,
    name: 'Bottes du K.O.',
  },
  {
    id: 2010,
    name: 'Bottes des 1001 Griffes',
  },
  {
    id: 2011,
    name: 'Culotte des 1001 Griffes',
  },
  {
    id: 2012,
    name: 'Bottes des Grocoricos',
  },
  {
    id: 2013,
    name: 'Bottes des Redroz',
  },
  {
    id: 2014,
    name: 'Bottes des Pamous',
  },
  {
    id: 2015,
    name: 'Bottes des Zoblaks',
  },
  {
    id: 2016,
    name: 'Ceinture des Grocoricos',
  },
  {
    id: 2017,
    name: 'Ceinture des Redroz',
  },
  {
    id: 2018,
    name: 'Ceinture des Pamous',
  },
  {
    id: 2019,
    name: 'Ceinture des Zoblaks',
  },
  {
    id: 2020,
    name: 'Coiffe Ondamentale',
  },
  {
    id: 2021,
    name: 'Cape Rimordiale',
  },
  {
    id: 2022,
    name: 'Bottes Initiales',
  },
  {
    id: 2023,
    name: "L'Élémenture",
  },
  {
    id: 2024,
    name: 'Anneau Riginel',
  },
  {
    id: 2025,
    name: 'Cape Épinière',
  },
  {
    id: 2026,
    name: "Chapeau H'lnor",
  },
  {
    id: 2027,
    name: 'Souliers Pineux',
  },
  {
    id: 2028,
    name: 'Anneau Welle',
  },
  {
    id: 2029,
    name: 'Collier de Khan Karkass',
  },
  {
    id: 2030,
    name: 'Torque du Monarque',
  },
  {
    id: 2031,
    name: 'Bottes de Marline',
  },
  {
    id: 2032,
    name: 'Bottes du Monarque',
  },
  {
    id: 2033,
    name: 'Slip de Khan Karkass',
  },
  {
    id: 2034,
    name: 'Ceinture du Monarque',
  },
  {
    id: 2035,
    name: 'Torque des 1001 Griffes',
  },
  {
    id: 2036,
    name: 'Ceinture du Garde Royal',
  },
  {
    id: 2037,
    name: 'Bottes du Garde Royal',
  },
  {
    id: 2038,
    name: 'Collier de Lilotte',
  },
  {
    id: 2039,
    name: 'Fecaflip',
  },
  {
    id: 2040,
    name: 'Bouclier des 1001 Griffes',
  },
  {
    id: 2041,
    name: 'Bottes du Roi Joueur',
  },
  {
    id: 2042,
    name: 'Couronne du Roi Joueur',
  },
  {
    id: 2043,
    name: 'Chevalière du Roi Joueur',
  },
  {
    id: 2044,
    name: 'Bottes de la Dame du Hasard',
  },
  {
    id: 2045,
    name: 'Collier de la Dame du Hasard',
  },
  {
    id: 2046,
    name: 'Cape de la Dame du Hasard',
  },
  {
    id: 2047,
    name: 'Bottes du Chalœil',
  },
  {
    id: 2048,
    name: 'Casque du Chalœil',
  },
  {
    id: 2049,
    name: 'Cape du Chalœil',
  },
  {
    id: 2050,
    name: 'Collier du Valet Veinard',
  },
  {
    id: 2051,
    name: 'Gant du Valet Veinard',
  },
  {
    id: 2052,
    name: 'Cape du Valet Veinard',
  },
  {
    id: 2053,
    name: "Cape d'Atcham",
  },
  {
    id: 2054,
    name: "Sandales d'Atcham",
  },
  {
    id: 2055,
    name: 'Col de Ush',
  },
  {
    id: 2056,
    name: 'Bottes de Ush',
  },
  {
    id: 2057,
    name: 'Cape des Matougarous',
  },
  {
    id: 2058,
    name: 'Ceinture des Matougarous',
  },
  {
    id: 2059,
    name: 'Anneau des Matougarous',
  },
  {
    id: 2060,
    name: 'Bottes du Pounicheur',
  },
  {
    id: 2061,
    name: 'Ceinture du Pounicheur',
  },
  {
    id: 2062,
    name: 'Scalp du Pounicheur',
  },
  {
    id: 2063,
    name: 'Bague des Ecaflipuces',
  },
  {
    id: 2064,
    name: 'Collier des Ecaflipuces',
  },
  {
    id: 2065,
    name: 'Cape des Ecaflipuces',
  },
  {
    id: 2066,
    name: 'Bottes Dragocourse',
  },
  {
    id: 2067,
    name: 'Ceinture Dragocourse',
  },
  {
    id: 2068,
    name: 'Sandalnéaires',
  },
  {
    id: 2069,
    name: 'Collier de Tourthon',
  },
  {
    id: 2070,
    name: 'Anneau Crustique',
  },
  {
    id: 2071,
    name: 'Masque de Koutoulou',
  },
  {
    id: 2072,
    name: 'Pendentif affamé',
  },
  {
    id: 2073,
    name: 'Cape de Diondin',
  },
  {
    id: 2074,
    name: 'Bottes Innommables',
  },
  {
    id: 2075,
    name: 'Amulette de Shokkoth',
  },
  {
    id: 2076,
    name: 'Cape de Mantaze',
  },
  {
    id: 2077,
    name: 'Poulpagne',
  },
  {
    id: 2078,
    name: 'Palmes Trithons',
  },
  {
    id: 2079,
    name: 'Cape Indescriptible',
  },
  {
    id: 2080,
    name: 'Menoture',
  },
  {
    id: 2081,
    name: 'Ceintouse',
  },
  {
    id: 2082,
    name: 'Tentassons',
  },
  {
    id: 2083,
    name: 'Chapoulpe',
  },
  {
    id: 2084,
    name: 'Bottes de Meno',
  },
  {
    id: 2085,
    name: 'Casquette de Meno',
  },
  {
    id: 2086,
    name: 'Cape de Meno',
  },
  {
    id: 2087,
    name: "Amulette de l'Indicible",
  },
  {
    id: 2088,
    name: "Ceinture de l'Indicible",
  },
  {
    id: 2089,
    name: "Bottes de l'Indicible",
  },
  {
    id: 2090,
    name: 'Bague Trithon',
  },
  {
    id: 2091,
    name: 'Bottes Trithon',
  },
  {
    id: 2092,
    name: 'Masque Trithon',
  },
  {
    id: 2093,
    name: 'Amulette Luminescente',
  },
  {
    id: 2094,
    name: 'Ceinture Luminescente',
  },
  {
    id: 2095,
    name: 'Cape Luminescente',
  },
  {
    id: 2096,
    name: 'Pendentif mignon de Koutoulou',
  },
  {
    id: 2097,
    name: 'Casque Cyclopéen',
  },
  {
    id: 2098,
    name: 'Anneau Rifique',
  },
  {
    id: 2099,
    name: 'Dofus Abyssal',
  },
  {
    id: 2100,
    name: 'Chapeau Shushivan',
  },
  {
    id: 2101,
    name: 'Cape Shushivan',
  },
  {
    id: 2102,
    name: 'Ceinturonce',
  },
  {
    id: 2103,
    name: 'Amuronce',
  },
  {
    id: 2104,
    name: 'Cape Ouroboulos',
  },
  {
    id: 2105,
    name: 'Anneau Ouroboulos',
  },
  {
    id: 2106,
    name: 'Bottes Ouroboulos',
  },
  {
    id: 2107,
    name: 'Cape du Désert',
  },
  {
    id: 2108,
    name: 'Coiffennex',
  },
  {
    id: 2109,
    name: 'String Léolhyène',
  },
  {
    id: 2110,
    name: 'Capterre',
  },
  {
    id: 2111,
    name: 'Cascterre',
  },
  {
    id: 2112,
    name: 'Cacture',
  },
  {
    id: 2113,
    name: "Sombrero d'El Piko",
  },
  {
    id: 2114,
    name: "Anneau d'El Piko",
  },
  {
    id: 2115,
    name: "Amulette d'El Piko",
  },
  {
    id: 2116,
    name: 'Le Dorado',
  },
  {
    id: 2117,
    name: 'Boule de Nowel',
  },
  {
    id: 2118,
    name: 'Lainture',
  },
  {
    id: 2119,
    name: 'Chaussettenlaine',
  },
  {
    id: 2120,
    name: 'Casquoporth',
  },
  {
    id: 2121,
    name: 'Ceintrémorse',
  },
  {
    id: 2122,
    name: 'Crolier',
  },
  {
    id: 2123,
    name: 'Chaussquales',
  },
  {
    id: 2124,
    name: 'Capikténia',
  },
  {
    id: 2125,
    name: 'Veranneau',
  },
  {
    id: 2126,
    name: 'Némès de Tal Kasha',
  },
  {
    id: 2127,
    name: 'Chevelure de Tal Kasha',
  },
  {
    id: 2128,
    name: 'Sandales de Tal Kasha',
  },
  {
    id: 2129,
    name: 'Bottistik',
  },
  {
    id: 2130,
    name: 'Baguistik',
  },
  {
    id: 2131,
    name: 'Torquistik',
  },
  {
    id: 2132,
    name: 'Capuche de Moum-Ra',
  },
  {
    id: 2133,
    name: 'Ankhape',
  },
  {
    id: 2134,
    name: 'Pagne du Rykaon',
  },
  {
    id: 2135,
    name: 'Anneauræus',
  },
  {
    id: 2136,
    name: 'Anneau Nos',
  },
  {
    id: 2137,
    name: 'Bottes Harcie',
  },
  {
    id: 2138,
    name: 'Cape Hoile',
  },
  {
    id: 2139,
    name: 'Chapeau Devin',
  },
  {
    id: 2140,
    name: 'Ceinture Leumant',
  },
  {
    id: 2141,
    name: 'Ceinture du Molosse',
  },
  {
    id: 2142,
    name: 'Amulette du Molosse',
  },
  {
    id: 2143,
    name: 'Bouclier en Mousse',
  },
  {
    id: 2144,
    name: 'Coupe de Dragokart',
  },
  {
    id: 2145,
    name: 'Bouclier Aerdala',
  },
  {
    id: 2146,
    name: 'Bouclier Feudala',
  },
  {
    id: 2147,
    name: 'Bouclier Terrdala',
  },
  {
    id: 2148,
    name: 'Bouclier du Craqueleur',
  },
  {
    id: 2149,
    name: 'Bouclier de Bowisse',
  },
  {
    id: 2150,
    name: 'Bouclier du Bouftou',
  },
  {
    id: 2151,
    name: 'Bouclier du Chouque',
  },
  {
    id: 2152,
    name: 'Bouclier Volant',
  },
  {
    id: 2153,
    name: 'Kloume',
  },
  {
    id: 2154,
    name: 'Bouclier du Captain Amakna',
  },
  {
    id: 2155,
    name: 'Derma Tho',
  },
  {
    id: 2156,
    name: 'Bouclier du Bawbawe',
  },
  {
    id: 2157,
    name: 'Le Karde Cœur',
  },
  {
    id: 2158,
    name: 'Bouclier des Brigandins',
  },
  {
    id: 2159,
    name: 'Bouclier du Mont Kipou',
  },
  {
    id: 2160,
    name: 'Bouclier du Bûcheron',
  },
  {
    id: 2161,
    name: "Cadran d'Eau",
  },
  {
    id: 2162,
    name: 'Cadran de Terre',
  },
  {
    id: 2163,
    name: "Cadran d'Air",
  },
  {
    id: 2164,
    name: 'Cadran de Feu',
  },
  {
    id: 2165,
    name: 'Bouclier Pandawa',
  },
  {
    id: 2166,
    name: 'Bouclier Abraknyde',
  },
  {
    id: 2167,
    name: "Bouclier d'Asse",
  },
  {
    id: 2168,
    name: 'Bouclier en Slip',
  },
  {
    id: 2169,
    name: 'Bouclier du Sadida',
  },
  {
    id: 2170,
    name: 'Bouclier Ventaille',
  },
  {
    id: 2171,
    name: 'Bouclier Akwadala',
  },
  {
    id: 2172,
    name: 'Bouclier Taverne',
  },
  {
    id: 2173,
    name: 'Ftalmo',
  },
  {
    id: 2174,
    name: 'Bouclier de Sidimote',
  },
  {
    id: 2175,
    name: "Bouclier Fi'Squale",
  },
  {
    id: 2176,
    name: 'Bouclier précieux',
  },
  {
    id: 2177,
    name: 'Écorce de Brouce',
  },
  {
    id: 2178,
    name: 'Roncier',
  },
  {
    id: 2179,
    name: 'La Rondelle',
  },
  {
    id: 2180,
    name: 'Ambrouclier',
  },
  {
    id: 2181,
    name: 'Jadis',
  },
  {
    id: 2182,
    name: 'Bouclier du serrurier',
  },
  {
    id: 2183,
    name: 'Carapar',
  },
  {
    id: 2184,
    name: 'Quatre-feuilles',
  },
  {
    id: 2185,
    name: 'Sept ans de malheur',
  },
  {
    id: 2186,
    name: 'Détourné',
  },
  {
    id: 2187,
    name: 'Bivalve',
  },
  {
    id: 2188,
    name: 'Bouclier à hélice',
  },
  {
    id: 2189,
    name: 'Bouclier du Chafer fantassin',
  },
  {
    id: 2190,
    name: 'Bouclier cubiste',
  },
  {
    id: 2191,
    name: 'Bouclier alvéolé',
  },
  {
    id: 2192,
    name: 'Bouclier du Chef Crocodaille',
  },
  {
    id: 2193,
    name: 'Bouclier du tournesol sauvage',
  },
  {
    id: 2194,
    name: 'Bouclier du Stalak',
  },
  {
    id: 2195,
    name: 'Bouclier du Cycloïde',
  },
  {
    id: 2196,
    name: 'Ceinture du Comte Razof',
  },
  {
    id: 2197,
    name: 'Chaussons du Comte Razof',
  },
  {
    id: 2198,
    name: 'Chapeau du Comte Razof',
  },
  {
    id: 2199,
    name: 'Cape Tif',
  },
  {
    id: 2200,
    name: 'Chaussures Face',
  },
  {
    id: 2201,
    name: 'Amulette Hale',
  },
  {
    id: 2202,
    name: 'Magture',
  },
  {
    id: 2203,
    name: "Masque d'Anerice",
  },
  {
    id: 2204,
    name: "Cape d'Anerice",
  },
  {
    id: 2205,
    name: "Bouclier d'Anerice",
  },
  {
    id: 2206,
    name: 'Goulano',
  },
  {
    id: 2207,
    name: 'Goulbottes',
  },
  {
    id: 2208,
    name: 'Goulclier',
  },
  {
    id: 2209,
    name: 'Casque du Scorbute',
  },
  {
    id: 2210,
    name: 'Cape du Scorbute',
  },
  {
    id: 2211,
    name: 'Amulette du Scorbute',
  },
  {
    id: 2212,
    name: 'Bouclier de Choudini',
  },
  {
    id: 2213,
    name: 'Bottes de Choudini',
  },
  {
    id: 2214,
    name: 'Masque de Choudini',
  },
  {
    id: 2215,
    name: 'Masque Riktus',
  },
  {
    id: 2216,
    name: 'Cape Riktus',
  },
  {
    id: 2217,
    name: 'Anneau Riktus',
  },
  {
    id: 2218,
    name: 'Coiffe du Muloubar',
  },
  {
    id: 2219,
    name: 'Cape du Muloubar',
  },
  {
    id: 2220,
    name: 'Pagne du Muloubar',
  },
  {
    id: 2221,
    name: 'Bouclier Invisible',
  },
  {
    id: 2222,
    name: 'Masque mortuaire',
  },
  {
    id: 2223,
    name: 'Amulette du Cœur Vaillant',
  },
  {
    id: 2224,
    name: 'Bottes du Cœur Vaillant',
  },
  {
    id: 2225,
    name: 'Cape du Cœur Vaillant',
  },
  {
    id: 2226,
    name: 'Amulette du Cœur Saignant',
  },
  {
    id: 2227,
    name: 'Bottes du Cœur Saignant',
  },
  {
    id: 2228,
    name: 'Cape du Cœur Saignant',
  },
  {
    id: 2229,
    name: "Ceinture de l'Esprit Salvateur",
  },
  {
    id: 2230,
    name: "Bottes de l'Esprit Salvateur",
  },
  {
    id: 2231,
    name: "Masque de l'Esprit Salvateur",
  },
  {
    id: 2232,
    name: "Ceinture de l'Esprit Malsain",
  },
  {
    id: 2233,
    name: "Bottes de l'Esprit Malsain",
  },
  {
    id: 2234,
    name: "Masque de l'Esprit Malsain",
  },
  {
    id: 2235,
    name: "Cape de l'Œil Attentif",
  },
  {
    id: 2236,
    name: "Capuche de l'Œil Attentif",
  },
  {
    id: 2237,
    name: "Amulette de l'Œil Attentif",
  },
  {
    id: 2238,
    name: "Cape de l'Œil Putride",
  },
  {
    id: 2239,
    name: "Capuche de l'Œil Putride",
  },
  {
    id: 2240,
    name: "Amulette de l'Œil Putride",
  },
  {
    id: 2241,
    name: 'Bouclier Bontarien',
  },
  {
    id: 2242,
    name: 'Bouclier Brâkmarien',
  },
  {
    id: 2243,
    name: "Amulette d'Ilyzaelle",
  },
  {
    id: 2244,
    name: "Casque d'Ilyzaelle",
  },
  {
    id: 2245,
    name: "Bouclier d'Ilyzaelle",
  },
  {
    id: 2246,
    name: 'Alliance Brûlâme',
  },
  {
    id: 2247,
    name: 'Pompes Funèbres',
  },
  {
    id: 2248,
    name: 'Masque Brûlâme',
  },
  {
    id: 2249,
    name: 'Dofus Forgelave',
  },
  {
    id: 2250,
    name: 'Cape Colorivante',
  },
  {
    id: 2251,
    name: 'Bouclier Colorivant',
  },
  {
    id: 2252,
    name: 'Chapeau Colorivant',
  },
  {
    id: 2253,
    name: 'Chaussures Ardentes',
  },
  {
    id: 2254,
    name: 'Masque Ardent',
  },
  {
    id: 2255,
    name: 'Cape Ardente',
  },
  {
    id: 2256,
    name: 'Amulette Volcanique',
  },
  {
    id: 2257,
    name: 'Sac Volcanique',
  },
  {
    id: 2258,
    name: 'Sabots Volcaniques',
  },
  {
    id: 2259,
    name: 'Heaume Oplate',
  },
  {
    id: 2260,
    name: 'Ceinture Gence',
  },
  {
    id: 2261,
    name: 'Lavanneau',
  },
  {
    id: 2262,
    name: 'Bouclier de Solar',
  },
  {
    id: 2263,
    name: 'Sangle Oriole',
  },
  {
    id: 2264,
    name: 'Chapeau de Tournoyé',
  },
  {
    id: 2265,
    name: 'Cape de Crânonier',
  },
  {
    id: 2266,
    name: 'Culotte de Bethel',
  },
  {
    id: 2267,
    name: 'Chaussons de Macrab',
  },
  {
    id: 2268,
    name: 'Masque de Funespadon',
  },
  {
    id: 2269,
    name: 'Cape Solution',
  },
  {
    id: 2270,
    name: 'Anneau Toriété',
  },
  {
    id: 2271,
    name: 'Collier Rophante',
  },
  {
    id: 2272,
    name: 'Bottes Honyme',
  },
  {
    id: 2273,
    name: "Anneau de l'Audacieux",
  },
  {
    id: 2274,
    name: 'Dofus Argenté',
  },
  {
    id: 2275,
    name: 'Ceinture en Grithril',
  },
  {
    id: 2276,
    name: 'Anneau en Grithril',
  },
  {
    id: 2277,
    name: 'Casque en Grithril',
  },
  {
    id: 2278,
    name: 'Cape Martegel',
  },
  {
    id: 2279,
    name: 'Masquegel',
  },
  {
    id: 2280,
    name: 'Amulette Martegel',
  },
  {
    id: 2281,
    name: 'Casque Volkorne',
  },
  {
    id: 2282,
    name: 'Ceinture Volkorne',
  },
  {
    id: 2283,
    name: 'Amulette Volkorne',
  },
  {
    id: 2284,
    name: 'Anneau Volkorne',
  },
  {
    id: 2285,
    name: 'Dofus Argenté Scintillant',
  },
  {
    id: 2286,
    name: 'Droiture de Fallanster',
  },
  {
    id: 2287,
    name: 'Trompe-la-Mort',
  },
  {
    id: 2288,
    name: 'Couronne de Brâm Barbe-Monde',
  },
  {
    id: 2289,
    name: 'Diadème de Ganymède',
  },
  {
    id: 2290,
    name: 'Bravoure de Rykke Errel',
  },
  {
    id: 2291,
    name: 'Cape de Jahash Jurgen',
  },
  {
    id: 2292,
    name: 'Bottes de Mille Lieues',
  },
  {
    id: 2293,
    name: 'Bottes du Cul Botté',
  },
  {
    id: 2294,
    name: 'Audace de Dodge',
  },
  {
    id: 2295,
    name: 'Ceinture de Dame Jhessica',
  },
  {
    id: 2296,
    name: 'Bulbijevan',
  },
  {
    id: 2297,
    name: 'Sandales Paztek',
  },
  {
    id: 2298,
    name: 'Cape Paztek',
  },
  {
    id: 2299,
    name: 'Masque Paztek',
  },
  {
    id: 2300,
    name: 'Dofus Cacao',
  },
  {
    id: 2301,
    name: 'Mawabottes',
  },
  {
    id: 2302,
    name: 'Ceinture Amincissante',
  },
  {
    id: 2303,
    name: 'Rondelle de Waddict',
  },
  {
    id: 2304,
    name: 'Amulette des Chocomanciens',
  },
  {
    id: 2305,
    name: 'Ceinture des Chocomanciens',
  },
  {
    id: 2306,
    name: 'Bouclier des Chocomanciens',
  },
  {
    id: 2307,
    name: 'Masque de Kao',
  },
  {
    id: 2308,
    name: 'Croquasque',
  },
  {
    id: 2309,
    name: 'Bottes Croquantes',
  },
  {
    id: 2310,
    name: 'Sac à Croquer',
  },
  {
    id: 2311,
    name: 'Dofus Cacao',
  },
  {
    id: 2312,
    name: 'Bouteille de chronoxygène',
  },
  {
    id: 2313,
    name: 'Scaphandre chronomagique',
  },
  {
    id: 2314,
    name: 'Crocanneau',
  },
  {
    id: 2315,
    name: 'Croture',
  },
  {
    id: 2316,
    name: 'Croclier',
  },
  {
    id: 2317,
    name: 'Bottes Lunaires',
  },
  {
    id: 2318,
    name: 'Collier Lunaire',
  },
  {
    id: 2319,
    name: 'Anneau Lunaire',
  },
  {
    id: 2320,
    name: 'Carapace de Torkélonia',
  },
  {
    id: 2321,
    name: 'Corne de Torkélonia',
  },
];

const consumableDatas: any = consumables.map((consumable) => {
  const charges = Math.floor(Math.random() * 10) + 1;
  return {
    _id: new mongoose.Types.ObjectId(
      `5cabe64dcf0d4447fa6e${String('0000' + consumable.id).slice(-4)}`,
    ),
    name: consumable.name,
    price: Math.floor(Math.random() * 100) + 1,
    type: 'consumable',
    charges,
    usedCharges: charges,
  };
});

const equipmentDatas: any = equipments.map((equipment) => {
  return {
    _id: new mongoose.Types.ObjectId(
      `1bfbe64dcf0d4447fa${String('000000' + equipment.id).slice(-6)}`,
    ),
    name: equipment.name,
    price: Math.floor(Math.random() * 100) + 1,
    type: 'equipment',
    durability: Math.floor(Math.random() * 100) + 1,
    daysInUse: Math.floor(Math.random() * 100) + 1,
    repairTime: (Math.random() * 10 + 1).toFixed(1),
  };
});

export = consumableDatas.concat(equipmentDatas);
