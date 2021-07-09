import TodoListItem from "./TodoListItem";

function TodoList({todos, setTodos}) {
    function HandleOnChange(todo) {
        let tempArr =  JSON.parse(JSON.stringify(todos));
        let element = tempArr.find(el=> el.id === todo.id);
        element.checked = !element.checked;
        setTodos(tempArr);
    }
    return (
        <>
            <h1>
                Todos
            </h1>
            <ul>
                {todos.map((todo) => (

                    <TodoListItem  handleCheck={() =>HandleOnChange(todo)} checked={todo.checked} key={todo.id}
                                  item={todo.name}/>
                ))}
            </ul>
        </>
    )
}

export default TodoList;
