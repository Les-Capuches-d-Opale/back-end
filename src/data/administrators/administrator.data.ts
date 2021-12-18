// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const administrators = [
  {
    username: 'admin',
    email: 'valide@email.com',
    password: bcrypt.hashSync('password-123', salt),
  },
];

export = administrators;
