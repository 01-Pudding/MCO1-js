import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (text.trim() === '') return;

    setTasks([...tasks, { id: Date.now().toString(), name: text }]);
    setText('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, padding: 10, marginRight: 10 },
  addButton: { backgroundColor: 'blue', justifyContent: 'center', padding: 12 },
  buttonText: { color: 'white' },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
  },
  delete: { color: 'red' },
});