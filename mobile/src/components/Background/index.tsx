import { ImageBackground } from 'react-native'; //rnbc para construir a estrutura automatica

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
    source={backgroundImg}
    defaultSource={backgroundImg}
    style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}