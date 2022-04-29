
import React, {Component} from "react";
import './Style.css';
import TextField from '@mui/material/TextField';

import { Dropdown,} from 'react-dropdown-now';



class AddTask extends Component {
   
    

    minDate = new Date().toISOString().slice(0,10);
    state = {
        text:'',
        checked: false,
        
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
    handleSelect = (e) => {
        console.log("Wybrałes pracownika")
        this.setState({
            options: e.target.value
        });
    };

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



    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }


    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        console.log("dodaj");

        const {text, checked, date} = this.state;

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

        let maxDate = this.minDate.slice(0,4) * 1 + 1;
        // console.log(maxDate);
        maxDate = maxDate+"-12-12";
        return (
            <div className="form">
        
        {/* Okienko z  dodawaniem zadań */}

        <input type="text" placeholder="dodaj zadanie" 
        value = {this.state.text} onChange={this.handleText} onClick = {this.handleSelect}/>
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
        value={"one" }
        onClick = {(options) => console.log('clicked', options)}
        onChange={(value) => console.log('change!', value)}
        onSelect={(options) => console.log('selected!', options)} 
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