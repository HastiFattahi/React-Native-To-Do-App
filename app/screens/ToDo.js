import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Task from './Task'

function ToDo() {
  const [task,setTask]=useState('')
  const [tasks,setTasks]=useState([])
  const [editIndex,setEditIndex]=useState(-1)

  // Add Btn
  const handleAddTask=()=>{
    if(task){
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
    } else {
        setTasks([...tasks, task]);
    }
    }
    setTask("")
  }

  //Edit passed down to Task.js component
  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
};

  //Edit passed down to Task.js component
  const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>ToDo App</Text>
      <TextInput style={styles.input} placeholder='Type here' value={task} onChangeText={(text)=>setTask(text)} />
      <TouchableOpacity style={styles.addBtn} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>{editIndex !==-1 ? "Edit Task" : "Add Task"}</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.tasks}
        data={tasks}
        renderItem={({ item, index }) => (
          <Task
            item={item}
            index={index}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        )}
        keyExtractor={(item,index)=>index.toString()}
      />
    </View>
  
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40,
    marginTop:40,
    alignItems:'center',

  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },
  input:{
    borderWidth: 3,
    borderColor: "#154c79",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    width:'90%'
  },
  addBtn:{
    marginTop:20,
    backgroundColor:"#154c79",
    padding:20,
    width:"90%",
    borderRadius:10
  },
  addButtonText:{
    color:"white",
    textAlign:'center',
    fontWeight:"bold",
    fontSize:18
  },
  tasks:{
    marginTop:20,
    width:'90%'
  }
})

export default ToDo