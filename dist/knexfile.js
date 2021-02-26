"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = void 0;
// Update with your config settings.
require('dotenv').config();
exports.production = {
    client: process.env.DB_CONNECTION,
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    }
};
