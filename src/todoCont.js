import React from "react";
import FormTodo from "./FormTodo";
import Todo from "./todo";

const TodoCont = () => {
    const [todoList, newTodoList]=React.useState ([
        {key:0, title:'Belajar React', done:true},
        {key:1, title:'Deploy ke Git', done:false},
    ]);

    const newTodo = (todo) =>{
        newTodoList((todoList).concat(todo));
    } 
    
    return (
        <div style={{margin:20}}>
            <h4 align="center">To-Do Application</h4>
            {todoList.map((e)=><Todo key={e.key} object={e}/>)}
            <FormTodo createTodo={newTodo}/>
        </div>
    )
}

export default TodoCont;