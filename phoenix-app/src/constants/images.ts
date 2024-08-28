// src/constants/images.ts
import { Platform } from 'react-native';

// Adjust paths based on platform
const getImageSource = (path: string) => {
  if (Platform.OS === 'web') {
    return require(`./web/${path}`);
  } else {
    return require(`./native/${path}`);
  }
};

export const someImage = getImageSource('some-image.png');
