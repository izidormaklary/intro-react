import TodoListItem from "./TodoListItem";
import React, {useState} from "react";



function TodoList({todos, setTodos}) {

    function HandleOnChange(todo) {
        let tempArr = todos;
        let element = tempArr.find(el=> el.id === todo.id);
        element.checked = !element.checked;
        return tempArr;
    }
    return (
        <>
            <h1>
                Todos
            </h1>
            <ul>
                {todos.map((todo) => (

                    <TodoListItem  handleCheck={() => setTodos(HandleOnChange(todo))} checked={todo.checked} key={todo.id}
                                  item={todo.name}/>
                ))}
            </ul>
        </>
    )
}

export default TodoList;
