import { StyleSheet, View, Text} from 'react-native';
import { gStyles } from '../../../styles/style';

export default function FullInfo({route}: {route: any}) {

  return (
    <View style={gStyles.main}>
      <Text style={gStyles.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
