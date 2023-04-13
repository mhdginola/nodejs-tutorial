import { Sequelize } from 'sequelize';

const db = new Sequelize('clean_architecture', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
