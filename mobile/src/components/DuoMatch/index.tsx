import { MaterialIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useState } from "react";
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";

import { Header } from "../Header";

import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose(): void;
}

export function DuoMatch(props: DuoMatchProps) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopying(true);

    await Clipboard.setStringAsync(props.discord);

    Alert.alert("Discord copiado!", "Usuário copiado para você colar no Discord e encontrá-lo");

    setIsCopying(false);
  }

  return (
    <Modal
      transparent
      statusBarTranslucent
      {...props}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={props.onClose}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <MaterialIcons
            name="check-circle-outline"
            size={64}
            color={THEME.COLORS.SUCCESS}
          />

          <Header
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              {isCopying
                ? <ActivityIndicator color={THEME.COLORS.PRIMARY} />
                : props.discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}