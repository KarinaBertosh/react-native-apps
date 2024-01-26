import { StyleSheet, View, Text, Image} from 'react-native';
import { gStyles } from '../../../styles/style';

export default function FullInfo({route}: {route: any}) {
  const {name, full, img} = route.params;

  return (
    <View style={gStyles.main}>
       <Image source={{
            width: 400,
            height: 200,
            uri: img,
          }}
          />
      <Text style={[gStyles.title, styles.header]}>{name}</Text>
      <Text style={styles.full}>{full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151',
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  }
})
