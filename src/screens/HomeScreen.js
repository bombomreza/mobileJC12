import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CatCard} from '../components';
import {catFetch} from '../redux/actions';

const HomeScreen = ({navigation}) => {
  const [catList, setCatList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let data = await dispatch(catFetch());
      await setCatList([...data]);
      console.log(catList);
    };
    fetchData();
  }, []);

  const renderCatCard = ({item}) => {
    return <CatCard image={item.url} nav={navigation} />;
  };

  return (
    <View>
      <FlatList data={catList} numColumns={2} renderItem={renderCatCard} />
    </View>
  );
};

export default HomeScreen;
