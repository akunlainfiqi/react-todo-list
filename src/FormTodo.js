import React, {useState} from "react";

const FormTodo=(p) => {
    const addTodoStyle={
        position:"fixed",
        bottom:10,
        display:"block",
        width:"100%"
    }
    const [title,setTitle]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTodo ={
            title:title, 
            done:false
        }
        p.createTodo(newTodo);
        setTitle('')
    }

    return(
        <div style={addTodoStyle}>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add to-do here" 
                    style={{width:"90%", padding:10}}
                    required/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormTodo;