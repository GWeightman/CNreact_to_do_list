const Addtask = ({changeHandler, inputValue, enter, addHandler})=> {

return(
<div className="whole2"> 
<input type="text" onChange={changeHandler} value={inputValue} onKeyDown={enter}/>
<button onClick={addHandler}>Add To List</button>
</div>
)
}

export default Addtask