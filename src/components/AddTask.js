//------------------------------------
//             Dodawanie zadań
//------------------------------------
import React, {Component} from "react";
import './Style.css';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Task from "./Task";
import { Dropdown,} from 'react-dropdown-now';
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";


class AddTask extends Component {
   
    

    minDate = new Date().toISOString().slice(0,10);
    state = {
        text:'',
        checked: false,
        // funkcja slice wycina elementy
        date: this.minDate,
        editItem: false

        
     }  

    // handleEditing = () => {
    //     this.setState({
    //         editing: true,
    //     })
    //     console.log("edit mode activated")
    // }

    // handleUpdatedDone = event => {
    //     if(event.key === "Enter"){
    //         this.setState({ editing: false })

    //     }
    //     console.log(event.key)
    // }
   // }

    // toggleEditing = () => {
    // this.setState({
    //     Editing: !this.state.editing

    //   })
    // }
    
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };


    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }


    // funkcja z kalendarza
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    // przycisk ważne

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }
    // metoda tworzy nowy obiekt i dodaje go 
    handleClick = () => {
        console.log("dodaj");
// w tym miejscu jeśli chcielibyśmy napisać if(text) musielibyśmy odwołać się do stanu
        const {text, checked, date} = this.state;
        // a tutaj już nie musimy ;) length - długość
        if(text.length >2) {
        const add = this.props.add(text, date, checked)
        if(add){
            this.setState({
                text: '',
                checked: false,
                date: this.minDate
            })
        }
        } else {
            console.log("Dodaj zadanie zawierające min 3 znaki")
        }

    }


    render() {
        if(this.state.editing){
            return "Editing";
        }
        // użycie +1 to zamiana linijki na dole na wartość string zaś 
        // *1 to zamiana na number
        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        // console.log(maxDate);
        maxDate = maxDate+"-12-12";
        return (
            <div className="form">
        
        {/* Okienko z  dodawaniem zadań */}

        <input type="text" placeholder="dodaj zadanie" 
        value = {this.state.text} onChange={this.handleText}/>
       {/* Checkbox ważne */}
        <input type="checkbox" checked = {this.state.checked}
        id="important" onChange={this.handleCheckbox}/>
        <label htmlFor="important">Ważne!</label><br />
        
        {/* Okienko z kalendarzem */}
       <TextField
        id="datetime-local"
        label="Do kiedy należy zrobić:"
        type="datetime-local"
        value={this.state.date}
        min={this.minDate} 
        max={maxDate}
        onChange={this.handleDate}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }} />
   {/* Wysuwana lista */}
 
   <Dropdown
        placeholder="Wybierz Pracownika z listy"
        className="dropdown"
        options={['Klienci', 'Pracownicy', 'Inni']}
        value="one" 
        onChange={(value) => console.log('change!', value)}
        onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
        arrowClosed={<span className="arrow-closed" />}
        arrowOpen={<span className="arrow-open" />} 
              
/>


      <br /> 
      
       <button onClick={this.handleClick}>Zatwierdź</button>
       
        



        <hr/>

       
        </div>
            )
    }
}
  
export default AddTask;