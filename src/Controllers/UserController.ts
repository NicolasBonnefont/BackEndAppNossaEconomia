import db from '../database'
import { Request, Response } from 'express'

class UserController {

  async BuscaUsuario(request: Request, response: Response) {
    try {
      const teste =  await db('clifor')
      console.log(process.env.DB_CONNECTION)
      return response.json(teste)
    } catch (error) {
      return response.json(error)
    }

  }

}

export { UserController }

