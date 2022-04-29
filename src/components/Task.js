import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { brown } from '@mui/material/colors';
import PopupState from './popover'





const Task = (props) => {

    
    const style = {
        color: 'orange',
    }
    const {text , date, id, active, important, finishDate} = props.task;

    

    if(active) {


    return ( 

    <div>
        <p>

        <strong style={important ? style : null }>{text}</strong>  
        <span>
        -do {date}
        </span>

        {/* Przyciski i ikonki do nich */}

        

        <button className={"tak"}
        onClick={() => props.change(id)} > 
        <CheckCircleIcon sx={{color: green[500],  fontSize: 25,  } }>Zadanie ukończone</CheckCircleIcon><center>Tak</center> </button>
        
       


        <button className={"nie"} onClick={() => props.delete(id)}> 
        <DeleteIcon sx={{color: red[500], fontSize: 25}}></DeleteIcon><center>Usuń</center></button>
        
 

        <button className={"jest"} onClick={() => props.edit(id)}>
        <ModeEditIcon sx={{color: brown[700], fontSize: 25}}></ModeEditIcon><center>Edytuj</center></button> 
        
        <PopupState/> 
         
         
        {/* <button onClick={() => console.log("edytuj")}>Edytuj</button> */}
  
        

       </p>  
</div>



     );} else {

        const finish = new Date(finishDate).toLocaleString()
         return (

             <div>

<p>

<strong>{text}</strong>  

<em> (zrobić do  {date} )</em><br />
- potwierdzenie wykonania <span>{finish}</span>



<button onClick={() => props.delete(id)}>Usuń zadanie X</button>

</p>

             </div>
         )
     }
}

 
export default Task;