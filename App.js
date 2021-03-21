import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { v4 as uuidV4 } from 'uuid';
import AddTask from './components/AddTask';
import Header from './components/Header'
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([
    {"task": "HTML", "done": true, "id": "1"},
    {"task": "CSS", "done": true, "id": "2"},
    {"task": "JS", "done": true, "id": "3"},
  ]);
  const addTask = (text) => {
    if (!text) {
      Alert.alert("", "No Tasks")   
    }
    else{
      setTasks(prevTasks=>{
        return [{task:text, id:uuidV4()},...prevTasks]
      })
    }
  }
  const deleteTask = id => {
    setTasks(prevTasks=>{
      return prevTasks.filter(task => task.id != id)
    })
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addTask={addTask}/>
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <Task item={item} deleteTask={deleteTask}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 30,
    flex: 1
  },
  list: {
    marginTop: 30,
    flex: 1
  }

})