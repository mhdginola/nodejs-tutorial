import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'clean_architecture',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});