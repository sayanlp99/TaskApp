import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Task= ({item, deleteTask}) => {
    return(
        <TouchableOpacity style={styles.item}>
            <Text>{item.task}</Text>
            <MaterialIcons onPress={()=>deleteTask(item.id)} name="delete-outline" size={24} color="red" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 15,
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 15,
      flexDirection:'row',
      justifyContent: 'space-between'
    }
})

export default Task

