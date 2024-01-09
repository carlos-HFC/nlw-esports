import { Request, Response } from "express";

import { ListGamesService } from "../services/list-games.service";

export class ListGamesController {
  async get(_: Request, response: Response) {
    const service = new ListGamesService();

    const games = await service.execute();

    return response.status(200).json(games);
  }
}