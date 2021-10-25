import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(request: Request, response: Response) {
    
    const { user_id } = request;

    const service = new ProfileUserService();

    console.log("#############################################")

    const result = await service.execute(user_id);

    console.log("################################### Resultado", result)

    return response.json(result);
  }
}

export { ProfileUserController };