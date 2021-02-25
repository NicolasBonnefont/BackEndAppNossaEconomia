// Update with your config settings.
require('dotenv').config()

export const production = {
  
    client: process.env.DB_CONNECTION,
    connection: {
      host:process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
    }
}


/*
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=numsey
DB_DATABASE=awetalocal
*/