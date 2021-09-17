import React from "react";

const Todo = (props) =>{
    
    console.log(props.object)
    const p = props.object
    return(
        <div>
            <input type="checkbox" style={{margin: "0px 10px"}} checked={p.done} onChange={()=>p.done}/>
            <span>{p.title}</span>
            <span style={{position:"fixed", 
                right:20, 
                padding:"0 10px",
                cursor:"pointer", 
                fontWeight:600}}>
                    X</span>
        </div>
    )
}

export default Todo;