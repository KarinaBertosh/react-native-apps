import { StyleSheet, View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import { gStyles } from '../../styles/style';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form/Form';
export interface INew {
  name: string,
  anons: string,
  full: string,
  key?: string,
  img: string,
}


export default function Main({ navigation }: { navigation: any; }) {
  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google!!!', full: 'Google is cool', key: '1', img: 'https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_1280.jpg' },
    { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool', key: '2', img: 'https://cdn.pixabay.com/photo/2018/09/15/19/52/analytics-3680198_1280.png' },
    { name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool', key: '3', img: 'https://media.istockphoto.com/id/1410263547/vector/data-analytics-or-marketing-seo-optimization-illustration-concept-with-abstract-infographics.jpg?s=612x612&w=is&k=20&c=-OrMZKG9ppSZtKYJo17kQuIMSt9KTncIRLZBBn3otmQ=' }
  ]);
  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article: INew) => {
    if(!article.name || !article.anons || !article.full || !article.img) return
    
    const newNew = { ...article, key: Math.random().toString(36).substring(7) };
    const newNews = [newNew, ...news];
    setNews(newNews);
    setModalWindow(false);
  };

  return (
    <SafeAreaView style={gStyles.main}>
      <Modal visible={modalWindow}>
        <View style={gStyles.main}>
          <Ionicons name="close-circle" size={24} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
          <Text style={styles.title}>Form for adding articles</Text>
          <Form addArticle={addArticle}/>
        </View>
      </Modal>
      <Ionicons name="add-circle" size={24} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList data={news} renderItem={(({ item }: { item: INew; }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
          <Image style={gStyles.image} source={{ uri: item.img }}
          />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.anons}>{item.anons}</Text>
        </TouchableOpacity>
      ))} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  iconClose: {
    textAlign: 'center',
  },
  header: {
    width: '100%',
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
});