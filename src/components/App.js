import React, { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";


class App extends Component {
 
 
 
  counter = 9
  state = {
    tasks: [
      {
      id: 0,
      text: '',
      date: "",
      options: '',
      important: true,
      active: true,
      finishDate: null,
      editing: false,
    },

     // tablica z taskami
  
    // { id:1, text: "Zacząć nową aplikację", date: 
    // '2021-10-13', important: true, active: true, finishDate: null},
    // { id:2, text: "Rozbudować aplikację", date: 
    // '2021-10-20', important: false, active: true, finishDate: null},
    // { id:3, text: "Dodać niezbędne pakiety do aplikacji", date: 
    // '2021-11-25', important: true, active: true, finishDate: null},
    // { id:4, text: "Otrzymać dobrą radę odnośnie aplikacji", date: 
    // '2021-12-12', important: false, active: true, finishDate: null},
    // { id:5, text: "Koniec aplikacji żegnanie się z nią print('Bye aplication')", date: 
    // '2021-09-25', important: true, active: true, finishDate: null},


  ] 
  }
  changeEditMode = (id) => {
    this.setState({
      Editing: !this.state.Editing
      
    })
  }

  



    deleteTask = (id) => {
     console.log("delete elementu o id " + id);

//      editTask = () => {
//       this.setState({
//           Editing: !this.state.editTask 
  
//         })
//        }

//     editTask = (id) => {
//       console.log("edit elementu o id " + id);
//    }

//  editStatus = (id) => {
//     console.log("edit w stanie elemetu o id " + id);
//    }


    // const tasks = [...this.state.tasks];
    // console.log(tasks);
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })


    

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks

    })
  }

  changeTaskStatus = (id) => {
      console.log("change stanie elementu o id " + id);
      const tasks = Array.from(this.state.tasks);
      tasks.forEach(task => {
        if(task.id === id) {
          task.active = false;
          task.finishDate = new Date().getTime()
  
        }
      })
      this.setState({
        tasks
      })
  }

  
  // editTodo = (text, id) => {
  //   this.tasks(
  //       text.map(tasks => {
  //           if(tasks.id === id){
  //           return {...tasks, text}
  //       };
  //       return tasks;
  //       }))
  //   }



  addTask = (text, date, important) => {
    console.log("dodany obiekt");
    const task = {
        id: this.counter,
        text, // tekst z inputa
        date, // tekst z inputa
        important, // wartość z inputa
        active: true,
        finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({

      tasks: [...prevState.tasks, task]

    }))


    return true

}

  render(){
  return (
    <div className="App">
    
    <h1>Aplikacja zadaniowa</h1>
    

    
     <AddTask add={this.addTask}/>
     <TaskList tasks={this.state.tasks} 
     delete= {this.deleteTask} 
     change = {this.changeTaskStatus} 
     edit =  {this.changeEditMode}
     status = {this.editStatus}
     item = {this.state.item}
     handleChange={this.handleChange}
     
      />
    </div>
  
  );
  }
  }


export default App;

