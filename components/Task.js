import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({text, tasksItems, setTasksItems, index}) => {

    const handleTaskDelete = () => {
        const newTasksItems = [...tasksItems];
        newTasksItems.splice(index, 1);
        setTasksItems(newTasksItems);
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={handleTaskDelete}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,
    },

})

export default Task;