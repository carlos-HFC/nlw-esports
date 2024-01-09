import { Router } from "express";

import { CreateAdController } from "../controllers/create-ad.controller";
import { ListAdsController } from "../controllers/list-ads.controller";
import { ListDiscordController } from "../controllers/list-discord.controller";
import { ListGamesController } from "../controllers/list-games.controller";

export const router = Router();

const listGamesController = new ListGamesController();
const listAdsController = new ListAdsController();
const listDiscordController = new ListDiscordController();
const createAdController = new CreateAdController();

router.get('/games', listGamesController.get);
router.get('/games/:id/ads', listAdsController.get);
router.get('/ads/:id/discord', listDiscordController.get);
router.post('/games/:id/ads', createAdController.post);