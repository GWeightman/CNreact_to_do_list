import { useState } from 'react'
import './App.css';
import Addtask from './componets/add';
import To_do from './componets/to_do';

function App() {
  const [to_do, setTo_do] = useState([])
  const [inputValue, setinputValue] = useState("")
  

    const changeHandler = (event) => {
        setinputValue(event.target.value)
      }
    
    const removeHandler = (index) => {
        let storedTo_do = [...to_do]
        storedTo_do.splice(index, 1)
        setTo_do(storedTo_do)
    }
    const addHandler = () => {
          let storedTo_do = [...to_do]
          storedTo_do.push(inputValue)
          setTo_do(storedTo_do)
          setinputValue("")
      }
    
    const enter = (event) =>{
      if (event.keyCode == 13){
        addHandler()
      }
    }

    return(
        <div class="whole1">
          <h1>To Do List</h1>
         <Addtask changeHandler={changeHandler} inputValue={inputValue} enter={enter} addHandler={addHandler}/>
         <To_do to_do={to_do} removeHandler={removeHandler}/>
        </div>
    )
    
}

export default App;
