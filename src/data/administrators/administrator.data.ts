// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const salt = bcrypt.genSaltSync(10);

const administrators = [
  {
    _id: new mongoose.Types.ObjectId("61eac838f7d072395ca92e94"),
    username: 'admin',
    email: 'valide@email.com',
    password: bcrypt.hashSync('password-123', salt),
    wallet: 6000000,
    items: [
      new mongoose.Types.ObjectId("5cabe64dcf0d4447fa600281"),
      new mongoose.Types.ObjectId("5cabe64dcf0d4447fa000070"),
    ],
  },
];

export = administrators;
