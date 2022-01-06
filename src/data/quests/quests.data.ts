const mongoose = require('mongoose');

const quests = [
  {
    request: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e1'),
    groups: [
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e1'),
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e2'),
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e8'),
    ],
  },
  {
    request: new mongoose.Types.ObjectId('9cabe64dcf0d4447fa60f5e2'),
    groups: [
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e3'),
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e2'),
      new mongoose.Types.ObjectId('7cabe64dcf0d4447fa60f5e9'),
    ],
  },
];

export = quests;
