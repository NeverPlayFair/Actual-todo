
import React from 'react';
import Task from './Task';


    const TaskList = (props) => {
       
        const active = props.tasks.filter(task => task.active);
       
        const done = props.tasks.filter(task => !task.active);
        // console.log(active, done);
        

        //done.sort((a,b) =>  b.finishDate - a.finishDate)

            if(done.length >= 2){
        done.sort((a,b) => {
            if(a.finishDate < b.finishDate){
                return 1
            }
            if(a.finishDate > b.finishDate){ 
            return -1
            }
            return 0
        })
        }

        if(active.lenght >= 2) {
            active.sort((a,b) => {

                a = a.text.toLowerCase();
                b = b.text.toLowerCase();

                if(a < b) return -1;
                if(a > b) return 1;
                return 0
            })
        }

         const activeTasks = active.map(task => 
         <Task key={task.id}
         task={task}
         delete={props.delete} 
         change={props.change}
         edit = {props.edit}
         status = {props.status}
         
         
         
         
         />)

         const doneTasks = done.map(task => 
         <Task key={task.id}
         task={task}
         delete={props.delete} 
         change={props.change} 
        
         
         
         />)

    
         
    

    return (
        <> 
        <div className="active">
         <h1>Zadania do zrobienia </h1> 
         
           {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia</p>} 
            
         </div>


         



         <hr />



         
         <div className="done">
            <h3>Zadania zrobione: 
                <em>({done.length})</em></h3> 
                {/* {doneTasks} */}
                {done.length > 10 && <span style = {{fontSize: "20px"}}>10 ostatnich zrobionych zadań</span>}
             {doneTasks.slice(0, 10)} 
         </div>
        
        </>
       
     );
}
 
export default TaskList;