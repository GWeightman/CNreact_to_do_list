const To_do = ({to_do, removeHandler}) =>{

return(
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
)
}

export default To_do