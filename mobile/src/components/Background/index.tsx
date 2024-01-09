import { PropsWithChildren } from "react";
import { ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface BackgroundProps extends PropsWithChildren {
}

export function Background(props: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {props.children}
    </ImageBackground>
  );
}