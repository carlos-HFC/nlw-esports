import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Text } from "react-native";

import { GameCardType } from "../../@types";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface GameCardProps extends TouchableOpacityProps {
  data: GameCardType;
}

export function GameCard(props: GameCardProps) {
  return (
    <TouchableOpacity
      {...props}
      style={styles.container}
    >
      <ImageBackground
        style={styles.cover}
        source={{ uri: props.data.bannerUrl }}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {props.data.title}
          </Text>
          <Text style={styles.ads}>
            {props.data._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}