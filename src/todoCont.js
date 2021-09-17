import React from "react";
import AddTodo from "./addTodo";
import Todo from "./todoList";

const todoList=[
    {id:1, title:'Belajar React', done:true},
    {id:2, title:'Deploy ke Git', done:false},
]
const TodoCont = () => {
    const handleAddTodo=(newTodo) => {
        console.log(newTodo)
    }
    return (
        <div style={{margin:20}}>
            <h4 align="center">To-Do Application</h4>
            {todoList.map((todo)=><Todo todos={todo} />)}
            <AddTodo addTodo={handleAddTodo}/>
        </div>
    )
}

export default TodoCont;