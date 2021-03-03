import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {screenWidth} from '../helpers/dimensions';

function CatCard({image, nav}) {
  return (
    <TouchableOpacity onPress={() => nav.navigate('Detail', {image})}>
      <View>
        <Image source={{uri: image}} style={styles.imageStyle} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: screenWidth / 2,
    width: screenWidth / 2,
  },
});

export default CatCard;
