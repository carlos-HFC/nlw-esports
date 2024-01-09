import { Entypo } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";

import { DuoInfo } from "../DuoInfo";

import { DuoType } from "../../@types";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoCardProps {
  data: DuoType;
  onConnect(): void;
}

export function DuoCard(props: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={props.data?.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${props.data?.yearsPlaying} anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${props.data?.weekDays.length} dias \u2022 ${props.data?.hourStart} - ${props.data?.hourEnd}`}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={props.data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={props.data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={props.onConnect}
      >
        <Entypo
          name="game-controller"
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}