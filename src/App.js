import { useState } from 'react'
import './App.css';

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
          <div class="whole2"> 
            <input type="text" onChange={changeHandler} value={inputValue} onKeyDown={enter}/>
            <button onClick={addHandler}>Add To List</button>
          </div>
          <ul> 
            <li>{to_do.map((todo, index) => {
                return(
                  <div class="whole3">
                    <h2>• {todo}</h2>
                    <button id="button" onClick={()=>removeHandler(index)}>Completed</button>
                  </div>
                )
            })}</li>
          </ul>
        </div>
    )
    
}

export default App;
