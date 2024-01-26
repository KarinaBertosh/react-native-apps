import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Form({ addTask }: { addTask: (task: string) => void; }) {
    const [task, setTask] = useState('');
    const onChange = (newTask: string) => setTask(newTask);
    const handlerInput = () => {
        if(!task) return
        addTask(task);
        setTask('');
    };

    return (
        <View>
            <TextInput value={task} style={styles.input} onChangeText={onChange} placeholder='Add task..' />
            <Text style={styles.button} onPress={handlerInput}>Add task</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        width: '60%',
        marginLeft: '20%',
    },
    button: {
        color: 'rgba(86, 141, 229, 1.00)',
        width: '60%',
        marginLeft: '20%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingTop: 10,
        fontSize: 18,
        fontWeight: '800',
    },
});

