// src/components/PlaylistsList.tsx
import { Platform, StyleSheet, Text, View, Image as RNImage } from 'react-native';
import FastImage from 'react-native-fast-image'; // Only used for native platforms

const ImageComponent = Platform.OS === 'web' ? RNImage : FastImage;

export const PlaylistListItem = ({ playlist }) => {
  return (
    <TouchableHighlight activeOpacity={0.8}>
      <View style={styles.playlistItemContainer}>
        <View>
          <ImageComponent
            source={{ uri: playlist.artworkPreview }}
            style={styles.playlistArtworkImage}
          />
        </View>

        <View style={styles.playlistTextContainer}>
          <Text numberOfLines={1} style={styles.playlistNameText}>
            {playlist.name}
          </Text>

          <AntDesign name="right" size={16} color={colors.icon} style={{ opacity: 0.5 }} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  playlistItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 90,
  },
  playlistArtworkImage: {
    borderRadius: 8,
    width: 70,
    height: 70,
  },
  playlistTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  playlistNameText: {
    ...defaultStyles.text,
    fontSize: 17,
    fontWeight: '600',
    maxWidth: '80%',
  },
});
