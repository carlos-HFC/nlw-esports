import { prisma } from "../prisma";
import { convertMinutesToHourString } from "../utils";

export class ListAdsService {
  async execute(gameId: string) {
    const ads = await prisma.ad.findMany({
      where: {
        gameId
      },
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const data = [];

    for (const item of ads) {
      data.push({
        ...item,
        weekDays: item.weekDays.split(','),
        hourStart: convertMinutesToHourString(item.hourStart),
        hourEnd: convertMinutesToHourString(item.hourEnd),
      });
    }

    return data;
  }
}