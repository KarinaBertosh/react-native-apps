import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IElement {
  text: string,
  key: string,
}

interface IListItem {
  el: IElement,
  deleteTask: (key: string) => void,
}

export default function ListItem(props : IListItem) {
  return (
    <TouchableOpacity onPress={() => props.deleteTask(props.el.key)}>
      <Text style={styles.text}>{props.el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    width: '60%',
    marginLeft: '20%',
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
});