// eslint-disable-next-line @typescript-eslint/no-var-requires
const mongoose = require('mongoose');

const specialities = [
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e1'),
    name: 'archers',
    description: 'Arc...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e2'),
    name: 'barbares',
    description: 'hache...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e3'),
    name: 'paladins',
    description: 'épee...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e4'),
    name: 'mages',
    description: 'baton...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e5'),
    name: 'arcaniques',
    description: '...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e6'),
    name: 'prêtres',
    description: 'croix...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e7'),
    name: 'alchimistes',
    description: 'potions...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e8'),
    name: 'forgerons',
    description: 'repare...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5e9'),
    name: 'enchanteurs',
    description: 'enchante...',
  },
  {
    _id: new mongoose.Types.ObjectId('5cabe64dcf0d4447fa60f5f1'),
    name: 'messagers',
    description: 'envoie des pigeons...',
  },
];

export = specialities;
