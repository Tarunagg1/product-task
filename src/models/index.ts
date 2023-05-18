'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
    console.log(config);

    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    console.log(config);

    sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs.readdirSync(__dirname)
    .filter((file: string) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
    })
    .forEach((file: any) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        // console.log(model);
        db[model.name] = model;
    });

// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//         db[modelName].associate(db);
//     }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.authenticate().then(function () {
    if (sequelize.sync({ force: false }))
        console.log('kiok');
}).catch(function (error) {
    console.log(error);
});

console.log("db", db);

export default db;
