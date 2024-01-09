import { Request, Response } from "express";

import { ListAdsService } from "../services/list-ads.service";

export class ListAdsController {
  async get(request: Request, response: Response) {
    const service = new ListAdsService();

    const ads = await service.execute(request.params.id);

    return response.status(200).json(ads);
  }
}