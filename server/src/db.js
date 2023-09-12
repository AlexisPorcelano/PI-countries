require("dotenv").config();
const { Sequelize } = require("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST,} = process.env;
const actiModel = require('./models/Activity');
const countryModel = require('./models/Country')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
  native: false
});

console.log(`DB_USER: ${DB_USER}`);
console.log(`DB_PASSWORD: ${DB_PASSWORD}`);
console.log(`DB_HOST: ${DB_HOST}`);


actiModel(sequelize)
countryModel(sequelize)

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: 'CountryXActivity'})

Activity.belongsToMany(Country, {through: 'CountryXActivity'})

module.exports = {
  Country,
  Activity,
  conn: sequelize, 
};