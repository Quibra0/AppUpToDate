/*
 * TasksScreen
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import TaskList from './../components/TaskList';



export default class TasksScreen extends Component<Props>{

  constructor(props){
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Wuawis', completed: false },
        { id: 2, title: 'Trapear', completed: false },
        { id: 3, title: 'Lava los platos', completed: false },
        { id: 4, title: 'Korn flakes', completed: false },
        { id: 5, title: 'Ligar morritas', completed: false },
        { id: 6, title: 'Hacer un bong', completed: true }
      ]
    }

  }





  render(){
    return(
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
          <Text style={styles.pendingTasksText}>6 Pendientes</Text>
          <Text style={styles.dateText}>SÁBADO 27 DE ENERO 2018</Text>
        </View>

        <View style={styles.tasksContainer}>
              <TaskList tasks={this.state.tasks}/>



        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar: {
    width: 130,
    height: 130,
    borderRadius: 65
  },
  pendingTasksText: {
    fontSize: 36,
    color: 'white',
    marginTop: 25
  },
  dateText: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 8
  },
  tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  taskContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'

  },
  taskIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  taskText: {
    fontSize: 21,
  }
});
