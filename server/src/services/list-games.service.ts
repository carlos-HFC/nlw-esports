import { prisma } from "../prisma";

export class ListGamesService {
  async execute() {
    const games = await prisma.game.findMany({
      include: {
        _count: {
          select: {
            ads: true
          }
        }
      }
    });

    return games;
  }
}