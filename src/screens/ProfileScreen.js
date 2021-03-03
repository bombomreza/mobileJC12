import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Image} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {screenWidth} from '../helpers/dimensions';

const ProfileScreen = () => {
  const {image, username} = useSelector((state) => state.user);
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: image}}
        style={styles.imageStyle}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.textStyle}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    overflow: 'hidden',
    borderWidth: 0,
    marginBottom: 10,
  },
  textStyle: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '500',
  },
});

export default ProfileScreen;
