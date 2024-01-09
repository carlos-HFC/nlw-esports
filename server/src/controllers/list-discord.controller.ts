import { Request, Response } from "express";

import { ListDiscordService } from "../services/list-discord.service";

export class ListDiscordController {
  async get(request: Request, response: Response) {
    const service = new ListDiscordService();

    try {
      const discord = await service.execute(request.params.id);

      return response.status(200).json(discord);
    } catch (error) {
      return response.status(404).json({
        error: 'NOT_FOUND',
        message: "Discord not found"
      });
    }
  }
}