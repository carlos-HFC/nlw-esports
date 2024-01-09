import { prisma } from "../prisma";

export class ListDiscordService {
  async execute(id: string) {
    const ad = await prisma.ad.findUniqueOrThrow({
      where: {
        id
      },
      select: {
        discord: true
      },
    });

    return ad;
  }
}