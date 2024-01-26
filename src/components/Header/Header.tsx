import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>TO DO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(86, 141, 229, 1.00)',
    height: 60,
  },
  text: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: 5,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '800',
  }
});
