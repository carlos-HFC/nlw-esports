import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";

import { GameCardType } from "../../@types";

import logoImage from '../../assets/logo.png';

import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardType[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.0.22:3333/games")
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  function handleOpenGame(game: GameCardType) {
    navigation.navigate('game', game);
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={logoImage}
          style={styles.logo}
        />

        <Header
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}