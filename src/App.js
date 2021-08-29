import React, {Fragment, useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

 

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }
  const stringDate = selectedDate.toDateString();

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 
  
  return (
    <div className="App">
       <MuiPickersUtilsProvider utils={DateFnsUtils}>

       <DatePicker
        label="Date"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        
      />
    </MuiPickersUtilsProvider>
    
      <TextField name="desc" variant="outlined" label="Description"  onChange={inputChanged} value={todo.desc}/>
      <Button size="large" onClick={addTodo} variant="contained" color="secondary">Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{stringDate}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;