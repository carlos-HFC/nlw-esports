import { CreateAd } from "../@types";
import { prisma } from "../prisma";
import { convertHourStringToMinutes } from "../utils";

export class CreateAdService {
  async execute(id: string, data: CreateAd) {
    const ad = await prisma.ad.create({
      data: {
        gameId: id,
        weekDays: data.weekDays.join(","),
        name: data.name,
        yearsPlaying: data.yearsPlaying,
        discord: data.discord,
        hourStart: convertHourStringToMinutes(data.hourStart),
        hourEnd: convertHourStringToMinutes(data.hourEnd),
        useVoiceChannel: data.useVoiceChannel,
      }
    });

    return ad
  }
}