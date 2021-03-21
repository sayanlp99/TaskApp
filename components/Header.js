import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo Tasks</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingStart: 10,
        paddingTop: 40,
        backgroundColor: 'blue',
        height:90,
    },
    title: {
        textAlign: 'left',
        color: 'white',
        fontSize:20
    }
  
  })