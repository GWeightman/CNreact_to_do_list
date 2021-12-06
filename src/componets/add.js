const Addtask = ({changeHandler, inputValue, enter, addHandler})=> {

return(
<div class="whole2"> 
<input type="text" onChange={changeHandler} value={inputValue} onKeyDown={enter}/>
<button onClick={addHandler}>Add To List</button>
</div>
)
}

export default Addtask