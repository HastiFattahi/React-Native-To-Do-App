import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



function Task({item,index,handleDeleteTask,handleEditTask}) {
  return (
    <View style={styles.task}>
        <Text style={styles.itemList}>{item}</Text>
        <View style={styles.taskButtons}>
            <TouchableOpacity onPress={()=>handleEditTask(index)}>
                <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleDeleteTask(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
  )

  
}
const styles=StyleSheet.create({
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        fontSize: 18,
    },
    itemList: {
        fontSize: 19,
    },
    taskButtons: {
        flexDirection: "row",
    },
    editButton: {
        marginRight: 10,
        color: "#76b5c5",
        fontWeight: "bold",
        fontSize: 18,
    },
    deleteButton: {
        color: "#063970",
        fontWeight: "bold",
        fontSize: 18,
    },
})
export default Task