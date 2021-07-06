import TodoListItem from "./TodoListItem";


const TodoList = (props) => (
    <>
        <h1>
            Todos
        </h1>
        <ul>
        {props.todoArr.map((value) => (
            <TodoListItem item={value}/>
        ))}
        </ul>
    </>
)

export default TodoList;