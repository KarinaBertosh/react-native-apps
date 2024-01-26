import { StyleSheet, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import { gStyles } from '../../styles/style';
import { useState } from 'react';

interface INew {
  name: string,
  anons: string,
  full: string,
}

export default function Main({ navigation }: { navigation: any; }) {
  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google!!!', full: 'Google is cool' },
    { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool' },
    { name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool' }
  ]);

  return (
    <SafeAreaView style={gStyles.main}>
      <Text style={gStyles.title}>Main Page</Text>
      <FlatList data={news} renderItem={(({ item }: { item: INew; }) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
          <Text>{item.name}</Text>
          <Text>{item.anons}</Text>
        </TouchableOpacity>
      ))} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
