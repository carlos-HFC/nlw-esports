import { Request, Response } from "express";

import { CreateAdService } from "../services/create-ad.service";

export class CreateAdController {
  async post(request: Request, response: Response) {
    const service = new CreateAdService();

    const ads = await service.execute(request.params.id, request.body);

    return response.status(201).json(ads);
  }
}