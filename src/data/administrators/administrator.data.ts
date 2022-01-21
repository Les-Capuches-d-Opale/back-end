// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const mongoose = require('mongoose');

const administrators = [
  {
    _id: new mongoose.Types.ObjectId('5e9f8f8f9c9d440000caaaaa'),
    username: 'admin',
    email: 'valide@email.com',
    password: bcrypt.hashSync('password-123', salt),
    wallet: 600000000,
    items: [new mongoose.Types.ObjectId('5cabe64dcf0d4447fa600281')],
  },
];

export = administrators;
