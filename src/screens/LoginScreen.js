import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {loginAction} from '../redux/actions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const loginBtn = () => {
    if (username.length > 0) {
      dispatch(loginAction(username));
      setUsername('');
    } else {
      Alert.alert('Masukkan username!');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.icon}>
        <Icon name="android" style="fa" size={200} color="green" />
      </View>
      <View style={styles.inputLogin}>
        <Input
          placeholder="Username"
          textAlign="center"
          onChangeText={(e) => setUsername(e)}
        />
        <Button
          title="Login"
          style={{marginHorizontal: 20, backgroundColor: 'red'}}
          onPress={loginBtn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  inputLogin: {
    flex: 1,
  },
});

export default LoginScreen;
