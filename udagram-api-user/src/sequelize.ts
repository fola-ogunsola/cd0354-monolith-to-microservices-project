import { Sequelize } from 'sequelize-typescript';
import {Dialect} from 'sequelize';
import {config} from './config/config';



const dbDriver = config.dialect as Dialect
const dbName = config.database as string
const dbUser = config.username as string
const dbHost = config.host
const dbPassword = config.password

export const sequelize = new Sequelize({
  dialect: dbDriver,
  host: dbHost,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  logging: true
});