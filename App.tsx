import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import Header from './src/components/Header/Header';
import ListItem from './src/components/ListItem/ListItem';
import { useState } from 'react';
import Form from './src/components/Form/Form';


export default function App() {
  const [listItem, setListItem] = useState([
    {
      text: 'do homework',
      key: '1',
    },
    {
      text: 'work',
      key: '2',
    },
  ]);

  const addTask = ((task: string) => {
    const newListItem = [...listItem, {
      text: task,
      key: Math.random().toString(36).substring(7),
    }];
    setListItem(newListItem);
  });

  const deleteTask = ((key: string) => {
    const newLustItem = listItem.filter((el) => el.key !== key);
    setListItem(newLustItem);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form addTask={addTask}/>
      <View>
        <FlatList data={listItem} renderItem={({ item }) => (
          <ListItem el={item} deleteTask={deleteTask}/>
        )}>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
