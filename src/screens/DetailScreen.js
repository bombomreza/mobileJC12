import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {screenWidth} from '../helpers/dimensions';
import {setPicture} from '../redux/actions';

const DetailScreen = ({route}) => {
  const {image} = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: image}}
        style={styles.imageStyle}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Button
        title="Set as profile picture"
        onPress={() => dispatch(setPicture(image))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: screenWidth,
    width: screenWidth,
    marginBottom: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;
