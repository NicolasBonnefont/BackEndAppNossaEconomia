import  knex from 'knex'
import {production} from '../../knexfile'


const db = knex(production)

export default db