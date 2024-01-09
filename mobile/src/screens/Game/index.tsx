import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Background } from "../../components/Background";
import { DuoCard } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";
import { Header } from "../../components/Header";

import { DuoType, GameCardType } from "../../@types";

import logoImage from '../../assets/logo.png';

import { styles } from "./styles";
import { THEME } from "../../theme";

export function Game() {
  const [duos, setDuos] = useState<DuoType[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");

  const navigation = useNavigation();

  const route = useRoute();
  const game = route.params as GameCardType;

  useEffect(() => {
    fetch(`http://192.168.0.22:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []);

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.22:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImage}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Header
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          style={styles.containerList}
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected("")}
        />
      </View>
    </Background>
  );
}