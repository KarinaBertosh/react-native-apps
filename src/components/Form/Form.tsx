import { StyleSheet, View, Button, TextInput } from 'react-native';
import { gStyles } from '../../../styles/style';
import { Formik } from 'formik';
import { INew } from '../Main';

export default function Form({ addArticle }: { addArticle: (values: INew) => void; }) {
  return (
    <View style={gStyles.main}>
      <Formik
        initialValues={{ name: '', anons: '', full: '', img: '', }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}>
        {
          (props) => (
            <View>
              <TextInput
                style={styles.input}
                value={props.values.name}
                placeholder="Enter the title"
                onChangeText={props.handleChange('name')} />

              <TextInput
                style={styles.input}
                value={props.values.anons}
                placeholder="Enter the anons"
                onChangeText={props.handleChange('anons')} />

              <TextInput
                style={styles.input}
                value={props.values.full}
                multiline
                placeholder="Enter the full description"
                onChangeText={props.handleChange('full')} />

              <TextInput
                style={styles.input}
                value={props.values.img}
                placeholder="Enter the img url"
                onChangeText={props.handleChange('img')} />

              <Button title='Add' onPress={() => props.handleSubmit()} />

            </View>
          )
        }
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: 'silver',
    borderRadius: 5,
  }
});
