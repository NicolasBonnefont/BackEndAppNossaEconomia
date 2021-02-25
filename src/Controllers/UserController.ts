import db from '../database'
import { Request, Response } from 'express'

class UserController {

  async BuscaUsuario(request: Request, response: Response) {
    try {
      const teste =  await db('clifor')
      return response.json(teste)
    } catch (error) {
      return response.json(error)
    }

  }

}

export { UserController }

