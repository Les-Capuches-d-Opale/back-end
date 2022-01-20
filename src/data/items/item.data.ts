const mongoose = require('mongoose');

const consumables = [
  {
    id: 281,
    name: 'Pomme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42001.png',
  },
  {
    id: 282,
    name: 'Potion de Soin supérieure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12039.png',
  },
  {
    id: 283,
    name: 'Potion de Soin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12003.png',
  },
  {
    id: 351,
    name: "Bière d'Amakna",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 468,
    name: "Pain d'Incarnam",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33013.png',
  },
  {
    id: 520,
    name: 'Borodinski',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33010.png',
  },
  {
    id: 521,
    name: 'Michette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33011.png',
  },
  {
    id: 522,
    name: 'Biscotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 524,
    name: 'Fougasse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33018.png',
  },
  {
    id: 526,
    name: 'Pain aux Céréales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33006.png',
  },
  {
    id: 527,
    name: 'Mantou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33014.png',
  },
  {
    id: 528,
    name: 'Carasau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33007.png',
  },
  {
    id: 536,
    name: "Pain aux Flocons d'Avoine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33005.png',
  },
  {
    id: 539,
    name: 'Pain de Seigle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33009.png',
  },
  {
    id: 548,
    name: 'Potion de Rappel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12017.png',
  },
  {
    id: 580,
    name: 'Potion Ghetto Raide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12018.png',
  },
  {
    id: 678,
    name: "Parchemin d'Ivoire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 679,
    name: 'Parchemin Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 680,
    name: 'Parchemin Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 683,
    name: 'Petit Parchemin de Force',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76021.png',
  },
  {
    id: 684,
    name: 'Parchemin de Kolizétons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76044.png',
  },
  {
    id: 686,
    name: "Petit Parchemin d'Intelligence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76023.png',
  },
  {
    id: 692,
    name: 'Pain Consistant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 695,
    name: 'Parchemin de Bûcheron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 713,
    name: 'Parchemin de Forgeron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 714,
    name: 'Parchemin de Forgeur de dagues',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 715,
    name: 'Parchemin de Sculpteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 716,
    name: 'Parchemin de Sculpteur de bâtons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 717,
    name: 'Parchemin de Sculpteur de baguettes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 718,
    name: 'Parchemin de Sort Flamiche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75001.png',
  },
  {
    id: 719,
    name: 'Parchemin de Sort Libération',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 720,
    name: 'Parchemin de Sort Foudroiement',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 721,
    name: "Parchemin de Sort Invocation d'Arakne",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 743,
    name: 'Brioche Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33008.png',
  },
  {
    id: 760,
    name: 'Pain au curry sans curry',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 795,
    name: 'Parchemin de Force',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76029.png',
  },
  {
    id: 796,
    name: 'Grand Parchemin de Force',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76030.png',
  },
  {
    id: 797,
    name: 'Puissant Parchemin de Force',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76031.png',
  },
  {
    id: 798,
    name: "Petit Parchemin d'Agilité",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76020.png',
  },
  {
    id: 799,
    name: "Parchemin d'Agilité",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76026.png',
  },
  {
    id: 800,
    name: "Grand Parchemin d'Agilité",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76027.png',
  },
  {
    id: 801,
    name: "Puissant Parchemin d'Agilité",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76028.png',
  },
  {
    id: 802,
    name: 'Petit Parchemin de Sagesse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76024.png',
  },
  {
    id: 803,
    name: 'Parchemin de Sagesse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76038.png',
  },
  {
    id: 804,
    name: 'Grand Parchemin de Sagesse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76039.png',
  },
  {
    id: 805,
    name: 'Puissant Parchemin de Sagesse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76040.png',
  },
  {
    id: 806,
    name: 'Petit Parchemin de Vitalité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76025.png',
  },
  {
    id: 807,
    name: 'Parchemin de Vitalité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76041.png',
  },
  {
    id: 808,
    name: 'Grand Parchemin de Vitalité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76042.png',
  },
  {
    id: 809,
    name: 'Petit Parchemin de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76022.png',
  },
  {
    id: 810,
    name: 'Puissant Parchemin de Vitalité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76043.png',
  },
  {
    id: 811,
    name: 'Parchemin de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76032.png',
  },
  {
    id: 812,
    name: 'Grand Parchemin de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76033.png',
  },
  {
    id: 814,
    name: 'Puissant Parchemin de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76034.png',
  },
  {
    id: 815,
    name: "Parchemin d'Intelligence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76035.png',
  },
  {
    id: 816,
    name: "Grand Parchemin d'Intelligence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76036.png',
  },
  {
    id: 817,
    name: "Puissant Parchemin d'Intelligence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/76037.png',
  },
  {
    id: 818,
    name: 'Clé en Roche de Ded Aléïcar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 878,
    name: 'Parchemin de Boulanger',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 879,
    name: 'Parchemin de Cordonnier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 989,
    name: 'Shigekax Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 990,
    name: 'Shigekax Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42025.png',
  },
  {
    id: 991,
    name: 'Shigekax Menthe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42024.png',
  },
  {
    id: 992,
    name: 'Shigekax Cerise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42019.png',
  },
  {
    id: 993,
    name: 'Vertgely',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42021.png',
  },
  {
    id: 994,
    name: 'Rougely',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42020.png',
  },
  {
    id: 995,
    name: 'Blugely',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42022.png',
  },
  {
    id: 996,
    name: 'Multygely',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42026.png',
  },
  {
    id: 1182,
    name: 'Potion de Mini Soin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12016.png',
  },
  {
    id: 1183,
    name: 'Potion de Mini Soin Supérieure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12038.png',
  },
  {
    id: 1405,
    name: 'Potion Eau de fée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12041.png',
  },
  {
    id: 1406,
    name: 'Sang de Likrone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12040.png',
  },
  {
    id: 1573,
    name: 'Rune de Transport',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 1635,
    name: 'Lâcher les gaz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 1677,
    name: 'Potion Dantegoulesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12139.png',
  },
  {
    id: 1712,
    name: 'Potion Pahoa Raide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12140.png',
  },
  {
    id: 1713,
    name: 'Potion Raide Boule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12141.png',
  },
  {
    id: 1737,
    name: 'Pain des Champs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33068.png',
  },
  {
    id: 1738,
    name: 'Pain des Villes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33069.png',
  },
  {
    id: 1752,
    name: 'Poisson Pané Frit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49071.png',
  },
  {
    id: 1756,
    name: 'Poisson Igloo Frit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49073.png',
  },
  {
    id: 1764,
    name: 'Bâton de Crabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49074.png',
  },
  {
    id: 1766,
    name: 'Bâton de Crabe Exotique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49076.png',
  },
  {
    id: 1767,
    name: 'Poisson-Chaton Fumé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49078.png',
  },
  {
    id: 1769,
    name: 'Poisson-Tigre Fumé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49077.png',
  },
  {
    id: 1809,
    name: 'Bar Grillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49098.png',
  },
  {
    id: 1811,
    name: 'Beignet de Greuvette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49081.png',
  },
  {
    id: 1813,
    name: 'Goujon en Tranche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49083.png',
  },
  {
    id: 1815,
    name: 'Aile de Raie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49085.png',
  },
  {
    id: 1817,
    name: 'Carpette Vapeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49087.png',
  },
  {
    id: 1818,
    name: 'Carpe Vapeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49088.png',
  },
  {
    id: 1820,
    name: 'Kralamoure Grillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49090.png',
  },
  {
    id: 1822,
    name: 'Perche Sautée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49093.png',
  },
  {
    id: 1824,
    name: 'Chaton-Perche Sauté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49092.png',
  },
  {
    id: 1825,
    name: "Sardine à l'Étouffée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49096.png',
  },
  {
    id: 1826,
    name: "Sardine à l'huile ***",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49097.png',
  },
  {
    id: 1827,
    name: "Sardine Sombre à l'Étouffée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49095.png',
  },
  {
    id: 1828,
    name: 'Bar Iton Grillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49099.png',
  },
  {
    id: 1829,
    name: 'Beignet de Greuvette Horreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49100.png',
  },
  {
    id: 1830,
    name: 'Goujon Kiye en Tranche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49101.png',
  },
  {
    id: 1831,
    name: 'Aile de Raie de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49102.png',
  },
  {
    id: 1832,
    name: 'Truite Flambée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49108.png',
  },
  {
    id: 1834,
    name: 'Truite Ancestrale Flambée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49109.png',
  },
  {
    id: 1835,
    name: 'Brochet Farci',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49132.png',
  },
  {
    id: 1837,
    name: 'Brochet Tupe-Halett Farci',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49134.png',
  },
  {
    id: 1838,
    name: 'Aileron de Requin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49103.png',
  },
  {
    id: 1840,
    name: 'Aileron de Requin Marché-Libre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49105.png',
  },
  {
    id: 1859,
    name: 'Kralamoure Unique Grillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49137.png',
  },
  {
    id: 1895,
    name: 'Bière du Feubuk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2020,
    name: 'Pain Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33019.png',
  },
  {
    id: 2024,
    name: 'Briochette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33015.png',
  },
  {
    id: 2025,
    name: 'Briochette magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33008.png',
  },
  {
    id: 2028,
    name: 'Pain Gouin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 2031,
    name: 'Pain de Seigle Résistant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33009.png',
  },
  {
    id: 2034,
    name: "Sucre d'Orge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42128.png',
  },
  {
    id: 2038,
    name: "Pain aux Flocons d'Avoine Aurifère",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33005.png',
  },
  {
    id: 2044,
    name: 'Bière du Chabrulé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2085,
    name: 'Bière de la Tabasse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2086,
    name: 'Bière du Alakarte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2087,
    name: 'Bière de la Bagrutte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2088,
    name: 'Bière de la Chopenbois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2089,
    name: 'Bière du Pinchaut',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2090,
    name: 'Bière du Ferayeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 2151,
    name: 'Blopisier empoisonné',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33406.png',
  },
  {
    id: 2240,
    name: "Petite Fée d'Artifice Rouge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 2332,
    name: 'Bonbon de Consolation',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42135.png',
  },
  {
    id: 2333,
    name: 'Bonbon Rouge Surpuissant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42136.png',
  },
  {
    id: 2351,
    name: 'Pain du Pinchaut',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33020.png',
  },
  {
    id: 2542,
    name: 'Potion de Foyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12142.png',
  },
  {
    id: 2635,
    name: 'Pain Gre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33013.png',
  },
  {
    id: 2636,
    name: 'Pain Tahde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33022.png',
  },
  {
    id: 6541,
    name: "Fée d'Artifice Rouge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6542,
    name: "Grande Fée d'Artifice Rouge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6543,
    name: "Petite Fée d'Artifice Rouge Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6544,
    name: "Fée d'Artifice Rouge Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6545,
    name: "Grande Fée d'Artifice Rouge Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6546,
    name: "Petite Fée d'Artifice Rouge Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6547,
    name: "Fée d'Artifice Rouge Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6548,
    name: "Grande Fée d'Artifice Rouge Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6549,
    name: "Petite Fée d'Artifice Rouge Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6550,
    name: "Fée d'Artifice Rouge Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6551,
    name: "Grande Fée d'Artifice Rouge Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6552,
    name: "Petite Fée d'Artifice Rouge Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6553,
    name: "Fée d'Artifice Rouge Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6554,
    name: "Grande Fée d'Artifice Rouge Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74028.png',
  },
  {
    id: 6555,
    name: "Petite Fée d'Artifice Verte",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6556,
    name: "Fée d'Artifice Verte",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6557,
    name: "Grande Fée d'Artifice Verte",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6558,
    name: "Petite Fée d'Artifice Verte Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6559,
    name: "Fée d'Artifice Verte Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6560,
    name: "Grande Fée d'Artifice Verte Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6561,
    name: "Petite Fée d'Artifice Verte Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6562,
    name: "Fée d'Artifice Verte Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6563,
    name: "Grande Fée d'Artifice Verte Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6564,
    name: "Petite Fée d'Artifice Verte Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6565,
    name: "Fée d'Artifice Verte Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6566,
    name: "Grande Fée d'Artifice Verte Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6567,
    name: "Petite Fée d'Artifice Verte Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6568,
    name: "Fée d'Artifice Verte Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6569,
    name: "Grande Fée d'Artifice Verte Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74026.png',
  },
  {
    id: 6570,
    name: "Petite Fée d'Artifice Bleue",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6571,
    name: "Fée d'Artifice Bleue",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6572,
    name: "Grande Fée d'Artifice Bleue",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6573,
    name: "Petite Fée d'Artifice Bleue Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6574,
    name: "Fée d'Artifice Bleue Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6575,
    name: "Grande Fée d'Artifice Bleue Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6576,
    name: "Petite Fée d'Artifice Bleue Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6577,
    name: "Fée d'Artifice Bleue Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6578,
    name: "Grande Fée d'Artifice Bleue Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6579,
    name: "Petite Fée d'Artifice Bleue Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6580,
    name: "Fée d'Artifice Bleue Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6581,
    name: "Grande Fée d'Artifice Bleue Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6582,
    name: "Petite Fée d'Artifice Bleue Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6583,
    name: "Fée d'Artifice Bleue Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6584,
    name: "Grande Fée d'Artifice Bleue Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74029.png',
  },
  {
    id: 6585,
    name: "Petite Fée d'Artifice Jaune",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6586,
    name: "Fée d'Artifice Jaune",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6587,
    name: "Grande Fée d'Artifice Jaune",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6588,
    name: "Petite Fée d'Artifice Jaune Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6589,
    name: "Fée d'Artifice Jaune Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6590,
    name: "Grande Fée d'Artifice Jaune Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6591,
    name: "Petite Fée d'Artifice Jaune Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6592,
    name: "Fée d'Artifice Jaune Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6593,
    name: "Grande Fée d'Artifice Jaune Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6594,
    name: "Petite Fée d'Artifice Jaune Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6595,
    name: "Fée d'Artifice Jaune Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6596,
    name: "Grande Fée d'Artifice Jaune Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6597,
    name: "Petite Fée d'Artifice Jaune Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6598,
    name: "Fée d'Artifice Jaune Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6599,
    name: "Grande Fée d'Artifice Jaune Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74027.png',
  },
  {
    id: 6600,
    name: "Grande Fée d'Artifice Invocatrice de Tofu",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74031.png',
  },
  {
    id: 6627,
    name: "Petite Fée d'Artifice Multicolore",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6628,
    name: "Fée d'Artifice Multicolore",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6629,
    name: "Grande Fée d'Artifice Multicolore",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6630,
    name: "Petite Fée d'Artifice Multicolore Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6631,
    name: "Fée d'Artifice Multicolore Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6632,
    name: "Grande Fée d'Artifice Multicolore Tournoyante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6633,
    name: "Petite Fée d'Artifice Multicolore Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6634,
    name: "Fée d'Artifice Multicolore Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6635,
    name: "Grande Fée d'Artifice Multicolore Fontaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6636,
    name: "Petite Fée d'Artifice Multicolore Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6637,
    name: "Fée d'Artifice Multicolore Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6638,
    name: "Grande Fée d'Artifice Multicolore Crépitante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6639,
    name: "Petite Fée d'Artifice Multicolore Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6640,
    name: "Fée d'Artifice Multicolore Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6641,
    name: "Grande Fée d'Artifice Multicolore Virevoltante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74030.png',
  },
  {
    id: 6643,
    name: 'Booden glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42143.png',
  },
  {
    id: 6644,
    name: 'Cône Wayal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42144.png',
  },
  {
    id: 6646,
    name: 'Glace Bontarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42145.png',
  },
  {
    id: 6647,
    name: 'Magma Brâkmarien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42146.png',
  },
  {
    id: 6666,
    name: 'Sucette Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42147.png',
  },
  {
    id: 6667,
    name: 'Sucette Trool',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42148.png',
  },
  {
    id: 6668,
    name: 'Hot Dog de Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42150.png',
  },
  {
    id: 6669,
    name: 'Burger de Trool',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42149.png',
  },
  {
    id: 6670,
    name: 'Frites de Tournesol Sauvage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42151.png',
  },
  {
    id: 6765,
    name: 'Lailait',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79001.png',
  },
  {
    id: 6857,
    name: "Bière d'Astrub",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 6963,
    name: 'Boules du Minotoboule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12143.png',
  },
  {
    id: 6964,
    name: 'Potion de cité : Brâkmar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12145.png',
  },
  {
    id: 6965,
    name: 'Potion de cité : Bonta',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12144.png',
  },
  {
    id: 7045,
    name: 'Une fiole de Pandaburg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79002.png',
  },
  {
    id: 7046,
    name: 'Une fiole de Pandapiler',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79003.png',
  },
  {
    id: 7047,
    name: 'Une fiole de Pandapils',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79004.png',
  },
  {
    id: 7055,
    name: 'Une fiole de Pandneken',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79012.png',
  },
  {
    id: 7129,
    name: 'Panda au chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42031.png',
  },
  {
    id: 7147,
    name: 'Carré de Chocolat au Lait',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42032.png',
  },
  {
    id: 7148,
    name: 'Carré de Chocolat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42033.png',
  },
  {
    id: 7149,
    name: 'Carré de Chocolat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42034.png',
  },
  {
    id: 7314,
    name: "Potion d'oubli Percepteur : Armure aqueuse",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7315,
    name: "Potion d'oubli Percepteur : Armure Incandescente",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7316,
    name: "Potion d'oubli Percepteur : Armure Terrestre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7317,
    name: "Potion d'oubli Percepteur : Armure Venteuse",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7318,
    name: "Potion d'oubli Percepteur : Flamme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7319,
    name: "Potion d'oubli Percepteur 'Cyclone'",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7320,
    name: "Potion d'oubli Percepteur : Vague",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7321,
    name: "Potion d'oubli Percepteur : Rocher",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7322,
    name: "Potion d'oubli Percepteur : Mot Soignant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7323,
    name: "Potion d'oubli Percepteur : Désenvoutement",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7324,
    name: "Potion d'oubli Percepteur : Compulsion de masse",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7325,
    name: "Potion d'oubli Percepteur : Déstabilisation",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7326,
    name: "Potion d'oubli Percepteur : Pods",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7327,
    name: "Potion d'oubli Percepteur : Nombre de percepteur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7328,
    name: "Potion d'oubli Percepteur : Prospection",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7329,
    name: "Potion d'oubli Percepteur 'Expérience'",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/86001.png',
  },
  {
    id: 7413,
    name: 'Pointer du doigt',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 7423,
    name: 'Œuf de Larve Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12715.png',
  },
  {
    id: 7517,
    name: 'Bière du Ripate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 7590,
    name: 'Abreuvoir en Frêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93001.png',
  },
  {
    id: 7591,
    name: 'Abreuvoir en Chêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93001.png',
  },
  {
    id: 7592,
    name: 'Abreuvoir en Érable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93008.png',
  },
  {
    id: 7593,
    name: 'Abreuvoir en Châtaignier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93007.png',
  },
  {
    id: 7594,
    name: 'Abreuvoir en Charme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93009.png',
  },
  {
    id: 7595,
    name: 'Abreuvoir en Noyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93010.png',
  },
  {
    id: 7596,
    name: 'Abreuvoir en Merisier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93011.png',
  },
  {
    id: 7597,
    name: 'Abreuvoir en If',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93012.png',
  },
  {
    id: 7598,
    name: 'Abreuvoir en Ébène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93013.png',
  },
  {
    id: 7599,
    name: 'Abreuvoir en Orme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93014.png',
  },
  {
    id: 7600,
    name: 'Abreuvoir en Bombu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93015.png',
  },
  {
    id: 7601,
    name: 'Abreuvoir en Oliviolet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93016.png',
  },
  {
    id: 7602,
    name: 'Abreuvoir en Bambou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 7603,
    name: 'Abreuvoir en Bambou Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93018.png',
  },
  {
    id: 7604,
    name: 'Abreuvoir en Bambou Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 7605,
    name: 'Abreuvoir Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93001.png',
  },
  {
    id: 7606,
    name: 'Mangeoire Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93002.png',
  },
  {
    id: 7607,
    name: 'Mangeoire en Frêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93002.png',
  },
  {
    id: 7608,
    name: 'Mangeoire en Chêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93002.png',
  },
  {
    id: 7609,
    name: 'Mangeoire en If',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93019.png',
  },
  {
    id: 7610,
    name: 'Mangeoire en Ébène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93020.png',
  },
  {
    id: 7611,
    name: 'Mangeoire en Orme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93021.png',
  },
  {
    id: 7612,
    name: 'Mangeoire en Érable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93022.png',
  },
  {
    id: 7613,
    name: 'Mangeoire en Charme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93023.png',
  },
  {
    id: 7614,
    name: 'Mangeoire en Châtaignier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93002.png',
  },
  {
    id: 7615,
    name: 'Mangeoire en Noyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93024.png',
  },
  {
    id: 7616,
    name: 'Mangeoire en Merisier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93025.png',
  },
  {
    id: 7617,
    name: 'Mangeoire en Bombu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93026.png',
  },
  {
    id: 7618,
    name: 'Mangeoire en Oliviolet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93027.png',
  },
  {
    id: 7619,
    name: 'Mangeoire en Bambou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 7620,
    name: 'Mangeoire en Bambou Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93029.png',
  },
  {
    id: 7621,
    name: 'Mangeoire en Bambou Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 7622,
    name: 'Caresseur en Plume de Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93030.png',
  },
  {
    id: 7623,
    name: 'Caresseur en Plume de Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93031.png',
  },
  {
    id: 7624,
    name: 'Caresseur en Plume de Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93032.png',
  },
  {
    id: 7625,
    name: 'Baffeur Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93005.png',
  },
  {
    id: 7626,
    name: 'Baffeur en Châtaignier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93005.png',
  },
  {
    id: 7627,
    name: 'Baffeur en Chêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93005.png',
  },
  {
    id: 7628,
    name: 'Caresseur Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93006.png',
  },
  {
    id: 7629,
    name: 'Baffeur en If',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93047.png',
  },
  {
    id: 7634,
    name: 'Dragofesse Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93003.png',
  },
  {
    id: 7635,
    name: 'Dragofesse en Cuir de Boostache Prépubère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93078.png',
  },
  {
    id: 7636,
    name: 'Dragofesse en Cuir de Boufton Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93079.png',
  },
  {
    id: 7637,
    name: 'Dragofesse en Cuir de Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93080.png',
  },
  {
    id: 7651,
    name: 'Corne de Brume',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94002.png',
  },
  {
    id: 7673,
    name: 'Abreuvoir en Bois Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93088.png',
  },
  {
    id: 7674,
    name: 'Abreuvoir en Bois Envoûté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93088.png',
  },
  {
    id: 7675,
    name: 'Abreuvoir en Bois de Tronknyde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93089.png',
  },
  {
    id: 7676,
    name: 'Abreuvoir en Bambou Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93090.png',
  },
  {
    id: 7677,
    name: 'Abreuvoir en Bambou Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 7678,
    name: 'Abreuvoir en Bois de Bambouto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93091.png',
  },
  {
    id: 7679,
    name: 'Abreuvoir en Bois de Bambouto Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93091.png',
  },
  {
    id: 7682,
    name: 'Abreuvoir en Bois de Kokoko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93091.png',
  },
  {
    id: 7683,
    name: 'Mangeoire en Bois Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93092.png',
  },
  {
    id: 7684,
    name: 'Mangeoire en Bois Envoûté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93092.png',
  },
  {
    id: 7685,
    name: 'Mangeoire en Bambou Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93093.png',
  },
  {
    id: 7686,
    name: 'Mangeoire en Bambou Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 7687,
    name: 'Mangeoire en Bois de Bambouto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93094.png',
  },
  {
    id: 7688,
    name: 'Mangeoire en Bois de Bambouto Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93094.png',
  },
  {
    id: 7689,
    name: 'Mangeoire en Bois de Kokoko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93094.png',
  },
  {
    id: 7690,
    name: 'Mangeoire en Bois de Tronknyde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93095.png',
  },
  {
    id: 7691,
    name: 'Dragofesse en Cuir de Chef de Guerre Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93078.png',
  },
  {
    id: 7692,
    name: 'Dragofesse en Cuir de Bouftou Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93081.png',
  },
  {
    id: 7693,
    name: 'Dragofesse en Cuir de Gargrouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93079.png',
  },
  {
    id: 7694,
    name: 'Dragofesse en Cuir de Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 7695,
    name: 'Dragofesse en Cuir de Cochon de Lait',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 7696,
    name: 'Dragofesse en Cuir Violet de Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93083.png',
  },
  {
    id: 7697,
    name: 'Dragofesse en Cuir de Porkass',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 7698,
    name: 'Dragofesse en Cuir Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93085.png',
  },
  {
    id: 7699,
    name: 'Dragofesse en Cuir de Sanglier des Plaines',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93086.png',
  },
  {
    id: 7700,
    name: 'Dragofesse en Cuir de Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93087.png',
  },
  {
    id: 7733,
    name: 'Caresseur en Plume de Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93033.png',
  },
  {
    id: 7734,
    name: 'Caresseur en Plume de Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93034.png',
  },
  {
    id: 7735,
    name: 'Caresseur en Plume de Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93035.png',
  },
  {
    id: 7736,
    name: 'Caresseur en Plume de Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93036.png',
  },
  {
    id: 7737,
    name: 'Caresseur en Plume de Tofu Maléfique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93037.png',
  },
  {
    id: 7738,
    name: 'Caresseur en Plume de Corbac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93038.png',
  },
  {
    id: 7739,
    name: 'Caresseur en Plume de Kwak de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93039.png',
  },
  {
    id: 7740,
    name: 'Caresseur en Plume de Kwak de Flamme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93040.png',
  },
  {
    id: 7741,
    name: 'Caresseur en Plume de Kwak de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93041.png',
  },
  {
    id: 7742,
    name: 'Caresseur en Plume de Kwak de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93042.png',
  },
  {
    id: 7743,
    name: 'Caresseur en Plume du Dernier Poolay',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93043.png',
  },
  {
    id: 7744,
    name: 'Caresseur en Plume Pointue de Kwak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93044.png',
  },
  {
    id: 7745,
    name: 'Caresseur en Plume du Maître Corbac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93045.png',
  },
  {
    id: 7746,
    name: 'Caresseur en Plume de Tofu Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93046.png',
  },
  {
    id: 7755,
    name: 'Baffeur en Ébène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93048.png',
  },
  {
    id: 7756,
    name: 'Baffeur en Orme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93049.png',
  },
  {
    id: 7757,
    name: 'Baffeur en Érable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93050.png',
  },
  {
    id: 7758,
    name: 'Baffeur en Charme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93051.png',
  },
  {
    id: 7759,
    name: 'Baffeur en Frêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93005.png',
  },
  {
    id: 7760,
    name: 'Baffeur en Noyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93052.png',
  },
  {
    id: 7761,
    name: 'Baffeur en Merisier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93053.png',
  },
  {
    id: 7762,
    name: 'Baffeur en Bambou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 7763,
    name: 'Baffeur en Bombu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93054.png',
  },
  {
    id: 7764,
    name: 'Baffeur en Oliviolet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93055.png',
  },
  {
    id: 7765,
    name: 'Baffeur en Bambou Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93057.png',
  },
  {
    id: 7766,
    name: 'Baffeur en Bambou Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 7767,
    name: 'Baffeur en Bois Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93058.png',
  },
  {
    id: 7768,
    name: 'Baffeur en Bois Envoûté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93058.png',
  },
  {
    id: 7769,
    name: 'Baffeur en Bois de Tronknyde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93059.png',
  },
  {
    id: 7770,
    name: 'Baffeur en Bambou Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93060.png',
  },
  {
    id: 7771,
    name: 'Baffeur en Bois de Kokoko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93061.png',
  },
  {
    id: 7772,
    name: 'Baffeur en Bambou Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 7773,
    name: 'Baffeur en Bois de Bambouto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93062.png',
  },
  {
    id: 7774,
    name: 'Baffeur en Bois de Bambouto Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93062.png',
  },
  {
    id: 7775,
    name: 'Foudroyeur en Frêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93004.png',
  },
  {
    id: 7776,
    name: 'Foudroyeur en Chêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93004.png',
  },
  {
    id: 7777,
    name: 'Foudroyeur en If',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93063.png',
  },
  {
    id: 7778,
    name: 'Foudroyeur en Ébène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93064.png',
  },
  {
    id: 7779,
    name: 'Foudroyeur en Orme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93065.png',
  },
  {
    id: 7780,
    name: 'Foudroyeur en Érable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93066.png',
  },
  {
    id: 7781,
    name: 'Foudroyeur en Charme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93067.png',
  },
  {
    id: 7782,
    name: 'Foudroyeur en Châtaignier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93004.png',
  },
  {
    id: 7783,
    name: 'Foudroyeur en Noyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93068.png',
  },
  {
    id: 7784,
    name: 'Foudroyeur en Merisier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93069.png',
  },
  {
    id: 7785,
    name: 'Foudroyeur en Bombu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93070.png',
  },
  {
    id: 7786,
    name: 'Foudroyeur en Oliviolet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93071.png',
  },
  {
    id: 7787,
    name: 'Foudroyeur en Bambou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 7788,
    name: 'Foudroyeur en Bambou Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93073.png',
  },
  {
    id: 7789,
    name: 'Foudroyeur en Bambou Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 7790,
    name: 'Foudroyeur en Bois Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93074.png',
  },
  {
    id: 7791,
    name: 'Foudroyeur en Bois Envoûté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93074.png',
  },
  {
    id: 7792,
    name: 'Foudroyeur en Bois de Tronknyde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93075.png',
  },
  {
    id: 7793,
    name: 'Foudroyeur en Bambou Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 7794,
    name: 'Foudroyeur en Bambou Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 7795,
    name: 'Foudroyeur en Bois de Bambouto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93077.png',
  },
  {
    id: 7796,
    name: 'Foudroyeur en Bois de Bambouto Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93077.png',
  },
  {
    id: 7797,
    name: 'Foudroyeur en Bois de Kokoko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93077.png',
  },
  {
    id: 7798,
    name: 'Foudroyeur Classique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93004.png',
  },
  {
    id: 7799,
    name: 'Le Saut Sifflard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94001.png',
  },
  {
    id: 7804,
    name: 'Bonbon Energétique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42137.png',
  },
  {
    id: 8145,
    name: 'Bière de Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37001.png',
  },
  {
    id: 8378,
    name: 'Fragment Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/88044.png',
  },
  {
    id: 8430,
    name: 'Ballon Jaune Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94004.png',
  },
  {
    id: 8435,
    name: 'Ballon Rouge Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94005.png',
  },
  {
    id: 8507,
    name: 'Plat de Filtounga',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69136.png',
  },
  {
    id: 8514,
    name: 'Cervelle de vampire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15492.png',
  },
  {
    id: 8518,
    name: 'Moumoules frites',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69135.png',
  },
  {
    id: 8519,
    name: 'Gâtrool Industriel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69149.png',
  },
  {
    id: 8525,
    name: 'Œuf de piou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69038.png',
  },
  {
    id: 8543,
    name: "Limonade d'Incarnam",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79004.png',
  },
  {
    id: 8621,
    name: 'Cawotte Maudite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94006.png',
  },
  {
    id: 8624,
    name: 'Ballon Bleu Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94007.png',
  },
  {
    id: 8625,
    name: 'Ballon Vert Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94008.png',
  },
  {
    id: 8626,
    name: 'Nisitik Miditik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94009.png',
  },
  {
    id: 8694,
    name: 'Piment confit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42111.png',
  },
  {
    id: 8883,
    name: 'Potion de Foyer de Guilde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12152.png',
  },
  {
    id: 8913,
    name: 'Potion Bulbique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12023.png',
  },
  {
    id: 8948,
    name: 'Shigekax Caramel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 8949,
    name: 'Shigekax Banane',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 8950,
    name: 'Shigekax Orange',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 8951,
    name: 'Shigekax Poire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42024.png',
  },
  {
    id: 8952,
    name: 'Shigekax Pomme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42019.png',
  },
  {
    id: 8953,
    name: 'Shigekax Chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 8954,
    name: 'Shigekax Vanille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42023.png',
  },
  {
    id: 8955,
    name: 'Shigekax Melon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42019.png',
  },
  {
    id: 9035,
    name: "Potion d'enclos de Guilde",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12025.png',
  },
  {
    id: 9039,
    name: 'Potion de rappel prismatique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12034.png',
  },
  {
    id: 9200,
    name: 'Parchemin de Sort Invocation de Chaferfu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 9201,
    name: 'Pawchemin de la Cawotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 9379,
    name: 'Ballotin de chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42003.png',
  },
  {
    id: 9380,
    name: "Fée d'artifice invocatrice de cœurs",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74032.png',
  },
  {
    id: 9472,
    name: 'Shigekax Passion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42004.png',
  },
  {
    id: 9635,
    name: 'Shigekax Amande',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42036.png',
  },
  {
    id: 9636,
    name: 'Shigekax Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42037.png',
  },
  {
    id: 9637,
    name: 'Shigekax Griotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42038.png',
  },
  {
    id: 9638,
    name: 'Shigekax Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42039.png',
  },
  {
    id: 9639,
    name: 'Shigekax Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42040.png',
  },
  {
    id: 9640,
    name: 'Shigekax Prune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42041.png',
  },
  {
    id: 9641,
    name: 'Shigekax Praline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42042.png',
  },
  {
    id: 9642,
    name: 'Shigekax Mirabelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42043.png',
  },
  {
    id: 9643,
    name: 'Shigekax Acidulé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42044.png',
  },
  {
    id: 9980,
    name: 'Plat de Gravette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49138.png',
  },
  {
    id: 9982,
    name: 'Salade Houbée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69129.png',
  },
  {
    id: 10079,
    name: 'Pain Trépide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33017.png',
  },
  {
    id: 10083,
    name: 'Salace de poissons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49140.png',
  },
  {
    id: 10085,
    name: "Ordre d'exécution.",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/87002.png',
  },
  {
    id: 10208,
    name: 'Elixir Pandawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12153.png',
  },
  {
    id: 10209,
    name: 'Elixir Sacrieur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12154.png',
  },
  {
    id: 10210,
    name: 'Elixir Eniripsa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12155.png',
  },
  {
    id: 10211,
    name: 'Elixir Sadida',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12156.png',
  },
  {
    id: 10212,
    name: 'Elixir Crâ',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12157.png',
  },
  {
    id: 10213,
    name: 'Elixir Iop',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12158.png',
  },
  {
    id: 10214,
    name: 'Elixir Ecaflip',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12159.png',
  },
  {
    id: 10215,
    name: 'Elixir Xélor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12160.png',
  },
  {
    id: 10216,
    name: 'Elixir Féca',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12161.png',
  },
  {
    id: 10217,
    name: 'Elixir Enutrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12162.png',
  },
  {
    id: 10218,
    name: 'Elixir Osamodas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12163.png',
  },
  {
    id: 10219,
    name: 'Elixir Sram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12164.png',
  },
  {
    id: 10382,
    name: 'Parchemin de Bijoutier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10383,
    name: 'Parchemin de Joaillomage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10384,
    name: 'Parchemin de Boucher',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10385,
    name: 'Parchemin de Bricoleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10386,
    name: 'Parchemin de Forgemage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10387,
    name: 'Parchemin de Forgeur de Marteaux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10388,
    name: 'Parchemin de Forgemage de Marteaux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10389,
    name: 'Parchemin de Forgeur de Pelles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10390,
    name: 'Parchemin de Forgemage de Pelles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10391,
    name: 'Parchemin de Sculptemage de Bâtons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10392,
    name: 'Parchemin de Sculptemage de Baguettes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10393,
    name: 'Parchemin de Forgemage de Dagues',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10394,
    name: 'Parchemin de Sculptemage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10395,
    name: 'Parchemin de Forgeur de Haches',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10396,
    name: 'Parchemin de Forgemage de Haches',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10397,
    name: 'Parchemin de Façonneur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10398,
    name: 'Parchemin de Mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10399,
    name: 'Parchemin de Poissonnier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10400,
    name: 'Parchemin de Tailleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10401,
    name: 'Parchemin de Costumage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10402,
    name: "Parchemin d'Alchimiste",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10403,
    name: 'Parchemin de Paysan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10404,
    name: 'Parchemin de Chasseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10405,
    name: 'Parchemin de Pêcheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10407,
    name: 'Parchemin de Cordomage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/13003.png',
  },
  {
    id: 10602,
    name: 'Parchemin de Sort Apprivoisement de monture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 10603,
    name: "Parchemin de Sort Capture d'âmes",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 10604,
    name: 'Parchemin de Sort Marteau de Moon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 10605,
    name: 'Parchemin de Sort Boomerang perfide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/75003.png',
  },
  {
    id: 10663,
    name: 'Brioche à la viande de bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33071.png',
  },
  {
    id: 10664,
    name: 'Abragland',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94015.png',
  },
  {
    id: 10665,
    name: 'Coffre de Jorbak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94023.png',
  },
  {
    id: 10669,
    name: 'Potion de crapaud-mufle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12018.png',
  },
  {
    id: 10670,
    name: 'Parchemin des Flaqueux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 10673,
    name: 'Potion de HmmMmm',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12191.png',
  },
  {
    id: 10677,
    name: 'Shigekax Kill Coos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42024.png',
  },
  {
    id: 10750,
    name: "Potion d'Amélioration d'Atouin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116020.png',
  },
  {
    id: 10751,
    name: "Potion d'Amélioration de Bébé Pandawa",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116021.png',
  },
  {
    id: 10752,
    name: "Potion d'Amélioration de Bilby",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116022.png',
  },
  {
    id: 10753,
    name: "Potion d'Amélioration de Bwak",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116023.png',
  },
  {
    id: 10754,
    name: "Potion d'Amélioration de Bworky",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116024.png',
  },
  {
    id: 10755,
    name: "Potion d'Amélioration de Chacha",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116025.png',
  },
  {
    id: 10756,
    name: "Potion d'Amélioration de Chacha Angora",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116026.png',
  },
  {
    id: 10757,
    name: "Potion d'Amélioration de Chacha Tigré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116027.png',
  },
  {
    id: 10758,
    name: "Potion d'Amélioration de Crocodaille",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116028.png',
  },
  {
    id: 10759,
    name: "Potion d'Amélioration d'Ecureuil Chenapan",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116029.png',
  },
  {
    id: 10760,
    name: "Potion d'Amélioration de Fëanor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116030.png',
  },
  {
    id: 10761,
    name: "Potion d'Amélioration de Koalak Sanguin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116031.png',
  },
  {
    id: 10762,
    name: "Potion d'Amélioration de Kouin-Kouin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116032.png',
  },
  {
    id: 10763,
    name: "Potion d'Amélioration de Léopardo",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116033.png',
  },
  {
    id: 10764,
    name: "Potion d'Amélioration de Mini Wa",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116034.png',
  },
  {
    id: 10765,
    name: "Potion d'Amélioration de Nomoon",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116035.png',
  },
  {
    id: 10766,
    name: "Potion d'Amélioration de Péki",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116036.png',
  },
  {
    id: 10767,
    name: "Potion d'Amélioration de Petit Chacha Blanc",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116037.png',
  },
  {
    id: 10768,
    name: "Potion d'Amélioration de Petit Chienchien Noir",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116038.png',
  },
  {
    id: 10769,
    name: "Potion d'Amélioration de Pioute",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116039.png',
  },
  {
    id: 10770,
    name: "Potion d'Amélioration de Ross",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116040.png',
  },
  {
    id: 10771,
    name: "Potion d'Amélioration de Vilain Petit Corbac",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116041.png',
  },
  {
    id: 10772,
    name: "Potion d'Amélioration de Wabbit",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116042.png',
  },
  {
    id: 10773,
    name: "Potion d'Amélioration de Walk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116043.png',
  },
  {
    id: 10774,
    name: "Potion d'Amélioration de Willy le Relou",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116044.png',
  },
  {
    id: 10775,
    name: "Potion d'Amélioration de Marcassin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116045.png',
  },
  {
    id: 10776,
    name: "Potion d'Amélioration de Miniminotot",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116046.png',
  },
  {
    id: 10777,
    name: "Potion d'Amélioration de Tiwabbit Kiafin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116047.png',
  },
  {
    id: 10779,
    name: "Potion d'Amélioration de Dragoune Noire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116049.png',
  },
  {
    id: 10780,
    name: "Potion d'Amélioration de Bouloute du Parrain",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116050.png',
  },
  {
    id: 10781,
    name: "Potion d'Amélioration de Gelutin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116051.png',
  },
  {
    id: 10782,
    name: "Potion d'Amélioration de Shushu de Rushu",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116052.png',
  },
  {
    id: 10783,
    name: "Potion d'Amélioration de Vampyrette",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116053.png',
  },
  {
    id: 10792,
    name: 'Potion de soin du débutant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12724.png',
  },
  {
    id: 10793,
    name: 'Pain du débutant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33006.png',
  },
  {
    id: 10795,
    name: 'Poisson Deukloche du débutant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49139.png',
  },
  {
    id: 10796,
    name: 'Mexicanos du débutant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69113.png',
  },
  {
    id: 10809,
    name: "Potion d'Amélioration de Dragoune Dorée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116059.png',
  },
  {
    id: 10811,
    name: "Potion d'Amélioration de Chercheur d'Ogrines",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116054.png',
  },
  {
    id: 10827,
    name: 'Potion de soin larvesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12192.png',
  },
  {
    id: 10832,
    name: 'Craqueloroche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94018.png',
  },
  {
    id: 10833,
    name: 'Chapain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33004.png',
  },
  {
    id: 10839,
    name: 'Monstre Pain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 10840,
    name: 'Monstre Pain consommable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33012.png',
  },
  {
    id: 10883,
    name: "Potion d'Amélioration de Raknaille",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116056.png',
  },
  {
    id: 10884,
    name: "Potion d'Amélioration de Meuch",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116058.png',
  },
  {
    id: 10885,
    name: "Potion d'Amélioration de Tofoudre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116057.png',
  },
  {
    id: 10886,
    name: "Potion d'Amélioration de Pykur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116055.png',
  },
  {
    id: 10967,
    name: 'Cervelle de larve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69113.png',
  },
  {
    id: 10974,
    name: "Fée d'artifice festive",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74032.png',
  },
  {
    id: 11010,
    name: "Potion d'Amélioration de Chacha des Glaces",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116060.png',
  },
  {
    id: 11036,
    name: "Potion d'Amélioration de Tifoux Tigré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116063.png',
  },
  {
    id: 11037,
    name: "Potion d'Amélioration de Chienchien Tigré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116064.png',
  },
  {
    id: 11038,
    name: "Potion d'Amélioration de Kouin-Kouin Noir",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116065.png',
  },
  {
    id: 11039,
    name: "Potion d'Amélioration de Chauffe-souris Délavée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116066.png',
  },
  {
    id: 11040,
    name: "Potion d'Amélioration de Gupin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116067.png',
  },
  {
    id: 11116,
    name: 'Úridnac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94019.png',
  },
  {
    id: 11133,
    name: 'Plume Vibrante de mansot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94020.png',
  },
  {
    id: 11134,
    name: 'Apéwicube',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94021.png',
  },
  {
    id: 11263,
    name: "Fée d'artifice Térik",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74033.png',
  },
  {
    id: 11307,
    name: "Trésor maudit d'Az le Tech",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94023.png',
  },
  {
    id: 11370,
    name: 'Friswein',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79013.png',
  },
  {
    id: 11371,
    name: 'Frigrowka',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79014.png',
  },
  {
    id: 11498,
    name: "Viande d'aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94022.png',
  },
  {
    id: 11503,
    name: 'Pain de Frostiz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33072.png',
  },
  {
    id: 11504,
    name: 'Pain de Frostiz soufflé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33073.png',
  },
  {
    id: 11505,
    name: 'Potion Torboyo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12720.png',
  },
  {
    id: 11506,
    name: 'Potion Raide Rêve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12721.png',
  },
  {
    id: 11507,
    name: 'Potion Étoilée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12722.png',
  },
  {
    id: 11510,
    name: 'Poisskaille en Fricassée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49136.png',
  },
  {
    id: 11511,
    name: 'Poisskaille Givré en Fricassée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49135.png',
  },
  {
    id: 11568,
    name: 'Pizza au boudin de boufmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24107.png',
  },
  {
    id: 11687,
    name: 'Bonbon à la Menthe du Petit Prospecteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42153.png',
  },
  {
    id: 11688,
    name: 'Bonbon à la Menthe du Prospecteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42152.png',
  },
  {
    id: 11689,
    name: 'Bonbon à la Menthe du Petit Apprenti',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42155.png',
  },
  {
    id: 11690,
    name: "Bonbon à la Menthe de l'Apprenti",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42154.png',
  },
  {
    id: 11770,
    name: "Potion d'Amélioration de Cromeugnon",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116068.png',
  },
  {
    id: 11776,
    name: "Potion d'Amélioration de Médugivre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116069.png',
  },
  {
    id: 11782,
    name: "Potion d'Amélioration d'Ecumouth",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116070.png',
  },
  {
    id: 11789,
    name: "Potion d'Amélioration de Givrefoux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116071.png',
  },
  {
    id: 11790,
    name: 'Coffre Vorace endormi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94023.png',
  },
  {
    id: 11805,
    name: 'Fantaisie Eliatrope',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74034.png',
  },
  {
    id: 11806,
    name: 'Sac de Fantaisies Eliatropes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94024.png',
  },
  {
    id: 11863,
    name: "Potion d'Amélioration de Gwo Tofu Ventripotent",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116072.png',
  },
  {
    id: 11954,
    name: "Potion d'Amélioration de Kanigloups",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116073.png',
  },
  {
    id: 11965,
    name: "Potion d'Amélioration de Bulbisou",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116074.png',
  },
  {
    id: 11970,
    name: "Potion d'Amélioration de Blérodoudou",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116075.png',
  },
  {
    id: 11975,
    name: "Potion d'Amélioration de Bisouglours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116076.png',
  },
  {
    id: 11994,
    name: 'Paire de skis rustiques jetables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24908.png',
  },
  {
    id: 11995,
    name: 'Paire de skis glissants jetables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24910.png',
  },
  {
    id: 11996,
    name: 'Paire de skis sombres jetables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24909.png',
  },
  {
    id: 11997,
    name: 'Paire de skis souples jetables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24911.png',
  },
  {
    id: 12014,
    name: "Potion d'Amélioration de Platypus",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116077.png',
  },
  {
    id: 12149,
    name: "Potion d'Amélioration de Serpète",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116079.png',
  },
  {
    id: 12156,
    name: 'Elixir Roublard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12193.png',
  },
  {
    id: 12182,
    name: "Potion d'Amélioration de Tofüm",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116078.png',
  },
  {
    id: 12186,
    name: 'Bûche de Nowel rassie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42156.png',
  },
  {
    id: 12193,
    name: "Potion d'Amélioration de Phénix",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116080.png',
  },
  {
    id: 12205,
    name: 'Bonbon de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42136.png',
  },
  {
    id: 12228,
    name: 'Elixir Zobal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12194.png',
  },
  {
    id: 12236,
    name: 'Agent infectieux de la rosissure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94025.png',
  },
  {
    id: 12248,
    name: 'Téméraire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24681.png',
  },
  {
    id: 12250,
    name: 'Sylvestre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24692.png',
  },
  {
    id: 12252,
    name: 'Criminel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24684.png',
  },
  {
    id: 12283,
    name: 'Être Frigorifié',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12286,
    name: 'Super Héros',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12287,
    name: 'Se mettre en colère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12288,
    name: 'Saluer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12289,
    name: "S'allonger",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12290,
    name: "S'agenouiller",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12291,
    name: 'Rire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12292,
    name: 'Refuser',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12293,
    name: 'Pleurer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12294,
    name: 'Pierre Feuille Ciseaux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12295,
    name: 'Offrir un cadeau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12296,
    name: 'Montrer son arme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12297,
    name: 'Montrer sa peur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12299,
    name: 'Manolias',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12301,
    name: 'Mains sur les hanches',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12303,
    name: 'Jouer de la trompette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12306,
    name: 'Jouer de la flûte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12308,
    name: 'Fleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12309,
    name: 'Faire un signe de la main',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12310,
    name: 'Faire un bisou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12312,
    name: 'Croiser les bras',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12315,
    name: 'Applaudir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12320,
    name: 'Trace de pneu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12322,
    name: 'Joie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24688.png',
  },
  {
    id: 12323,
    name: 'Lire un livre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12324,
    name: 'Lever le pouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12326,
    name: 'Baisser le pouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12328,
    name: 'Sautiller',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12329,
    name: 'Jouer du Tambour',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12331,
    name: 'Bâiller',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12334,
    name: 'Faire coucou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12349,
    name: 'Manolias',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12353,
    name: 'Trace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 12460,
    name: 'Coquetel Enséfal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24938.png',
  },
  {
    id: 12461,
    name: 'Coquetel Lurique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24939.png',
  },
  {
    id: 12462,
    name: 'Coquetel Emaque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24940.png',
  },
  {
    id: 12545,
    name: "Potion d'Amélioration de Dragouf",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122000.png',
  },
  {
    id: 12609,
    name: 'Pique-nique Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24882.png',
  },
  {
    id: 12610,
    name: 'Rations de Survie en Milieu Touristique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33006.png',
  },
  {
    id: 12611,
    name: 'Soupe au Plimok',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24824.png',
  },
  {
    id: 12612,
    name: 'Fricassée de Thongue Salée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11161.png',
  },
  {
    id: 12814,
    name: 'Kipik en Chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42157.png',
  },
  {
    id: 12817,
    name: 'Paquet Cadeau en Chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42158.png',
  },
  {
    id: 12819,
    name: 'Peluche en Chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42159.png',
  },
  {
    id: 12821,
    name: 'Bonhomme de Neige en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42160.png',
  },
  {
    id: 12823,
    name: 'Kanigrou Hivernal en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42161.png',
  },
  {
    id: 12825,
    name: 'Yiti des Neiges en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42162.png',
  },
  {
    id: 12827,
    name: "Mini Nuit' en Sucre Glace",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42163.png',
  },
  {
    id: 12844,
    name: "Traîneau en Pain d'Épices",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42164.png',
  },
  {
    id: 12846,
    name: 'Boole de neige',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74035.png',
  },
  {
    id: 12847,
    name: 'Fée Érie de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74036.png',
  },
  {
    id: 12896,
    name: 'Bûche de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42156.png',
  },
  {
    id: 12968,
    name: "Potion d'Amélioration de Hurledent",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122001.png',
  },
  {
    id: 12980,
    name: "Potion d'Amélioration de Tofu Givré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116081.png',
  },
  {
    id: 12987,
    name: "Potion d'Amélioration de Sourisette",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116082.png',
  },
  {
    id: 12993,
    name: "Potion d'Amélioration de Scarakiri",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116083.png',
  },
  {
    id: 12999,
    name: "Potion d'Amélioration de Rauleur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116084.png',
  },
  {
    id: 13005,
    name: "Potion d'Amélioration de Meulourd",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116085.png',
  },
  {
    id: 13009,
    name: 'Racines de Jean Gimbre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24887.png',
  },
  {
    id: 13013,
    name: 'Étiquette à remplir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94026.png',
  },
  {
    id: 13076,
    name: "Potion d'Amélioration de Mékrabe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116087.png',
  },
  {
    id: 13105,
    name: "Potion d'Amélioration de Ploup",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116086.png',
  },
  {
    id: 13173,
    name: "Fée d'artifice blanche de Pwâk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74041.png',
  },
  {
    id: 13178,
    name: "Fée d'artifice bleue de Pwâk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74040.png',
  },
  {
    id: 13179,
    name: "Fée d'artifice jaune de Pwâk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74037.png',
  },
  {
    id: 13180,
    name: "Fée d'artifice verte de Pwâk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74038.png',
  },
  {
    id: 13181,
    name: "Fée d'artifice rouge de Pwâk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74039.png',
  },
  {
    id: 13221,
    name: 'Coquetel Éportation',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79015.png',
  },
  {
    id: 13222,
    name: 'Krokillage Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42165.png',
  },
  {
    id: 13223,
    name: 'Krokillage Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42166.png',
  },
  {
    id: 13234,
    name: "Potion d'Amélioration de Kroliméa",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116088.png',
  },
  {
    id: 13270,
    name: 'Potion de changement de blason de guilde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12747.png',
  },
  {
    id: 13273,
    name: 'Potion de renommage de guilde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12058.png',
  },
  {
    id: 13276,
    name: 'Poisskaille Givré en Ragoût',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49141.png',
  },
  {
    id: 13278,
    name: 'Elixir Steamer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12730.png',
  },
  {
    id: 13314,
    name: 'Ballon Baladeur Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94014.png',
  },
  {
    id: 13368,
    name: 'Avoir froid',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13369,
    name: 'Se prosterner',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13370,
    name: 'Avoir chaud',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13371,
    name: 'Gonfler ses muscles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13372,
    name: 'Lire une carte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13418,
    name: 'Poing levé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13419,
    name: 'Pied de nez',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13420,
    name: "Attirer l'attention",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13421,
    name: 'Motus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13422,
    name: 'Se frotter les mains',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13436,
    name: "Bonbon d'Halouine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42012.png',
  },
  {
    id: 13442,
    name: 'Potion de Bibliotemple',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12731.png',
  },
  {
    id: 13444,
    name: 'Sukette à la Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42011.png',
  },
  {
    id: 13446,
    name: 'Sukette à la Pomme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42010.png',
  },
  {
    id: 13448,
    name: 'Sukette au Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42009.png',
  },
  {
    id: 13450,
    name: 'Sukette à la Prune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42008.png',
  },
  {
    id: 13452,
    name: 'Gumizes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42007.png',
  },
  {
    id: 13454,
    name: 'Bonbon Zaï Planant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42006.png',
  },
  {
    id: 13456,
    name: 'Bonbon Zaï Hallucinogène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42005.png',
  },
  {
    id: 13467,
    name: 'Halouine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13473,
    name: 'Bonbon du Prospecteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42135.png',
  },
  {
    id: 13475,
    name: 'Bonbon du Formateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42136.png',
  },
  {
    id: 13478,
    name: "Potion d'Amélioration de Sakochère",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122003.png',
  },
  {
    id: 13479,
    name: 'Fiole de Chichala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12732.png',
  },
  {
    id: 13506,
    name: 'Piou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13507,
    name: 'Encourager',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 13509,
    name: 'Beignet de Karnaval',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10147.png',
  },
  {
    id: 13512,
    name: 'Pochette-Surprise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94027.png',
  },
  {
    id: 13521,
    name: 'Barre Rabmarac au Caramel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42167.png',
  },
  {
    id: 13522,
    name: 'Barre Rabmarac à la Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42168.png',
  },
  {
    id: 13523,
    name: 'Barre Rabmarac au Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42169.png',
  },
  {
    id: 13524,
    name: "Barre Rabmarac à l'Orange",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42170.png',
  },
  {
    id: 13525,
    name: 'Barre Rabmarac au Kola',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42171.png',
  },
  {
    id: 13526,
    name: 'Barre Rabmarac au Nougat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42172.png',
  },
  {
    id: 13589,
    name: 'Pyrofuego',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74042.png',
  },
  {
    id: 13607,
    name: "Potion d'Amélioration de Balafreux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122004.png',
  },
  {
    id: 13613,
    name: 'Bouboule de Neige en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42173.png',
  },
  {
    id: 13614,
    name: 'Craqueleur des Glaces en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42174.png',
  },
  {
    id: 13615,
    name: 'Sakai Firefoux en Sucre Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42175.png',
  },
  {
    id: 13616,
    name: 'Brioche de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33008.png',
  },
  {
    id: 13617,
    name: 'Monstre Brioche de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33023.png',
  },
  {
    id: 13624,
    name: 'Potion de Kerubim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12195.png',
  },
  {
    id: 13626,
    name: 'Écrire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24682.png',
  },
  {
    id: 13666,
    name: "Potion d'Amélioration de Kafarce",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116090.png',
  },
  {
    id: 13672,
    name: "Potion d'Amélioration de Bulbouture",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116089.png',
  },
  {
    id: 13678,
    name: "Potion d'Amélioration de Kokulte",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116091.png',
  },
  {
    id: 13684,
    name: "Potion d'Amélioration de Toukancre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116092.png',
  },
  {
    id: 13847,
    name: "Perle d'Âme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94029.png',
  },
  {
    id: 14014,
    name: "Bouf'gomme au Goût Sauvage",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42176.png',
  },
  {
    id: 14015,
    name: "Bouf'gomme à la Pêche",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42177.png',
  },
  {
    id: 14016,
    name: "Bouf'gomme Fraîcheur Lavande",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42178.png',
  },
  {
    id: 14017,
    name: 'Boufballe Surprise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94030.png',
  },
  {
    id: 14048,
    name: "Parchemin de Sort Maîtrise d'Arme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73019.png',
  },
  {
    id: 14150,
    name: 'Bouteille de Cocalane',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79178.png',
  },
  {
    id: 14151,
    name: 'Serviette égarée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/55130.png',
  },
  {
    id: 14269,
    name: 'Longue-Vue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14275,
    name: 'Eau de la Fontaine de Noffoub',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12740.png',
  },
  {
    id: 14291,
    name: "Potion de renommage d'alliance",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12083.png',
  },
  {
    id: 14292,
    name: "Potion de changement de blason d'alliance",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12738.png',
  },
  {
    id: 14397,
    name: "Fée d'artifice Invocatrice de Boufton Noir",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74043.png',
  },
  {
    id: 14398,
    name: "Fée d'artifice Invocatrice de Boufton Blanc",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74044.png',
  },
  {
    id: 14399,
    name: "Fée d'artifice Invocatrice de Moucherons",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74045.png',
  },
  {
    id: 14400,
    name: "Fée d'artifice Etoilée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74046.png',
  },
  {
    id: 14401,
    name: "Fée d'artifice Glandiose",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74047.png',
  },
  {
    id: 14402,
    name: "Fée d'artifice Culottée",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74048.png',
  },
  {
    id: 14403,
    name: "Fée d'artifice Feignante",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74049.png',
  },
  {
    id: 14404,
    name: "Fée d'artifice de Kamas",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74050.png',
  },
  {
    id: 14405,
    name: "Fée d'artifice Musicale",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74051.png',
  },
  {
    id: 14406,
    name: "Fée d'artifice Champouf",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74052.png',
  },
  {
    id: 14407,
    name: "Fée d'artifice Cawotte",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74053.png',
  },
  {
    id: 14408,
    name: "Fée d'artifice Fleurie",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74054.png',
  },
  {
    id: 14426,
    name: 'Potion de Vigile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/14036.png',
  },
  {
    id: 14437,
    name: "Potion d'Amélioration de Boskito",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116093.png',
  },
  {
    id: 14442,
    name: 'Potion de Croque-mort',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12746.png',
  },
  {
    id: 14443,
    name: 'Potion de Guérisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12745.png',
  },
  {
    id: 14447,
    name: 'Potion de Temple des alliances',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12741.png',
  },
  {
    id: 14449,
    name: "Fée d'artifice Invocatrice d'Arakne",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74056.png',
  },
  {
    id: 14450,
    name: "Fée d'artifice Nuageuse",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74055.png',
  },
  {
    id: 14485,
    name: 'Mimibiote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/14100.png',
  },
  {
    id: 14487,
    name: 'Cawotte pouwwite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94031.png',
  },
  {
    id: 14488,
    name: 'Cocawotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94032.png',
  },
  {
    id: 14550,
    name: "Potion d'Amélioration de Fosfo",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164017.png',
  },
  {
    id: 14553,
    name: "Potion d'invocation de Percepteur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164023.png',
  },
  {
    id: 14573,
    name: 'Potion de Grobid',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12742.png',
  },
  {
    id: 14707,
    name: 'Abreuvoir du Tournesol Affamé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14708,
    name: 'Abreuvoir du Bulbig Brozeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14709,
    name: 'Abreuvoir du Wa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93018.png',
  },
  {
    id: 14710,
    name: 'Abreuvoir de Moon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93018.png',
  },
  {
    id: 14711,
    name: 'Abreuvoir du Rasboul Majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93014.png',
  },
  {
    id: 14712,
    name: 'Abreuvoir de Sphincter Cell',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93014.png',
  },
  {
    id: 14713,
    name: 'Abreuvoir du Kimbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14714,
    name: 'Abreuvoir de Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14715,
    name: 'Abreuvoir du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14716,
    name: 'Abreuvoir du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 14717,
    name: 'Abreuvoir de Missiz Frizz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93090.png',
  },
  {
    id: 14718,
    name: 'Abreuvoir de Merkator',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93090.png',
  },
  {
    id: 14719,
    name: "Foudroyeur de Mob l'Éponge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14721,
    name: 'Foudroyeur du Kwakwa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14722,
    name: 'Foudroyeur de Blop Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93073.png',
  },
  {
    id: 14723,
    name: 'Foudroyeur du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93073.png',
  },
  {
    id: 14724,
    name: 'Foudroyeur du Maître Corbac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93065.png',
  },
  {
    id: 14725,
    name: 'Foudroyeur de Ben le Ripate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93065.png',
  },
  {
    id: 14726,
    name: "Foudroyeur de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14727,
    name: 'Foudroyeur de Grolloum',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14728,
    name: 'Foudroyeur de Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14729,
    name: 'Foudroyeur du Kolosso',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14730,
    name: 'Foudroyeur de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 14731,
    name: 'Foudroyeur du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 14732,
    name: 'Baffeur du Bouftou Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14733,
    name: 'Baffeur du Corailleur Magistral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14734,
    name: 'Baffeur de Gelée Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93057.png',
  },
  {
    id: 14735,
    name: 'Baffeur du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93057.png',
  },
  {
    id: 14736,
    name: 'Baffeur du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93049.png',
  },
  {
    id: 14737,
    name: 'Baffeur du Mansot Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93049.png',
  },
  {
    id: 14738,
    name: "Baffeur d'Ougah",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14739,
    name: 'Baffeur du Korriandre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14740,
    name: 'Baffeur du Kralamoure Géant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14741,
    name: 'Baffeur du Bworker',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 14742,
    name: 'Baffeur de Sylargh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93060.png',
  },
  {
    id: 14743,
    name: 'Baffeur de Nileza',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93060.png',
  },
  {
    id: 14744,
    name: 'Dragofesse du Scarabosse Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93083.png',
  },
  {
    id: 14745,
    name: 'Dragofesse de la Shin Larve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93083.png',
  },
  {
    id: 14746,
    name: 'Dragofesse de Gourlo le Terrible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93085.png',
  },
  {
    id: 14747,
    name: "Dragofesse de l'Abraknyde Ancestral",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 14748,
    name: 'Dragofesse en Cuir de Sanglacier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 14749,
    name: 'Dragofesse du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 14750,
    name: 'Dragofesse du Tynril',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14751,
    name: 'Dragofesse en Cuir de Maho Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14752,
    name: 'Dragofesse du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14753,
    name: 'Dragofesse du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14754,
    name: 'Dragofesse du Kimbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14755,
    name: 'Dragofesse de Grolloum',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14756,
    name: 'Dragofesse de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 14757,
    name: 'Dragofesse de Missiz Frizz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 14758,
    name: 'Caresseur en Plume de Fesse du Kido',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93101.png',
  },
  {
    id: 14759,
    name: 'Caresseur de Boostache',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93037.png',
  },
  {
    id: 14760,
    name: 'Caresseur des Forgerons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93037.png',
  },
  {
    id: 14761,
    name: 'Caresseur du Craqueleur Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93043.png',
  },
  {
    id: 14762,
    name: 'Caresseur du Wa Wobot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93043.png',
  },
  {
    id: 14763,
    name: 'Caresseur du Royalmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93101.png',
  },
  {
    id: 14764,
    name: 'Caresseur du Tanukouï San',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93101.png',
  },
  {
    id: 14765,
    name: 'Caresseur en Plume de Serpiplume',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 14766,
    name: "Caresseur de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 14767,
    name: 'Caresseur de Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 14768,
    name: 'Caresseur de Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 14769,
    name: "Caresseur d'Ougah",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 14770,
    name: 'Caresseur de Nileza',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93103.png',
  },
  {
    id: 14771,
    name: 'Caresseur de Merkator',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93103.png',
  },
  {
    id: 14772,
    name: 'Mangeoire de Batofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14773,
    name: 'Mangeoire de la Bworkette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14775,
    name: 'Mangeoire du Kanniboul Ebil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93029.png',
  },
  {
    id: 14776,
    name: 'Mangeoire de Daïgoro',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93029.png',
  },
  {
    id: 14777,
    name: 'Mangeoire du Maître Pandore',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93021.png',
  },
  {
    id: 14778,
    name: 'Mangeoire de Crocabulia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93021.png',
  },
  {
    id: 14779,
    name: 'Mangeoire du Bworker',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14780,
    name: 'Mangeoire de Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14781,
    name: 'Mangeoire du Korriandre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14782,
    name: 'Mangeoire du Kolosso',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 14783,
    name: 'Mangeoire du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93093.png',
  },
  {
    id: 14784,
    name: 'Mangeoire de Sylargh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93093.png',
  },
  {
    id: 14785,
    name: 'Foudroyeur du Chafer Rōnin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 14786,
    name: 'Baffeur de Nelween',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93057.png',
  },
  {
    id: 14787,
    name: 'Dragofesse de Dramak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93085.png',
  },
  {
    id: 14788,
    name: 'Mangeoire du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93029.png',
  },
  {
    id: 14789,
    name: 'Abreuvoir du Blop Multicolore Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93014.png',
  },
  {
    id: 14790,
    name: 'Foudroyeur du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93065.png',
  },
  {
    id: 14791,
    name: 'Baffeur du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93049.png',
  },
  {
    id: 14792,
    name: 'Dragofesse du Péki Péki',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 14793,
    name: 'Caresseur du Tofu Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93046.png',
  },
  {
    id: 14794,
    name: 'Mangeoire de Skeunk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93021.png',
  },
  {
    id: 14812,
    name: 'Offrir un Gâteau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14871,
    name: 'Huer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14872,
    name: 'Ola',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14873,
    name: 'Boxer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14875,
    name: 'Agiter le drapeau blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14876,
    name: 'Cracheur de feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 14976,
    name: "Dragofesse d'Ombre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 15096,
    name: 'Baffeur de Kanigroula',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 15114,
    name: "Potion d'Amélioration de Chachyène",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116094.png',
  },
  {
    id: 15137,
    name: "Potion d'Amélioration de Black Tiwabbit",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116095.png',
  },
  {
    id: 15163,
    name: 'Potion de Diligence',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12744.png',
  },
  {
    id: 15209,
    name: 'Mains derrière le dos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15211,
    name: 'Ouvrir un portail de poche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15214,
    name: 'Localiser un portail',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15224,
    name: 'Voile Eidolonique de Trésantène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94033.png',
  },
  {
    id: 15225,
    name: 'Voile Eidolonique de Père Phorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94034.png',
  },
  {
    id: 15226,
    name: 'Voile Eidolonique de Lévitrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94035.png',
  },
  {
    id: 15227,
    name: 'Voile Eidolonique de Kamasterisk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94036.png',
  },
  {
    id: 15231,
    name: 'Loupe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15232,
    name: 'Supplier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15233,
    name: 'Se frapper le front',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15234,
    name: 'Chercher un trésor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 15236,
    name: 'Potion de Chasseur de Trésor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/14101.png',
  },
  {
    id: 15237,
    name: 'Potion de Voyageur Dimensionnel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12743.png',
  },
  {
    id: 15248,
    name: 'Coffre insignifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172000.png',
  },
  {
    id: 15253,
    name: "Potion d'Amélioration de Snouffle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116097.png',
  },
  {
    id: 15258,
    name: "Potion d'Amélioration de Phortiche",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116096.png',
  },
  {
    id: 15260,
    name: 'Coffre rouillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172001.png',
  },
  {
    id: 15261,
    name: 'Coffre intrigant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172002.png',
  },
  {
    id: 15262,
    name: 'Coffre surprenant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172003.png',
  },
  {
    id: 15264,
    name: 'Coffre solide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172004.png',
  },
  {
    id: 15265,
    name: 'Coffre lourd',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172005.png',
  },
  {
    id: 15266,
    name: 'Coffre étincelant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172006.png',
  },
  {
    id: 15267,
    name: 'Coffre imposant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172007.png',
  },
  {
    id: 15268,
    name: 'Coffre impressionnant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172008.png',
  },
  {
    id: 15269,
    name: 'Coffre magistral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 15270,
    name: 'Coffre de loterie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172010.png',
  },
  {
    id: 15275,
    name: 'Dragofesse du roi Nidas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 15276,
    name: 'Foudroyeur de Malléfisk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93073.png',
  },
  {
    id: 15277,
    name: 'Baffeur du Phossile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93049.png',
  },
  {
    id: 15312,
    name: 'Richissime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24683.png',
  },
  {
    id: 15355,
    name: "Caillou d'Enutrof",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/51001.png',
  },
  {
    id: 15363,
    name: 'Dragofesse de la Haute Truche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 15401,
    name: 'Coffre de Gein',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 15402,
    name: 'Coffre de Frakacia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172001.png',
  },
  {
    id: 15408,
    name: 'Voile Eidolonique de Tromblion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94037.png',
  },
  {
    id: 15409,
    name: "Voile Eidolonique d'Eperfide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94038.png',
  },
  {
    id: 15410,
    name: 'Voile Eidolonique de Terristocrate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94039.png',
  },
  {
    id: 15411,
    name: 'Voile Eidolonique de Bourôliste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94040.png',
  },
  {
    id: 15413,
    name: "Potion d'Apisaphé",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/126025.png',
  },
  {
    id: 15473,
    name: "Potion d'Amélioration de Homlett",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116098.png',
  },
  {
    id: 15486,
    name: 'Coffre de Dremoan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172008.png',
  },
  {
    id: 15540,
    name: "Coffre d'Ali Grothor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172005.png',
  },
  {
    id: 15558,
    name: 'Boîte de fragments insignifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15559,
    name: 'Boîte de fragments rouillée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15560,
    name: 'Boîte de fragments intrigante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15561,
    name: 'Boîte de fragments surprenante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15562,
    name: 'Boîte de fragments solide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15563,
    name: 'Boîte de fragments lourde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15564,
    name: 'Boîte de fragments étincelante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15565,
    name: 'Boîte de fragments imposante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15566,
    name: 'Boîte de fragments impressionnante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15567,
    name: 'Boîte de fragments magistrale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172011.png',
  },
  {
    id: 15577,
    name: 'Bière du Bourreau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 15580,
    name: 'Phalange de Sram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/47465.png',
  },
  {
    id: 15591,
    name: "Potion d'oubli de sort",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 15606,
    name: 'Explosif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24685.png',
  },
  {
    id: 15611,
    name: "Potion d'Amélioration de Tatouf",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116099.png',
  },
  {
    id: 15706,
    name: 'Foudroyeur du Protozorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 15707,
    name: 'Caresseur de la Reine des Voleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93103.png',
  },
  {
    id: 15708,
    name: 'Baffeur du Toxoliath',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 15709,
    name: 'Abreuvoir du Capitaine Ekarlatte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93014.png',
  },
  {
    id: 15802,
    name: 'Voile Eidolonique de Farfacette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94043.png',
  },
  {
    id: 15803,
    name: 'Voile Eidolonique de Vindeux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94044.png',
  },
  {
    id: 15804,
    name: 'Voile Eidolonique de Méjaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94042.png',
  },
  {
    id: 15805,
    name: "Voile Eidolonique d'Ikargn",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94041.png',
  },
  {
    id: 15884,
    name: 'Siffler',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24687.png',
  },
  {
    id: 15885,
    name: 'Danse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24686.png',
  },
  {
    id: 15888,
    name: 'Kamarena',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24689.png',
  },
  {
    id: 15905,
    name: 'Coffre de Fouduglen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172001.png',
  },
  {
    id: 15909,
    name: 'Montre en retard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15924.png',
  },
  {
    id: 15910,
    name: 'Montre en avance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15925.png',
  },
  {
    id: 15965,
    name: 'Sable de Xélor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/48292.png',
  },
  {
    id: 15982,
    name: "Potion d'Amélioration de Blokus",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116104.png',
  },
  {
    id: 15987,
    name: 'Intemporel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24690.png',
  },
  {
    id: 16045,
    name: "Coffre de l'Hyperscampe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 16046,
    name: 'Coffre de Pantèroz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172005.png',
  },
  {
    id: 16047,
    name: 'Coffre de Brumen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172002.png',
  },
  {
    id: 16121,
    name: "Potion d'Amélioration d'Eliôme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116105.png',
  },
  {
    id: 16127,
    name: "Potion d'Amélioration de Drakopin",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116106.png',
  },
  {
    id: 16132,
    name: 'Transcendant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24691.png',
  },
  {
    id: 16135,
    name: 'Elixir Eliotrope',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12196.png',
  },
  {
    id: 16242,
    name: 'Colère de Bolgrot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 16273,
    name: "Potion d'Amélioration de Tanuk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116111.png',
  },
  {
    id: 16280,
    name: "Potion d'Amélioration de Bloalak",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116107.png',
  },
  {
    id: 16287,
    name: 'Abreuvoir de la Reine Nyée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93018.png',
  },
  {
    id: 16288,
    name: 'Mangeoire de Kankreblath',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93028.png',
  },
  {
    id: 16289,
    name: 'Caresseur de Fraktale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93101.png',
  },
  {
    id: 16290,
    name: 'Dragofesse de XLII',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93084.png',
  },
  {
    id: 16291,
    name: 'Baffeur de Vortex',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93060.png',
  },
  {
    id: 16299,
    name: "Potion d'Amélioration de Moumoute",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116108.png',
  },
  {
    id: 16304,
    name: 'Fée d’Artifice Colorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74057.png',
  },
  {
    id: 16344,
    name: 'Vaporeux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24693.png',
  },
  {
    id: 16401,
    name: 'Potion Droïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12756.png',
  },
  {
    id: 16402,
    name: 'Potion Raide Mhor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12749.png',
  },
  {
    id: 16403,
    name: 'Potion de Divination',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12757.png',
  },
  {
    id: 16404,
    name: 'Potion Raide Dite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12750.png',
  },
  {
    id: 16405,
    name: 'Potion Agare',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12758.png',
  },
  {
    id: 16406,
    name: 'Potion Religieuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12759.png',
  },
  {
    id: 16407,
    name: 'Potion Géniale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12760.png',
  },
  {
    id: 16408,
    name: 'Potion de Marguerite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12761.png',
  },
  {
    id: 16409,
    name: 'Potion Jeud Raide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12751.png',
  },
  {
    id: 16410,
    name: 'Sang de Trooll',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12754.png',
  },
  {
    id: 16411,
    name: 'Potion de Trois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12762.png',
  },
  {
    id: 16412,
    name: 'Potion Raide Emption',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12752.png',
  },
  {
    id: 16413,
    name: 'Potion de Goku',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12763.png',
  },
  {
    id: 16414,
    name: 'Potion Raide Izdaide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12753.png',
  },
  {
    id: 16415,
    name: "Larme d'Eniripsa",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12755.png',
  },
  {
    id: 16416,
    name: 'Potion de Donzelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12764.png',
  },
  {
    id: 16417,
    name: 'Potion Revitalisante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12768.png',
  },
  {
    id: 16418,
    name: 'Potion Fromagère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12765.png',
  },
  {
    id: 16431,
    name: 'Pain de Mie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33074.png',
  },
  {
    id: 16432,
    name: "Pain d'Épices",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33075.png',
  },
  {
    id: 16433,
    name: 'Gaufre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33078.png',
  },
  {
    id: 16434,
    name: 'Gaufre en or',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33077.png',
  },
  {
    id: 16435,
    name: 'Faluche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33079.png',
  },
  {
    id: 16436,
    name: 'Pain Prenelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33076.png',
  },
  {
    id: 16437,
    name: 'Tortilla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33080.png',
  },
  {
    id: 16438,
    name: 'Burrito',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33081.png',
  },
  {
    id: 16439,
    name: 'Fouée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/33082.png',
  },
  {
    id: 16475,
    name: 'Anguille Rôtie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49143.png',
  },
  {
    id: 16476,
    name: 'Anguille Souroche Rôtie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49144.png',
  },
  {
    id: 16477,
    name: 'Dorade au four',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49145.png',
  },
  {
    id: 16478,
    name: 'Daurade Royale au four',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49146.png',
  },
  {
    id: 16479,
    name: 'Salace de Lotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49147.png',
  },
  {
    id: 16480,
    name: 'Salace de Glotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49148.png',
  },
  {
    id: 16481,
    name: 'Estouffade de Morue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49149.png',
  },
  {
    id: 16482,
    name: 'Estouffade de Morue Barbue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49150.png',
  },
  {
    id: 16483,
    name: 'Tanche en Matelote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49151.png',
  },
  {
    id: 16484,
    name: 'Tanche Hantée en Matelote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49152.png',
  },
  {
    id: 16485,
    name: 'Espadon Poêlé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49153.png',
  },
  {
    id: 16486,
    name: 'Espadon Quichotte Poêlé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/49154.png',
  },
  {
    id: 16670,
    name: 'Bouillon de Chair',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69741.png',
  },
  {
    id: 16722,
    name: 'Potion Axel Raide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12769.png',
  },
  {
    id: 16819,
    name: "Sachet d'Aubergines",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180001.png',
  },
  {
    id: 16820,
    name: 'Sachet de Cendres Éternelles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180002.png',
  },
  {
    id: 16821,
    name: 'Sachet de Cerises',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180003.png',
  },
  {
    id: 16822,
    name: 'Sachet de Citrons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180004.png',
  },
  {
    id: 16823,
    name: 'Tonneau de Jus Goûtu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180015.png',
  },
  {
    id: 16824,
    name: "Tonneau d'Eau Potable",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180016.png',
  },
  {
    id: 16825,
    name: "Sachet d'Épices",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180005.png',
  },
  {
    id: 16826,
    name: 'Sachet de Feuilles de Salace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180006.png',
  },
  {
    id: 16827,
    name: 'Sachet de Graisse Gélatineuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180007.png',
  },
  {
    id: 16828,
    name: 'Sachet de Haricots',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180008.png',
  },
  {
    id: 16829,
    name: "Tonneau d'Huile à Frire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180017.png',
  },
  {
    id: 16830,
    name: 'Sachet de Poivre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180009.png',
  },
  {
    id: 16831,
    name: 'Sachet de Sel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180010.png',
  },
  {
    id: 16832,
    name: "Sachet d'Oignons",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180011.png',
  },
  {
    id: 16833,
    name: 'Sachet de Poudre de Perlinpainpain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180012.png',
  },
  {
    id: 16834,
    name: 'Sachet de Poudre Temporelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180013.png',
  },
  {
    id: 16835,
    name: 'Sachet de Résine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180014.png',
  },
  {
    id: 16836,
    name: 'Tonneau de Sang de Scorbute',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/180018.png',
  },
  {
    id: 16837,
    name: 'Bière Atolmond',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 16838,
    name: 'Bière de Djaul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 16839,
    name: 'Bière de la Misère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 16840,
    name: 'Bière du Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 16927,
    name: 'Bûche de Frêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42179.png',
  },
  {
    id: 16928,
    name: 'Bûche de Châtaignier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42180.png',
  },
  {
    id: 16929,
    name: 'Bûche de Noyer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42181.png',
  },
  {
    id: 16930,
    name: 'Bûche de Chêne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42182.png',
  },
  {
    id: 16931,
    name: 'Bûche de Bombu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42183.png',
  },
  {
    id: 16932,
    name: "Bûche d'Érable",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42184.png',
  },
  {
    id: 16933,
    name: "Bûche d'Oliviolet",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42185.png',
  },
  {
    id: 16934,
    name: "Bûche d'If",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42186.png',
  },
  {
    id: 16935,
    name: 'Bûche de Bambou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42187.png',
  },
  {
    id: 16936,
    name: 'Bûche de Merisier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42188.png',
  },
  {
    id: 16937,
    name: 'Bûche de Noisetier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42189.png',
  },
  {
    id: 16938,
    name: "Bûche d'Ébène",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42190.png',
  },
  {
    id: 16939,
    name: 'Bûche de Kaliptus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42191.png',
  },
  {
    id: 16940,
    name: 'Bûche de Charme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42192.png',
  },
  {
    id: 16941,
    name: 'Bûche de Bambou Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42193.png',
  },
  {
    id: 16942,
    name: "Bûche d'Orme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42194.png',
  },
  {
    id: 16943,
    name: 'Bûche de Bambou Sacré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42195.png',
  },
  {
    id: 16944,
    name: 'Bûche de Tremble',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42196.png',
  },
  {
    id: 17020,
    name: 'Garde-à-vous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17027,
    name: "Potion d'Amélioration de Bontique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116109.png',
  },
  {
    id: 17032,
    name: "Potion d'Amélioration de Brâkarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116110.png',
  },
  {
    id: 17038,
    name: 'Baffeur de Kardorim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93056.png',
  },
  {
    id: 17063,
    name: 'Balistique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24694.png',
  },
  {
    id: 17064,
    name: 'Pêcheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24695.png',
  },
  {
    id: 17087,
    name: "S'abriter sous un parasol",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24696.png',
  },
  {
    id: 17168,
    name: 'Boulette de Viande',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69750.png',
  },
  {
    id: 17169,
    name: 'Beignet Astrubien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69115.png',
  },
  {
    id: 17170,
    name: 'Beignet Astrubien Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69747.png',
  },
  {
    id: 17171,
    name: 'Roulade de Carne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69825.png',
  },
  {
    id: 17172,
    name: 'Roulade de Carne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69826.png',
  },
  {
    id: 17173,
    name: 'Papillote au Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69744.png',
  },
  {
    id: 17174,
    name: 'Papillote Fortifiante au Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69745.png',
  },
  {
    id: 17175,
    name: 'Salade Sufokienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69816.png',
  },
  {
    id: 17176,
    name: 'Salade Sufokienne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69817.png',
  },
  {
    id: 17177,
    name: 'Friture Amaknéenne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69752.png',
  },
  {
    id: 17178,
    name: 'Friture Amaknéenne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69753.png',
  },
  {
    id: 17179,
    name: "Parmentier à l'Oignon",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69758.png',
  },
  {
    id: 17180,
    name: "Parmentier Fortifiant à l'Oignon",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69759.png',
  },
  {
    id: 17181,
    name: 'Terrine Bontarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69840.png',
  },
  {
    id: 17182,
    name: 'Terrine Bontarienne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69841.png',
  },
  {
    id: 17183,
    name: 'Pot-au-feu Goûteux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69806.png',
  },
  {
    id: 17184,
    name: 'Pot-au-feu Goûteux Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69807.png',
  },
  {
    id: 17185,
    name: 'Poêlée Paysanne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69804.png',
  },
  {
    id: 17186,
    name: 'Poêlée Paysanne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69805.png',
  },
  {
    id: 17187,
    name: 'Pemmican aux Haricots',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69796.png',
  },
  {
    id: 17188,
    name: 'Pemmican Fortifiant aux Haricots',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69797.png',
  },
  {
    id: 17189,
    name: 'Grillade Brâkmarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69785.png',
  },
  {
    id: 17190,
    name: 'Grillade Brâkmarienne Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69786.png',
  },
  {
    id: 17191,
    name: 'Marinade Sucrée-Salée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69789.png',
  },
  {
    id: 17192,
    name: 'Marinade Sucrée-Salée Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69790.png',
  },
  {
    id: 17193,
    name: 'Boudin Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69809.png',
  },
  {
    id: 17194,
    name: 'Boudin Noir Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69810.png',
  },
  {
    id: 17195,
    name: 'Daube aux Épices',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69801.png',
  },
  {
    id: 17196,
    name: 'Daube Fortifiante aux Épices',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69802.png',
  },
  {
    id: 17197,
    name: 'Mijoté Récréatif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69773.png',
  },
  {
    id: 17198,
    name: 'Mijoté Récréatif Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69774.png',
  },
  {
    id: 17199,
    name: 'Filet Mignon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69733.png',
  },
  {
    id: 17200,
    name: 'Filet Mignon Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69734.png',
  },
  {
    id: 17201,
    name: 'Quenelle Tijan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69867.png',
  },
  {
    id: 17202,
    name: 'Quenelle Tijan Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69868.png',
  },
  {
    id: 17203,
    name: 'Andouillette de Gibier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69771.png',
  },
  {
    id: 17204,
    name: 'Andouillette de Gibier Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69772.png',
  },
  {
    id: 17205,
    name: 'Saucisse Fumée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69820.png',
  },
  {
    id: 17206,
    name: 'Saucisse Fumée Fortifiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/126065.png',
  },
  {
    id: 17216,
    name: 'Émoticônes Chacha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17217,
    name: 'Émoticônes Chienchien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17218,
    name: 'Émoticônes Bilby',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17219,
    name: 'Émoticônes Halouine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17231,
    name: 'Coffre de Kongoku',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 17241,
    name: 'Coffre de Voldelor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 17248,
    name: 'Coffre du Guerrier du K.O.',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172008.png',
  },
  {
    id: 17255,
    name: "Coffre d'Anatak",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172007.png',
  },
  {
    id: 17256,
    name: 'Coffre de Zatoïshwan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172006.png',
  },
  {
    id: 17383,
    name: "Potion d'Amélioration de Titard",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116113.png',
  },
  {
    id: 17416,
    name: 'Caresseur du Chouque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93043.png',
  },
  {
    id: 17420,
    name: 'Éthylique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24697.png',
  },
  {
    id: 17422,
    name: 'Bouillon de Chair Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/69803.png',
  },
  {
    id: 17453,
    name: 'Élémentaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24698.png',
  },
  {
    id: 17515,
    name: "Potion d'Amélioration de Minikrone",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116114.png',
  },
  {
    id: 17526,
    name: 'Duelliste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24699.png',
  },
  {
    id: 17532,
    name: 'Émoticônes Joris',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 17533,
    name: "Potion d'Amélioration de Minimino",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116118.png',
  },
  {
    id: 17534,
    name: 'Bonbon Snik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42198.png',
  },
  {
    id: 17537,
    name: "Potion d'amélioration d'El Scarador",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116115.png',
  },
  {
    id: 17538,
    name: "Potion d'amélioration de Croum",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116121.png',
  },
  {
    id: 17539,
    name: "Potion d'amélioration de Dragoune",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116120.png',
  },
  {
    id: 17540,
    name: "Potion d'amélioration de Tifoux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116117.png',
  },
  {
    id: 17541,
    name: "Potion d'amélioration de Bouloute",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116116.png',
  },
  {
    id: 17542,
    name: "Potion d'amélioration de Fotome",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116122.png',
  },
  {
    id: 17543,
    name: "Potion d'Amélioration d'Abra Kadabra",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116119.png',
  },
  {
    id: 17653,
    name: "Coffre d'Atcham",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 17661,
    name: 'Chanceux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24700.png',
  },
  {
    id: 17667,
    name: "Pâtée d'Ecaflip",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24045.png',
  },
  {
    id: 17704,
    name: "Potion d'Amélioration de Chaperlipopette",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116123.png',
  },
  {
    id: 17730,
    name: 'Sanguinolent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24703.png',
  },
  {
    id: 17738,
    name: 'Foudroyeur du Pounicheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93065.png',
  },
  {
    id: 17739,
    name: 'Caresseur de Ush',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93102.png',
  },
  {
    id: 17740,
    name: 'Mangeoire du Chalœil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93093.png',
  },
  {
    id: 17799,
    name: "Potion d'Amélioration de Tirubim",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116124.png',
  },
  {
    id: 17817,
    name: "Potion d'Amélioration de Glub",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116126.png',
  },
  {
    id: 17837,
    name: "Potion d'Amélioration de Titcham",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116125.png',
  },
  {
    id: 17859,
    name: 'Bienfaisant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24701.png',
  },
  {
    id: 17999,
    name: 'Psychotique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24702.png',
  },
  {
    id: 18092,
    name: "Potion d'Amélioration de Kougnard",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122011.png',
  },
  {
    id: 18111,
    name: 'Diplôme de plongée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 18116,
    name: "Diplôme de R'lyugluglu",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 18117,
    name: 'Diplôme des Trithons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 18156,
    name: 'Bière de la Foire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 18224,
    name: 'Animal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24704.png',
  },
  {
    id: 18242,
    name: 'Indestructible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24705.png',
  },
  {
    id: 18338,
    name: 'Coup fatal Iop',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73036.png',
  },
  {
    id: 18478,
    name: 'Gonfler un ballon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24707.png',
  },
  {
    id: 18479,
    name: 'Expérimenter',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24710.png',
  },
  {
    id: 18480,
    name: 'Coucou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24711.png',
  },
  {
    id: 18481,
    name: 'Se boucher les oreilles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24712.png',
  },
  {
    id: 18490,
    name: "Potion d'Amélioration de Cube",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116127.png',
  },
  {
    id: 18491,
    name: 'Coup fatal Grougaloragran',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73020.png',
  },
  {
    id: 18492,
    name: 'Coup fatal Joris',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73021.png',
  },
  {
    id: 18493,
    name: 'Coup fatal Goultard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73022.png',
  },
  {
    id: 18494,
    name: 'Coup fatal Otomaï',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73023.png',
  },
  {
    id: 18499,
    name: "Potion d'Amélioration de Phorrakna",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122012.png',
  },
  {
    id: 18504,
    name: "Potion d'Amélioration de Pholaine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122013.png',
  },
  {
    id: 18509,
    name: "Potion d'Amélioration de Phorrilax",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122014.png',
  },
  {
    id: 18514,
    name: "Potion d'Amélioration de Mécaphor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122015.png',
  },
  {
    id: 18535,
    name: 'Bière du désert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 18536,
    name: 'Bière cacterre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 18603,
    name: "Diplôme d'Allié émérite",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 18608,
    name: 'Potion de Nevark',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12188.png',
  },
  {
    id: 18630,
    name: "Potion d'Amélioration de Dauge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116128.png',
  },
  {
    id: 18649,
    name: 'Enragé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24622.png',
  },
  {
    id: 18655,
    name: 'Guilde victorieuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24624.png',
  },
  {
    id: 18796,
    name: 'Coupe Dofus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24623.png',
  },
  {
    id: 18797,
    name: 'Diplôme de Vainqueur de la Dofus Cup',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 18810,
    name: 'Bière de Gisgoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 18811,
    name: 'Bière de Sidimote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 18836,
    name: "Breuvage d'Erazal",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12026.png',
  },
  {
    id: 18903,
    name: "Potion d'Amélioration de Tofu Mesuré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116131.png',
  },
  {
    id: 18910,
    name: "Potion d'Amélioration de Tofu Ventru",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116129.png',
  },
  {
    id: 18919,
    name: "Potion d'Amélioration de Chacharge",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122021.png',
  },
  {
    id: 18924,
    name: "Potion d'Amélioration de Tofu Poisseux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116130.png',
  },
  {
    id: 18949,
    name: "Potion d'Amélioration de Tofu Charmant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116132.png',
  },
  {
    id: 18959,
    name: "Potion d'Amélioration de Tofu Brâkmarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116133.png',
  },
  {
    id: 18964,
    name: "Potion d'Amélioration de Tofu Bontarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116134.png',
  },
  {
    id: 18969,
    name: "Potion d'Amélioration de Chacha Mesuré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116143.png',
  },
  {
    id: 18975,
    name: "Potion d'Amélioration de Chacha Ventru",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116145.png',
  },
  {
    id: 18981,
    name: "Potion d'Amélioration de Chacha Poisseux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116144.png',
  },
  {
    id: 18986,
    name: "Potion d'Amélioration de Chacha Charmant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116142.png',
  },
  {
    id: 18992,
    name: "Potion d'Amélioration de Chacha Brâkmarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116141.png',
  },
  {
    id: 18997,
    name: "Potion d'Amélioration de Chacha Bontarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116140.png',
  },
  {
    id: 19002,
    name: "Potion d'Amélioration de Boune Mesuré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116137.png',
  },
  {
    id: 19007,
    name: "Potion d'Amélioration de Boune Ventru",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116135.png',
  },
  {
    id: 19012,
    name: "Potion d'Amélioration de Boune Poisseux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116136.png',
  },
  {
    id: 19017,
    name: "Potion d'Amélioration de Boune Charmant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116138.png',
  },
  {
    id: 19022,
    name: "Potion d'Amélioration de Boune Brâkmarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116139.png',
  },
  {
    id: 19030,
    name: "Potion d'Amélioration de Boune Bontarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116146.png',
  },
  {
    id: 19035,
    name: "Potion d'Amélioration de Tofureur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122019.png',
  },
  {
    id: 19040,
    name: "Potion d'Amélioration de Bounax",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122020.png',
  },
  {
    id: 19048,
    name: "Potion d'Amélioration de Kougnard Albâtre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122016.png',
  },
  {
    id: 19057,
    name: 'Champignon Géant Comestible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15001.png',
  },
  {
    id: 19094,
    name: 'Magmatique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24976.png',
  },
  {
    id: 19095,
    name: 'Gladiateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24975.png',
  },
  {
    id: 19144,
    name: "Potion d'Amélioration de La Chose",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116147.png',
  },
  {
    id: 19159,
    name: 'Zombique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24988.png',
  },
  {
    id: 19290,
    name: "Potion d'Amélioration de Bouftor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122017.png',
  },
  {
    id: 19295,
    name: "Potion d'Amélioration de Bouflux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122018.png',
  },
  {
    id: 19320,
    name: 'Mini part de bonheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24978.png',
  },
  {
    id: 19343,
    name: "Diplôme de Guerrier de l'été 647",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19349,
    name: "Potion d'autopilotage",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12772.png',
  },
  {
    id: 19354,
    name: "Potion d'Amélioration de Godron Mesuré",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116153.png',
  },
  {
    id: 19359,
    name: "Potion d'Amélioration de Godron Ventru",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116154.png',
  },
  {
    id: 19364,
    name: "Potion d'Amélioration de Godron Poisseux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116152.png',
  },
  {
    id: 19369,
    name: "Potion d'Amélioration de Godron Charmant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116155.png',
  },
  {
    id: 19374,
    name: "Potion d'Amélioration de Godron Brâkmarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116151.png',
  },
  {
    id: 19379,
    name: "Potion d'Amélioration de Godron Bontarien",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116150.png',
  },
  {
    id: 19384,
    name: "Potion d'Amélioration de Dragnir",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/122022.png',
  },
  {
    id: 19508,
    name: "Diplôme d'ivoire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19528,
    name: 'Diplôme de Miss/Mister Monde des Douze 648',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19530,
    name: 'Diplôme de la Classe Incarnée 648',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19535,
    name: "Potion d'Amélioration de Molosk",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/116156.png',
  },
  {
    id: 19567,
    name: 'Coup Fatal Rushu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73024.png',
  },
  {
    id: 19568,
    name: 'Coup Fatal Ecaflip',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73025.png',
  },
  {
    id: 19569,
    name: 'Coup Fatal Eniripsa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73026.png',
  },
  {
    id: 19570,
    name: 'Coup Fatal Crâ',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73027.png',
  },
  {
    id: 19571,
    name: 'Coup Fatal Féca',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73028.png',
  },
  {
    id: 19572,
    name: 'Coup Fatal Sacrieur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73029.png',
  },
  {
    id: 19573,
    name: 'Coup Fatal Sadida',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73030.png',
  },
  {
    id: 19574,
    name: 'Coup Fatal Osamodas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73031.png',
  },
  {
    id: 19575,
    name: 'Coup Fatal Enutrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73032.png',
  },
  {
    id: 19576,
    name: 'Coup Fatal Sram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73033.png',
  },
  {
    id: 19577,
    name: 'Coup Fatal Xélor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73034.png',
  },
  {
    id: 19578,
    name: 'Coup Fatal Pandawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/73035.png',
  },
  {
    id: 19617,
    name: 'Supporter Millenium S2',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24616.png',
  },
  {
    id: 19618,
    name: 'Supporter GamersOrigin S2',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24617.png',
  },
  {
    id: 19619,
    name: 'Supporter Batailleurs Glorieux S2',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24618.png',
  },
  {
    id: 19620,
    name: 'Supporter Free Bowisse S2',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24619.png',
  },
  {
    id: 19621,
    name: 'Supporter Out of Control S2',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24620.png',
  },
  {
    id: 19632,
    name: "Diplôme de Guerrier de l'hiver 648",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19679,
    name: "Fée d'artifice Trèfle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/74058.png',
  },
  {
    id: 19917,
    name: 'Abreuvoir du Mantiscore',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93018.png',
  },
  {
    id: 19918,
    name: 'Abreuvoir de Bethel Akarna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93090.png',
  },
  {
    id: 19919,
    name: 'Abreuvoir de Meno',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93090.png',
  },
  {
    id: 19922,
    name: 'Foudroyeur du Comte Razof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93072.png',
  },
  {
    id: 19923,
    name: 'Foudroyeur de Dazak Martegel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 19924,
    name: 'Foudroyeur de Larve de Koutoulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93076.png',
  },
  {
    id: 19925,
    name: 'Baffeur de Choudini',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93057.png',
  },
  {
    id: 19926,
    name: 'Baffeur de Dantinéa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93060.png',
  },
  {
    id: 19927,
    name: 'Abreuvoir du Père Ver',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93017.png',
  },
  {
    id: 19928,
    name: 'Dragofesse de Solar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 19929,
    name: "Dragofesse d'Ilyzaelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93082.png',
  },
  {
    id: 19930,
    name: 'Caresseur de Tal Kasha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93103.png',
  },
  {
    id: 19931,
    name: "Mangeoire d'El Piko",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93021.png',
  },
  {
    id: 19932,
    name: "Mangeoire d'Anerice la Shushess",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/93093.png',
  },
  {
    id: 19954,
    name: 'Barbarbe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 19961,
    name: 'Chauffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 19962,
    name: 'Morve Subite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 19965,
    name: 'Parchemin vierge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/87001.png',
  },
  {
    id: 19966,
    name: 'Parchemin lié',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/87002.png',
  },
  {
    id: 19967,
    name: 'Lot de dix parchemins vierges',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/87003.png',
  },
  {
    id: 19988,
    name: 'Coffre de Kolizétons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172001.png',
  },
  {
    id: 19995,
    name: 'Diplôme de Magister Temporis I',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 19996,
    name: 'Dragosaure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24625.png',
  },
  {
    id: 20014,
    name: 'Supporter GamersOrigin S3',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24617.png',
  },
  {
    id: 20015,
    name: 'Supporter Millenium S3',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24616.png',
  },
  {
    id: 20016,
    name: 'Supporter Batailleurs Glorieux S3',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24618.png',
  },
  {
    id: 20017,
    name: 'Supporter Out of Control S3',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24620.png',
  },
  {
    id: 20018,
    name: 'Supporter OV S3',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24626.png',
  },
  {
    id: 20020,
    name: 'Krièk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 20041,
    name: 'Rune vers la Cache de Kankreblath',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20042,
    name: 'Rune vers le Cimetières des mastodontes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20043,
    name: "Rune vers l'Arbre de Moon",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20044,
    name: 'Rune vers la Caverne du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20045,
    name: 'Rune vers le Mégalithe de Fraktale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20046,
    name: 'Rune vers le Donjon des Kitsounes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20047,
    name: 'Rune vers le Théâtre de Dramak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20048,
    name: 'Rune vers la Grotte du Bworker',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20049,
    name: 'Rune vers la Canopée du Kimbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20050,
    name: 'Rune vers le Donjon des Dragoeufs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20051,
    name: 'Rune vers le Donjon du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12014.png',
  },
  {
    id: 20132,
    name: 'Mouchoir parfumé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15027.png',
  },
  {
    id: 20133,
    name: "Potion d'aspect aléatoire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79007.png',
  },
  {
    id: 20146,
    name: 'Déguisement de Dévhorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20153,
    name: 'Déguisement de Champêtrouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20154,
    name: 'Déguisement de Cauchemarakne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20155,
    name: 'Déguisement de Lanverne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20156,
    name: 'Déguisement de Chauffe-Soutrille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20157,
    name: "Déguisement de Bouftou d'Halouine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20158,
    name: "Déguisement de Tofu d'Halouine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20178,
    name: 'Sac Printanier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20179,
    name: 'Sac de l’Agence Touriste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20180,
    name: 'Sac du Kouin-Kouin noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20181,
    name: 'Sac du Garde Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20182,
    name: 'Sac de Lolita',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20183,
    name: 'Sac Balnéaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20184,
    name: 'Sac de Ronces',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20185,
    name: 'Sac du Molosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20186,
    name: 'Sac de Magma',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20187,
    name: 'Sac Zombique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20188,
    name: 'Sac Divin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20189,
    name: 'Sac de la Crypte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20190,
    name: 'Sac Colorivant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20191,
    name: 'Sac Laineux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/141010.png',
  },
  {
    id: 20196,
    name: 'Coffre d’Ekar Hahib',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172003.png',
  },
  {
    id: 20197,
    name: 'Coffre de la Capitaine Hébreuze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172006.png',
  },
  {
    id: 20198,
    name: 'Coffre de Marie Ride',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172008.png',
  },
  {
    id: 20199,
    name: 'Coffre de Machab le Sanguinaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172009.png',
  },
  {
    id: 20221,
    name: 'Potion de Mériana',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43041.png',
  },
  {
    id: 20253,
    name: 'Diplôme de Miss/Mister Monde des Douze 649',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20254,
    name: 'Diplôme de la Classe Incarnée 649',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20392,
    name: 'Coffre de Gronchon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/172010.png',
  },
  {
    id: 20425,
    name: 'Dragombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25166.png',
  },
  {
    id: 20473,
    name: "Potion d'Ombre Astrale",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/79007.png',
  },
  {
    id: 20670,
    name: 'Bourse de reflets oniriques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/100056.png',
  },
  {
    id: 20671,
    name: 'Caisse de reflets oniriques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15056.png',
  },
  {
    id: 20702,
    name: 'Pelleforte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/37004.png',
  },
  {
    id: 20704,
    name: 'Larme de crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24871.png',
  },
  {
    id: 20708,
    name: 'Coffre de reflets oniriques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94023.png',
  },
  {
    id: 20720,
    name: 'Souffle dracomique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/15846.png',
  },
  {
    id: 20723,
    name: "Potion d'attitude Dragombre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 20724,
    name: 'Cadeau de reflets oniriques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/89042.png',
  },
  {
    id: 20772,
    name: "Diplôme des douze travaux d'Hyrkul",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20773,
    name: 'Koukawa Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20774,
    name: 'Koukawa Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20775,
    name: 'Koukawa Pomme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20776,
    name: 'Koukawa Prune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20777,
    name: 'Koukawabi Fraise Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20778,
    name: 'Koukawabi Pomme Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20779,
    name: 'Koukawabi Prune Fraise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20780,
    name: 'Koukawabi Pomme Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20781,
    name: 'Koukawabi Pomme Prune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20782,
    name: 'Koukawabi Prune Citron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20795,
    name: 'Diplôme de Prospectus temporis II',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20796,
    name: 'Koukawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/164085.png',
  },
  {
    id: 20798,
    name: 'Insectoïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25169.png',
  },
  {
    id: 20799,
    name: 'Burgreg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42149.png',
  },
  {
    id: 20800,
    name: "Diplôme de Wa d'un jour",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20801,
    name: 'Diplôme de Fabophile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20802,
    name: "Diplôme de l'Épi fané",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 20853,
    name: 'Carré de Chocolat Noir à 99 %',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/59666.png',
  },
  {
    id: 20857,
    name: 'Bonbon béni de la Prêtresse des Douze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/24858.png',
  },
  {
    id: 20962,
    name: 'Élixir uchronique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12781.png',
  },
  {
    id: 20988,
    name: 'Anomalie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25170.png',
  },
  {
    id: 20990,
    name: "J'ai faim",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 20991,
    name: "J'ai trop mangé",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 20992,
    name: 'Saut de Wapin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 20993,
    name: 'Coeur brisé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25009.png',
  },
  {
    id: 21020,
    name: 'Diplôme de Guerrier saisonnier 649',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21021,
    name: 'Diplôme de Vainqueur de la Dofus Cup 649',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21031,
    name: 'Insigne de garde de Pwâk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94049.png',
  },
  {
    id: 21042,
    name: 'Clochette ailée en chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42205.png',
  },
  {
    id: 21043,
    name: 'Diplôme de Waddictateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21044,
    name: 'Diplôme de Croqueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21045,
    name: 'Diplôme des cloches',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21052,
    name: 'Friandise Wadnozéam',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42199.png',
  },
  {
    id: 21053,
    name: 'Friandise Warkaïk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42200.png',
  },
  {
    id: 21054,
    name: 'Friandise Chocoskargo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42201.png',
  },
  {
    id: 21055,
    name: 'Friandise Kwakao',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42202.png',
  },
  {
    id: 21056,
    name: 'Friandise Torréfactueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42203.png',
  },
  {
    id: 21057,
    name: 'Friandise Pralicienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42204.png',
  },
  {
    id: 21078,
    name: 'Perlequin Acidulé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42206.png',
  },
  {
    id: 21079,
    name: 'Perlequin Amande',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42207.png',
  },
  {
    id: 21080,
    name: 'Perlequin Banane',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42208.png',
  },
  {
    id: 21081,
    name: 'Perlequin Caramel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42209.png',
  },
  {
    id: 21082,
    name: 'Perlequin Chocolat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42210.png',
  },
  {
    id: 21083,
    name: 'Perlequin Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42211.png',
  },
  {
    id: 21084,
    name: 'Perlequin Griotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42212.png',
  },
  {
    id: 21085,
    name: 'Perlequin Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42213.png',
  },
  {
    id: 21086,
    name: 'Perlequin Melon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42214.png',
  },
  {
    id: 21087,
    name: 'Perlequin Mirabelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42215.png',
  },
  {
    id: 21088,
    name: 'Perlequin Orange',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42216.png',
  },
  {
    id: 21089,
    name: 'Perlequin Poire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42217.png',
  },
  {
    id: 21090,
    name: 'Perlequin Pomme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42218.png',
  },
  {
    id: 21091,
    name: 'Perlequin Praline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42219.png',
  },
  {
    id: 21092,
    name: 'Perlequin Prune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42220.png',
  },
  {
    id: 21093,
    name: 'Perlequin Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42221.png',
  },
  {
    id: 21094,
    name: 'Perlequin Vanille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42222.png',
  },
  {
    id: 21107,
    name: "Potion d'attitude Enragé",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21108,
    name: "Potion d'attitude Élémentaire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21109,
    name: "Potion d'attitude Pêcheur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21110,
    name: "Potion d'attitude Sanguinolent",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21111,
    name: "Potion d'attitude Indestructible",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21112,
    name: "Potion d'attitude Psychotique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21113,
    name: "Potion d'attitude Téméraire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21114,
    name: "Potion d'attitude Manolias",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21115,
    name: "Potion d'attitude Criminel",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21116,
    name: "Potion d'attitude Écrire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21117,
    name: "Potion d'attitude Offrir un gâteau",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21118,
    name: "Potion d'attitude Éthylique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21119,
    name: "Potion d'attitude Vaporeux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21120,
    name: "Potion d'attitude Zombique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21121,
    name: "Potion d'attitude Colère de Bolgrot",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21122,
    name: "Potion d'attitude Richissime",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21123,
    name: "Potion d'attitude Sylvestre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21124,
    name: "Potion d'attitude Intemporel",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21125,
    name: "Potion d'attitude Animal",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21126,
    name: "Potion d'attitude Chanceux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21127,
    name: "Potion d'attitude Magmatique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21128,
    name: "Potion d'attitude Bienfaisant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21129,
    name: "Potion d'attitude Balistique",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21130,
    name: "Potion d'attitude Explosif",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21131,
    name: "Potion d'attitude Transcendant",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21132,
    name: "Potion d'attitude S'abriter sous un parasol",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21133,
    name: "Potion d'attitude Ça cadence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21134,
    name: "Potion d'attitude Ola",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21135,
    name: "Paquet d'attitude aléatoire",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12783.png',
  },
  {
    id: 21145,
    name: 'Selfie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25171.png',
  },
  {
    id: 21167,
    name: "Potion d'expérience",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/12775.png',
  },
  {
    id: 21173,
    name: "Potion d'attitude Tambour",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21174,
    name: "Potion d'attitude Trompette",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21175,
    name: 'Danse du trool',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25172.png',
  },
  {
    id: 21176,
    name: 'Agiter ses cheveux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25173.png',
  },
  {
    id: 21177,
    name: 'Signe du Shushu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25174.png',
  },
  {
    id: 21178,
    name: 'Guitare électromagique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25175.png',
  },
  {
    id: 21179,
    name: 'Chanter',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25176.png',
  },
  {
    id: 21182,
    name: 'Aura musicale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25177.png',
  },
  {
    id: 21183,
    name: 'Diplôme de Métalleux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21184,
    name: 'Diplôme de Guitariste survolté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/94017.png',
  },
  {
    id: 21213,
    name: 'Crocabulia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/25178.png',
  },
  {
    id: 21318,
    name: "Potion d'attitude Crocabulia",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/43039.png',
  },
  {
    id: 21337,
    name: 'Perlequin Ananas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42223.png',
  },
  {
    id: 21338,
    name: 'Perlequin Pastèque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42224.png',
  },
  {
    id: 21339,
    name: 'Perlequin Mangue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/42225.png',
  },
];

const equipments = [
  {
    id: 70,
    name: 'Amulette du Hibou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1001.png',
  },
  {
    id: 77,
    name: "Amulette de l'Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1005.png',
  },
  {
    id: 84,
    name: 'Amulette du Loup',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1006.png',
  },
  {
    id: 103,
    name: 'Anneau de Sagesse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9007.png',
  },
  {
    id: 112,
    name: 'Anneau de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9009.png',
  },
  {
    id: 121,
    name: "Anneau d'Agilité",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9001.png',
  },
  {
    id: 127,
    name: 'Bottes de Bowisse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11002.png',
  },
  {
    id: 130,
    name: "L'Ecrabouilleur de Iop",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11007.png',
  },
  {
    id: 156,
    name: 'Ceinture de Puissance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10019.png',
  },
  {
    id: 157,
    name: 'La Gougnole',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1007.png',
  },
  {
    id: 158,
    name: 'La Destinée Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1009.png',
  },
  {
    id: 159,
    name: 'La Broche Céleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1008.png',
  },
  {
    id: 160,
    name: 'Le Flan des Étoiles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1010.png',
  },
  {
    id: 161,
    name: 'La Célébrité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1009.png',
  },
  {
    id: 203,
    name: 'Ceinture du Tot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10010.png',
  },
  {
    id: 255,
    name: 'Ceinture Vitalesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10009.png',
  },
  {
    id: 259,
    name: 'Ceinture Forcesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10011.png',
  },
  {
    id: 263,
    name: 'Ceinture Agilesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10008.png',
  },
  {
    id: 278,
    name: 'Anneau des Rocheuses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9004.png',
  },
  {
    id: 279,
    name: 'La Larme du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1007.png',
  },
  {
    id: 280,
    name: "Collier de l'Arc en Ciel",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1011.png',
  },
  {
    id: 298,
    name: 'Sandales Tofuesques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11004.png',
  },
  {
    id: 299,
    name: 'Bottes de Faillete',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11008.png',
  },
  {
    id: 323,
    name: 'Amulette du Kam Assutra',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1004.png',
  },
  {
    id: 324,
    name: 'Amulette de Krokette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1007.png',
  },
  {
    id: 325,
    name: 'Amulette du Sram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1003.png',
  },
  {
    id: 326,
    name: 'Amulette Deulegarnoulle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1002.png',
  },
  {
    id: 346,
    name: 'Anneau Rak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9034.png',
  },
  {
    id: 348,
    name: 'Bottes de Céleri-Thé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11005.png',
  },
  {
    id: 355,
    name: "L'Anneau de Valeur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9007.png',
  },
  {
    id: 356,
    name: "Ceinture d'Endurance",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10003.png',
  },
  {
    id: 359,
    name: "L'Ecaliseur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9035.png',
  },
  {
    id: 458,
    name: 'Amulette du Chafer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1003.png',
  },
  {
    id: 610,
    name: 'Amulette en Crabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1030.png',
  },
  {
    id: 616,
    name: 'Amulette du Marin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1029.png',
  },
  {
    id: 617,
    name: 'Amulette du Pirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1020.png',
  },
  {
    id: 629,
    name: 'Chapeau Pointu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16001.png',
  },
  {
    id: 638,
    name: 'Amulette du Pêcheur de Somoon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1024.png',
  },
  {
    id: 639,
    name: 'Amulette des Abîmes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1022.png',
  },
  {
    id: 677,
    name: 'Cape du Pirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17011.png',
  },
  {
    id: 694,
    name: 'Dofus Pourpre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23001.png',
  },
  {
    id: 696,
    name: 'La Coiffe du Ploukosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16002.png',
  },
  {
    id: 697,
    name: 'Makroute',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16003.png',
  },
  {
    id: 698,
    name: 'Choipo Podlard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16004.png',
  },
  {
    id: 699,
    name: 'Le Troma',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16005.png',
  },
  {
    id: 700,
    name: 'Pandawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16006.png',
  },
  {
    id: 701,
    name: 'Le Oiram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16007.png',
  },
  {
    id: 702,
    name: 'Kritter',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16008.png',
  },
  {
    id: 703,
    name: 'Dora',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16009.png',
  },
  {
    id: 704,
    name: 'Dantgoule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16010.png',
  },
  {
    id: 705,
    name: 'Masque Tromatisant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16011.png',
  },
  {
    id: 706,
    name: "Crystal O'Boul",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16012.png',
  },
  {
    id: 707,
    name: 'Minotokorno',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16013.png',
  },
  {
    id: 708,
    name: 'Houde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16014.png',
  },
  {
    id: 709,
    name: 'Lorko Kasko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16015.png',
  },
  {
    id: 710,
    name: 'Korko Klako',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16016.png',
  },
  {
    id: 711,
    name: 'Jouik Krampe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16017.png',
  },
  {
    id: 712,
    name: 'Gulliver',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16018.png',
  },
  {
    id: 732,
    name: 'Alliance de Silimelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9030.png',
  },
  {
    id: 733,
    name: 'Bottes de Ragalde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11007.png',
  },
  {
    id: 734,
    name: 'Ceinture de Sécurité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10007.png',
  },
  {
    id: 737,
    name: 'Dofus Émeraude',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23002.png',
  },
  {
    id: 739,
    name: 'Dofus Turquoise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23003.png',
  },
  {
    id: 744,
    name: 'Cape de Bowisse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17001.png',
  },
  {
    id: 754,
    name: 'Cape du Vampire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17017.png',
  },
  {
    id: 758,
    name: 'Cape du Justicier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17002.png',
  },
  {
    id: 759,
    name: 'Cape du Poolay Chogrelotant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17003.png',
  },
  {
    id: 766,
    name: 'Koliet Aclou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1034.png',
  },
  {
    id: 767,
    name: 'Gantie Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9008.png',
  },
  {
    id: 768,
    name: 'Camaïneux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9033.png',
  },
  {
    id: 769,
    name: 'Einekeineux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11005.png',
  },
  {
    id: 772,
    name: 'Cape Edépée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17004.png',
  },
  {
    id: 773,
    name: 'Cape Ellinie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17005.png',
  },
  {
    id: 774,
    name: 'Cape Ulais',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17007.png',
  },
  {
    id: 775,
    name: 'Cape Abilité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17181.png',
  },
  {
    id: 776,
    name: 'Cape Sulcorpe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17008.png',
  },
  {
    id: 777,
    name: 'Cape du Coq Hû',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17010.png',
  },
  {
    id: 778,
    name: 'Cape de Mori Arty',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17184.png',
  },
  {
    id: 779,
    name: "Cape Maj'Hic",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17012.png',
  },
  {
    id: 781,
    name: 'Cape Itou Lascione',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17185.png',
  },
  {
    id: 783,
    name: 'Amulette du Bûcheron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1009.png',
  },
  {
    id: 784,
    name: 'Bottes du Chat Buté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11003.png',
  },
  {
    id: 785,
    name: 'Anneau Fortifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9029.png',
  },
  {
    id: 786,
    name: 'Pendentif du Hibou Chétif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1001.png',
  },
  {
    id: 787,
    name: 'Anneau Rexik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9031.png',
  },
  {
    id: 789,
    name: 'Ceinture du Kobeer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10009.png',
  },
  {
    id: 790,
    name: 'Cape de Bonne Espérance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17183.png',
  },
  {
    id: 836,
    name: 'Abranneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9011.png',
  },
  {
    id: 837,
    name: 'Bottes de Kluh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11003.png',
  },
  {
    id: 841,
    name: 'Anneau de Satisfaction',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9012.png',
  },
  {
    id: 849,
    name: 'Anneau Forcesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9005.png',
  },
  {
    id: 850,
    name: 'Anneau Agilesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9001.png',
  },
  {
    id: 851,
    name: 'Anneau Vitalesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9002.png',
  },
  {
    id: 852,
    name: 'Petit Anneau Magique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9003.png',
  },
  {
    id: 853,
    name: 'Petit Anneau du Chanceux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9042.png',
  },
  {
    id: 856,
    name: 'Grenouillette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1002.png',
  },
  {
    id: 860,
    name: 'Ceinture de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10003.png',
  },
  {
    id: 861,
    name: 'Bottes de Force',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11003.png',
  },
  {
    id: 862,
    name: "Sandales d'Intelligence",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11004.png',
  },
  {
    id: 863,
    name: 'Bottes Agilesques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11005.png',
  },
  {
    id: 864,
    name: 'Bottes de Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11001.png',
  },
  {
    id: 867,
    name: 'Dragolyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1009.png',
  },
  {
    id: 889,
    name: 'Bottes de Concentration',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11006.png',
  },
  {
    id: 892,
    name: 'Bottes du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11003.png',
  },
  {
    id: 905,
    name: 'Bottes de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11009.png',
  },
  {
    id: 909,
    name: 'Bottes de Poursuite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11010.png',
  },
  {
    id: 910,
    name: "Bottes d'Hogmeiser",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11011.png',
  },
  {
    id: 911,
    name: "Bottes Usées d'Hogmeiser",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11011.png',
  },
  {
    id: 912,
    name: "Bottes Dorées d'Hogmeiser",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11012.png',
  },
  {
    id: 916,
    name: 'Amulette de Silicate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1009.png',
  },
  {
    id: 917,
    name: "La Feuille d'Automne",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1064.png',
  },
  {
    id: 924,
    name: 'Puissantes Bottes de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11009.png',
  },
  {
    id: 934,
    name: 'Cape de Rougeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17189.png',
  },
  {
    id: 937,
    name: 'Cape Bleutée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17192.png',
  },
  {
    id: 940,
    name: 'Louffeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16020.png',
  },
  {
    id: 941,
    name: 'Bandeau Komintot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16022.png',
  },
  {
    id: 942,
    name: 'Lisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16023.png',
  },
  {
    id: 947,
    name: 'Cape Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17194.png',
  },
  {
    id: 948,
    name: 'Abracape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17016.png',
  },
  {
    id: 949,
    name: 'Bandeau de Vitalité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16020.png',
  },
  {
    id: 952,
    name: 'Cape du Mulou Fou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17003.png',
  },
  {
    id: 953,
    name: 'Cape du Tofu Fou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17019.png',
  },
  {
    id: 954,
    name: 'La Samoulaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17195.png',
  },
  {
    id: 955,
    name: 'Cape Hilère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17182.png',
  },
  {
    id: 956,
    name: 'Cape Rice',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17196.png',
  },
  {
    id: 957,
    name: 'La Boufteuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17012.png',
  },
  {
    id: 958,
    name: 'Dofusteuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17251.png',
  },
  {
    id: 967,
    name: 'Cape Fulgurante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17078.png',
  },
  {
    id: 968,
    name: 'Ceinture Fulgurante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10010.png',
  },
  {
    id: 969,
    name: 'Couronne du Wa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16021.png',
  },
  {
    id: 971,
    name: 'Cape du Wa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17021.png',
  },
  {
    id: 972,
    name: 'Dofus Cawotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23006.png',
  },
  {
    id: 976,
    name: 'Citwouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16024.png',
  },
  {
    id: 1019,
    name: 'Casque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16025.png',
  },
  {
    id: 1021,
    name: 'Ailes en bois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17022.png',
  },
  {
    id: 1087,
    name: 'Anneau du Mental',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9036.png',
  },
  {
    id: 1088,
    name: 'Masque Kanniboul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16026.png',
  },
  {
    id: 1331,
    name: 'Médaille Oly',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1023.png',
  },
  {
    id: 1474,
    name: 'Amulette de Xélor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1028.png',
  },
  {
    id: 1476,
    name: 'Amulette du Craqueleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1025.png',
  },
  {
    id: 1477,
    name: 'Chance à Mulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1026.png',
  },
  {
    id: 1478,
    name: 'Harmonie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1122.png',
  },
  {
    id: 1480,
    name: 'Accord',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1121.png',
  },
  {
    id: 1481,
    name: 'Entente',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1011.png',
  },
  {
    id: 1482,
    name: 'Emblème Livide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1032.png',
  },
  {
    id: 1483,
    name: 'Kabale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1013.png',
  },
  {
    id: 1484,
    name: 'Amulette Itby',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1031.png',
  },
  {
    id: 1485,
    name: 'La Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1027.png',
  },
  {
    id: 1486,
    name: 'Médaille Holy',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1023.png',
  },
  {
    id: 1487,
    name: "L'Adelus",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10012.png',
  },
  {
    id: 1488,
    name: 'Plimclik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1123.png',
  },
  {
    id: 1489,
    name: 'La Broche Hète',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1015.png',
  },
  {
    id: 1490,
    name: 'La Chaîne Nhanor Kibrill',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1012.png',
  },
  {
    id: 1491,
    name: 'Chaîne de la Liche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1012.png',
  },
  {
    id: 1493,
    name: 'Blessure du Sacrieur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9013.png',
  },
  {
    id: 1494,
    name: 'Le Bagueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9014.png',
  },
  {
    id: 1495,
    name: "L'Anneau Dhyn",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9037.png',
  },
  {
    id: 1496,
    name: "Chance d'Ecaflip",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9032.png',
  },
  {
    id: 1497,
    name: 'Passé de Xélor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9016.png',
  },
  {
    id: 1498,
    name: "Souvenir d'Enutrof",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9015.png',
  },
  {
    id: 1499,
    name: "L'Enutrofion",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9039.png',
  },
  {
    id: 1500,
    name: 'La Mokette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17186.png',
  },
  {
    id: 1501,
    name: 'Alliance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9027.png',
  },
  {
    id: 1559,
    name: 'Abranneau Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9011.png',
  },
  {
    id: 1602,
    name: 'Abranneau Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9017.png',
  },
  {
    id: 1619,
    name: 'Abramu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1016.png',
  },
  {
    id: 1621,
    name: 'Bottes de Maîtrise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11014.png',
  },
  {
    id: 1622,
    name: 'Bottes de Puissance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11014.png',
  },
  {
    id: 1623,
    name: "Bottes d'Anticipation",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11015.png',
  },
  {
    id: 1624,
    name: 'Bottes de Nexus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11016.png',
  },
  {
    id: 1628,
    name: 'Artefact Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9018.png',
  },
  {
    id: 1629,
    name: 'Artefact Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9019.png',
  },
  {
    id: 1630,
    name: 'Artefact Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9020.png',
  },
  {
    id: 1631,
    name: 'Artefact Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9021.png',
  },
  {
    id: 1632,
    name: 'Artefact Lumière',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9022.png',
  },
  {
    id: 1633,
    name: 'Artefact Vie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9023.png',
  },
  {
    id: 1656,
    name: 'Fécaliseur du Magicien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9040.png',
  },
  {
    id: 1657,
    name: 'Fécaliseur du Guerrier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9041.png',
  },
  {
    id: 1661,
    name: 'Ambramulette Moskito',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1017.png',
  },
  {
    id: 1662,
    name: 'Ambramulette Arackne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1018.png',
  },
  {
    id: 1665,
    name: "Bottes d'Apprentissage",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11068.png',
  },
  {
    id: 1666,
    name: "Bottes de l'Apprenti Invocateur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11014.png',
  },
  {
    id: 1667,
    name: 'Ceinture Luthuthu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10013.png',
  },
  {
    id: 1668,
    name: 'Ceinture du Dodu Trembleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10014.png',
  },
  {
    id: 1669,
    name: 'Ceinture des Vents',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10015.png',
  },
  {
    id: 1693,
    name: 'Cape de Jules Yanos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17187.png',
  },
  {
    id: 1695,
    name: "Cape d'Elya Wood",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17009.png',
  },
  {
    id: 1697,
    name: 'Petit Sac en Laine de Boufton',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81025.png',
  },
  {
    id: 1698,
    name: 'Sac du Petit Récolteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81026.png',
  },
  {
    id: 1699,
    name: 'Sac du Petit Aventurier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81027.png',
  },
  {
    id: 1700,
    name: 'Ceinture de Célérité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10017.png',
  },
  {
    id: 1701,
    name: 'Ceinture de Poche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10016.png',
  },
  {
    id: 1702,
    name: 'Sac du Récolteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81028.png',
  },
  {
    id: 1703,
    name: 'Sac du Grand Récolteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81029.png',
  },
  {
    id: 1704,
    name: 'Sac du Staca Noviste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81030.png',
  },
  {
    id: 1705,
    name: "Sac de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81031.png',
  },
  {
    id: 1707,
    name: 'Sac du Grand Aventurier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81032.png',
  },
  {
    id: 1718,
    name: 'Force de Crocoburio',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9038.png',
  },
  {
    id: 1719,
    name: 'Esprit de Crocoburio',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11012.png',
  },
  {
    id: 1720,
    name: 'Puissance de Crocoburio',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10018.png',
  },
  {
    id: 1729,
    name: 'Anneau Mèr',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9028.png',
  },
  {
    id: 1904,
    name: 'Dragocoiffe Calcaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16028.png',
  },
  {
    id: 1908,
    name: 'Casque du Chafer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16031.png',
  },
  {
    id: 1910,
    name: 'Cape Ouginak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17033.png',
  },
  {
    id: 2061,
    name: 'Cape du Corbac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17197.png',
  },
  {
    id: 2063,
    name: 'Bottes Volatiles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11017.png',
  },
  {
    id: 2070,
    name: 'Shako',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16058.png',
  },
  {
    id: 2094,
    name: 'Makroute Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16033.png',
  },
  {
    id: 2095,
    name: 'Le Ours',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16034.png',
  },
  {
    id: 2096,
    name: 'Dora Sombre de Brave',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16035.png',
  },
  {
    id: 2097,
    name: 'Champo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16036.png',
  },
  {
    id: 2104,
    name: 'Kraignosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16037.png',
  },
  {
    id: 2118,
    name: 'Cape Brâkmarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17020.png',
  },
  {
    id: 2119,
    name: 'Cape Bontarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17034.png',
  },
  {
    id: 2233,
    name: 'La Croqueuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10020.png',
  },
  {
    id: 2367,
    name: "L'Ami Léhunui",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10021.png',
  },
  {
    id: 2368,
    name: "Ramoume l'Eternelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10022.png',
  },
  {
    id: 2369,
    name: 'Puissante Ceinture Fulgurante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10026.png',
  },
  {
    id: 2370,
    name: 'La Végète Hâtif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10023.png',
  },
  {
    id: 2371,
    name: 'La Mouthmou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10024.png',
  },
  {
    id: 2372,
    name: 'Bottes de Lymphe a Tik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11018.png',
  },
  {
    id: 2373,
    name: 'Moon Boutse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11019.png',
  },
  {
    id: 2374,
    name: 'Bottes Tarsy',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11020.png',
  },
  {
    id: 2375,
    name: 'Bottes Orino',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11021.png',
  },
  {
    id: 2380,
    name: 'Cape de Bou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17035.png',
  },
  {
    id: 2381,
    name: 'Cape Flotteuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17036.png',
  },
  {
    id: 2382,
    name: 'Cape Maimpa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17037.png',
  },
  {
    id: 2383,
    name: 'Cape Sanguine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17038.png',
  },
  {
    id: 2384,
    name: 'Bottes Animales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11022.png',
  },
  {
    id: 2385,
    name: 'La Brouteuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17039.png',
  },
  {
    id: 2386,
    name: 'La Guenille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17040.png',
  },
  {
    id: 2387,
    name: 'La Poilue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17041.png',
  },
  {
    id: 2388,
    name: "L'Amulette du Puzzle de la Griffe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1036.png',
  },
  {
    id: 2389,
    name: 'Amulette du Badoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1037.png',
  },
  {
    id: 2390,
    name: 'Amulette de la Boule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1038.png',
  },
  {
    id: 2391,
    name: 'Amulette de la Bouboule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1039.png',
  },
  {
    id: 2392,
    name: 'Dragolyre Remaniée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1025.png',
  },
  {
    id: 2393,
    name: 'Omelette Amulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1040.png',
  },
  {
    id: 2394,
    name: 'La Bourgeonette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1041.png',
  },
  {
    id: 2395,
    name: 'Le foulard du Lard Fou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1042.png',
  },
  {
    id: 2396,
    name: 'La Lou Ptiote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1043.png',
  },
  {
    id: 2397,
    name: 'La Bibelaw',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1044.png',
  },
  {
    id: 2398,
    name: "L'Œil de Kanigrou",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1045.png',
  },
  {
    id: 2399,
    name: 'La Veaux Doux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1046.png',
  },
  {
    id: 2400,
    name: 'Bottes Animales Sombres',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11023.png',
  },
  {
    id: 2403,
    name: 'Chtévu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10025.png',
  },
  {
    id: 2404,
    name: 'Ceinture du Rat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10027.png',
  },
  {
    id: 2409,
    name: 'Kwakoiffe de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16039.png',
  },
  {
    id: 2410,
    name: 'Abracaska',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16040.png',
  },
  {
    id: 2411,
    name: 'Coiffe du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16041.png',
  },
  {
    id: 2412,
    name: 'Kwape de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17042.png',
  },
  {
    id: 2413,
    name: 'Abracapa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17043.png',
  },
  {
    id: 2414,
    name: 'Cape Bouffante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17044.png',
  },
  {
    id: 2418,
    name: 'Kwakanneau de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9043.png',
  },
  {
    id: 2419,
    name: 'Anneau de Bouze le Clerc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9044.png',
  },
  {
    id: 2420,
    name: 'Anobra',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9045.png',
  },
  {
    id: 2421,
    name: 'Kwakobottes de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11025.png',
  },
  {
    id: 2422,
    name: 'Boufbottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11026.png',
  },
  {
    id: 2423,
    name: 'Abrabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11027.png',
  },
  {
    id: 2424,
    name: 'Amukwak de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1047.png',
  },
  {
    id: 2425,
    name: 'Amulette du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1048.png',
  },
  {
    id: 2426,
    name: 'Araknamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1049.png',
  },
  {
    id: 2427,
    name: 'Kwakture de Flammes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10028.png',
  },
  {
    id: 2428,
    name: 'Ceinture du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10029.png',
  },
  {
    id: 2429,
    name: 'Abrature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10030.png',
  },
  {
    id: 2435,
    name: "L'Eni Kère",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11029.png',
  },
  {
    id: 2438,
    name: 'Boufcoiffe Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16042.png',
  },
  {
    id: 2441,
    name: 'Anneau Royal du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9046.png',
  },
  {
    id: 2442,
    name: 'Boufbottes Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11030.png',
  },
  {
    id: 2443,
    name: 'Amulette Royale du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1050.png',
  },
  {
    id: 2444,
    name: 'Ceinture Royale du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10031.png',
  },
  {
    id: 2445,
    name: 'Cape Bouffante Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17046.png',
  },
  {
    id: 2446,
    name: 'Gelocape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17047.png',
  },
  {
    id: 2447,
    name: 'Gelocoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16043.png',
  },
  {
    id: 2469,
    name: 'Gelano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9047.png',
  },
  {
    id: 2470,
    name: 'Gelobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11031.png',
  },
  {
    id: 2471,
    name: 'Geloture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10032.png',
  },
  {
    id: 2472,
    name: 'Gelamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1051.png',
  },
  {
    id: 2473,
    name: "Cape de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17048.png',
  },
  {
    id: 2474,
    name: "Chapeau de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16044.png',
  },
  {
    id: 2475,
    name: "Anneau de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9048.png',
  },
  {
    id: 2476,
    name: "Bottes de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11032.png',
  },
  {
    id: 2477,
    name: "Ceinture de l'aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10033.png',
  },
  {
    id: 2478,
    name: "Amulette de l'Aventurier",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1052.png',
  },
  {
    id: 2485,
    name: 'Végacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16045.png',
  },
  {
    id: 2489,
    name: 'Vegacape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17049.png',
  },
  {
    id: 2498,
    name: 'Vegamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1053.png',
  },
  {
    id: 2521,
    name: 'Mégabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11033.png',
  },
  {
    id: 2522,
    name: 'Bottes Vioutifoule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11034.png',
  },
  {
    id: 2523,
    name: 'Mégature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10034.png',
  },
  {
    id: 2524,
    name: 'Ceinture Vioutifoule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10035.png',
  },
  {
    id: 2530,
    name: 'Carabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11035.png',
  },
  {
    id: 2531,
    name: 'Caracoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16048.png',
  },
  {
    id: 2532,
    name: 'Caracape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17052.png',
  },
  {
    id: 2534,
    name: 'Kwape de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17053.png',
  },
  {
    id: 2535,
    name: 'Kwakoiffe de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16049.png',
  },
  {
    id: 2537,
    name: 'Kwakture de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10036.png',
  },
  {
    id: 2545,
    name: 'Corbottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11037.png',
  },
  {
    id: 2546,
    name: 'Corbacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16050.png',
  },
  {
    id: 2547,
    name: 'Corbacape Mastralis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17056.png',
  },
  {
    id: 2629,
    name: 'Caracape Minotoris',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17055.png',
  },
  {
    id: 2641,
    name: 'Toady',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16051.png',
  },
  {
    id: 2655,
    name: 'Ceinture Corbaquiale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10056.png',
  },
  {
    id: 2677,
    name: 'Ceinture Chouqueuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10041.png',
  },
  {
    id: 2678,
    name: 'Ceinture Kokokette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10040.png',
  },
  {
    id: 2683,
    name: 'Ceinture Tortue Bleue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10044.png',
  },
  {
    id: 2685,
    name: 'Ceinture Tortue Verte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10042.png',
  },
  {
    id: 2687,
    name: 'Ceinture Tortue Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10045.png',
  },
  {
    id: 2688,
    name: 'Ceinture Kolante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10046.png',
  },
  {
    id: 2689,
    name: 'Ceinture Banisation',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10047.png',
  },
  {
    id: 2710,
    name: 'Ceinture Banisation Sauvage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10048.png',
  },
  {
    id: 2803,
    name: 'Ceinture du Kwabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10049.png',
  },
  {
    id: 2804,
    name: 'Ceinture Mulante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10050.png',
  },
  {
    id: 2807,
    name: 'Ceinture Meulante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10051.png',
  },
  {
    id: 2808,
    name: 'Ceinture Dracochoune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10052.png',
  },
  {
    id: 2809,
    name: 'Ceinture Chafeuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10053.png',
  },
  {
    id: 2810,
    name: 'Ceinture Piquante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10054.png',
  },
  {
    id: 2811,
    name: 'Ceinture Ouginakale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10055.png',
  },
  {
    id: 3203,
    name: 'Anneau Tribal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9049.png',
  },
  {
    id: 3204,
    name: 'Ceinture Bontarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10037.png',
  },
  {
    id: 3205,
    name: 'Ceinture Brâkmarienne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10038.png',
  },
  {
    id: 3206,
    name: 'La Xerbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10039.png',
  },
  {
    id: 3207,
    name: 'Bottes de Satisfaction',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11038.png',
  },
  {
    id: 4381,
    name: 'Amulette Argie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1054.png',
  },
  {
    id: 4684,
    name: 'Amulette du Craqueleur des Plaines',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1055.png',
  },
  {
    id: 5122,
    name: 'La Maîtrise des Poupées',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1056.png',
  },
  {
    id: 6443,
    name: 'Amulette du Renouveau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1057.png',
  },
  {
    id: 6444,
    name: 'Amulette Turquoise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1058.png',
  },
  {
    id: 6449,
    name: 'Corbacape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17054.png',
  },
  {
    id: 6450,
    name: "Ceinture de l'Amant d'Ha",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10057.png',
  },
  {
    id: 6459,
    name: 'Amulette du Mineur Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1061.png',
  },
  {
    id: 6460,
    name: "La Feuille d'Hiver",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1065.png',
  },
  {
    id: 6461,
    name: 'La Feuille de Printemps',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1062.png',
  },
  {
    id: 6462,
    name: "La Feuille d'Eté",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1063.png',
  },
  {
    id: 6463,
    name: 'Anneau Forain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9050.png',
  },
  {
    id: 6464,
    name: "Anneau de l'Invocateur Satisfait",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9051.png',
  },
  {
    id: 6465,
    name: 'Anneau de Loopine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9052.png',
  },
  {
    id: 6466,
    name: 'Amulette de Shika',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1060.png',
  },
  {
    id: 6467,
    name: 'Anneau Nime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9053.png',
  },
  {
    id: 6468,
    name: 'Anneau du Jeune Vald',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9054.png',
  },
  {
    id: 6469,
    name: 'Alliance de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9055.png',
  },
  {
    id: 6470,
    name: "Bottes de l'Eleveur de Bouftous",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11040.png',
  },
  {
    id: 6471,
    name: 'Souliers Vernis de Porkass',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11041.png',
  },
  {
    id: 6472,
    name: 'Dragocoiffe Argile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16055.png',
  },
  {
    id: 6473,
    name: 'Dragocoiffe Ardoise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16057.png',
  },
  {
    id: 6474,
    name: 'Dragocoiffe Charbon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16056.png',
  },
  {
    id: 6477,
    name: 'Chapeau du Mineur Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16090.png',
  },
  {
    id: 6481,
    name: 'Dora Bora',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16061.png',
  },
  {
    id: 6482,
    name: 'Korko Kousto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16059.png',
  },
  {
    id: 6483,
    name: 'Casque du Bwork de Bronze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16091.png',
  },
  {
    id: 6493,
    name: 'Tongues Wabbits',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11039.png',
  },
  {
    id: 6498,
    name: 'Slip Kangouwou du Wabbit GM',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10058.png',
  },
  {
    id: 6499,
    name: 'Amulette "Dents de Wabbits"',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1059.png',
  },
  {
    id: 6500,
    name: 'Oreilles de Wabbits',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16052.png',
  },
  {
    id: 6501,
    name: 'Sac-Cawotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81057.png',
  },
  {
    id: 6506,
    name: 'Anneau du Mineur Gogorifiant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9040.png',
  },
  {
    id: 6654,
    name: 'Bottes du Gardien des Égouts',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11028.png',
  },
  {
    id: 6660,
    name: 'Chapeau du Marié',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16053.png',
  },
  {
    id: 6662,
    name: 'Chapeau de la Mariée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16054.png',
  },
  {
    id: 6712,
    name: 'Cape Hucine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17082.png',
  },
  {
    id: 6719,
    name: "Coiffe de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16064.png',
  },
  {
    id: 6720,
    name: "Cape de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17058.png',
  },
  {
    id: 6721,
    name: "Bottes de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11051.png',
  },
  {
    id: 6722,
    name: "Alliance de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9066.png',
  },
  {
    id: 6723,
    name: "Amulette de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1074.png',
  },
  {
    id: 6724,
    name: "Ceinture de l'Homme Ours",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10066.png',
  },
  {
    id: 6731,
    name: 'Amukwak de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1071.png',
  },
  {
    id: 6732,
    name: 'Kwakanneau de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9063.png',
  },
  {
    id: 6742,
    name: 'Fourbamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1069.png',
  },
  {
    id: 6743,
    name: 'Fourballiance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9060.png',
  },
  {
    id: 6744,
    name: 'Fourbabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11047.png',
  },
  {
    id: 6745,
    name: 'Ceinture Fourbissante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10062.png',
  },
  {
    id: 6746,
    name: 'Amukwak de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1072.png',
  },
  {
    id: 6747,
    name: 'Amukwak du Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1070.png',
  },
  {
    id: 6748,
    name: 'Kwakanneau de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9064.png',
  },
  {
    id: 6749,
    name: 'Kwakanneau de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9062.png',
  },
  {
    id: 6753,
    name: 'Kwakobottes de Glace',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11036.png',
  },
  {
    id: 6754,
    name: 'Kwakobottes de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11049.png',
  },
  {
    id: 6755,
    name: 'Kwakobottes de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11048.png',
  },
  {
    id: 6756,
    name: 'Kwape de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17064.png',
  },
  {
    id: 6757,
    name: 'Kwape de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17062.png',
  },
  {
    id: 6758,
    name: 'Kwakture de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10065.png',
  },
  {
    id: 6759,
    name: 'Kwakture de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10063.png',
  },
  {
    id: 6760,
    name: 'Kwakoiffe de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16071.png',
  },
  {
    id: 6761,
    name: 'Kwakoiffe de Vent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16069.png',
  },
  {
    id: 6763,
    name: 'Fourbacapa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17061.png',
  },
  {
    id: 6764,
    name: 'Fourbacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16068.png',
  },
  {
    id: 6766,
    name: 'Epis de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1068.png',
  },
  {
    id: 6767,
    name: 'Bracelet Magique de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9061.png',
  },
  {
    id: 6773,
    name: 'Amulette Tude',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1019.png',
  },
  {
    id: 6774,
    name: 'Sabots de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11046.png',
  },
  {
    id: 6775,
    name: 'Cape de Farle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17070.png',
  },
  {
    id: 6776,
    name: 'Farlature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10061.png',
  },
  {
    id: 6778,
    name: 'Farlacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16067.png',
  },
  {
    id: 6789,
    name: 'Amulette des Champs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1073.png',
  },
  {
    id: 6791,
    name: 'Anneau Champêtre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9065.png',
  },
  {
    id: 6793,
    name: 'Anneau Thé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9001.png',
  },
  {
    id: 6794,
    name: 'Bottes Champêtres',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11050.png',
  },
  {
    id: 6795,
    name: 'Capouze des Champs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17065.png',
  },
  {
    id: 6796,
    name: 'Ceinture Fleurie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10064.png',
  },
  {
    id: 6797,
    name: 'Coiffe Champêtre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16070.png',
  },
  {
    id: 6800,
    name: 'Cape Banale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17198.png',
  },
  {
    id: 6801,
    name: 'Cape Hivernale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17199.png',
  },
  {
    id: 6802,
    name: 'Cache oreilles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16073.png',
  },
  {
    id: 6804,
    name: 'Amulette du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1066.png',
  },
  {
    id: 6805,
    name: 'Bracelet du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9058.png',
  },
  {
    id: 6807,
    name: 'Bottes du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11044.png',
  },
  {
    id: 6811,
    name: 'Cape du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17060.png',
  },
  {
    id: 6812,
    name: 'Slip du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10059.png',
  },
  {
    id: 6813,
    name: 'Casque du Chef Bwork',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16065.png',
  },
  {
    id: 6817,
    name: 'Amulette du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1067.png',
  },
  {
    id: 6819,
    name: 'Bracelet du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9059.png',
  },
  {
    id: 6825,
    name: 'Pantoufles Crochues du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11045.png',
  },
  {
    id: 6830,
    name: "Petit sac d'écolier du Chef Crocodaille",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81058.png',
  },
  {
    id: 6831,
    name: 'Ceinture du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10060.png',
  },
  {
    id: 6834,
    name: 'Coiffe du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16066.png',
  },
  {
    id: 6908,
    name: 'Sanglature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10075.png',
  },
  {
    id: 6909,
    name: 'Pieds du Sanglier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11051.png',
  },
  {
    id: 6910,
    name: 'Anneau du Sanglier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9073.png',
  },
  {
    id: 6911,
    name: 'Araknoton',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9076.png',
  },
  {
    id: 6912,
    name: 'Araknoture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10073.png',
  },
  {
    id: 6913,
    name: "L'Araknacoiffe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16083.png',
  },
  {
    id: 6915,
    name: 'Mos Kitano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9071.png',
  },
  {
    id: 6916,
    name: 'Sac du Petit Moskito',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81059.png',
  },
  {
    id: 6917,
    name: 'Moskitogalurette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16080.png',
  },
  {
    id: 6918,
    name: 'Amulette du Moskito',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1075.png',
  },
  {
    id: 6919,
    name: 'Anneau du Champ Champ',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9074.png',
  },
  {
    id: 6920,
    name: 'Alliance Du Champ Champ',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9075.png',
  },
  {
    id: 6921,
    name: 'Champcoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16084.png',
  },
  {
    id: 6922,
    name: 'Cape du Champ Champ',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17076.png',
  },
  {
    id: 6923,
    name: 'Amulette du Bandit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1076.png',
  },
  {
    id: 6925,
    name: 'Ceinture du Bandit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10072.png',
  },
  {
    id: 6926,
    name: 'Coiffe du Prespic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16081.png',
  },
  {
    id: 6927,
    name: 'Cape du Prespic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17075.png',
  },
  {
    id: 6928,
    name: 'Anneau du Prespic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9072.png',
  },
  {
    id: 6929,
    name: 'Ceinture du Prespic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10071.png',
  },
  {
    id: 6930,
    name: 'Casque du Craqueleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16085.png',
  },
  {
    id: 6931,
    name: 'Craquelocape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17077.png',
  },
  {
    id: 6933,
    name: 'Bottes du Craqueleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11052.png',
  },
  {
    id: 6934,
    name: 'Craquamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1077.png',
  },
  {
    id: 6935,
    name: 'Ceinture du Craqueleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10074.png',
  },
  {
    id: 6936,
    name: 'Scaracoiffe Verte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16078.png',
  },
  {
    id: 6937,
    name: 'Scaracoiffe Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16077.png',
  },
  {
    id: 6938,
    name: 'Scaracoiffe Blanche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16079.png',
  },
  {
    id: 6939,
    name: 'Scaracoiffe Bleue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16076.png',
  },
  {
    id: 6940,
    name: 'Scaracape Verte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17074.png',
  },
  {
    id: 6941,
    name: 'Scaracape Bleue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17073.png',
  },
  {
    id: 6942,
    name: 'Scaracape Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17072.png',
  },
  {
    id: 6943,
    name: 'Scaracape Blanche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17071.png',
  },
  {
    id: 6944,
    name: 'Scaranneau Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9069.png',
  },
  {
    id: 6945,
    name: 'Scaranneau Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9068.png',
  },
  {
    id: 6946,
    name: 'Scaranneau Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9067.png',
  },
  {
    id: 6947,
    name: 'Scaranneau Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9070.png',
  },
  {
    id: 6948,
    name: 'Scarature Verte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10067.png',
  },
  {
    id: 6949,
    name: 'Scarature Blanche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10069.png',
  },
  {
    id: 6950,
    name: 'Scarature Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10068.png',
  },
  {
    id: 6951,
    name: 'Scarature Bleue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10070.png',
  },
  {
    id: 6952,
    name: 'Coiffe du Mulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16131.png',
  },
  {
    id: 6953,
    name: 'Bottines du Mulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11076.png',
  },
  {
    id: 6954,
    name: 'Cape du Mulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17099.png',
  },
  {
    id: 6955,
    name: 'String du Mulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10092.png',
  },
  {
    id: 6956,
    name: 'Anneau du Mulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9103.png',
  },
  {
    id: 6961,
    name: 'Anneau du Bandit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9077.png',
  },
  {
    id: 6980,
    name: 'Dofus Vulbis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23004.png',
  },
  {
    id: 6988,
    name: 'Sulik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16092.png',
  },
  {
    id: 6989,
    name: 'Krokop',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16086.png',
  },
  {
    id: 6990,
    name: 'Phalène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16087.png',
  },
  {
    id: 6991,
    name: 'Goyave',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16088.png',
  },
  {
    id: 6992,
    name: 'Kannipiou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16089.png',
  },
  {
    id: 6993,
    name: 'Cape Ricéfini',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17079.png',
  },
  {
    id: 6994,
    name: 'Cape Hôte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17080.png',
  },
  {
    id: 6995,
    name: 'Cape Houte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17081.png',
  },
  {
    id: 6996,
    name: 'Anneau Stradamus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9078.png',
  },
  {
    id: 6997,
    name: 'Anneau Fioutioure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9079.png',
  },
  {
    id: 6998,
    name: "Alliance d'Elya Wood",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9084.png',
  },
  {
    id: 6999,
    name: 'Médaille Lahilama',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1083.png',
  },
  {
    id: 7000,
    name: 'Bambamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1078.png',
  },
  {
    id: 7001,
    name: "Talisman du Faucheur d'Avoine",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1084.png',
  },
  {
    id: 7002,
    name: 'La Résinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1085.png',
  },
  {
    id: 7003,
    name: "Talisman d'Elya Wood",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1086.png',
  },
  {
    id: 7011,
    name: "Cape du Désir O'Boul",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17083.png',
  },
  {
    id: 7012,
    name: "La Doubitch O'Boul",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1087.png',
  },
  {
    id: 7029,
    name: 'Ceinture de Sangroku',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10080.png',
  },
  {
    id: 7031,
    name: 'Pendule du Gudule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1090.png',
  },
  {
    id: 7034,
    name: 'Casque de Maître Nabur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16093.png',
  },
  {
    id: 7038,
    name: 'Couronne du Roi Gelax',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16094.png',
  },
  {
    id: 7039,
    name: 'Ceinture Noire de Frank Lee Bruce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10081.png',
  },
  {
    id: 7043,
    name: 'Dofus des Glaces',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23005.png',
  },
  {
    id: 7056,
    name: 'Krépite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16095.png',
  },
  {
    id: 7058,
    name: 'Octovius',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16096.png',
  },
  {
    id: 7070,
    name: 'Bouclier des Brigandins écorché',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82009.png',
  },
  {
    id: 7097,
    name: "Bouclier d'entraînement",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82001.png',
  },
  {
    id: 7104,
    name: 'Tongues Baques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11058.png',
  },
  {
    id: 7106,
    name: 'Larvamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1088.png',
  },
  {
    id: 7107,
    name: 'Larvabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11053.png',
  },
  {
    id: 7108,
    name: 'Larvasac',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81060.png',
  },
  {
    id: 7109,
    name: 'Larvacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16103.png',
  },
  {
    id: 7113,
    name: 'Dofawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23009.png',
  },
  {
    id: 7114,
    name: 'Dofus Ébène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23007.png',
  },
  {
    id: 7115,
    name: 'Dofus Ivoire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23011.png',
  },
  {
    id: 7116,
    name: 'Anneau Merta',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9091.png',
  },
  {
    id: 7117,
    name: 'Alliance Ethnique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9092.png',
  },
  {
    id: 7118,
    name: "Anneau K'Tuelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9094.png',
  },
  {
    id: 7119,
    name: 'Anneau Ha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9085.png',
  },
  {
    id: 7120,
    name: 'Anneau Hé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9086.png',
  },
  {
    id: 7121,
    name: 'Anneau Zocomial',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9087.png',
  },
  {
    id: 7122,
    name: 'Anneau Vice',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9088.png',
  },
  {
    id: 7123,
    name: 'Anneau Bsène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9095.png',
  },
  {
    id: 7128,
    name: 'Anneau Karina',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9089.png',
  },
  {
    id: 7131,
    name: 'Anneau Piaume',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9090.png',
  },
  {
    id: 7132,
    name: 'Anneau Rigami',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9096.png',
  },
  {
    id: 7136,
    name: 'Médaille Kido',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1089.png',
  },
  {
    id: 7137,
    name: 'Cape Huccino',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17200.png',
  },
  {
    id: 7138,
    name: 'Ortiz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17091.png',
  },
  {
    id: 7139,
    name: 'Ceinture Sula',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10082.png',
  },
  {
    id: 7140,
    name: 'Xénature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10083.png',
  },
  {
    id: 7141,
    name: 'Holoune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16111.png',
  },
  {
    id: 7142,
    name: 'Piruk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16112.png',
  },
  {
    id: 7143,
    name: 'Solomonk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16123.png',
  },
  {
    id: 7144,
    name: 'Blémiche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16116.png',
  },
  {
    id: 7145,
    name: 'Coiffe du Gaddie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16115.png',
  },
  {
    id: 7146,
    name: 'La Bertheuze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16114.png',
  },
  {
    id: 7150,
    name: 'La Bekille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16109.png',
  },
  {
    id: 7151,
    name: 'Koloss',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16108.png',
  },
  {
    id: 7152,
    name: 'Kanistère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16110.png',
  },
  {
    id: 7174,
    name: 'Cape Pandawushu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17089.png',
  },
  {
    id: 7177,
    name: 'Bandeau Pandawushu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16102.png',
  },
  {
    id: 7214,
    name: 'Sandales Macien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11059.png',
  },
  {
    id: 7215,
    name: 'Sandales Humeuses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11060.png',
  },
  {
    id: 7216,
    name: 'Sandales Koliques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11061.png',
  },
  {
    id: 7217,
    name: 'Sandales Hambic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11062.png',
  },
  {
    id: 7218,
    name: 'Sandales Adin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11063.png',
  },
  {
    id: 7219,
    name: 'Sandales Ailuya',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11064.png',
  },
  {
    id: 7221,
    name: 'Collier du Tanukouï San',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1092.png',
  },
  {
    id: 7226,
    name: 'Chapeau Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16146.png',
  },
  {
    id: 7227,
    name: 'Chapeau Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16147.png',
  },
  {
    id: 7228,
    name: 'Chapeau Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16145.png',
  },
  {
    id: 7229,
    name: 'Chapeau Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16148.png',
  },
  {
    id: 7230,
    name: 'Cape Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17113.png',
  },
  {
    id: 7231,
    name: 'Cape Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17112.png',
  },
  {
    id: 7232,
    name: 'Cape Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17111.png',
  },
  {
    id: 7233,
    name: 'Cape Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17114.png',
  },
  {
    id: 7238,
    name: 'Ceinture Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10076.png',
  },
  {
    id: 7239,
    name: 'Ceinture Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10078.png',
  },
  {
    id: 7240,
    name: 'Ceinture Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10077.png',
  },
  {
    id: 7241,
    name: 'Ceinture Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10079.png',
  },
  {
    id: 7242,
    name: 'Geta Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11054.png',
  },
  {
    id: 7243,
    name: 'Geta Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11055.png',
  },
  {
    id: 7244,
    name: 'Geta Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11056.png',
  },
  {
    id: 7245,
    name: 'Geta Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11057.png',
  },
  {
    id: 7246,
    name: 'Alliance Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9080.png',
  },
  {
    id: 7247,
    name: 'Alliance Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9081.png',
  },
  {
    id: 7248,
    name: 'Alliance Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9082.png',
  },
  {
    id: 7249,
    name: 'Alliance Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9083.png',
  },
  {
    id: 7250,
    name: 'Amulette Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1079.png',
  },
  {
    id: 7251,
    name: 'Amulette Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1080.png',
  },
  {
    id: 7252,
    name: 'Amulette Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1081.png',
  },
  {
    id: 7253,
    name: 'Amulette Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1082.png',
  },
  {
    id: 7339,
    name: 'Coiffe du Kitsou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16097.png',
  },
  {
    id: 7340,
    name: 'Cape du Kitsou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17084.png',
  },
  {
    id: 7341,
    name: 'Anneau du Kitsou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9093.png',
  },
  {
    id: 7342,
    name: 'Amulette du Kitsou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1091.png',
  },
  {
    id: 7513,
    name: 'Sandales Titude',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11067.png',
  },
  {
    id: 7514,
    name: 'Bottes Harry',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11070.png',
  },
  {
    id: 7515,
    name: 'Cape Itaineflam',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17092.png',
  },
  {
    id: 7516,
    name: "Coiffe du Bimd'Oule",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16121.png',
  },
  {
    id: 7552,
    name: 'Capodindo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17090.png',
  },
  {
    id: 7553,
    name: 'Chapodindo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16118.png',
  },
  {
    id: 7554,
    name: 'Botodindo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11065.png',
  },
  {
    id: 7555,
    name: 'Anodindo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9097.png',
  },
  {
    id: 7559,
    name: 'Goldoture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10085.png',
  },
  {
    id: 7680,
    name: 'Ougalurette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16120.png',
  },
  {
    id: 7754,
    name: 'Dofus Ocre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23012.png',
  },
  {
    id: 7880,
    name: 'Amulette du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1093.png',
  },
  {
    id: 7881,
    name: 'Anneau du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9098.png',
  },
  {
    id: 7883,
    name: 'Bottes du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11066.png',
  },
  {
    id: 7884,
    name: 'Cape du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17093.png',
  },
  {
    id: 7885,
    name: 'Ceinture du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10084.png',
  },
  {
    id: 7886,
    name: 'Coiffe du Boufcoul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16119.png',
  },
  {
    id: 7887,
    name: 'Coiffe du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16122.png',
  },
  {
    id: 7888,
    name: 'Sac du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81002.png',
  },
  {
    id: 7889,
    name: 'Bottes du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11069.png',
  },
  {
    id: 7902,
    name: "Ceinture d'une Femme en Or",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10086.png',
  },
  {
    id: 7921,
    name: 'Couronne du Tofu Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16154.png',
  },
  {
    id: 8003,
    name: 'Amulette du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1094.png',
  },
  {
    id: 8004,
    name: 'Anneau du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9099.png',
  },
  {
    id: 8006,
    name: 'Bottes du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11071.png',
  },
  {
    id: 8007,
    name: 'Cape du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17095.png',
  },
  {
    id: 8008,
    name: 'Ceinture du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10087.png',
  },
  {
    id: 8009,
    name: 'Coiffe du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16125.png',
  },
  {
    id: 8072,
    name: 'Dofus Kaliptus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23010.png',
  },
  {
    id: 8108,
    name: 'Amulette du Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1095.png',
  },
  {
    id: 8109,
    name: 'Anneau du Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9100.png',
  },
  {
    id: 8111,
    name: 'Pantoufles du Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11073.png',
  },
  {
    id: 8112,
    name: 'Cape du Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17097.png',
  },
  {
    id: 8113,
    name: 'Ceinture du Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10089.png',
  },
  {
    id: 8114,
    name: 'Kaskofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16128.png',
  },
  {
    id: 8116,
    name: 'Scaracoiffe Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16129.png',
  },
  {
    id: 8117,
    name: 'Scaracape Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17098.png',
  },
  {
    id: 8119,
    name: 'Scarature Dorée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10090.png',
  },
  {
    id: 8120,
    name: 'Amulette Scarabosse Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1096.png',
  },
  {
    id: 8121,
    name: 'Anneau du Scarabosse Doré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9101.png',
  },
  {
    id: 8122,
    name: 'Scarabottes Dorées',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11074.png',
  },
  {
    id: 8123,
    name: 'Amulette Paysanne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1097.png',
  },
  {
    id: 8124,
    name: 'Ceinturemuda du Paysan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10091.png',
  },
  {
    id: 8125,
    name: 'Bob du Paysan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16130.png',
  },
  {
    id: 8126,
    name: 'Mitaines Mitées du Paysan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9102.png',
  },
  {
    id: 8128,
    name: 'Bottes Paysannes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11075.png',
  },
  {
    id: 8129,
    name: 'Amuloumulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1098.png',
  },
  {
    id: 8131,
    name: 'Sac du Paysan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81003.png',
  },
  {
    id: 8132,
    name: 'Scarature Noire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10093.png',
  },
  {
    id: 8133,
    name: 'Scaracoiffe Noire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16132.png',
  },
  {
    id: 8134,
    name: 'Scaracape Noire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17100.png',
  },
  {
    id: 8136,
    name: 'Scaranneau Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9104.png',
  },
  {
    id: 8146,
    name: 'Bottes Du Craqueleur Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11077.png',
  },
  {
    id: 8147,
    name: 'Casque du Craqueleur Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16133.png',
  },
  {
    id: 8149,
    name: 'Craquanneau Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9105.png',
  },
  {
    id: 8150,
    name: 'Amulette du Craqueleur Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1099.png',
  },
  {
    id: 8152,
    name: 'Ceinture du Craqueleur Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10094.png',
  },
  {
    id: 8162,
    name: 'Tête de Citwouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16134.png',
  },
  {
    id: 8163,
    name: 'Kabuto',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16135.png',
  },
  {
    id: 8181,
    name: 'Craquelocape Légendaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17101.png',
  },
  {
    id: 8213,
    name: 'Amulette du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1100.png',
  },
  {
    id: 8214,
    name: 'Amulette du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1101.png',
  },
  {
    id: 8215,
    name: 'Amulette du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1102.png',
  },
  {
    id: 8216,
    name: 'Amulette du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1103.png',
  },
  {
    id: 8217,
    name: 'Amulette du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1104.png',
  },
  {
    id: 8218,
    name: 'Amulette du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1105.png',
  },
  {
    id: 8219,
    name: 'Anneau du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9106.png',
  },
  {
    id: 8220,
    name: 'Anneau du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9107.png',
  },
  {
    id: 8221,
    name: 'Anneau du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9108.png',
  },
  {
    id: 8222,
    name: 'Anneau du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9109.png',
  },
  {
    id: 8223,
    name: 'Anneau du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9110.png',
  },
  {
    id: 8224,
    name: 'Anneau du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9111.png',
  },
  {
    id: 8225,
    name: 'Sandales du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11078.png',
  },
  {
    id: 8226,
    name: 'Sandales du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11079.png',
  },
  {
    id: 8227,
    name: 'Sandales du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11080.png',
  },
  {
    id: 8228,
    name: 'Sandales du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11081.png',
  },
  {
    id: 8229,
    name: 'Sandales du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11082.png',
  },
  {
    id: 8230,
    name: 'Sandales du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11083.png',
  },
  {
    id: 8231,
    name: 'Cape du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17103.png',
  },
  {
    id: 8232,
    name: 'Cape du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17104.png',
  },
  {
    id: 8233,
    name: 'Cape du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17105.png',
  },
  {
    id: 8234,
    name: 'Cape du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17108.png',
  },
  {
    id: 8235,
    name: 'Cape du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17106.png',
  },
  {
    id: 8236,
    name: 'Cape du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17107.png',
  },
  {
    id: 8237,
    name: 'Ceinture du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10096.png',
  },
  {
    id: 8238,
    name: 'Ceinture du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10097.png',
  },
  {
    id: 8239,
    name: 'Ceinture du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10098.png',
  },
  {
    id: 8240,
    name: 'Ceinture du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10099.png',
  },
  {
    id: 8241,
    name: 'Ceinture du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10100.png',
  },
  {
    id: 8242,
    name: 'Ceinture du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10101.png',
  },
  {
    id: 8243,
    name: 'Chapeau du Piou Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16137.png',
  },
  {
    id: 8244,
    name: 'Chapeau du Piou Bleu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16138.png',
  },
  {
    id: 8245,
    name: 'Chapeau du Piou Violet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16139.png',
  },
  {
    id: 8246,
    name: 'Chapeau du Piou Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16140.png',
  },
  {
    id: 8247,
    name: 'Chapeau du Piou Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16141.png',
  },
  {
    id: 8248,
    name: 'Chapeau du Piou Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16142.png',
  },
  {
    id: 8253,
    name: 'Amulette en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1106.png',
  },
  {
    id: 8254,
    name: 'Anneau en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9112.png',
  },
  {
    id: 8256,
    name: 'Bottes en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11084.png',
  },
  {
    id: 8257,
    name: 'Ceinture en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10102.png',
  },
  {
    id: 8258,
    name: 'Cape en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17109.png',
  },
  {
    id: 8259,
    name: 'Coiffe en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16143.png',
  },
  {
    id: 8260,
    name: 'Bandeau Kaliptus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16124.png',
  },
  {
    id: 8262,
    name: 'La Meulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1107.png',
  },
  {
    id: 8263,
    name: 'Anneau du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9113.png',
  },
  {
    id: 8264,
    name: 'Bottes du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11085.png',
  },
  {
    id: 8265,
    name: 'Cape du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17110.png',
  },
  {
    id: 8266,
    name: 'Ceinture du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10103.png',
  },
  {
    id: 8267,
    name: 'Coiffe du Meulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16144.png',
  },
  {
    id: 8268,
    name: 'Collier du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1112.png',
  },
  {
    id: 8269,
    name: 'Anneau du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9117.png',
  },
  {
    id: 8270,
    name: 'Bracelet du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9116.png',
  },
  {
    id: 8271,
    name: 'Anneau du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9115.png',
  },
  {
    id: 8272,
    name: 'Collier du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1111.png',
  },
  {
    id: 8273,
    name: 'Collier du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1110.png',
  },
  {
    id: 8276,
    name: 'Bottes du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11089.png',
  },
  {
    id: 8277,
    name: 'Sandales du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11088.png',
  },
  {
    id: 8278,
    name: 'Mules du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11087.png',
  },
  {
    id: 8279,
    name: 'Cape du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17117.png',
  },
  {
    id: 8280,
    name: 'Cape du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17116.png',
  },
  {
    id: 8281,
    name: 'Cape du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17118.png',
  },
  {
    id: 8282,
    name: 'Ceinture du Minotoror',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10106.png',
  },
  {
    id: 8283,
    name: 'Ceinture du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10105.png',
  },
  {
    id: 8284,
    name: 'Coiffe du Minotot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16151.png',
  },
  {
    id: 8285,
    name: 'Coiffe du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16150.png',
  },
  {
    id: 8286,
    name: 'Cape Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17115.png',
  },
  {
    id: 8287,
    name: 'Casque Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16149.png',
  },
  {
    id: 8288,
    name: 'Ceinture du Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10104.png',
  },
  {
    id: 8289,
    name: 'Anneau du Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9114.png',
  },
  {
    id: 8290,
    name: 'Amulette du Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1108.png',
  },
  {
    id: 8291,
    name: 'Bottes du Dragoeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11086.png',
  },
  {
    id: 8298,
    name: 'Epis de Shika',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1113.png',
  },
  {
    id: 8299,
    name: 'Bracelet Magique de Shika',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9118.png',
  },
  {
    id: 8301,
    name: 'Sabots de Shika',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11091.png',
  },
  {
    id: 8302,
    name: 'Cape de Shika',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17120.png',
  },
  {
    id: 8303,
    name: 'Shikature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10107.png',
  },
  {
    id: 8304,
    name: 'Shikacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16156.png',
  },
  {
    id: 8330,
    name: 'Coiffe du Dragoeuf volant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16152.png',
  },
  {
    id: 8331,
    name: 'Coiffe de la Dragueuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16153.png',
  },
  {
    id: 8333,
    name: 'Cape du Papa Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17119.png',
  },
  {
    id: 8334,
    name: 'Chapeau du Papa Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16155.png',
  },
  {
    id: 8341,
    name: 'Bottananas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11090.png',
  },
  {
    id: 8366,
    name: 'Cape du Petit Chapon Rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17121.png',
  },
  {
    id: 8441,
    name: 'Billréole',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16159.png',
  },
  {
    id: 8442,
    name: 'Masque du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16158.png',
  },
  {
    id: 8443,
    name: 'Cape du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17123.png',
  },
  {
    id: 8445,
    name: 'Collier du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1115.png',
  },
  {
    id: 8446,
    name: 'Bottes du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11093.png',
  },
  {
    id: 8447,
    name: 'Ceinture du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10109.png',
  },
  {
    id: 8448,
    name: 'Anneau du Rat Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9120.png',
  },
  {
    id: 8451,
    name: 'Coiffe du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16160.png',
  },
  {
    id: 8452,
    name: 'Cape du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17124.png',
  },
  {
    id: 8453,
    name: 'Collier du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1116.png',
  },
  {
    id: 8454,
    name: 'Gantelet du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9121.png',
  },
  {
    id: 8455,
    name: 'Ceinture du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10110.png',
  },
  {
    id: 8456,
    name: 'Bottes du Rat Blanc',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11094.png',
  },
  {
    id: 8457,
    name: 'Coiffe Cérémoniale du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16173.png',
  },
  {
    id: 8458,
    name: 'Cape Cérémoniale du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17125.png',
  },
  {
    id: 8459,
    name: 'Collier Cérémonial du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1117.png',
  },
  {
    id: 8460,
    name: 'Anneau Cérémonial du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9122.png',
  },
  {
    id: 8461,
    name: 'Ceinture Cérémoniale du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10111.png',
  },
  {
    id: 8462,
    name: 'Bottes Cérémoniales du Seigneur des Rats',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11095.png',
  },
  {
    id: 8463,
    name: 'Abracaska Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16174.png',
  },
  {
    id: 8464,
    name: 'Abracapa Ancestrale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17126.png',
  },
  {
    id: 8465,
    name: 'Torque Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1118.png',
  },
  {
    id: 8466,
    name: 'Anneau Ancestral',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9123.png',
  },
  {
    id: 8467,
    name: 'Protège-Tibias Ancestraux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11096.png',
  },
  {
    id: 8468,
    name: 'Abrature Ancestrale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10112.png',
  },
  {
    id: 8469,
    name: 'Talisman du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1119.png',
  },
  {
    id: 8470,
    name: 'Anneau du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9124.png',
  },
  {
    id: 8471,
    name: 'Tongues du dimanche du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11097.png',
  },
  {
    id: 8472,
    name: 'Cape Usée du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17127.png',
  },
  {
    id: 8473,
    name: 'String Automnal du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10113.png',
  },
  {
    id: 8474,
    name: 'Coiffe du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16166.png',
  },
  {
    id: 8521,
    name: 'La cape rouge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17128.png',
  },
  {
    id: 8527,
    name: 'Gobtroteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11098.png',
  },
  {
    id: 8530,
    name: 'Ruskauffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16167.png',
  },
  {
    id: 8533,
    name: 'Le Floude',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16169.png',
  },
  {
    id: 8534,
    name: "La Cape S'loque",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17130.png',
  },
  {
    id: 8535,
    name: 'Les Incrustes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11099.png',
  },
  {
    id: 8536,
    name: 'La Spamette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10114.png',
  },
  {
    id: 8537,
    name: 'Le Plussain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9125.png',
  },
  {
    id: 8538,
    name: "Le S'Mesme",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1120.png',
  },
  {
    id: 8619,
    name: 'Casque Keutumedi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16175.png',
  },
  {
    id: 8628,
    name: 'Chapeau Leufère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16185.png',
  },
  {
    id: 8629,
    name: 'Chapeau Grave',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16179.png',
  },
  {
    id: 8630,
    name: 'Bonnet Nufar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16177.png',
  },
  {
    id: 8631,
    name: 'Coiffe Fère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16184.png',
  },
  {
    id: 8632,
    name: 'Chapeau Tyron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16178.png',
  },
  {
    id: 8633,
    name: 'Bonnet Spairance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16180.png',
  },
  {
    id: 8634,
    name: 'Capuche Apin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16181.png',
  },
  {
    id: 8635,
    name: 'Chapeau Lithique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16176.png',
  },
  {
    id: 8636,
    name: 'Coiffe de Robbie Capuche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16186.png',
  },
  {
    id: 8637,
    name: 'Bonnet Toual',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16182.png',
  },
  {
    id: 8638,
    name: 'Chapeau Taufeu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16183.png',
  },
  {
    id: 8639,
    name: 'Cape Aurale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17131.png',
  },
  {
    id: 8640,
    name: 'Cape Aillé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17133.png',
  },
  {
    id: 8641,
    name: 'Cape Routh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17140.png',
  },
  {
    id: 8642,
    name: 'Cape Huchon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17141.png',
  },
  {
    id: 8643,
    name: 'Cape Sulhit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17134.png',
  },
  {
    id: 8644,
    name: 'Cape Hitton',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17139.png',
  },
  {
    id: 8645,
    name: 'Cape Ytale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17138.png',
  },
  {
    id: 8646,
    name: 'Cape Lyne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17137.png',
  },
  {
    id: 8647,
    name: 'Cape Wéra',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17142.png',
  },
  {
    id: 8648,
    name: 'Cape Hulco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17132.png',
  },
  {
    id: 8649,
    name: 'Cape Hadosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17136.png',
  },
  {
    id: 8650,
    name: 'Cape Haharnum',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17135.png',
  },
  {
    id: 8651,
    name: 'Sangle Hynère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10116.png',
  },
  {
    id: 8652,
    name: 'Ceinture Buhlent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10117.png',
  },
  {
    id: 8653,
    name: 'Sangle Glinglin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10118.png',
  },
  {
    id: 8654,
    name: 'Ceinture Lupine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10119.png',
  },
  {
    id: 8655,
    name: 'Sangle Holon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10120.png',
  },
  {
    id: 8656,
    name: 'Ceinture Luthe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10121.png',
  },
  {
    id: 8657,
    name: 'Sangle Hans',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10122.png',
  },
  {
    id: 8658,
    name: 'Ceinture Bodiézèle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10123.png',
  },
  {
    id: 8659,
    name: 'Sangle Huée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10124.png',
  },
  {
    id: 8660,
    name: 'Sangle Cible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10125.png',
  },
  {
    id: 8661,
    name: 'Gaine Hage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10126.png',
  },
  {
    id: 8662,
    name: 'Ceinture Gessant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10127.png',
  },
  {
    id: 8663,
    name: 'Bottes Antrin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11100.png',
  },
  {
    id: 8664,
    name: 'Charentaises à poils',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11105.png',
  },
  {
    id: 8665,
    name: 'Bottes Hox',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11102.png',
  },
  {
    id: 8666,
    name: 'Bottes Hairo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11103.png',
  },
  {
    id: 8667,
    name: 'Bottes Ulisme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11104.png',
  },
  {
    id: 8668,
    name: 'Bottes Hanik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11101.png',
  },
  {
    id: 8669,
    name: 'Tong Aclou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11106.png',
  },
  {
    id: 8670,
    name: 'Bottes Swana',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11107.png',
  },
  {
    id: 8698,
    name: 'Dofus Nébuleux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23016.png',
  },
  {
    id: 8699,
    name: 'Coiffe du Tynril',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16188.png',
  },
  {
    id: 8704,
    name: 'Le Nahitse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16190.png',
  },
  {
    id: 8713,
    name: 'Getas Bernacle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11108.png',
  },
  {
    id: 8714,
    name: 'Anneau Bhli',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9126.png',
  },
  {
    id: 8715,
    name: 'Bague Houx',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9127.png',
  },
  {
    id: 8716,
    name: 'Bague Héra',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9128.png',
  },
  {
    id: 8717,
    name: 'Bague Harre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9129.png',
  },
  {
    id: 8718,
    name: 'Anneau Tassion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9130.png',
  },
  {
    id: 8719,
    name: 'Anneau Stalgik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9131.png',
  },
  {
    id: 8720,
    name: 'Anneau Zamour',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9132.png',
  },
  {
    id: 8721,
    name: 'Anneau Raille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9133.png',
  },
  {
    id: 8722,
    name: 'Anneau Hell',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9134.png',
  },
  {
    id: 8723,
    name: 'Anneau Tilus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9135.png',
  },
  {
    id: 8724,
    name: 'Anneau Pwal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9136.png',
  },
  {
    id: 8725,
    name: 'Anneau Pitale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9137.png',
  },
  {
    id: 8726,
    name: 'Chaussures Lepon-Davignon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11109.png',
  },
  {
    id: 8727,
    name: 'Bottes Antouche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11110.png',
  },
  {
    id: 8728,
    name: 'Bottes Deuradi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11111.png',
  },
  {
    id: 8818,
    name: 'Cape Souveraine du Roissingue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17143.png',
  },
  {
    id: 8819,
    name: 'Cape de la Ouassingue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17144.png',
  },
  {
    id: 8820,
    name: 'Masque du Sergent Zoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16191.png',
  },
  {
    id: 8821,
    name: 'Coiffe du Disciple Zoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16192.png',
  },
  {
    id: 8822,
    name: "Masque de l'Abrakleur clair",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16193.png',
  },
  {
    id: 8823,
    name: "Masque de l'Abrakleur sombre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16194.png',
  },
  {
    id: 8824,
    name: 'Kaskargo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16195.png',
  },
  {
    id: 8829,
    name: 'Chapeau de Barbroussa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16197.png',
  },
  {
    id: 8839,
    name: 'Masque Vaudou Eth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16199.png',
  },
  {
    id: 8840,
    name: 'Masque Vaudou Jav',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16200.png',
  },
  {
    id: 8841,
    name: 'Masque Vaudou Sarbak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16201.png',
  },
  {
    id: 8842,
    name: 'Masque Vaudou Ark',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16202.png',
  },
  {
    id: 8843,
    name: 'Chapeau de Crocodaille Dandi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16203.png',
  },
  {
    id: 8844,
    name: 'Capuche Souveraine du Roissingue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16204.png',
  },
  {
    id: 8845,
    name: 'Capuche de la Ouassingue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16205.png',
  },
  {
    id: 8846,
    name: 'Chapeau de la Gamine Zoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16206.png',
  },
  {
    id: 8847,
    name: 'Casque du Guerrier Zoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16207.png',
  },
  {
    id: 8848,
    name: 'Coiffe du Maître Zoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16208.png',
  },
  {
    id: 8854,
    name: 'Crack Sparrow’s Own Withered Hat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16005.png',
  },
  {
    id: 8856,
    name: 'Ceinture Rasboulaire du Rasboul',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10115.png',
  },
  {
    id: 8858,
    name: 'Bottes Horchons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11112.png',
  },
  {
    id: 8859,
    name: 'Sceau Souverain du Roissingue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9138.png',
  },
  {
    id: 8860,
    name: 'Alliance de Corail',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9139.png',
  },
  {
    id: 8861,
    name: 'Sandales Circulaires du Kimbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11113.png',
  },
  {
    id: 8862,
    name: 'Ceinture Bitoufale de Prosper Youpla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10128.png',
  },
  {
    id: 8863,
    name: 'Zothulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1124.png',
  },
  {
    id: 8865,
    name: 'Anneau Skargo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9140.png',
  },
  {
    id: 8866,
    name: 'Puissante Cape Fulgurante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17145.png',
  },
  {
    id: 8867,
    name: 'Cape de la Meupette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17146.png',
  },
  {
    id: 8869,
    name: "Bottines en bois d'abrakleur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11114.png',
  },
  {
    id: 8870,
    name: 'Ceinture sombre en Abrakleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10129.png',
  },
  {
    id: 8871,
    name: 'Ceinture Claire en Abrakleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10130.png',
  },
  {
    id: 8872,
    name: 'Palmano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9141.png',
  },
  {
    id: 8873,
    name: 'Krustoture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10131.png',
  },
  {
    id: 8874,
    name: 'Ouassulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1125.png',
  },
  {
    id: 8876,
    name: "Voile d'encre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17147.png',
  },
  {
    id: 8877,
    name: 'Kralano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9142.png',
  },
  {
    id: 8879,
    name: 'Anneau Poli',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9143.png',
  },
  {
    id: 8880,
    name: 'Amufafah',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1126.png',
  },
  {
    id: 8881,
    name: 'Anneau Solo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9144.png',
  },
  {
    id: 8918,
    name: 'Casque amélioré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16025.png',
  },
  {
    id: 8919,
    name: 'Ailes en bois améliorées',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17022.png',
  },
  {
    id: 8989,
    name: 'Casque du Bitouf Aérien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16209.png',
  },
  {
    id: 8991,
    name: 'Annolamour',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9145.png',
  },
  {
    id: 9120,
    name: 'Chapeau de la Fin Patraque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16210.png',
  },
  {
    id: 9121,
    name: 'Cape de la Fin Patraque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17148.png',
  },
  {
    id: 9122,
    name: 'Blopanneau Griotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9149.png',
  },
  {
    id: 9123,
    name: 'Blopanneau Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9150.png',
  },
  {
    id: 9124,
    name: 'Blopanneau Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9151.png',
  },
  {
    id: 9125,
    name: 'Blopanneau Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9152.png',
  },
  {
    id: 9126,
    name: 'Blopanneau Griotte Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9153.png',
  },
  {
    id: 9127,
    name: 'Blopanneau Reinette Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9154.png',
  },
  {
    id: 9128,
    name: 'Blopanneau Coco Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9155.png',
  },
  {
    id: 9129,
    name: 'Blopanneau Indigo Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9156.png',
  },
  {
    id: 9130,
    name: 'Ougamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1127.png',
  },
  {
    id: 9131,
    name: 'Anneau Colerette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9146.png',
  },
  {
    id: 9132,
    name: 'Anneau Chevelu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9147.png',
  },
  {
    id: 9133,
    name: 'Alliance Boletée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9148.png',
  },
  {
    id: 9139,
    name: 'Bottines des sous-bois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11115.png',
  },
  {
    id: 9140,
    name: 'Chaussons Pignons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11116.png',
  },
  {
    id: 9141,
    name: 'Caprin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17154.png',
  },
  {
    id: 9142,
    name: 'Capignon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17150.png',
  },
  {
    id: 9143,
    name: 'String Tue-Mouche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10132.png',
  },
  {
    id: 9144,
    name: 'Ceinture Mycosine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10133.png',
  },
  {
    id: 9145,
    name: 'Tranche des Sous-bois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10134.png',
  },
  {
    id: 9146,
    name: 'Ougature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10135.png',
  },
  {
    id: 9147,
    name: 'Chapignon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16221.png',
  },
  {
    id: 9148,
    name: 'Blopanneau Multicolore Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9157.png',
  },
  {
    id: 9149,
    name: 'Amublop Griotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1128.png',
  },
  {
    id: 9150,
    name: 'Amublop Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1129.png',
  },
  {
    id: 9151,
    name: 'Amublop Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1130.png',
  },
  {
    id: 9152,
    name: 'Amublop Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1131.png',
  },
  {
    id: 9153,
    name: 'Amublop Griotte Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1132.png',
  },
  {
    id: 9154,
    name: 'Amublop Reinette Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1133.png',
  },
  {
    id: 9155,
    name: 'Amublop Coco Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1134.png',
  },
  {
    id: 9156,
    name: 'Amublop Indigo Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1135.png',
  },
  {
    id: 9157,
    name: 'Amublop Multicolore Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1136.png',
  },
  {
    id: 9158,
    name: 'Bloptes Griottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11117.png',
  },
  {
    id: 9159,
    name: 'Bloptes Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11118.png',
  },
  {
    id: 9160,
    name: 'Bloptes Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11119.png',
  },
  {
    id: 9161,
    name: 'Bloptes Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11120.png',
  },
  {
    id: 9162,
    name: 'Bloptes Griotte Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11121.png',
  },
  {
    id: 9163,
    name: 'Bloptes Reinette Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11122.png',
  },
  {
    id: 9164,
    name: 'Bloptes Coco Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11123.png',
  },
  {
    id: 9165,
    name: 'Bloptes Indigo Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11124.png',
  },
  {
    id: 9166,
    name: 'Bloptes Multicolores Royales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11125.png',
  },
  {
    id: 9167,
    name: 'Blopture Griotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10136.png',
  },
  {
    id: 9168,
    name: 'Blopture Reinette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10137.png',
  },
  {
    id: 9169,
    name: 'Blopture Coco',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10138.png',
  },
  {
    id: 9170,
    name: 'Blopture Indigo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10139.png',
  },
  {
    id: 9171,
    name: 'Blopture Griotte Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10140.png',
  },
  {
    id: 9172,
    name: 'Blopture Reinette Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10141.png',
  },
  {
    id: 9173,
    name: 'Blopture Coco Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10142.png',
  },
  {
    id: 9174,
    name: 'Blopture Indigo Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10143.png',
  },
  {
    id: 9175,
    name: 'Blopture Multicolore Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10144.png',
  },
  {
    id: 9177,
    name: 'Bracelet Ventré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9158.png',
  },
  {
    id: 9178,
    name: 'Anneau Bliteré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9159.png',
  },
  {
    id: 9179,
    name: 'Amulette Ripage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1137.png',
  },
  {
    id: 9180,
    name: 'Cape Erforée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17151.png',
  },
  {
    id: 9181,
    name: 'Casque Harnage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16212.png',
  },
  {
    id: 9182,
    name: 'Bottes Répané',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11126.png',
  },
  {
    id: 9183,
    name: 'Ceinture Toré',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10145.png',
  },
  {
    id: 9186,
    name: 'Ceinture de Flash Gorgone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10146.png',
  },
  {
    id: 9192,
    name: 'Beignature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10147.png',
  },
  {
    id: 9193,
    name: 'Tartamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1138.png',
  },
  {
    id: 9198,
    name: 'Anneau Paupayahn',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9160.png',
  },
  {
    id: 9199,
    name: 'Bottes Paupayahn',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11127.png',
  },
  {
    id: 9233,
    name: 'Cape Obvijevan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/113149.png',
  },
  {
    id: 9234,
    name: 'Chapeau Obvijevan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/113211.png',
  },
  {
    id: 9255,
    name: 'Amulette Obvijevan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/113139.png',
  },
  {
    id: 9256,
    name: 'Anneau Obvijevan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/113161.png',
  },
  {
    id: 9366,
    name: 'Tutu Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10148.png',
  },
  {
    id: 9394,
    name: 'Chapblopignon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16222.png',
  },
  {
    id: 9395,
    name: 'Blopronne Royale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16223.png',
  },
  {
    id: 9402,
    name: 'Pantoufrelons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11128.png',
  },
  {
    id: 9408,
    name: 'Jambanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9162.png',
  },
  {
    id: 9409,
    name: 'Ceinture Lardière',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10149.png',
  },
  {
    id: 9412,
    name: "Ceinture du bois de l'est",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10150.png',
  },
  {
    id: 9413,
    name: "Bottes du bois de l'est",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11129.png',
  },
  {
    id: 9416,
    name: 'Anneau Zest',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9163.png',
  },
  {
    id: 9452,
    name: 'Bague Cristalline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9164.png',
  },
  {
    id: 9453,
    name: 'Ceinture Cristalline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10151.png',
  },
  {
    id: 9454,
    name: 'Pompamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1140.png',
  },
  {
    id: 9455,
    name: 'Pompanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9165.png',
  },
  {
    id: 9461,
    name: 'Le Kim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16230.png',
  },
  {
    id: 9463,
    name: 'Amunite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1141.png',
  },
  {
    id: 9464,
    name: 'Kralamansion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1142.png',
  },
  {
    id: 9471,
    name: 'Chapeau de la Sain Ballotin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16231.png',
  },
  {
    id: 9542,
    name: 'Souliers laqués du Parrain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11130.png',
  },
  {
    id: 9543,
    name: 'Grosse Bagouze du Parrain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9166.png',
  },
  {
    id: 9549,
    name: 'Caleçon à bretelles du Parrain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10152.png',
  },
  {
    id: 9575,
    name: 'Ceinture du Black Wab',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10153.png',
  },
  {
    id: 9576,
    name: 'Bottines du Black Wab',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11131.png',
  },
  {
    id: 9655,
    name: 'Sandales Papayou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11132.png',
  },
  {
    id: 9656,
    name: 'Les Sleumpettes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11133.png',
  },
  {
    id: 9658,
    name: 'Amulette Papayou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1144.png',
  },
  {
    id: 9659,
    name: 'Collier Sleump',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1143.png',
  },
  {
    id: 9662,
    name: 'Anneau de Slait',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9167.png',
  },
  {
    id: 9667,
    name: 'Bottes de Slait',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11134.png',
  },
  {
    id: 9921,
    name: 'Bracelet du Tétounik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9168.png',
  },
  {
    id: 9923,
    name: 'Chaussures du Tétounik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11135.png',
  },
  {
    id: 9925,
    name: 'Fulgu au poing',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9169.png',
  },
  {
    id: 9927,
    name: 'Golbottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11136.png',
  },
  {
    id: 9928,
    name: 'Bottes Siks Won Naïne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11137.png',
  },
  {
    id: 9929,
    name: 'Ceinture Siks Won Naïne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10155.png',
  },
  {
    id: 9942,
    name: 'Anneau de la mort',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9170.png',
  },
  {
    id: 9943,
    name: 'Les Chaplures',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11138.png',
  },
  {
    id: 9944,
    name: 'La Chaplivate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1145.png',
  },
  {
    id: 10054,
    name: 'Anneau du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9171.png',
  },
  {
    id: 10055,
    name: 'Amulette du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1146.png',
  },
  {
    id: 10056,
    name: 'Ceinture du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10156.png',
  },
  {
    id: 10058,
    name: 'Cape du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17168.png',
  },
  {
    id: 10061,
    name: 'Bottes du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11139.png',
  },
  {
    id: 10102,
    name: 'Masque du Vampyre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16244.png',
  },
  {
    id: 10155,
    name: 'Yugolette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1147.png',
  },
  {
    id: 10156,
    name: 'Yugoufle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11140.png',
  },
  {
    id: 10157,
    name: 'Yugure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10157.png',
  },
  {
    id: 10158,
    name: 'Bouclier trophée du Dark Vlad',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82043.png',
  },
  {
    id: 10159,
    name: 'Bouclier trophée du Moon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82044.png',
  },
  {
    id: 10160,
    name: 'Bouclier trophée du Chêne Mou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82045.png',
  },
  {
    id: 10161,
    name: 'Bouclier trophée du Dragon Cochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82046.png',
  },
  {
    id: 10163,
    name: 'Bouclier trophée du Kimbo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82048.png',
  },
  {
    id: 10164,
    name: 'Bouclier trophée du Wa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82049.png',
  },
  {
    id: 10165,
    name: 'Bouclier trophée du Koulosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82050.png',
  },
  {
    id: 10166,
    name: 'Bouclier trophée du Sphincter Cell',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82051.png',
  },
  {
    id: 10167,
    name: 'Bouclier trophée du Bworker',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82052.png',
  },
  {
    id: 10168,
    name: 'Chispottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11141.png',
  },
  {
    id: 10171,
    name: 'Mitaines de Chisp',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9173.png',
  },
  {
    id: 10172,
    name: 'Collertue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1148.png',
  },
  {
    id: 10173,
    name: 'Libottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11142.png',
  },
  {
    id: 10180,
    name: "L'Esteban",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1149.png',
  },
  {
    id: 10181,
    name: 'Anneau solaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9174.png',
  },
  {
    id: 10186,
    name: 'Collier de Noké',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1150.png',
  },
  {
    id: 10189,
    name: 'Oxano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9175.png',
  },
  {
    id: 10190,
    name: 'Bottines de la Denrée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11143.png',
  },
  {
    id: 10191,
    name: "L'oxolature",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10158.png',
  },
  {
    id: 10438,
    name: 'Les Maidartes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11169.png',
  },
  {
    id: 10557,
    name: 'Gantelet du Real Boitar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9176.png',
  },
  {
    id: 10558,
    name: 'Gantelet des Bouftons Rouges',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9177.png',
  },
  {
    id: 10559,
    name: 'Ceinture de Tolot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10159.png',
  },
  {
    id: 10560,
    name: 'Ceinture de Mounu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10160.png',
  },
  {
    id: 10561,
    name: 'Bottes du Real Boitar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11144.png',
  },
  {
    id: 10562,
    name: 'Bottes des Bouftons Rouges',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11145.png',
  },
  {
    id: 10623,
    name: 'Amulette de Grüt',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1153.png',
  },
  {
    id: 10624,
    name: 'Ceinture de Grüt',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10163.png',
  },
  {
    id: 10625,
    name: 'Bottes de Grüt',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11150.png',
  },
  {
    id: 10627,
    name: 'Anneau de Kocksis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9179.png',
  },
  {
    id: 10628,
    name: 'Bottes de Kocksis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11149.png',
  },
  {
    id: 10629,
    name: 'Ceinture de Kocksis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10164.png',
  },
  {
    id: 10631,
    name: 'Amulette de Gobeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1152.png',
  },
  {
    id: 10632,
    name: 'Ceinture de Gobeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10165.png',
  },
  {
    id: 10633,
    name: 'Anneau de Gobeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9180.png',
  },
  {
    id: 10635,
    name: 'Amulette de Laikteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1151.png',
  },
  {
    id: 10636,
    name: 'Anneau de Laikteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9178.png',
  },
  {
    id: 10637,
    name: 'Bottes de Laikteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11148.png',
  },
  {
    id: 10639,
    name: 'Amulette de Rekto Topi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1154.png',
  },
  {
    id: 10640,
    name: 'Ceinture de Rekto Topi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10229.png',
  },
  {
    id: 10641,
    name: 'Bottes de Rekto Topi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11147.png',
  },
  {
    id: 10643,
    name: 'Anneau de Grizou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9181.png',
  },
  {
    id: 10644,
    name: 'Bottes de Grizou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11146.png',
  },
  {
    id: 10645,
    name: 'Ceinture de Grizou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10162.png',
  },
  {
    id: 10685,
    name: 'Casque du Roks Or',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16254.png',
  },
  {
    id: 10686,
    name: 'Cape du Roks Or',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17171.png',
  },
  {
    id: 10687,
    name: 'Anneau du Roks Or',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9182.png',
  },
  {
    id: 10688,
    name: 'Ceinture du Roks Or',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10166.png',
  },
  {
    id: 10784,
    name: "Amulette de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1163.png',
  },
  {
    id: 10785,
    name: "Anneau de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9190.png',
  },
  {
    id: 10794,
    name: "Bottes de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11155.png',
  },
  {
    id: 10798,
    name: "Bouclier de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82055.png',
  },
  {
    id: 10799,
    name: "Ceinture de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10161.png',
  },
  {
    id: 10800,
    name: "Cape de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17201.png',
  },
  {
    id: 10801,
    name: "Chapeau de l'intrépide",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16264.png',
  },
  {
    id: 10828,
    name: 'Casque de boufbowl',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16255.png',
  },
  {
    id: 10830,
    name: 'Banana Cape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17172.png',
  },
  {
    id: 10834,
    name: 'Coiffe Wouaf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16256.png',
  },
  {
    id: 10836,
    name: 'Boufbamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1158.png',
  },
  {
    id: 10846,
    name: 'Phéro-Cape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17173.png',
  },
  {
    id: 10847,
    name: "Bottes d'Hulkrap",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11151.png',
  },
  {
    id: 10848,
    name: 'Bottes de Klüme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11152.png',
  },
  {
    id: 10849,
    name: "Ceinture d'Hulkrap",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10169.png',
  },
  {
    id: 10850,
    name: 'Ceinture de Klüme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10167.png',
  },
  {
    id: 10851,
    name: 'Ceinture de Kloug',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10168.png',
  },
  {
    id: 10852,
    name: "Amulette d'Hulkrap",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1156.png',
  },
  {
    id: 10853,
    name: 'Amulette de Kloug',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1155.png',
  },
  {
    id: 10854,
    name: 'Anneau de Klüme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9183.png',
  },
  {
    id: 10855,
    name: 'Anneau de Kloug',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9184.png',
  },
  {
    id: 10904,
    name: 'Grozillamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1157.png',
  },
  {
    id: 10907,
    name: 'Dokille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23017.png',
  },
  {
    id: 10955,
    name: 'Anneau du Corbeau Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9188.png',
  },
  {
    id: 10956,
    name: 'Bottes du Corbeau Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11158.png',
  },
  {
    id: 10963,
    name: 'Bottes de Rapine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11156.png',
  },
  {
    id: 10964,
    name: 'Ceinture de Rapine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10172.png',
  },
  {
    id: 10965,
    name: 'Amulette de Rapine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1160.png',
  },
  {
    id: 10971,
    name: 'Sac ripant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81025.png',
  },
  {
    id: 10976,
    name: 'Anneau de Phong Huss',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9185.png',
  },
  {
    id: 10977,
    name: 'Ceinture de Phong Huss',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10170.png',
  },
  {
    id: 10978,
    name: 'Bottes de Phong Huss',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11153.png',
  },
  {
    id: 10980,
    name: "Amulette d'Hectaupe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1159.png',
  },
  {
    id: 10981,
    name: "Anneau d'Hectaupe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9186.png',
  },
  {
    id: 10982,
    name: "Ceinture d'Hectaupe",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10171.png',
  },
  {
    id: 10987,
    name: 'Givrature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10173.png',
  },
  {
    id: 10990,
    name: 'Givrabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11159.png',
  },
  {
    id: 11042,
    name: 'Cordon Père au gnon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10175.png',
  },
  {
    id: 11051,
    name: 'Clémentamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1161.png',
  },
  {
    id: 11052,
    name: 'Clémentobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11161.png',
  },
  {
    id: 11057,
    name: 'Ceinture Pomdeupin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10174.png',
  },
  {
    id: 11058,
    name: 'Anneau Pomdeupin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9189.png',
  },
  {
    id: 11080,
    name: 'Bottes de Lonne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11160.png',
  },
  {
    id: 11082,
    name: 'Bottes de Boufbowl',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11157.png',
  },
  {
    id: 11083,
    name: 'Bague de Boufbowl',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9187.png',
  },
  {
    id: 11085,
    name: 'Ceinture de Gadjète',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10182.png',
  },
  {
    id: 11087,
    name: 'Anneau de Gadjète',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9202.png',
  },
  {
    id: 11091,
    name: 'Bottes de Grilliane',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11164.png',
  },
  {
    id: 11092,
    name: 'Amulette de Grilliane',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1164.png',
  },
  {
    id: 11191,
    name: 'Bottes du Nettoyeur de donjon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11162.png',
  },
  {
    id: 11343,
    name: 'Bottes de Rapiat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11174.png',
  },
  {
    id: 11344,
    name: 'Ceinture de Rapiat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10184.png',
  },
  {
    id: 11345,
    name: 'Amulette de Rapiat',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1173.png',
  },
  {
    id: 11346,
    name: "Anneau d'Ougicle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9204.png',
  },
  {
    id: 11347,
    name: "Ceinture d'Ougicle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10186.png',
  },
  {
    id: 11348,
    name: "Amulette d'Ougicle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1175.png',
  },
  {
    id: 11350,
    name: 'Anneau de Karotz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9203.png',
  },
  {
    id: 11351,
    name: 'Amulette de Karotz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1174.png',
  },
  {
    id: 11352,
    name: 'Bottes de Karotz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11176.png',
  },
  {
    id: 11354,
    name: 'Anneau de Grouillot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9201.png',
  },
  {
    id: 11355,
    name: 'Bottes de Grouillot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11175.png',
  },
  {
    id: 11356,
    name: 'Ceinture de Grouillot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10185.png',
  },
  {
    id: 11358,
    name: 'Bottes de Kubitus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11173.png',
  },
  {
    id: 11359,
    name: 'Ceinture de Kubitus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10183.png',
  },
  {
    id: 11360,
    name: 'Amulette de Kubitus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1172.png',
  },
  {
    id: 11362,
    name: 'Anneau de Piggy Paupe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9205.png',
  },
  {
    id: 11363,
    name: 'Ceinture de Piggy Paupe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10187.png',
  },
  {
    id: 11364,
    name: 'Amulette de Piggy Paupe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1176.png',
  },
  {
    id: 11374,
    name: 'Amupapier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1177.png',
  },
  {
    id: 11375,
    name: 'Slipapier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10188.png',
  },
  {
    id: 11378,
    name: 'Plumodales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11188.png',
  },
  {
    id: 11379,
    name: 'Plumamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1191.png',
  },
  {
    id: 11384,
    name: 'Anoppinz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9230.png',
  },
  {
    id: 11386,
    name: 'Bottoppinz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11194.png',
  },
  {
    id: 11395,
    name: 'Amusonnier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1200.png',
  },
  {
    id: 11396,
    name: 'Ceintusonnier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10209.png',
  },
  {
    id: 11399,
    name: 'Anauffe-souris',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9193.png',
  },
  {
    id: 11400,
    name: 'Bottauffe-souris',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11166.png',
  },
  {
    id: 11416,
    name: 'Bottinokio',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11195.png',
  },
  {
    id: 11417,
    name: 'Anokio',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9231.png',
  },
  {
    id: 11419,
    name: 'Bottes de Kabroule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11163.png',
  },
  {
    id: 11468,
    name: 'Frimamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1165.png',
  },
  {
    id: 11469,
    name: 'Frimanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9192.png',
  },
  {
    id: 11470,
    name: 'Grésilanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9191.png',
  },
  {
    id: 11471,
    name: 'Grésilobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11165.png',
  },
  {
    id: 11472,
    name: 'Grésilocape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17203.png',
  },
  {
    id: 11473,
    name: 'Frimature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10176.png',
  },
  {
    id: 11474,
    name: 'Frimacoiffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16268.png',
  },
  {
    id: 11563,
    name: 'Amulette Ementaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1167.png',
  },
  {
    id: 11571,
    name: 'Coiffe du Royalmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16271.png',
  },
  {
    id: 11572,
    name: 'Couronne du Mansot Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16275.png',
  },
  {
    id: 11573,
    name: 'Chapeau de Ben le Ripate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16272.png',
  },
  {
    id: 11574,
    name: "Casque de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16281.png',
  },
  {
    id: 11575,
    name: 'Amulette du Royalmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1166.png',
  },
  {
    id: 11576,
    name: "Amulette de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1169.png',
  },
  {
    id: 11577,
    name: 'Anneau du Mansot Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9194.png',
  },
  {
    id: 11578,
    name: 'Crochet de Ben le Ripate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9195.png',
  },
  {
    id: 11579,
    name: "Bague de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9197.png',
  },
  {
    id: 11580,
    name: 'Cape du Mansot Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17205.png',
  },
  {
    id: 11581,
    name: "Cape de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17207.png',
  },
  {
    id: 11582,
    name: 'Bottes du Royalmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11167.png',
  },
  {
    id: 11583,
    name: "Bottes de l'Obsidiantre",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11168.png',
  },
  {
    id: 11584,
    name: 'Ceinture du Royalmouth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10177.png',
  },
  {
    id: 11585,
    name: 'Ceinture de Ben le Ripate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10178.png',
  },
  {
    id: 11598,
    name: "Casque de l'Écumouth",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16273.png',
  },
  {
    id: 11599,
    name: 'Coiffe du Fricochère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16274.png',
  },
  {
    id: 11600,
    name: 'Fantômasque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16279.png',
  },
  {
    id: 11601,
    name: 'Masque du Harpirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16278.png',
  },
  {
    id: 11602,
    name: 'Chapeau Pourih',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16277.png',
  },
  {
    id: 11604,
    name: 'Chapeau Stapokaliptik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16280.png',
  },
  {
    id: 11605,
    name: 'Cape Ricieuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17206.png',
  },
  {
    id: 11606,
    name: 'Cape Tivante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17208.png',
  },
  {
    id: 11607,
    name: 'Collier Yé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1170.png',
  },
  {
    id: 11608,
    name: 'Talisman Choh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1168.png',
  },
  {
    id: 11609,
    name: 'Talisman Doline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1171.png',
  },
  {
    id: 11611,
    name: 'Slip Hie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10180.png',
  },
  {
    id: 11612,
    name: 'Slip Noze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10181.png',
  },
  {
    id: 11618,
    name: 'Sandales Gorithme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11170.png',
  },
  {
    id: 11619,
    name: 'Sandales Binosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11171.png',
  },
  {
    id: 11620,
    name: 'Anneau Frage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9196.png',
  },
  {
    id: 11621,
    name: 'Anneau Made',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9198.png',
  },
  {
    id: 11622,
    name: 'Anneau Nobstant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9200.png',
  },
  {
    id: 11623,
    name: 'Anneau Tabéné',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9199.png',
  },
  {
    id: 11667,
    name: 'Bottes Hoktone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11172.png',
  },
  {
    id: 11686,
    name: 'Pagniglou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10179.png',
  },
  {
    id: 11706,
    name: 'Chapeau Tiche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16276.png',
  },
  {
    id: 11707,
    name: 'Coiffe de Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16284.png',
  },
  {
    id: 11708,
    name: 'Cape de Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17211.png',
  },
  {
    id: 11709,
    name: 'Ceinture du Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10190.png',
  },
  {
    id: 11710,
    name: 'Bottes du Tengu Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11177.png',
  },
  {
    id: 11712,
    name: 'Cape du Korriandre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17213.png',
  },
  {
    id: 11713,
    name: 'Amulette du Korriandre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1180.png',
  },
  {
    id: 11714,
    name: 'Anneau du Korriandre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9207.png',
  },
  {
    id: 11715,
    name: 'Coiffe de Kolosso',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16292.png',
  },
  {
    id: 11716,
    name: 'Ceinture de Kolosso',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10195.png',
  },
  {
    id: 11717,
    name: 'Anneau de Kolosso',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9212.png',
  },
  {
    id: 11718,
    name: 'Masque du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16289.png',
  },
  {
    id: 11719,
    name: 'Cape du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17214.png',
  },
  {
    id: 11720,
    name: 'Amulette du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1181.png',
  },
  {
    id: 11721,
    name: 'Ceinture du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10191.png',
  },
  {
    id: 11722,
    name: 'Bottes du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11180.png',
  },
  {
    id: 11723,
    name: 'Chapeau Lichinelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16291.png',
  },
  {
    id: 11724,
    name: 'Chapeau Lisson',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16297.png',
  },
  {
    id: 11725,
    name: 'Chapeau Lochon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16290.png',
  },
  {
    id: 11726,
    name: 'Cape Surde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16298.png',
  },
  {
    id: 11727,
    name: 'Cape Peupret',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17215.png',
  },
  {
    id: 11728,
    name: 'Cape Hiculteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17217.png',
  },
  {
    id: 11729,
    name: 'Amulette Cætera',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1182.png',
  },
  {
    id: 11730,
    name: 'Amulette Héroclite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1183.png',
  },
  {
    id: 11731,
    name: 'Amulette Hendart',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1184.png',
  },
  {
    id: 11732,
    name: 'Pagne du Soryo Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10192.png',
  },
  {
    id: 11734,
    name: 'Ceinture Hanium',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10193.png',
  },
  {
    id: 11735,
    name: 'Alliance Hestrale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9209.png',
  },
  {
    id: 11736,
    name: 'Alliance Sorcelée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9210.png',
  },
  {
    id: 11737,
    name: 'Bracelet Ming',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9208.png',
  },
  {
    id: 11738,
    name: 'Anneau Aimgéroks',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9211.png',
  },
  {
    id: 11739,
    name: 'Bottines Hertie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11182.png',
  },
  {
    id: 11740,
    name: 'Bottines Hodore',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11183.png',
  },
  {
    id: 11741,
    name: 'Sandales Pinistes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11181.png',
  },
  {
    id: 11792,
    name: 'Amulette Ementaire Deluxe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1179.png',
  },
  {
    id: 11794,
    name: 'Racine Hueuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1185.png',
  },
  {
    id: 11804,
    name: 'Bleu Tofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16287.png',
  },
  {
    id: 11808,
    name: 'Collier de perles des îles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1178.png',
  },
  {
    id: 11809,
    name: 'Stasili',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82058.png',
  },
  {
    id: 11810,
    name: 'La Ruche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81061.png',
  },
  {
    id: 11811,
    name: 'Bottes en peau de Prespic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11178.png',
  },
  {
    id: 11812,
    name: 'Elianneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9206.png',
  },
  {
    id: 11813,
    name: 'Platycap',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16286.png',
  },
  {
    id: 11816,
    name: 'Ceinture de Percimol',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10189.png',
  },
  {
    id: 11850,
    name: 'Slip Iholo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10196.png',
  },
  {
    id: 11855,
    name: 'Bottes de Stroud',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11179.png',
  },
  {
    id: 11856,
    name: 'Ceinture de Stroud',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10194.png',
  },
  {
    id: 11976,
    name: 'Amulette du Boostache',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1186.png',
  },
  {
    id: 11977,
    name: 'Alliance du Kanniboul Ebil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9213.png',
  },
  {
    id: 11978,
    name: 'Anneau du Boostache',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9214.png',
  },
  {
    id: 11979,
    name: 'Bottes du Kanniboul Ebil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11184.png',
  },
  {
    id: 11980,
    name: 'Cape du Boostache',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17218.png',
  },
  {
    id: 11981,
    name: 'Ceinture du Boostache',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10197.png',
  },
  {
    id: 11982,
    name: 'Masque du Kanniboul Ebil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16299.png',
  },
  {
    id: 12019,
    name: 'Kwakwanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9215.png',
  },
  {
    id: 12020,
    name: 'Kwakwalliance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9216.png',
  },
  {
    id: 12021,
    name: 'Kwakwaffe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16300.png',
  },
  {
    id: 12023,
    name: 'Ceinture de Traçon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10200.png',
  },
  {
    id: 12024,
    name: 'Bottes de Traçon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11186.png',
  },
  {
    id: 12025,
    name: 'Amulette de Traçon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1188.png',
  },
  {
    id: 12027,
    name: 'Anneau de Mirh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9217.png',
  },
  {
    id: 12028,
    name: 'Ceinture de Mirh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10201.png',
  },
  {
    id: 12029,
    name: 'Amulette de Mirh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1189.png',
  },
  {
    id: 12031,
    name: 'Getas de Logram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11187.png',
  },
  {
    id: 12032,
    name: 'Amulette de Logram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1190.png',
  },
  {
    id: 12033,
    name: 'Anneau de Logram',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9218.png',
  },
  {
    id: 12035,
    name: 'Slip de Kalkanéus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10206.png',
  },
  {
    id: 12036,
    name: 'Botte de Kalkanéus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11196.png',
  },
  {
    id: 12037,
    name: 'Amulette de Kalkanéus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1197.png',
  },
  {
    id: 12039,
    name: "Alliance d'Hichète",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9232.png',
  },
  {
    id: 12040,
    name: "Ceinture d'Hichète",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10207.png',
  },
  {
    id: 12041,
    name: "Amulette d'Hichète",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1198.png',
  },
  {
    id: 12043,
    name: "Bottes d'Haku",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11197.png',
  },
  {
    id: 12044,
    name: "Amulette d'Haku",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1199.png',
  },
  {
    id: 12045,
    name: "Anneau d'Haku",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9233.png',
  },
  {
    id: 12068,
    name: 'Ceinture Bine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10198.png',
  },
  {
    id: 12069,
    name: 'Amulette de Nelween',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1187.png',
  },
  {
    id: 12070,
    name: 'Cape de Nelween',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17219.png',
  },
  {
    id: 12071,
    name: 'Bottes de Nelween',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11185.png',
  },
  {
    id: 12072,
    name: 'Ceinture de Nelween',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10199.png',
  },
  {
    id: 12085,
    name: 'Anneau Moutheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9219.png',
  },
  {
    id: 12086,
    name: 'Bague Moutheuze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9220.png',
  },
  {
    id: 12087,
    name: 'Cape Mouthante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17224.png',
  },
  {
    id: 12089,
    name: 'Amulette de Frigostine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1192.png',
  },
  {
    id: 12090,
    name: 'Anneau de Frigostine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9222.png',
  },
  {
    id: 12091,
    name: 'Ceinture de Frigostine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10202.png',
  },
  {
    id: 12092,
    name: 'Bottes de Frigostine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11189.png',
  },
  {
    id: 12093,
    name: 'Cape de Cantile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17221.png',
  },
  {
    id: 12094,
    name: 'Anneau de Cantile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9221.png',
  },
  {
    id: 12095,
    name: 'Amulette de Cantile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1193.png',
  },
  {
    id: 12096,
    name: 'Bottes de Cantile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11190.png',
  },
  {
    id: 12097,
    name: 'Anneau des Prophètes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9227.png',
  },
  {
    id: 12098,
    name: 'Ceinture des Prophètes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10203.png',
  },
  {
    id: 12100,
    name: 'Anneau de Guten Tak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9223.png',
  },
  {
    id: 12101,
    name: 'Alliance de Guten Tak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9224.png',
  },
  {
    id: 12102,
    name: 'Amulette de Guten Tak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1194.png',
  },
  {
    id: 12104,
    name: 'Bague de Boréale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9228.png',
  },
  {
    id: 12105,
    name: 'Ceinture de Boréale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10204.png',
  },
  {
    id: 12106,
    name: 'Coiffe de Boréale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16304.png',
  },
  {
    id: 12107,
    name: 'Bottes de Boréale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11192.png',
  },
  {
    id: 12108,
    name: 'Cape du Professeur Xa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17222.png',
  },
  {
    id: 12109,
    name: 'Anneau du Professeur Xa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9226.png',
  },
  {
    id: 12110,
    name: 'Bottes du Professeur Xa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11191.png',
  },
  {
    id: 12111,
    name: 'Amulette du Professeur Xa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1195.png',
  },
  {
    id: 12113,
    name: 'Alliance Gloursonne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9229.png',
  },
  {
    id: 12114,
    name: 'Bague Gloursonne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9225.png',
  },
  {
    id: 12116,
    name: 'Coiffe du Glourséleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16306.png',
  },
  {
    id: 12117,
    name: 'Cape de la Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17223.png',
  },
  {
    id: 12118,
    name: 'Coiffe de la Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16305.png',
  },
  {
    id: 12119,
    name: 'Bottes de la Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11193.png',
  },
  {
    id: 12120,
    name: 'Anneau de la Fuji Givrefoux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10205.png',
  },
  {
    id: 12237,
    name: 'Amourlette Hernel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1196.png',
  },
  {
    id: 12238,
    name: 'Amourlette Hernelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1196.png',
  },
  {
    id: 12273,
    name: 'Ceinture de Glourdorak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10208.png',
  },
  {
    id: 12370,
    name: 'Amulette du Gorgouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1201.png',
  },
  {
    id: 12371,
    name: 'Cape du Gorgouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17230.png',
  },
  {
    id: 12372,
    name: 'Gantelet du Gorgouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9236.png',
  },
  {
    id: 12373,
    name: 'Bottes du Gorgouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11200.png',
  },
  {
    id: 12377,
    name: 'Chapilozité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16313.png',
  },
  {
    id: 12378,
    name: 'Capilozité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17231.png',
  },
  {
    id: 12379,
    name: 'Bracilozité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9237.png',
  },
  {
    id: 12380,
    name: 'Bottilozité',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11201.png',
  },
  {
    id: 12385,
    name: 'Coiffe Ainte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16311.png',
  },
  {
    id: 12386,
    name: 'Masque Arpone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16312.png',
  },
  {
    id: 12387,
    name: 'Cape Endaison',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17228.png',
  },
  {
    id: 12388,
    name: 'Cape Aircussion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17229.png',
  },
  {
    id: 12389,
    name: 'Bottes Opsy',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11198.png',
  },
  {
    id: 12390,
    name: 'Sabots Taj',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11199.png',
  },
  {
    id: 12391,
    name: 'Sangle Hyssérine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10210.png',
  },
  {
    id: 12392,
    name: 'Corde Ure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10211.png',
  },
  {
    id: 12393,
    name: 'Mitaine Aibre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9234.png',
  },
  {
    id: 12394,
    name: 'Bracelet Jande',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9235.png',
  },
  {
    id: 12407,
    name: 'Amulette du Krokilleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1208.png',
  },
  {
    id: 12408,
    name: 'Amulette de Grozilla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1203.png',
  },
  {
    id: 12409,
    name: 'Anneau du Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9239.png',
  },
  {
    id: 12410,
    name: 'Bracelet du Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9238.png',
  },
  {
    id: 12411,
    name: 'Bottes du Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11202.png',
  },
  {
    id: 12412,
    name: 'Bottes de Grozilla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11204.png',
  },
  {
    id: 12413,
    name: 'Cape du Krokilleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17234.png',
  },
  {
    id: 12414,
    name: 'Sac de Voyage du Parfait Petit Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81062.png',
  },
  {
    id: 12415,
    name: 'Ceinture du Krokilleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10214.png',
  },
  {
    id: 12416,
    name: 'Ceinture de Grozilla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10213.png',
  },
  {
    id: 12417,
    name: 'Chapeau du Vulkain',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16314.png',
  },
  {
    id: 12418,
    name: 'Coiffe de Grozilla',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16317.png',
  },
  {
    id: 12421,
    name: 'Amulette Tétriste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1202.png',
  },
  {
    id: 12423,
    name: 'Anneau Tétriste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9240.png',
  },
  {
    id: 12424,
    name: 'Chapeau Parabiote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102200.png',
  },
  {
    id: 12425,
    name: 'Cape Parabiote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102160.png',
  },
  {
    id: 12426,
    name: 'Ceinture Parabiote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102240.png',
  },
  {
    id: 12427,
    name: 'Bottes Parabiotes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102280.png',
  },
  {
    id: 12463,
    name: 'Slip Vert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10212.png',
  },
  {
    id: 12464,
    name: 'Borate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16315.png',
  },
  {
    id: 12465,
    name: 'Souliers Vernis Bruns',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11203.png',
  },
  {
    id: 12466,
    name: 'Boracelet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9241.png',
  },
  {
    id: 12502,
    name: 'Ceinture de Pandalida',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10215.png',
  },
  {
    id: 12528,
    name: 'Amulette de Mister Amakna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1205.png',
  },
  {
    id: 12529,
    name: 'Amulette de Miss Amakna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1204.png',
  },
  {
    id: 12530,
    name: 'Amulette de Mister Monde des Douze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1207.png',
  },
  {
    id: 12531,
    name: 'Amulette de Miss Monde des Douze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1206.png',
  },
  {
    id: 12598,
    name: "Anneau de l'Envahisseur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9244.png',
  },
  {
    id: 12599,
    name: "Ceinture de l'Envahisseur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10218.png',
  },
  {
    id: 12622,
    name: 'Tacleur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151079.png',
  },
  {
    id: 12623,
    name: 'Tacleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151080.png',
  },
  {
    id: 12624,
    name: 'Tacleur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151081.png',
  },
  {
    id: 12625,
    name: 'Fuyard mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151034.png',
  },
  {
    id: 12626,
    name: 'Fuyard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151035.png',
  },
  {
    id: 12627,
    name: 'Fuyard majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151036.png',
  },
  {
    id: 12628,
    name: 'Ralentisseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151067.png',
  },
  {
    id: 12629,
    name: 'Ralentisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151068.png',
  },
  {
    id: 12630,
    name: 'Ralentisseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151069.png',
  },
  {
    id: 12631,
    name: 'Engourdisseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151022.png',
  },
  {
    id: 12632,
    name: 'Engourdisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151023.png',
  },
  {
    id: 12633,
    name: 'Engourdisseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151024.png',
  },
  {
    id: 12634,
    name: 'Fugitif mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151028.png',
  },
  {
    id: 12635,
    name: 'Fugitif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151029.png',
  },
  {
    id: 12636,
    name: 'Fugitif majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151030.png',
  },
  {
    id: 12637,
    name: 'Insaisissable mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151040.png',
  },
  {
    id: 12638,
    name: 'Insaisissable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151041.png',
  },
  {
    id: 12639,
    name: 'Insaisissable majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151042.png',
  },
  {
    id: 12640,
    name: 'Pousseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151025.png',
  },
  {
    id: 12641,
    name: 'Pousseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151026.png',
  },
  {
    id: 12642,
    name: 'Pousseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151027.png',
  },
  {
    id: 12643,
    name: 'Adamantin mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151004.png',
  },
  {
    id: 12644,
    name: 'Adamantin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151005.png',
  },
  {
    id: 12645,
    name: 'Adamantin majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151006.png',
  },
  {
    id: 12646,
    name: 'Rempart mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151064.png',
  },
  {
    id: 12647,
    name: 'Rempart',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151065.png',
  },
  {
    id: 12648,
    name: 'Rempart majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151066.png',
  },
  {
    id: 12649,
    name: 'Cuirassé Air mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151007.png',
  },
  {
    id: 12650,
    name: 'Cuirassé Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151008.png',
  },
  {
    id: 12651,
    name: 'Cuirassé Air majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151009.png',
  },
  {
    id: 12652,
    name: 'Cuirassé Eau mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151010.png',
  },
  {
    id: 12653,
    name: 'Cuirassé Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151011.png',
  },
  {
    id: 12654,
    name: 'Cuirassé Eau majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151012.png',
  },
  {
    id: 12657,
    name: 'Snarmulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1209.png',
  },
  {
    id: 12658,
    name: 'Cosmobracelet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9242.png',
  },
  {
    id: 12659,
    name: 'Cuirassé Feu mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151013.png',
  },
  {
    id: 12660,
    name: "Bouclier d'Incarnam",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82063.png',
  },
  {
    id: 12661,
    name: 'Sac à Main',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9243.png',
  },
  {
    id: 12671,
    name: 'Ceinture de Danioule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10217.png',
  },
  {
    id: 12674,
    name: 'Coiffe de Daïgoro',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16320.png',
  },
  {
    id: 12675,
    name: 'Collier Rouge de Daïgoro',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1210.png',
  },
  {
    id: 12676,
    name: 'Pagne de Daïgoro',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10216.png',
  },
  {
    id: 12678,
    name: 'Cuirassé Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151014.png',
  },
  {
    id: 12679,
    name: 'Cuirassé Feu majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151015.png',
  },
  {
    id: 12680,
    name: 'Cuirassé Terre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151019.png',
  },
  {
    id: 12681,
    name: 'Cuirassé Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151020.png',
  },
  {
    id: 12682,
    name: 'Cuirassé Terre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151021.png',
  },
  {
    id: 12683,
    name: 'Cuirassé Neutre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151016.png',
  },
  {
    id: 12684,
    name: 'Cuirassé Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151017.png',
  },
  {
    id: 12685,
    name: 'Cuirassé Neutre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151018.png',
  },
  {
    id: 12686,
    name: 'Ravageur Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151050.png',
  },
  {
    id: 12687,
    name: 'Ravageur Air majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151051.png',
  },
  {
    id: 12688,
    name: 'Ravageur Air mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151049.png',
  },
  {
    id: 12689,
    name: 'Ravageur Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151053.png',
  },
  {
    id: 12690,
    name: 'Ravageur Eau majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151054.png',
  },
  {
    id: 12691,
    name: 'Ravageur Eau mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151052.png',
  },
  {
    id: 12692,
    name: 'Ravageur Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151056.png',
  },
  {
    id: 12693,
    name: 'Ravageur Feu majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151057.png',
  },
  {
    id: 12694,
    name: 'Ravageur Feu mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151055.png',
  },
  {
    id: 12695,
    name: 'Ravageur Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151059.png',
  },
  {
    id: 12696,
    name: 'Ravageur Neutre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151058.png',
  },
  {
    id: 12697,
    name: 'Ravageur Neutre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151060.png',
  },
  {
    id: 12698,
    name: 'Ravageur Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151062.png',
  },
  {
    id: 12701,
    name: 'Initiateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151038.png',
  },
  {
    id: 12702,
    name: 'Initiateur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151037.png',
  },
  {
    id: 12703,
    name: 'Initiateur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151039.png',
  },
  {
    id: 12704,
    name: 'Porteur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151046.png',
  },
  {
    id: 12705,
    name: 'Porteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151047.png',
  },
  {
    id: 12706,
    name: 'Porteur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151048.png',
  },
  {
    id: 12707,
    name: 'Soigneur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151073.png',
  },
  {
    id: 12708,
    name: 'Soigneur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151075.png',
  },
  {
    id: 12709,
    name: 'Soigneur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151074.png',
  },
  {
    id: 12712,
    name: 'Acrobate mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151001.png',
  },
  {
    id: 12713,
    name: 'Acrobate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151002.png',
  },
  {
    id: 12714,
    name: 'Acrobate majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151003.png',
  },
  {
    id: 12715,
    name: 'Joueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151044.png',
  },
  {
    id: 12716,
    name: 'Joueur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151045.png',
  },
  {
    id: 12717,
    name: 'Joueur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151043.png',
  },
  {
    id: 12718,
    name: 'Savant mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151070.png',
  },
  {
    id: 12719,
    name: 'Savant majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151072.png',
  },
  {
    id: 12720,
    name: 'Savant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151071.png',
  },
  {
    id: 12722,
    name: 'Furibond mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151031.png',
  },
  {
    id: 12723,
    name: 'Furibond',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151032.png',
  },
  {
    id: 12724,
    name: 'Furibond majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151033.png',
  },
  {
    id: 12725,
    name: 'Survivant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151077.png',
  },
  {
    id: 12726,
    name: 'Survivant majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151078.png',
  },
  {
    id: 12727,
    name: 'Survivant mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151076.png',
  },
  {
    id: 12747,
    name: 'Ravageur Terre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151063.png',
  },
  {
    id: 12748,
    name: 'Ravageur Terre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151061.png',
  },
  {
    id: 12753,
    name: 'Ceinturong',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9245.png',
  },
  {
    id: 12754,
    name: 'Amulettong',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1212.png',
  },
  {
    id: 12756,
    name: 'Pacmamulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1211.png',
  },
  {
    id: 12757,
    name: 'Pacmabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11206.png',
  },
  {
    id: 12774,
    name: 'Raquettes Dugraal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11207.png',
  },
  {
    id: 12775,
    name: 'Ceinture Abdominable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10219.png',
  },
  {
    id: 12776,
    name: 'Amulette du Bibliothécaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1001.png',
  },
  {
    id: 12798,
    name: 'Bouclier du Survivant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82056.png',
  },
  {
    id: 12848,
    name: 'Manteau du Glutin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17241.png',
  },
  {
    id: 12849,
    name: 'Bonnet du Glutin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16325.png',
  },
  {
    id: 12850,
    name: 'Caleçon Fourré du Glutin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10220.png',
  },
  {
    id: 12851,
    name: 'Bracelet du Glutin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9246.png',
  },
  {
    id: 12852,
    name: 'Cape du Nowel Cauchemardesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17240.png',
  },
  {
    id: 12853,
    name: 'Masque du Nowel Cauchemardesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16324.png',
  },
  {
    id: 12854,
    name: 'Porte-Malheur du Nowel Cauchemardesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1214.png',
  },
  {
    id: 12855,
    name: 'Bottes du Nowel Cauchemardesque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11209.png',
  },
  {
    id: 12856,
    name: 'Sacoche de Redolphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81063.png',
  },
  {
    id: 12857,
    name: 'Coiffe de Redolphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16322.png',
  },
  {
    id: 12858,
    name: 'Licol de Redolphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1213.png',
  },
  {
    id: 12859,
    name: 'Sabots de Redolphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11208.png',
  },
  {
    id: 12882,
    name: 'Mes Petits Sabots',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11210.png',
  },
  {
    id: 12883,
    name: 'Peignentif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1215.png',
  },
  {
    id: 12887,
    name: 'Gladialeçon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10221.png',
  },
  {
    id: 12888,
    name: 'Gladiabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11211.png',
  },
  {
    id: 12969,
    name: 'Bracelet du Minotoboule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9247.png',
  },
  {
    id: 13017,
    name: 'Ceinturoduvet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10222.png',
  },
  {
    id: 13018,
    name: 'Bottoduvet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11213.png',
  },
  {
    id: 13020,
    name: 'Sabots Aiguilles de Féline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11212.png',
  },
  {
    id: 13022,
    name: 'Collier de Féline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1216.png',
  },
  {
    id: 13064,
    name: 'Katar Strophe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16335.png',
  },
  {
    id: 13091,
    name: 'Kabuto du Chafer Rōnin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16334.png',
  },
  {
    id: 13093,
    name: 'Pagne du Chafer Rōnin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10228.png',
  },
  {
    id: 13094,
    name: 'Bottes du Chafer Primitif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11219.png',
  },
  {
    id: 13095,
    name: 'Bandeau Rokwa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16336.png',
  },
  {
    id: 13114,
    name: 'Ceinture de Brouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10223.png',
  },
  {
    id: 13115,
    name: 'Anneau de Brouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9249.png',
  },
  {
    id: 13116,
    name: 'Bottes de Brouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11215.png',
  },
  {
    id: 13117,
    name: "Amulette d'Otomaï",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1217.png',
  },
  {
    id: 13118,
    name: "Bottes d'Otomaï",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11217.png',
  },
  {
    id: 13120,
    name: 'Coiffe de Danathor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16330.png',
  },
  {
    id: 13121,
    name: 'Amulette de Danathor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1219.png',
  },
  {
    id: 13122,
    name: 'Ceinture de Danathor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10226.png',
  },
  {
    id: 13123,
    name: "Couronne d'Allister",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16328.png',
  },
  {
    id: 13124,
    name: "Anneau d'Allister",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9248.png',
  },
  {
    id: 13125,
    name: "Bottes d'Allister",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11214.png',
  },
  {
    id: 13127,
    name: 'Cape de Léthaline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17245.png',
  },
  {
    id: 13128,
    name: 'Ceinture de Léthaline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10224.png',
  },
  {
    id: 13129,
    name: 'Bottes de Léthaline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11216.png',
  },
  {
    id: 13130,
    name: "Coiffe d'Ogivol",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16331.png',
  },
  {
    id: 13131,
    name: "Cape d'Ogivol",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17246.png',
  },
  {
    id: 13132,
    name: "Ceinture d'Ogivol",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10227.png',
  },
  {
    id: 13135,
    name: 'Casque de Metag Robill',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16333.png',
  },
  {
    id: 13136,
    name: 'Caskoffre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16329.png',
  },
  {
    id: 13137,
    name: 'Ceinture de Coffreté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10225.png',
  },
  {
    id: 13138,
    name: 'Pendentiffre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1218.png',
  },
  {
    id: 13139,
    name: 'Boffes Cottre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11218.png',
  },
  {
    id: 13170,
    name: 'Amulette de Pwâk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1220.png',
  },
  {
    id: 13194,
    name: 'Chapeau Potin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16397.png',
  },
  {
    id: 13197,
    name: 'Cape Reski',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17254.png',
  },
  {
    id: 13210,
    name: 'Bottes Rolivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102440.png',
  },
  {
    id: 13211,
    name: 'Cape Rolivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102320.png',
  },
  {
    id: 13212,
    name: 'Ceinture Rolivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102400.png',
  },
  {
    id: 13213,
    name: 'Chapeau Rolivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102360.png',
  },
  {
    id: 13240,
    name: 'Bouclier de Guilde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82072.png',
  },
  {
    id: 13261,
    name: 'Scaphandre Ojine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16338.png',
  },
  {
    id: 13262,
    name: 'Sac Rebleux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81064.png',
  },
  {
    id: 13263,
    name: 'Bottes Omates',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11220.png',
  },
  {
    id: 13264,
    name: 'Ceinture Blot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10230.png',
  },
  {
    id: 13265,
    name: 'Steamanneau Maître',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9250.png',
  },
  {
    id: 13271,
    name: 'Amulette de Mini-Miss Amakna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1204.png',
  },
  {
    id: 13272,
    name: 'Amulette de Mini-Mister Amakna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1205.png',
  },
  {
    id: 13297,
    name: 'Bague Rafe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9251.png',
  },
  {
    id: 13298,
    name: 'Bracelet Gume',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9252.png',
  },
  {
    id: 13301,
    name: "Bottes O'Feu",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11222.png',
  },
  {
    id: 13302,
    name: 'Bottes Hédivines',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11221.png',
  },
  {
    id: 13303,
    name: 'Ceinture Nikoti',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10231.png',
  },
  {
    id: 13304,
    name: 'Ceinture Teule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10232.png',
  },
  {
    id: 13320,
    name: 'Annokami',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9253.png',
  },
  {
    id: 13321,
    name: 'Bottokami',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11223.png',
  },
  {
    id: 13326,
    name: 'Chapitrouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16342.png',
  },
  {
    id: 13327,
    name: 'Capitrouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17250.png',
  },
  {
    id: 13328,
    name: 'Ceintrouille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10233.png',
  },
  {
    id: 13344,
    name: 'Dolmanax',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23018.png',
  },
  {
    id: 13423,
    name: 'Slip de Rechange du Captain Chafer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10234.png',
  },
  {
    id: 13424,
    name: 'Troma du Vieux John',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16005.png',
  },
  {
    id: 13459,
    name: 'Diplamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1221.png',
  },
  {
    id: 13460,
    name: 'Diplanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9254.png',
  },
  {
    id: 13480,
    name: 'Araknacoiffe Velue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16344.png',
  },
  {
    id: 13485,
    name: 'Krosmangle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10235.png',
  },
  {
    id: 13486,
    name: 'Krosmaussures',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11224.png',
  },
  {
    id: 13582,
    name: 'Ballerines Roses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11225.png',
  },
  {
    id: 13584,
    name: 'Coffresac du Koalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81065.png',
  },
  {
    id: 13629,
    name: "Anneau d'Henual",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9256.png',
  },
  {
    id: 13630,
    name: "Ceinture d'Henual",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10236.png',
  },
  {
    id: 13632,
    name: "Coiffe d'Oshimo",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16350.png',
  },
  {
    id: 13633,
    name: "Amulette d'Oshimo",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1225.png',
  },
  {
    id: 13634,
    name: "Bottes d'Oshimo",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11230.png',
  },
  {
    id: 13635,
    name: 'Cape de Nevark',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17259.png',
  },
  {
    id: 13636,
    name: 'Amulette de Nevark',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1224.png',
  },
  {
    id: 13637,
    name: 'Ceinture de Nevark',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10237.png',
  },
  {
    id: 13638,
    name: 'Cape de Théodoran Ax',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17256.png',
  },
  {
    id: 13639,
    name: 'Amulette de Théodoran Ax',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1222.png',
  },
  {
    id: 13640,
    name: 'Bottes de Théodoran Ax',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11228.png',
  },
  {
    id: 13641,
    name: 'Coiffe de Padgref',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16349.png',
  },
  {
    id: 13642,
    name: 'Anneau de Padgref',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9255.png',
  },
  {
    id: 13643,
    name: 'Getas de Padgref',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11229.png',
  },
  {
    id: 13644,
    name: "Coiffe d'Hel Munster",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16348.png',
  },
  {
    id: 13645,
    name: "Cape d'Hel Munster",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17257.png',
  },
  {
    id: 13646,
    name: "Amulette d'Hel Munster",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1223.png',
  },
  {
    id: 13647,
    name: "Coiffe d'Aermyne",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16347.png',
  },
  {
    id: 13648,
    name: "Cape d'Aermyne",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17258.png',
  },
  {
    id: 13657,
    name: 'Cape Matelassée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17255.png',
  },
  {
    id: 13658,
    name: 'Pantoufles Émar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11227.png',
  },
  {
    id: 13659,
    name: 'Sabots Minables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11226.png',
  },
  {
    id: 13687,
    name: 'Saponnet de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16346.png',
  },
  {
    id: 13711,
    name: 'Chapeau de Kéké',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16353.png',
  },
  {
    id: 13712,
    name: 'Bouclier de Kéké',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82077.png',
  },
  {
    id: 13748,
    name: 'Bloqueur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151082.png',
  },
  {
    id: 13749,
    name: 'Bloqueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151083.png',
  },
  {
    id: 13750,
    name: 'Bloqueur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151084.png',
  },
  {
    id: 13751,
    name: 'Vagabond mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151085.png',
  },
  {
    id: 13752,
    name: 'Vagabond',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151086.png',
  },
  {
    id: 13753,
    name: 'Vagabond majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151087.png',
  },
  {
    id: 13754,
    name: 'Docteur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151088.png',
  },
  {
    id: 13755,
    name: 'Docteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151089.png',
  },
  {
    id: 13756,
    name: 'Docteur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151090.png',
  },
  {
    id: 13757,
    name: 'Forcené mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151091.png',
  },
  {
    id: 13758,
    name: 'Forcené',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151092.png',
  },
  {
    id: 13759,
    name: 'Forcené majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151093.png',
  },
  {
    id: 13760,
    name: 'Astucieux mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151094.png',
  },
  {
    id: 13761,
    name: 'Astucieux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151095.png',
  },
  {
    id: 13762,
    name: 'Astucieux majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151096.png',
  },
  {
    id: 13763,
    name: 'Equilibriste mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151097.png',
  },
  {
    id: 13764,
    name: 'Equilibriste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151098.png',
  },
  {
    id: 13765,
    name: 'Equilibriste majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151099.png',
  },
  {
    id: 13766,
    name: 'Taquin mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151100.png',
  },
  {
    id: 13767,
    name: 'Taquin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151101.png',
  },
  {
    id: 13768,
    name: 'Taquin majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151102.png',
  },
  {
    id: 13769,
    name: 'Bastion mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151103.png',
  },
  {
    id: 13770,
    name: 'Bastion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151104.png',
  },
  {
    id: 13771,
    name: 'Bastion majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151105.png',
  },
  {
    id: 13772,
    name: 'Saccageur Terre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151106.png',
  },
  {
    id: 13773,
    name: 'Saccageur Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151107.png',
  },
  {
    id: 13774,
    name: 'Saccageur Terre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151108.png',
  },
  {
    id: 13775,
    name: 'Saccageur Neutre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151109.png',
  },
  {
    id: 13776,
    name: 'Saccageur Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151110.png',
  },
  {
    id: 13777,
    name: 'Saccageur Neutre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151111.png',
  },
  {
    id: 13778,
    name: 'Saccageur Feu mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151112.png',
  },
  {
    id: 13779,
    name: 'Saccageur Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151113.png',
  },
  {
    id: 13780,
    name: 'Saccageur Feu majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151114.png',
  },
  {
    id: 13781,
    name: 'Saccageur Eau mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151115.png',
  },
  {
    id: 13782,
    name: 'Saccageur Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151116.png',
  },
  {
    id: 13783,
    name: 'Saccageur Eau majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151117.png',
  },
  {
    id: 13784,
    name: 'Saccageur Air mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151118.png',
  },
  {
    id: 13785,
    name: 'Saccageur Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151119.png',
  },
  {
    id: 13786,
    name: 'Saccageur Air majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151120.png',
  },
  {
    id: 13787,
    name: 'Entraveur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151121.png',
  },
  {
    id: 13788,
    name: 'Entraveur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151122.png',
  },
  {
    id: 13789,
    name: 'Entraveur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151123.png',
  },
  {
    id: 13790,
    name: 'Paralyseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151124.png',
  },
  {
    id: 13791,
    name: 'Paralyseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151125.png',
  },
  {
    id: 13792,
    name: 'Paralyseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151126.png',
  },
  {
    id: 13793,
    name: 'Imprenable mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151127.png',
  },
  {
    id: 13794,
    name: 'Imprenable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151128.png',
  },
  {
    id: 13795,
    name: 'Imprenable majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151129.png',
  },
  {
    id: 13796,
    name: 'Evanescent mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151130.png',
  },
  {
    id: 13797,
    name: 'Evanescent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151131.png',
  },
  {
    id: 13798,
    name: 'Evanescent majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151132.png',
  },
  {
    id: 13799,
    name: 'Bousculeur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151133.png',
  },
  {
    id: 13800,
    name: 'Bousculeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151134.png',
  },
  {
    id: 13801,
    name: 'Bousculeur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151135.png',
  },
  {
    id: 13802,
    name: 'Inflexible mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151136.png',
  },
  {
    id: 13803,
    name: 'Inflexible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151137.png',
  },
  {
    id: 13804,
    name: 'Inflexible majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151138.png',
  },
  {
    id: 13805,
    name: 'Précurseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151139.png',
  },
  {
    id: 13806,
    name: 'Précurseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151140.png',
  },
  {
    id: 13807,
    name: 'Précurseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151141.png',
  },
  {
    id: 13808,
    name: 'Muraille Terre mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151142.png',
  },
  {
    id: 13809,
    name: 'Muraille Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151143.png',
  },
  {
    id: 13810,
    name: 'Muraille Terre majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151144.png',
  },
  {
    id: 13811,
    name: 'Muraille Neutre mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151145.png',
  },
  {
    id: 13812,
    name: 'Muraille Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151146.png',
  },
  {
    id: 13813,
    name: 'Muraille Neutre majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151147.png',
  },
  {
    id: 13814,
    name: 'Muraille Feu mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151148.png',
  },
  {
    id: 13815,
    name: 'Muraille Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151149.png',
  },
  {
    id: 13816,
    name: 'Muraille Feu majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151150.png',
  },
  {
    id: 13817,
    name: 'Muraille Eau mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151151.png',
  },
  {
    id: 13818,
    name: 'Muraille Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151152.png',
  },
  {
    id: 13819,
    name: 'Muraille Eau majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151153.png',
  },
  {
    id: 13820,
    name: 'Muraille Air mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151154.png',
  },
  {
    id: 13821,
    name: 'Muraille Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151155.png',
  },
  {
    id: 13822,
    name: 'Muraille Air majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151156.png',
  },
  {
    id: 13823,
    name: 'Puissant mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151157.png',
  },
  {
    id: 13824,
    name: 'Puissant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151158.png',
  },
  {
    id: 13825,
    name: 'Puissant majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151159.png',
  },
  {
    id: 13826,
    name: 'Robuste mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151160.png',
  },
  {
    id: 13827,
    name: 'Robuste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151161.png',
  },
  {
    id: 13828,
    name: 'Robuste majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151162.png',
  },
  {
    id: 13829,
    name: 'Turbulent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151163.png',
  },
  {
    id: 13830,
    name: 'Voyageur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151164.png',
  },
  {
    id: 13831,
    name: 'Examinateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151165.png',
  },
  {
    id: 13832,
    name: 'Féroce mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151166.png',
  },
  {
    id: 13833,
    name: 'Féroce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151167.png',
  },
  {
    id: 13834,
    name: 'Féroce majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151168.png',
  },
  {
    id: 13850,
    name: 'Masque du Frelon Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16354.png',
  },
  {
    id: 13851,
    name: 'Ceinture du Frelon Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10238.png',
  },
  {
    id: 13891,
    name: 'Glaglano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9258.png',
  },
  {
    id: 13893,
    name: 'Glaglamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1227.png',
  },
  {
    id: 13897,
    name: 'Anneau Tamie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9259.png',
  },
  {
    id: 14000,
    name: 'Bonnet Ko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16355.png',
  },
  {
    id: 14001,
    name: 'Pèlerine d’Augilol',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17262.png',
  },
  {
    id: 14002,
    name: "Bottes d'Inferno",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11231.png',
  },
  {
    id: 14003,
    name: 'Bottes de Styx',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11232.png',
  },
  {
    id: 14004,
    name: 'Bottes de Mandrin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11233.png',
  },
  {
    id: 14005,
    name: 'Bottes de Will Killson',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11234.png',
  },
  {
    id: 14006,
    name: 'Infernano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9260.png',
  },
  {
    id: 14007,
    name: 'Styxano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9261.png',
  },
  {
    id: 14008,
    name: 'Mandrano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9262.png',
  },
  {
    id: 14009,
    name: 'Willkillsano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9263.png',
  },
  {
    id: 14030,
    name: 'Scaphandre Magmatique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16352.png',
  },
  {
    id: 14049,
    name: 'Bague Nostik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9264.png',
  },
  {
    id: 14050,
    name: 'Masque de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16356.png',
  },
  {
    id: 14051,
    name: 'Cape de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17263.png',
  },
  {
    id: 14052,
    name: 'Ceinture de Klime',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10239.png',
  },
  {
    id: 14053,
    name: 'Bonnet Vicieux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16357.png',
  },
  {
    id: 14054,
    name: 'Anneau Vicieux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9265.png',
  },
  {
    id: 14056,
    name: 'Bottes Vicieuses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11235.png',
  },
  {
    id: 14057,
    name: 'Cape Glaciale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17264.png',
  },
  {
    id: 14058,
    name: 'Anneau Glacial',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9266.png',
  },
  {
    id: 14059,
    name: 'Ceinture Glaciale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10240.png',
  },
  {
    id: 14060,
    name: 'Casque de Missiz Frizz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16358.png',
  },
  {
    id: 14061,
    name: 'Alliance de Missiz Frizz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9267.png',
  },
  {
    id: 14062,
    name: 'Bottes de Missiz Frizz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11236.png',
  },
  {
    id: 14063,
    name: 'Coiffe Ranshi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16359.png',
  },
  {
    id: 14064,
    name: 'Cape de Nileza',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17265.png',
  },
  {
    id: 14065,
    name: 'Amulette de Nileza',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1228.png',
  },
  {
    id: 14066,
    name: 'Bottes de Nileza',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11237.png',
  },
  {
    id: 14067,
    name: 'Bague Instable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9268.png',
  },
  {
    id: 14068,
    name: 'Anneau Instable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9269.png',
  },
  {
    id: 14069,
    name: 'Ceinture Instable',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10241.png',
  },
  {
    id: 14070,
    name: 'Capuche de Sylargh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16360.png',
  },
  {
    id: 14071,
    name: 'Cape de Sylargh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17266.png',
  },
  {
    id: 14072,
    name: 'Sangle de Sylargh',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10242.png',
  },
  {
    id: 14073,
    name: 'Coiffe du Kanimate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16361.png',
  },
  {
    id: 14074,
    name: 'Cape du Kanimate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17267.png',
  },
  {
    id: 14075,
    name: 'Amulette du Kanimate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1229.png',
  },
  {
    id: 14076,
    name: 'Coiffe du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16362.png',
  },
  {
    id: 14077,
    name: 'Anneau du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9270.png',
  },
  {
    id: 14078,
    name: 'Bottes du Comte Harebourg',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11238.png',
  },
  {
    id: 14079,
    name: 'Coiffe Séculaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16363.png',
  },
  {
    id: 14080,
    name: 'Amulette Séculaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1230.png',
  },
  {
    id: 14081,
    name: 'Ceinture Séculaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10243.png',
  },
  {
    id: 14082,
    name: 'Masque du Granduk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16364.png',
  },
  {
    id: 14083,
    name: 'Amulette du Granduk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1231.png',
  },
  {
    id: 14085,
    name: 'Cape du Sinistrofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17268.png',
  },
  {
    id: 14086,
    name: 'Amulette du Sinistrofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1232.png',
  },
  {
    id: 14087,
    name: 'Bottes du Sinistrofu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11239.png',
  },
  {
    id: 14088,
    name: 'Coiffe Cryochrone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16365.png',
  },
  {
    id: 14089,
    name: 'Anneau Cryochrone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9271.png',
  },
  {
    id: 14090,
    name: 'Amulette Cryochrone',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1233.png',
  },
  {
    id: 14091,
    name: 'Amulette du Cycloïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1234.png',
  },
  {
    id: 14092,
    name: 'Anneau du Cycloïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9272.png',
  },
  {
    id: 14093,
    name: 'Bottes du Cycloïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11240.png',
  },
  {
    id: 14094,
    name: 'Amulette du Strigide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1235.png',
  },
  {
    id: 14095,
    name: 'Ceinture du Strigide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10244.png',
  },
  {
    id: 14096,
    name: 'Bottes du Strigide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11241.png',
  },
  {
    id: 14097,
    name: 'Amulette du Nocturlabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1236.png',
  },
  {
    id: 14098,
    name: 'Ceinture du Nocturlabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10245.png',
  },
  {
    id: 14099,
    name: 'Bottes du Nocturlabe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11242.png',
  },
  {
    id: 14130,
    name: 'Sangle Aise',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10246.png',
  },
  {
    id: 14159,
    name: 'Cape Lati',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17269.png',
  },
  {
    id: 14160,
    name: 'Amulette Rangleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1237.png',
  },
  {
    id: 14161,
    name: 'Cape Ovri',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17270.png',
  },
  {
    id: 14162,
    name: 'Sangle Ouare',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10247.png',
  },
  {
    id: 14163,
    name: 'Sandales Ouzi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11243.png',
  },
  {
    id: 14168,
    name: 'Cape au Logis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17271.png',
  },
  {
    id: 14169,
    name: 'Talisman Songe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1238.png',
  },
  {
    id: 14170,
    name: 'Bandeau Ktriné',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16366.png',
  },
  {
    id: 14171,
    name: 'Bottes Dogues',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11244.png',
  },
  {
    id: 14271,
    name: 'Dés de la Chance',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1242.png',
  },
  {
    id: 14273,
    name: 'Slip du Roi de Bonta',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10249.png',
  },
  {
    id: 14277,
    name: 'Ceinture Ding Dong',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10250.png',
  },
  {
    id: 14281,
    name: 'Phylactère Mic',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1240.png',
  },
  {
    id: 14283,
    name: 'Ceinture Hyolite',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10248.png',
  },
  {
    id: 14285,
    name: 'Calotte Spot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16368.png',
  },
  {
    id: 14286,
    name: 'Binocle Airvoyant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16367.png',
  },
  {
    id: 14287,
    name: 'Pendentif Oton',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1239.png',
  },
  {
    id: 14302,
    name: 'Anneau Stroplante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9257.png',
  },
  {
    id: 14304,
    name: 'Amulette Stroplante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1226.png',
  },
  {
    id: 14310,
    name: 'Justobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11245.png',
  },
  {
    id: 14311,
    name: 'Justanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9273.png',
  },
  {
    id: 14396,
    name: "Bouclier d'Alliance",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82080.png',
  },
  {
    id: 14491,
    name: 'Couronne du Wa Wobot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16374.png',
  },
  {
    id: 14492,
    name: 'Cape du Wa Wobot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17276.png',
  },
  {
    id: 14493,
    name: 'Ceinture du Wa Wobot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10253.png',
  },
  {
    id: 14494,
    name: 'Casque du Blanc Pa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16373.png',
  },
  {
    id: 14495,
    name: 'Ceinture du Blanc Pa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10251.png',
  },
  {
    id: 14496,
    name: 'Bracelet du Blanc Pa Wabbit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9274.png',
  },
  {
    id: 14497,
    name: 'Anneau du Wabbit Céphale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9275.png',
  },
  {
    id: 14498,
    name: 'Amulette du Wabbit Céphale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1243.png',
  },
  {
    id: 14499,
    name: 'Bottes du Wabbit Céphale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11246.png',
  },
  {
    id: 14500,
    name: 'Bottes du Wabbit Garou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11247.png',
  },
  {
    id: 14501,
    name: 'Cape du Wabbit Garou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17275.png',
  },
  {
    id: 14502,
    name: 'Ceinture du Wabbit Garou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10252.png',
  },
  {
    id: 14504,
    name: 'Chapokapi',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16375.png',
  },
  {
    id: 14506,
    name: 'Perruque de Iop',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16376.png',
  },
  {
    id: 14579,
    name: 'Masque Iproquo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16377.png',
  },
  {
    id: 14580,
    name: 'Ceinture Hétorique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10254.png',
  },
  {
    id: 14581,
    name: 'Bracelet Tmotiv',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9276.png',
  },
  {
    id: 14582,
    name: 'Brighellanière',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10255.png',
  },
  {
    id: 14583,
    name: 'Scaramouchapeau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16378.png',
  },
  {
    id: 14589,
    name: 'Ceintulotté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10256.png',
  },
  {
    id: 14593,
    name: 'Anomen Tengu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9277.png',
  },
  {
    id: 14597,
    name: 'Shinchamu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1246.png',
  },
  {
    id: 14601,
    name: 'Slipwaïï',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10258.png',
  },
  {
    id: 14605,
    name: 'Geishanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9280.png',
  },
  {
    id: 14609,
    name: 'Kouinkano Noir',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9278.png',
  },
  {
    id: 14613,
    name: 'Kouinkano Jaune',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9279.png',
  },
  {
    id: 14617,
    name: 'Ninjamu Blanche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1244.png',
  },
  {
    id: 14621,
    name: 'Ninjamu Noire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1245.png',
  },
  {
    id: 14625,
    name: 'Ailobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11248.png',
  },
  {
    id: 14629,
    name: 'Makiture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10257.png',
  },
  {
    id: 14633,
    name: 'Dragoubottes Roses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11249.png',
  },
  {
    id: 14637,
    name: 'Coiffe Médusoïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16398.png',
  },
  {
    id: 14638,
    name: 'Nageoiture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10261.png',
  },
  {
    id: 14639,
    name: 'Nageanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9284.png',
  },
  {
    id: 14644,
    name: 'Soubretture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10259.png',
  },
  {
    id: 14798,
    name: 'Ceinture du Samouraï',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10260.png',
  },
  {
    id: 14803,
    name: 'Bottes Nō',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11250.png',
  },
  {
    id: 14806,
    name: 'Annolita',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9281.png',
  },
  {
    id: 14809,
    name: 'Koinkoiffe Rose',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16399.png',
  },
  {
    id: 14810,
    name: 'Insigne de Keukeuf',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1249.png',
  },
  {
    id: 14877,
    name: 'Dorabysses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16396.png',
  },
  {
    id: 14878,
    name: 'Talisman Glouti',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1248.png',
  },
  {
    id: 14879,
    name: 'Anneau Tique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9283.png',
  },
  {
    id: 14880,
    name: 'Casquipik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16394.png',
  },
  {
    id: 14881,
    name: 'Pikottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11251.png',
  },
  {
    id: 14882,
    name: 'Pikano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9282.png',
  },
  {
    id: 14883,
    name: 'Bandeau Culaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16395.png',
  },
  {
    id: 14884,
    name: 'Amulette Ikête',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1247.png',
  },
  {
    id: 14885,
    name: 'Cape Parition',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17291.png',
  },
  {
    id: 14929,
    name: 'Amulule',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1250.png',
  },
  {
    id: 14930,
    name: 'Obscture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10262.png',
  },
  {
    id: 14931,
    name: 'Chaussures Hau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11252.png',
  },
  {
    id: 14932,
    name: 'Anneau Kturne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9285.png',
  },
  {
    id: 14933,
    name: 'Bottes Refois',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11253.png',
  },
  {
    id: 14934,
    name: 'Casqnoar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16400.png',
  },
  {
    id: 14937,
    name: 'Cape des Justiciers',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17292.png',
  },
  {
    id: 14967,
    name: 'Glutonnet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16403.png',
  },
  {
    id: 15009,
    name: 'Ceinture du Père Fwetar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10263.png',
  },
  {
    id: 15010,
    name: 'Bottes du Père Fwetar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11255.png',
  },
  {
    id: 15011,
    name: 'Anneau du Père Fwetar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9286.png',
  },
  {
    id: 15012,
    name: 'Casque de Flèche Mauve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16401.png',
  },
  {
    id: 15013,
    name: 'Cape de Flèche Mauve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17293.png',
  },
  {
    id: 15015,
    name: 'Chaponion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16402.png',
  },
  {
    id: 15016,
    name: 'Caponion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17294.png',
  },
  {
    id: 15017,
    name: 'Bottes Donion',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11254.png',
  },
  {
    id: 15059,
    name: 'Anneau du Kaniblou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9287.png',
  },
  {
    id: 15060,
    name: 'Ceinture du Kaniblou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10264.png',
  },
  {
    id: 15061,
    name: 'Cape du Kaniblou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17295.png',
  },
  {
    id: 15062,
    name: 'Coiffe de l’Orfélin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16404.png',
  },
  {
    id: 15063,
    name: 'Ceinture de l’Orfélin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10265.png',
  },
  {
    id: 15064,
    name: 'Amulette de l’Orfélin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1251.png',
  },
  {
    id: 15099,
    name: 'Ceinture Karnaval',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10266.png',
  },
  {
    id: 15100,
    name: 'Bottes Karnaval',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11256.png',
  },
  {
    id: 15157,
    name: 'Casquête',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16410.png',
  },
  {
    id: 15183,
    name: 'Masque du Barbétoal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16411.png',
  },
  {
    id: 15184,
    name: 'Cape du Barbétoal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17298.png',
  },
  {
    id: 15185,
    name: 'Ceinture du Barbétoal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10268.png',
  },
  {
    id: 15186,
    name: 'Couronne de Nidas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16412.png',
  },
  {
    id: 15187,
    name: 'Anneau de Nidas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9288.png',
  },
  {
    id: 15188,
    name: 'Tongues de Nidas',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11258.png',
  },
  {
    id: 15189,
    name: 'Amulette du Piloztère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1252.png',
  },
  {
    id: 15190,
    name: 'Bracelet du Piloztère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9289.png',
  },
  {
    id: 15191,
    name: 'Pantoufles du Piloztère',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11259.png',
  },
  {
    id: 15192,
    name: 'Coiffe du Lévitrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16413.png',
  },
  {
    id: 15193,
    name: 'Alliance du Lévitrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9290.png',
  },
  {
    id: 15194,
    name: 'Bottes du Lévitrof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11260.png',
  },
  {
    id: 15195,
    name: 'Amulette du Kamasterisk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1253.png',
  },
  {
    id: 15196,
    name: 'Bottes du Kamasterisk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11261.png',
  },
  {
    id: 15197,
    name: 'Cape du Kamasterisk',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17299.png',
  },
  {
    id: 15198,
    name: 'Bottes Phossiles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11262.png',
  },
  {
    id: 15199,
    name: 'Ceinture Phossile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10269.png',
  },
  {
    id: 15200,
    name: 'Cape Phossile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17300.png',
  },
  {
    id: 15201,
    name: 'Ceinture du Père Phorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10270.png',
  },
  {
    id: 15202,
    name: 'Cape du Père Phorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17301.png',
  },
  {
    id: 15203,
    name: 'Amulette du Père Phorreur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1254.png',
  },
  {
    id: 15207,
    name: 'Cape Précieuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17302.png',
  },
  {
    id: 15208,
    name: 'Ceinture Précieuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10271.png',
  },
  {
    id: 15210,
    name: 'Bottes Précieuses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11263.png',
  },
  {
    id: 15212,
    name: 'Casque du Berserkoffre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16414.png',
  },
  {
    id: 15213,
    name: 'Ceinture du Berserkoffre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10272.png',
  },
  {
    id: 15215,
    name: 'Bottes du Berserkoffre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11264.png',
  },
  {
    id: 15235,
    name: 'Dotruche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23019.png',
  },
  {
    id: 15240,
    name: 'Kamatongues',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11257.png',
  },
  {
    id: 15241,
    name: 'Kamature',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10267.png',
  },
  {
    id: 15356,
    name: 'Chapeau Truche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16415.png',
  },
  {
    id: 15357,
    name: 'Ceintruche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10273.png',
  },
  {
    id: 15358,
    name: 'Anneau Truche',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9291.png',
  },
  {
    id: 15359,
    name: 'Gruchape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17303.png',
  },
  {
    id: 15360,
    name: 'Gruchaussures',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11265.png',
  },
  {
    id: 15361,
    name: 'Gruchette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1255.png',
  },
  {
    id: 15428,
    name: 'Bottes de la Cour Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11268.png',
  },
  {
    id: 15429,
    name: 'Ceinture de la Cour Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10276.png',
  },
  {
    id: 15430,
    name: 'Cape de la Cour Sombre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17326.png',
  },
  {
    id: 15431,
    name: 'Chapeau de Gein',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16440.png',
  },
  {
    id: 15432,
    name: 'Ceinture de Gein',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10277.png',
  },
  {
    id: 15433,
    name: 'Amulette de Gein',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1259.png',
  },
  {
    id: 15434,
    name: 'Ceinture de la Reine des Voleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10279.png',
  },
  {
    id: 15435,
    name: 'Bottes de la Reine des Voleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11274.png',
  },
  {
    id: 15436,
    name: 'Coiffe de la Reine des Voleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16444.png',
  },
  {
    id: 15437,
    name: 'Bottes des Malveilleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11272.png',
  },
  {
    id: 15438,
    name: 'Chapeau des Malveilleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16443.png',
  },
  {
    id: 15439,
    name: 'Cape des Malveilleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17328.png',
  },
  {
    id: 15440,
    name: 'Anneau du Katcheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9293.png',
  },
  {
    id: 15441,
    name: 'Bottes du Katcheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11267.png',
  },
  {
    id: 15442,
    name: 'Masque du Katcheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16439.png',
  },
  {
    id: 15499,
    name: 'Amulette Nécrotique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1260.png',
  },
  {
    id: 15500,
    name: 'Bottes Nécrotiques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11273.png',
  },
  {
    id: 15501,
    name: 'Cape Nécrotique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17329.png',
  },
  {
    id: 15502,
    name: 'Bottes de Dremoan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11269.png',
  },
  {
    id: 15503,
    name: 'Chapeau de Dremoan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16441.png',
  },
  {
    id: 15504,
    name: 'Cape de Dremoan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17327.png',
  },
  {
    id: 15506,
    name: 'Ceinture du Capitaine Ekarlatte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10278.png',
  },
  {
    id: 15507,
    name: 'Bottes du Capitaine Ekarlatte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11270.png',
  },
  {
    id: 15508,
    name: 'Gant du Capitaine Ekarlatte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9294.png',
  },
  {
    id: 15514,
    name: "Casque d'Ali Grothor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16445.png',
  },
  {
    id: 15518,
    name: "Amulette d'Ali Grothor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1258.png',
  },
  {
    id: 15523,
    name: "Cape d'Ali Grothor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17325.png',
  },
  {
    id: 15524,
    name: 'Masque de Frakacia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16442.png',
  },
  {
    id: 15525,
    name: 'Bottes de Frakacia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11271.png',
  },
  {
    id: 15526,
    name: 'Gant de Frakacia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9295.png',
  },
  {
    id: 15548,
    name: 'Ceinture Verréhor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10275.png',
  },
  {
    id: 15549,
    name: 'Amulette Verréhor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1257.png',
  },
  {
    id: 15692,
    name: 'Baleinabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11276.png',
  },
  {
    id: 15693,
    name: 'Pataugastrique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11275.png',
  },
  {
    id: 15694,
    name: 'Kidibonnet',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16448.png',
  },
  {
    id: 15695,
    name: 'Maskrobe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16447.png',
  },
  {
    id: 15696,
    name: 'Capchalot',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17331.png',
  },
  {
    id: 15697,
    name: 'Voilamibe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17330.png',
  },
  {
    id: 15698,
    name: 'Anneau de Pol Ouatnos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9296.png',
  },
  {
    id: 15699,
    name: 'Ceintacé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10281.png',
  },
  {
    id: 15700,
    name: 'Protopagne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10280.png',
  },
  {
    id: 15701,
    name: 'Amulette de Pol Ouatnos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1261.png',
  },
  {
    id: 15737,
    name: 'Amibou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1262.png',
  },
  {
    id: 15738,
    name: 'Chapibou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16449.png',
  },
  {
    id: 15739,
    name: 'Capibou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17332.png',
  },
  {
    id: 15740,
    name: 'Anneau des égarés',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9297.png',
  },
  {
    id: 15741,
    name: 'Bottes des égarés',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11277.png',
  },
  {
    id: 15742,
    name: 'Casque des égarés',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16450.png',
  },
  {
    id: 15743,
    name: 'Ceinture de Vortex',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10282.png',
  },
  {
    id: 15744,
    name: 'Sabots de Vortex',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11278.png',
  },
  {
    id: 15745,
    name: 'Cagoule de Vortex',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16451.png',
  },
  {
    id: 15746,
    name: 'Harpendentif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1263.png',
  },
  {
    id: 15747,
    name: 'Capille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17333.png',
  },
  {
    id: 15748,
    name: 'Bottarpille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11279.png',
  },
  {
    id: 15749,
    name: 'Talisman Igans',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1264.png',
  },
  {
    id: 15750,
    name: 'Ceintrigue',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10283.png',
  },
  {
    id: 15751,
    name: 'Bottes Owesli',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11280.png',
  },
  {
    id: 15762,
    name: 'Bottes de XLII',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11283.png',
  },
  {
    id: 15764,
    name: 'Ceinture de XLII',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10285.png',
  },
  {
    id: 15768,
    name: 'Anneau de XLII',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9300.png',
  },
  {
    id: 15771,
    name: 'Ceinture de Soissanth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10286.png',
  },
  {
    id: 15773,
    name: 'Coiffe de Soissanth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16456.png',
  },
  {
    id: 15776,
    name: 'Pantoufles de Soissanth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11284.png',
  },
  {
    id: 15778,
    name: 'Coiffe de Fraktale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16455.png',
  },
  {
    id: 15780,
    name: 'Ceinture de Fraktale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10284.png',
  },
  {
    id: 15783,
    name: 'Anneau de Fraktale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9298.png',
  },
  {
    id: 15784,
    name: 'Anneau Xélomorphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9299.png',
  },
  {
    id: 15789,
    name: 'Bottes Xélomorphes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11282.png',
  },
  {
    id: 15791,
    name: 'Cape Xélomorphe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17336.png',
  },
  {
    id: 15794,
    name: 'Coiffe de Fouduglen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16454.png',
  },
  {
    id: 15795,
    name: 'Bottes de Fouduglen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11281.png',
  },
  {
    id: 15796,
    name: 'Amulette de Fouduglen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1265.png',
  },
  {
    id: 15964,
    name: 'Corset Décodé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10287.png',
  },
  {
    id: 15992,
    name: 'Anneau Bille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9301.png',
  },
  {
    id: 15993,
    name: 'Cape Lumette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17337.png',
  },
  {
    id: 15994,
    name: 'Casque Noix',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16457.png',
  },
  {
    id: 15995,
    name: 'Amulette Perle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1266.png',
  },
  {
    id: 15996,
    name: 'Pendentif Curatif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1267.png',
  },
  {
    id: 15997,
    name: 'Ceinture Anesthésiante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10288.png',
  },
  {
    id: 15998,
    name: 'Alliance Apaisante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9302.png',
  },
  {
    id: 15999,
    name: 'Masque de Pantèroz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16459.png',
  },
  {
    id: 16003,
    name: 'String Fouetteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10289.png',
  },
  {
    id: 16004,
    name: 'Anneau Tranchant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9304.png',
  },
  {
    id: 16005,
    name: 'Bracelet des Fonds marins',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9303.png',
  },
  {
    id: 16006,
    name: 'Sandales des Fonds marins',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11285.png',
  },
  {
    id: 16007,
    name: 'Masque des Fonds marins',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16458.png',
  },
  {
    id: 16061,
    name: 'Dofus des Veilleurs',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23020.png',
  },
  {
    id: 16073,
    name: 'Hotte de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81068.png',
  },
  {
    id: 16140,
    name: 'Masque Rosmique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16462.png',
  },
  {
    id: 16141,
    name: 'Cape Ortail',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17340.png',
  },
  {
    id: 16142,
    name: 'Bottes Ransitoires',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11286.png',
  },
  {
    id: 16143,
    name: 'Ceinture Billonnante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10290.png',
  },
  {
    id: 16144,
    name: 'Anneau Vae',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9305.png',
  },
  {
    id: 16171,
    name: 'Cape Invisible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17341.png',
  },
  {
    id: 16172,
    name: 'Coiffe Invisible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16463.png',
  },
  {
    id: 16173,
    name: 'Anneau Tissé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9306.png',
  },
  {
    id: 16174,
    name: 'Bottes Soyeuses',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11287.png',
  },
  {
    id: 16175,
    name: 'Coiffe de la Néfileuse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16464.png',
  },
  {
    id: 16176,
    name: 'Amulette des Huit Yeux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1268.png',
  },
  {
    id: 16177,
    name: 'Caparak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17342.png',
  },
  {
    id: 16178,
    name: 'Gaine Nyée',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10291.png',
  },
  {
    id: 16182,
    name: 'Obstructeur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151190.png',
  },
  {
    id: 16183,
    name: 'Obstructeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151191.png',
  },
  {
    id: 16184,
    name: 'Obstructeur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151192.png',
  },
  {
    id: 16185,
    name: 'Déserteur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151193.png',
  },
  {
    id: 16186,
    name: 'Déserteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151194.png',
  },
  {
    id: 16187,
    name: 'Déserteur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151195.png',
  },
  {
    id: 16188,
    name: 'Guérisseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151187.png',
  },
  {
    id: 16189,
    name: 'Guérisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151188.png',
  },
  {
    id: 16190,
    name: 'Guérisseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151189.png',
  },
  {
    id: 16191,
    name: 'Miraculé mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151181.png',
  },
  {
    id: 16192,
    name: 'Miraculé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151182.png',
  },
  {
    id: 16193,
    name: 'Miraculé majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151183.png',
  },
  {
    id: 16194,
    name: 'Enragé mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151172.png',
  },
  {
    id: 16195,
    name: 'Enragé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151173.png',
  },
  {
    id: 16196,
    name: 'Enragé majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151174.png',
  },
  {
    id: 16202,
    name: 'Érudit mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151169.png',
  },
  {
    id: 16203,
    name: 'Érudit',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151170.png',
  },
  {
    id: 16204,
    name: 'Érudit majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151171.png',
  },
  {
    id: 16209,
    name: 'Alliance des Forestiers',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9307.png',
  },
  {
    id: 16239,
    name: 'Printatanes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11288.png',
  },
  {
    id: 16240,
    name: 'Printanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9308.png',
  },
  {
    id: 16243,
    name: 'Cascadeur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151178.png',
  },
  {
    id: 16244,
    name: 'Cascadeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151179.png',
  },
  {
    id: 16245,
    name: 'Cascadeur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151180.png',
  },
  {
    id: 16246,
    name: 'Chanceux mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151175.png',
  },
  {
    id: 16247,
    name: 'Chanceux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151176.png',
  },
  {
    id: 16248,
    name: 'Chanceux majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151177.png',
  },
  {
    id: 16249,
    name: 'Fortification mineure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151247.png',
  },
  {
    id: 16250,
    name: 'Fortification',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151248.png',
  },
  {
    id: 16251,
    name: 'Fortification majeure',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151249.png',
  },
  {
    id: 16252,
    name: 'Dévastateur Terre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151217.png',
  },
  {
    id: 16253,
    name: 'Dévastateur Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151218.png',
  },
  {
    id: 16254,
    name: 'Dévastateur Terre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151219.png',
  },
  {
    id: 16255,
    name: 'Dévastateur Neutre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151223.png',
  },
  {
    id: 16256,
    name: 'Dévastateur Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151224.png',
  },
  {
    id: 16257,
    name: 'Dévastateur Neutre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151225.png',
  },
  {
    id: 16258,
    name: 'Dévastateur Feu mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151214.png',
  },
  {
    id: 16259,
    name: 'Dévastateur Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151215.png',
  },
  {
    id: 16260,
    name: 'Dévastateur Feu majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151216.png',
  },
  {
    id: 16262,
    name: 'Dévastateur Eau mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151211.png',
  },
  {
    id: 16263,
    name: 'Dévastateur Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151212.png',
  },
  {
    id: 16264,
    name: 'Dévastateur Eau majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151213.png',
  },
  {
    id: 16265,
    name: 'Dévastateur Air mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151220.png',
  },
  {
    id: 16266,
    name: 'Dévastateur Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151221.png',
  },
  {
    id: 16267,
    name: 'Dévastateur Air majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151222.png',
  },
  {
    id: 16274,
    name: 'Temporiseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151196.png',
  },
  {
    id: 16275,
    name: 'Temporiseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151197.png',
  },
  {
    id: 16281,
    name: 'Temporiseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151198.png',
  },
  {
    id: 16282,
    name: 'Étourdisseur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151199.png',
  },
  {
    id: 16283,
    name: 'Étourdisseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151200.png',
  },
  {
    id: 16284,
    name: 'Étourdisseur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151201.png',
  },
  {
    id: 16292,
    name: 'Évasif mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151229.png',
  },
  {
    id: 16293,
    name: 'Évasif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151230.png',
  },
  {
    id: 16294,
    name: 'Évasif majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151231.png',
  },
  {
    id: 16300,
    name: 'Cavaleur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151208.png',
  },
  {
    id: 16301,
    name: 'Cavaleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151209.png',
  },
  {
    id: 16302,
    name: 'Cavaleur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151210.png',
  },
  {
    id: 16303,
    name: 'Culbuteur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151205.png',
  },
  {
    id: 16305,
    name: 'Culbuteur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151206.png',
  },
  {
    id: 16306,
    name: 'Culbuteur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151207.png',
  },
  {
    id: 16308,
    name: 'Solide mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151250.png',
  },
  {
    id: 16309,
    name: 'Solide',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151251.png',
  },
  {
    id: 16310,
    name: 'Solide majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151252.png',
  },
  {
    id: 16311,
    name: 'Fonceur mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151226.png',
  },
  {
    id: 16312,
    name: 'Fonceur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151227.png',
  },
  {
    id: 16313,
    name: 'Fonceur majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151228.png',
  },
  {
    id: 16314,
    name: 'Carapace Terre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151238.png',
  },
  {
    id: 16315,
    name: 'Carapace Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151239.png',
  },
  {
    id: 16316,
    name: 'Carapace Terre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151240.png',
  },
  {
    id: 16318,
    name: 'Carapace Neutre mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151244.png',
  },
  {
    id: 16319,
    name: 'Carapace Neutre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151245.png',
  },
  {
    id: 16320,
    name: 'Carapace Neutre majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151246.png',
  },
  {
    id: 16321,
    name: 'Carapace Feu mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151235.png',
  },
  {
    id: 16322,
    name: 'Carapace Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151236.png',
  },
  {
    id: 16323,
    name: 'Carapace Feu majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151237.png',
  },
  {
    id: 16324,
    name: 'Carapace Eau mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151232.png',
  },
  {
    id: 16325,
    name: 'Carapace Eau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151233.png',
  },
  {
    id: 16326,
    name: 'Carapace Eau majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151234.png',
  },
  {
    id: 16327,
    name: 'Carapace Air mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151241.png',
  },
  {
    id: 16328,
    name: 'Carapace Air',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151242.png',
  },
  {
    id: 16329,
    name: 'Carapace Air majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151243.png',
  },
  {
    id: 16330,
    name: 'Vigoureux mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151202.png',
  },
  {
    id: 16331,
    name: 'Vigoureux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151203.png',
  },
  {
    id: 16332,
    name: 'Vigoureux majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151204.png',
  },
  {
    id: 16333,
    name: 'Remueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151254.png',
  },
  {
    id: 16335,
    name: 'Nomade',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151257.png',
  },
  {
    id: 16336,
    name: 'Observateur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151264.png',
  },
  {
    id: 16337,
    name: 'Sanguinaire mineur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151261.png',
  },
  {
    id: 16338,
    name: 'Sanguinaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151260.png',
  },
  {
    id: 16339,
    name: 'Sanguinaire majeur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/151259.png',
  },
  {
    id: 16500,
    name: 'Casque de Kardorim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16471.png',
  },
  {
    id: 16501,
    name: 'Cape de Kardorim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17346.png',
  },
  {
    id: 16502,
    name: 'Bracelet de Kardorim',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9309.png',
  },
  {
    id: 16503,
    name: 'Coiffe Antôme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16470.png',
  },
  {
    id: 16504,
    name: 'Cape Syché',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17345.png',
  },
  {
    id: 16505,
    name: 'Animulette',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1269.png',
  },
  {
    id: 16843,
    name: 'Sac à Main Renforcé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9243.png',
  },
  {
    id: 17012,
    name: 'Ceinture du chasseur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10292.png',
  },
  {
    id: 17013,
    name: 'Cocobottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11289.png',
  },
  {
    id: 17078,
    name: 'Dokoko',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23022.png',
  },
  {
    id: 17079,
    name: 'Masque Vaudou Tam',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16475.png',
  },
  {
    id: 17093,
    name: 'Cape de Moon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17348.png',
  },
  {
    id: 17094,
    name: 'Amulette de Moon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1270.png',
  },
  {
    id: 17096,
    name: 'Ceinture du Bretteur Céleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10293.png',
  },
  {
    id: 17097,
    name: 'Cape du Bretteur Céleste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17349.png',
  },
  {
    id: 17098,
    name: 'Barbe de Zatoïshwan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16473.png',
  },
  {
    id: 17099,
    name: 'Ceinture de Zatoïshwan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10294.png',
  },
  {
    id: 17103,
    name: 'Amulette Voldelor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1271.png',
  },
  {
    id: 17104,
    name: 'Ceinture Voldelor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10297.png',
  },
  {
    id: 17105,
    name: 'Bottes Voldelor',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11291.png',
  },
  {
    id: 17106,
    name: 'Cape de Kongoku',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17352.png',
  },
  {
    id: 17107,
    name: "Boucle d'oreille de Kongoku",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16478.png',
  },
  {
    id: 17108,
    name: 'Ceinture de Kongoku',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10296.png',
  },
  {
    id: 17109,
    name: 'Cape du Capitaine Pirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17350.png',
  },
  {
    id: 17110,
    name: 'Chapeau du Capitaine Pirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16474.png',
  },
  {
    id: 17111,
    name: 'Alliance du Capitaine Pirate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9310.png',
  },
  {
    id: 17119,
    name: 'Ceinture du K.O.',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10298.png',
  },
  {
    id: 17120,
    name: 'Amulette du K.O.',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1272.png',
  },
  {
    id: 17121,
    name: 'Bottes du K.O.',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11292.png',
  },
  {
    id: 17213,
    name: 'Bottes des 1001 Griffes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11290.png',
  },
  {
    id: 17214,
    name: 'Culotte des 1001 Griffes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10295.png',
  },
  {
    id: 17292,
    name: 'Bottes des Grocoricos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11295.png',
  },
  {
    id: 17293,
    name: 'Bottes des Redroz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11297.png',
  },
  {
    id: 17294,
    name: 'Bottes des Pamous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11294.png',
  },
  {
    id: 17295,
    name: 'Bottes des Zoblaks',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11296.png',
  },
  {
    id: 17300,
    name: 'Ceinture des Grocoricos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10300.png',
  },
  {
    id: 17301,
    name: 'Ceinture des Redroz',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10302.png',
  },
  {
    id: 17302,
    name: 'Ceinture des Pamous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10299.png',
  },
  {
    id: 17303,
    name: 'Ceinture des Zoblaks',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10301.png',
  },
  {
    id: 17448,
    name: 'Coiffe Ondamentale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16490.png',
  },
  {
    id: 17449,
    name: 'Cape Rimordiale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17359.png',
  },
  {
    id: 17450,
    name: 'Bottes Initiales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11303.png',
  },
  {
    id: 17451,
    name: "L'Élémenture",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10306.png',
  },
  {
    id: 17452,
    name: 'Anneau Riginel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9312.png',
  },
  {
    id: 17454,
    name: 'Cape Épinière',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17354.png',
  },
  {
    id: 17455,
    name: "Chapeau H'lnor",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16484.png',
  },
  {
    id: 17456,
    name: 'Souliers Pineux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11298.png',
  },
  {
    id: 17457,
    name: 'Anneau Welle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9311.png',
  },
  {
    id: 17487,
    name: 'Collier de Khan Karkass',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1273.png',
  },
  {
    id: 17488,
    name: 'Torque du Monarque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1274.png',
  },
  {
    id: 17495,
    name: 'Bottes de Marline',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11299.png',
  },
  {
    id: 17496,
    name: 'Bottes du Monarque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11301.png',
  },
  {
    id: 17502,
    name: 'Slip de Khan Karkass',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10303.png',
  },
  {
    id: 17503,
    name: 'Ceinture du Monarque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10304.png',
  },
  {
    id: 17504,
    name: 'Torque des 1001 Griffes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1276.png',
  },
  {
    id: 17506,
    name: 'Ceinture du Garde Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10305.png',
  },
  {
    id: 17507,
    name: 'Bottes du Garde Royal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11302.png',
  },
  {
    id: 17508,
    name: 'Collier de Lilotte',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1275.png',
  },
  {
    id: 17524,
    name: 'Fecaflip',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11003.png',
  },
  {
    id: 17527,
    name: 'Bouclier des 1001 Griffes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82131.png',
  },
  {
    id: 17572,
    name: 'Bottes du Roi Joueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11304.png',
  },
  {
    id: 17573,
    name: 'Couronne du Roi Joueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16491.png',
  },
  {
    id: 17574,
    name: 'Chevalière du Roi Joueur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9313.png',
  },
  {
    id: 17575,
    name: 'Bottes de la Dame du Hasard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11305.png',
  },
  {
    id: 17576,
    name: 'Collier de la Dame du Hasard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1277.png',
  },
  {
    id: 17577,
    name: 'Cape de la Dame du Hasard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17361.png',
  },
  {
    id: 17578,
    name: 'Bottes du Chalœil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11306.png',
  },
  {
    id: 17579,
    name: 'Casque du Chalœil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16492.png',
  },
  {
    id: 17580,
    name: 'Cape du Chalœil',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17362.png',
  },
  {
    id: 17581,
    name: 'Collier du Valet Veinard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1278.png',
  },
  {
    id: 17582,
    name: 'Gant du Valet Veinard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9314.png',
  },
  {
    id: 17583,
    name: 'Cape du Valet Veinard',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17363.png',
  },
  {
    id: 17584,
    name: "Cape d'Atcham",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17360.png',
  },
  {
    id: 17585,
    name: "Sandales d'Atcham",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11300.png',
  },
  {
    id: 17587,
    name: 'Col de Ush',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1279.png',
  },
  {
    id: 17588,
    name: 'Bottes de Ush',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11307.png',
  },
  {
    id: 17590,
    name: 'Cape des Matougarous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17364.png',
  },
  {
    id: 17591,
    name: 'Ceinture des Matougarous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10307.png',
  },
  {
    id: 17592,
    name: 'Anneau des Matougarous',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9315.png',
  },
  {
    id: 17593,
    name: 'Bottes du Pounicheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11308.png',
  },
  {
    id: 17594,
    name: 'Ceinture du Pounicheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10308.png',
  },
  {
    id: 17595,
    name: 'Scalp du Pounicheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16493.png',
  },
  {
    id: 17596,
    name: 'Bague des Ecaflipuces',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9316.png',
  },
  {
    id: 17597,
    name: 'Collier des Ecaflipuces',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1280.png',
  },
  {
    id: 17598,
    name: 'Cape des Ecaflipuces',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17365.png',
  },
  {
    id: 17733,
    name: 'Bottes Dragocourse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11309.png',
  },
  {
    id: 17734,
    name: 'Ceinture Dragocourse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10309.png',
  },
  {
    id: 17849,
    name: 'Sandalnéaires',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11316.png',
  },
  {
    id: 17997,
    name: 'Collier de Tourthon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1284.png',
  },
  {
    id: 17998,
    name: 'Anneau Crustique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9319.png',
  },
  {
    id: 18000,
    name: 'Masque de Koutoulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16499.png',
  },
  {
    id: 18001,
    name: 'Pendentif affamé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1285.png',
  },
  {
    id: 18002,
    name: 'Cape de Diondin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17369.png',
  },
  {
    id: 18003,
    name: 'Bottes Innommables',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11314.png',
  },
  {
    id: 18004,
    name: 'Amulette de Shokkoth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1286.png',
  },
  {
    id: 18005,
    name: 'Cape de Mantaze',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17370.png',
  },
  {
    id: 18006,
    name: 'Poulpagne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10313.png',
  },
  {
    id: 18007,
    name: 'Palmes Trithons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11315.png',
  },
  {
    id: 18008,
    name: 'Cape Indescriptible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17371.png',
  },
  {
    id: 18009,
    name: 'Menoture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10314.png',
  },
  {
    id: 18019,
    name: 'Ceintouse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10310.png',
  },
  {
    id: 18020,
    name: 'Tentassons',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11310.png',
  },
  {
    id: 18021,
    name: 'Chapoulpe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16495.png',
  },
  {
    id: 18022,
    name: 'Bottes de Meno',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11311.png',
  },
  {
    id: 18023,
    name: 'Casquette de Meno',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16496.png',
  },
  {
    id: 18024,
    name: 'Cape de Meno',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17367.png',
  },
  {
    id: 18025,
    name: "Amulette de l'Indicible",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1281.png',
  },
  {
    id: 18026,
    name: "Ceinture de l'Indicible",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10311.png',
  },
  {
    id: 18028,
    name: "Bottes de l'Indicible",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11312.png',
  },
  {
    id: 18029,
    name: 'Bague Trithon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9317.png',
  },
  {
    id: 18030,
    name: 'Bottes Trithon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11313.png',
  },
  {
    id: 18031,
    name: 'Masque Trithon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16497.png',
  },
  {
    id: 18032,
    name: 'Amulette Luminescente',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1282.png',
  },
  {
    id: 18033,
    name: 'Ceinture Luminescente',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10312.png',
  },
  {
    id: 18034,
    name: 'Cape Luminescente',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17368.png',
  },
  {
    id: 18035,
    name: 'Pendentif mignon de Koutoulou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1283.png',
  },
  {
    id: 18036,
    name: 'Casque Cyclopéen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16498.png',
  },
  {
    id: 18037,
    name: 'Anneau Rifique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9318.png',
  },
  {
    id: 18043,
    name: 'Dofus Abyssal',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23023.png',
  },
  {
    id: 18154,
    name: 'Chapeau Shushivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102480.png',
  },
  {
    id: 18155,
    name: 'Cape Shushivan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102520.png',
  },
  {
    id: 18229,
    name: 'Ceinturonce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10315.png',
  },
  {
    id: 18230,
    name: 'Amuronce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1287.png',
  },
  {
    id: 18423,
    name: 'Cape Ouroboulos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17374.png',
  },
  {
    id: 18424,
    name: 'Anneau Ouroboulos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9321.png',
  },
  {
    id: 18425,
    name: 'Bottes Ouroboulos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11317.png',
  },
  {
    id: 18426,
    name: 'Cape du Désert',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17375.png',
  },
  {
    id: 18427,
    name: 'Coiffennex',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16505.png',
  },
  {
    id: 18428,
    name: 'String Léolhyène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10317.png',
  },
  {
    id: 18431,
    name: 'Capterre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17373.png',
  },
  {
    id: 18432,
    name: 'Cascterre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16503.png',
  },
  {
    id: 18433,
    name: 'Cacture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10316.png',
  },
  {
    id: 18434,
    name: "Sombrero d'El Piko",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16504.png',
  },
  {
    id: 18435,
    name: "Anneau d'El Piko",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9320.png',
  },
  {
    id: 18436,
    name: "Amulette d'El Piko",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1288.png',
  },
  {
    id: 18439,
    name: 'Le Dorado',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16506.png',
  },
  {
    id: 18523,
    name: 'Boule de Nowel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16507.png',
  },
  {
    id: 18529,
    name: 'Lainture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10318.png',
  },
  {
    id: 18530,
    name: 'Chaussettenlaine',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11318.png',
  },
  {
    id: 18584,
    name: 'Casquoporth',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16511.png',
  },
  {
    id: 18585,
    name: 'Ceintrémorse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10320.png',
  },
  {
    id: 18586,
    name: 'Crolier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1290.png',
  },
  {
    id: 18587,
    name: 'Chaussquales',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11321.png',
  },
  {
    id: 18588,
    name: 'Capikténia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17379.png',
  },
  {
    id: 18589,
    name: 'Veranneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9324.png',
  },
  {
    id: 18590,
    name: 'Némès de Tal Kasha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16509.png',
  },
  {
    id: 18591,
    name: 'Chevelure de Tal Kasha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17377.png',
  },
  {
    id: 18592,
    name: 'Sandales de Tal Kasha',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11319.png',
  },
  {
    id: 18593,
    name: 'Bottistik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11320.png',
  },
  {
    id: 18594,
    name: 'Baguistik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9322.png',
  },
  {
    id: 18595,
    name: 'Torquistik',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1289.png',
  },
  {
    id: 18596,
    name: 'Capuche de Moum-Ra',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16510.png',
  },
  {
    id: 18597,
    name: 'Ankhape',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17378.png',
  },
  {
    id: 18598,
    name: 'Pagne du Rykaon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10319.png',
  },
  {
    id: 18599,
    name: 'Anneauræus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9323.png',
  },
  {
    id: 18615,
    name: 'Anneau Nos',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9325.png',
  },
  {
    id: 18616,
    name: 'Bottes Harcie',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11322.png',
  },
  {
    id: 18617,
    name: 'Cape Hoile',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17381.png',
  },
  {
    id: 18621,
    name: 'Chapeau Devin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16514.png',
  },
  {
    id: 18622,
    name: 'Ceinture Leumant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10321.png',
  },
  {
    id: 18639,
    name: 'Ceinture du Molosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10322.png',
  },
  {
    id: 18640,
    name: 'Amulette du Molosse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1292.png',
  },
  {
    id: 18659,
    name: 'Bouclier en Mousse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82010.png',
  },
  {
    id: 18660,
    name: 'Coupe de Dragokart',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82084.png',
  },
  {
    id: 18661,
    name: 'Bouclier Aerdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82030.png',
  },
  {
    id: 18662,
    name: 'Bouclier Feudala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82033.png',
  },
  {
    id: 18663,
    name: 'Bouclier Terrdala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82032.png',
  },
  {
    id: 18664,
    name: 'Bouclier du Craqueleur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82023.png',
  },
  {
    id: 18665,
    name: 'Bouclier de Bowisse',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82021.png',
  },
  {
    id: 18666,
    name: 'Bouclier du Bouftou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82020.png',
  },
  {
    id: 18667,
    name: 'Bouclier du Chouque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82018.png',
  },
  {
    id: 18668,
    name: 'Bouclier Volant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82017.png',
  },
  {
    id: 18669,
    name: 'Kloume',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82015.png',
  },
  {
    id: 18670,
    name: 'Bouclier du Captain Amakna',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82014.png',
  },
  {
    id: 18671,
    name: 'Derma Tho',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82003.png',
  },
  {
    id: 18672,
    name: 'Bouclier du Bawbawe',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82002.png',
  },
  {
    id: 18673,
    name: 'Le Karde Cœur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82007.png',
  },
  {
    id: 18674,
    name: 'Bouclier des Brigandins',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82009.png',
  },
  {
    id: 18675,
    name: 'Bouclier du Mont Kipou',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82001.png',
  },
  {
    id: 18676,
    name: 'Bouclier du Bûcheron',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82004.png',
  },
  {
    id: 18677,
    name: "Cadran d'Eau",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82025.png',
  },
  {
    id: 18678,
    name: 'Cadran de Terre',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82027.png',
  },
  {
    id: 18679,
    name: "Cadran d'Air",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82026.png',
  },
  {
    id: 18680,
    name: 'Cadran de Feu',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82024.png',
  },
  {
    id: 18681,
    name: 'Bouclier Pandawa',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82022.png',
  },
  {
    id: 18682,
    name: 'Bouclier Abraknyde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82019.png',
  },
  {
    id: 18683,
    name: "Bouclier d'Asse",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82016.png',
  },
  {
    id: 18684,
    name: 'Bouclier en Slip',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82013.png',
  },
  {
    id: 18685,
    name: 'Bouclier du Sadida',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82012.png',
  },
  {
    id: 18686,
    name: 'Bouclier Ventaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82011.png',
  },
  {
    id: 18687,
    name: 'Bouclier Akwadala',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82031.png',
  },
  {
    id: 18688,
    name: 'Bouclier Taverne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82006.png',
  },
  {
    id: 18689,
    name: 'Ftalmo',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82005.png',
  },
  {
    id: 18690,
    name: 'Bouclier de Sidimote',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82008.png',
  },
  {
    id: 18691,
    name: "Bouclier Fi'Squale",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82035.png',
  },
  {
    id: 18692,
    name: 'Bouclier précieux',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82167.png',
  },
  {
    id: 18693,
    name: 'Écorce de Brouce',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82166.png',
  },
  {
    id: 18694,
    name: 'Roncier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82165.png',
  },
  {
    id: 18695,
    name: 'La Rondelle',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82164.png',
  },
  {
    id: 18696,
    name: 'Ambrouclier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82159.png',
  },
  {
    id: 18697,
    name: 'Jadis',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82168.png',
  },
  {
    id: 18698,
    name: 'Bouclier du serrurier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82148.png',
  },
  {
    id: 18699,
    name: 'Carapar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82149.png',
  },
  {
    id: 18700,
    name: 'Quatre-feuilles',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82150.png',
  },
  {
    id: 18701,
    name: 'Sept ans de malheur',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82151.png',
  },
  {
    id: 18702,
    name: 'Détourné',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82152.png',
  },
  {
    id: 18703,
    name: 'Bivalve',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82160.png',
  },
  {
    id: 18709,
    name: 'Bouclier à hélice',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82161.png',
  },
  {
    id: 18710,
    name: 'Bouclier du Chafer fantassin',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82153.png',
  },
  {
    id: 18711,
    name: 'Bouclier cubiste',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82162.png',
  },
  {
    id: 18712,
    name: 'Bouclier alvéolé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82163.png',
  },
  {
    id: 18713,
    name: 'Bouclier du Chef Crocodaille',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82154.png',
  },
  {
    id: 18714,
    name: 'Bouclier du tournesol sauvage',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82155.png',
  },
  {
    id: 18715,
    name: 'Bouclier du Stalak',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82156.png',
  },
  {
    id: 18718,
    name: 'Bouclier du Cycloïde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82157.png',
  },
  {
    id: 18774,
    name: 'Ceinture du Comte Razof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10323.png',
  },
  {
    id: 18775,
    name: 'Chaussons du Comte Razof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11323.png',
  },
  {
    id: 18776,
    name: 'Chapeau du Comte Razof',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16516.png',
  },
  {
    id: 18777,
    name: 'Cape Tif',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17383.png',
  },
  {
    id: 18778,
    name: 'Chaussures Face',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11324.png',
  },
  {
    id: 18779,
    name: 'Amulette Hale',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1293.png',
  },
  {
    id: 18808,
    name: 'Magture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10326.png',
  },
  {
    id: 19075,
    name: "Masque d'Anerice",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16524.png',
  },
  {
    id: 19076,
    name: "Cape d'Anerice",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17389.png',
  },
  {
    id: 19077,
    name: "Bouclier d'Anerice",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82173.png',
  },
  {
    id: 19078,
    name: 'Goulano',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9328.png',
  },
  {
    id: 19079,
    name: 'Goulbottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11326.png',
  },
  {
    id: 19080,
    name: 'Goulclier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82172.png',
  },
  {
    id: 19081,
    name: 'Casque du Scorbute',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16520.png',
  },
  {
    id: 19082,
    name: 'Cape du Scorbute',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17386.png',
  },
  {
    id: 19083,
    name: 'Amulette du Scorbute',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1296.png',
  },
  {
    id: 19084,
    name: 'Bouclier de Choudini',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82171.png',
  },
  {
    id: 19085,
    name: 'Bottes de Choudini',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11325.png',
  },
  {
    id: 19086,
    name: 'Masque de Choudini',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16521.png',
  },
  {
    id: 19087,
    name: 'Masque Riktus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16522.png',
  },
  {
    id: 19088,
    name: 'Cape Riktus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17387.png',
  },
  {
    id: 19089,
    name: 'Anneau Riktus',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9327.png',
  },
  {
    id: 19090,
    name: 'Coiffe du Muloubar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16523.png',
  },
  {
    id: 19091,
    name: 'Cape du Muloubar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17388.png',
  },
  {
    id: 19092,
    name: 'Pagne du Muloubar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10325.png',
  },
  {
    id: 19116,
    name: 'Bouclier Invisible',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82177.png',
  },
  {
    id: 19165,
    name: 'Masque mortuaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16324.png',
  },
  {
    id: 19241,
    name: 'Amulette du Cœur Vaillant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1298.png',
  },
  {
    id: 19242,
    name: 'Bottes du Cœur Vaillant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11328.png',
  },
  {
    id: 19243,
    name: 'Cape du Cœur Vaillant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17392.png',
  },
  {
    id: 19244,
    name: 'Amulette du Cœur Saignant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1299.png',
  },
  {
    id: 19245,
    name: 'Bottes du Cœur Saignant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11329.png',
  },
  {
    id: 19246,
    name: 'Cape du Cœur Saignant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17393.png',
  },
  {
    id: 19247,
    name: "Ceinture de l'Esprit Salvateur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10327.png',
  },
  {
    id: 19248,
    name: "Bottes de l'Esprit Salvateur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11330.png',
  },
  {
    id: 19249,
    name: "Masque de l'Esprit Salvateur",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16529.png',
  },
  {
    id: 19250,
    name: "Ceinture de l'Esprit Malsain",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10328.png',
  },
  {
    id: 19251,
    name: "Bottes de l'Esprit Malsain",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11331.png',
  },
  {
    id: 19252,
    name: "Masque de l'Esprit Malsain",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16530.png',
  },
  {
    id: 19253,
    name: "Cape de l'Œil Attentif",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17394.png',
  },
  {
    id: 19254,
    name: "Capuche de l'Œil Attentif",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16531.png',
  },
  {
    id: 19255,
    name: "Amulette de l'Œil Attentif",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1300.png',
  },
  {
    id: 19256,
    name: "Cape de l'Œil Putride",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17395.png',
  },
  {
    id: 19257,
    name: "Capuche de l'Œil Putride",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16532.png',
  },
  {
    id: 19258,
    name: "Amulette de l'Œil Putride",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1301.png',
  },
  {
    id: 19259,
    name: 'Bouclier Bontarien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82182.png',
  },
  {
    id: 19260,
    name: 'Bouclier Brâkmarien',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82183.png',
  },
  {
    id: 19261,
    name: "Amulette d'Ilyzaelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1297.png',
  },
  {
    id: 19262,
    name: "Casque d'Ilyzaelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16527.png',
  },
  {
    id: 19263,
    name: "Bouclier d'Ilyzaelle",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82181.png',
  },
  {
    id: 19264,
    name: 'Alliance Brûlâme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9329.png',
  },
  {
    id: 19265,
    name: 'Pompes Funèbres',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11327.png',
  },
  {
    id: 19266,
    name: 'Masque Brûlâme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16528.png',
  },
  {
    id: 19398,
    name: 'Dofus Forgelave',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23024.png',
  },
  {
    id: 19524,
    name: 'Cape Colorivante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102579.png',
  },
  {
    id: 19525,
    name: 'Bouclier Colorivant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102580.png',
  },
  {
    id: 19526,
    name: 'Chapeau Colorivant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/102560.png',
  },
  {
    id: 19585,
    name: 'Chaussures Ardentes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11332.png',
  },
  {
    id: 19586,
    name: 'Masque Ardent',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16537.png',
  },
  {
    id: 19589,
    name: 'Cape Ardente',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17399.png',
  },
  {
    id: 19590,
    name: 'Amulette Volcanique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1302.png',
  },
  {
    id: 19591,
    name: 'Sac Volcanique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17400.png',
  },
  {
    id: 19592,
    name: 'Sabots Volcaniques',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11333.png',
  },
  {
    id: 19595,
    name: 'Heaume Oplate',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16538.png',
  },
  {
    id: 19596,
    name: 'Ceinture Gence',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10329.png',
  },
  {
    id: 19597,
    name: 'Lavanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9330.png',
  },
  {
    id: 19598,
    name: 'Bouclier de Solar',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82188.png',
  },
  {
    id: 19599,
    name: 'Sangle Oriole',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10330.png',
  },
  {
    id: 19600,
    name: 'Chapeau de Tournoyé',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16539.png',
  },
  {
    id: 19601,
    name: 'Cape de Crânonier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17401.png',
  },
  {
    id: 19602,
    name: 'Culotte de Bethel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10331.png',
  },
  {
    id: 19603,
    name: 'Chaussons de Macrab',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11334.png',
  },
  {
    id: 19604,
    name: 'Masque de Funespadon',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16540.png',
  },
  {
    id: 19607,
    name: 'Cape Solution',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17402.png',
  },
  {
    id: 19608,
    name: 'Anneau Toriété',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9331.png',
  },
  {
    id: 19609,
    name: 'Collier Rophante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1303.png',
  },
  {
    id: 19610,
    name: 'Bottes Honyme',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11335.png',
  },
  {
    id: 19622,
    name: "Anneau de l'Audacieux",
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9332.png',
  },
  {
    id: 19629,
    name: 'Dofus Argenté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23025.png',
  },
  {
    id: 19976,
    name: 'Ceinture en Grithril',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10332.png',
  },
  {
    id: 19977,
    name: 'Anneau en Grithril',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9333.png',
  },
  {
    id: 19978,
    name: 'Casque en Grithril',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16546.png',
  },
  {
    id: 19979,
    name: 'Cape Martegel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17410.png',
  },
  {
    id: 19980,
    name: 'Masquegel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16547.png',
  },
  {
    id: 19981,
    name: 'Amulette Martegel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1304.png',
  },
  {
    id: 19982,
    name: 'Casque Volkorne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16548.png',
  },
  {
    id: 19983,
    name: 'Ceinture Volkorne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10333.png',
  },
  {
    id: 19984,
    name: 'Amulette Volkorne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1305.png',
  },
  {
    id: 19985,
    name: 'Anneau Volkorne',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10334.png',
  },
  {
    id: 20286,
    name: 'Dofus Argenté Scintillant',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23027.png',
  },
  {
    id: 20357,
    name: 'Droiture de Fallanster',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82212.png',
  },
  {
    id: 20358,
    name: 'Trompe-la-Mort',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82211.png',
  },
  {
    id: 20359,
    name: 'Couronne de Brâm Barbe-Monde',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16555.png',
  },
  {
    id: 20360,
    name: 'Diadème de Ganymède',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16564.png',
  },
  {
    id: 20361,
    name: 'Bravoure de Rykke Errel',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17418.png',
  },
  {
    id: 20362,
    name: 'Cape de Jahash Jurgen',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17423.png',
  },
  {
    id: 20363,
    name: 'Bottes de Mille Lieues',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11338.png',
  },
  {
    id: 20364,
    name: 'Bottes du Cul Botté',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11337.png',
  },
  {
    id: 20365,
    name: 'Audace de Dodge',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10335.png',
  },
  {
    id: 20366,
    name: 'Ceinture de Dame Jhessica',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10336.png',
  },
  {
    id: 20375,
    name: 'Bulbijevan',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/18169.png',
  },
  {
    id: 20463,
    name: 'Sandales Paztek',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11336.png',
  },
  {
    id: 20464,
    name: 'Cape Paztek',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17416.png',
  },
  {
    id: 20465,
    name: 'Masque Paztek',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16554.png',
  },
  {
    id: 20833,
    name: 'Dofus Cacao',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23029.png',
  },
  {
    id: 20850,
    name: 'Mawabottes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11340.png',
  },
  {
    id: 20851,
    name: 'Ceinture Amincissante',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10337.png',
  },
  {
    id: 20852,
    name: 'Rondelle de Waddict',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9336.png',
  },
  {
    id: 20924,
    name: 'Amulette des Chocomanciens',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1308.png',
  },
  {
    id: 20925,
    name: 'Ceinture des Chocomanciens',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10338.png',
  },
  {
    id: 20926,
    name: 'Bouclier des Chocomanciens',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82228.png',
  },
  {
    id: 20956,
    name: 'Masque de Kao',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16577.png',
  },
  {
    id: 20981,
    name: 'Croquasque',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16576.png',
  },
  {
    id: 20982,
    name: 'Bottes Croquantes',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11341.png',
  },
  {
    id: 20983,
    name: 'Sac à Croquer',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81069.png',
  },
  {
    id: 20987,
    name: 'Dofus Cacao',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/23029.png',
  },
  {
    id: 21009,
    name: 'Bouteille de chronoxygène',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/81064.png',
  },
  {
    id: 21010,
    name: 'Scaphandre chronomagique',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16338.png',
  },
  {
    id: 21223,
    name: 'Crocanneau',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9339.png',
  },
  {
    id: 21224,
    name: 'Croture',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/10340.png',
  },
  {
    id: 21225,
    name: 'Croclier',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/82235.png',
  },
  {
    id: 21226,
    name: 'Bottes Lunaires',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/11342.png',
  },
  {
    id: 21227,
    name: 'Collier Lunaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/1309.png',
  },
  {
    id: 21228,
    name: 'Anneau Lunaire',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/9338.png',
  },
  {
    id: 21230,
    name: 'Carapace de Torkélonia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/17436.png',
  },
  {
    id: 21235,
    name: 'Corne de Torkélonia',
    imgUrl:
      'https://s.ankama.com/www/static.ankama.com/dofus/www/game/items/200/16581.png',
  },
];

const consumableDatas: any = consumables.map((consumable) => {
  const charges = Math.floor(Math.random() * 10) + 1;
  return {
    _id: new mongoose.Types.ObjectId(
      `5cabe64dcf0d4447fa6${String('00000' + consumable.id).slice(-5)}`,
    ),
    name: consumable.name,
    imgUrl: consumable.imgUrl,
    price: Math.floor(Math.random() * 100) + 1,
    type: 'consumable',
    charges,
    usedCharges: charges,
  };
});

const equipmentDatas: any = equipments.map((equipment) => {
  return {
    _id: new mongoose.Types.ObjectId(
      `5cabe64dcf0d4447fa${String('000000' + equipment.id).slice(-6)}`,
    ),
    name: equipment.name,
    imgUrl: equipment.imgUrl,
    price: Math.floor(Math.random() * 100) + 1,
    type: 'equipment',
    durability: Math.floor(Math.random() * 100) + 1,
    daysInUse: Math.floor(Math.random() * 100) + 1,
    repairTime: (Math.random() * 10 + 1).toFixed(1),
  };
});

export = consumableDatas.concat(equipmentDatas);
