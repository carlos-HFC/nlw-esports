import { ImageSourcePropType } from "react-native";

export type GameCardType = {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
};

export type DuoType = {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameCardType;
    }
  }
}