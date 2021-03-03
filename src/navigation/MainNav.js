import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TabNav} from '.';
import {loginAction} from '../redux/actions';
import {LoginScreen} from '../screens';

const MainNav = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const {username} = useSelector((state) => state.user);

  console.log(user);

  useEffect(() => {
    AsyncStorage.getItem('username', (err, result) => {
      if (result) setUser(result);
    });
    if (user) dispatch(loginAction(user));
  }, []);

  return (
    <>
      {username ? (
        <>
          <TabNav />
        </>
      ) : (
        <>
          <LoginScreen />
        </>
      )}
    </>
  );
};

export default MainNav;
