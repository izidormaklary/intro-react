import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useState, useEffect} from "react";
import { nanoid } from 'nanoid'

const TODOKEY="TodoApp"

const App = () => {

    const initialTodos = [{name:"Add todos, and see", checked:false, id: nanoid(3)}];
    const [todos, setTodos] = useState(initialTodos);
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem(TODOKEY+".todos")))
    }, []);

    useEffect(() => {
        window.localStorage.setItem(TODOKEY + ".todos", JSON.stringify(todos));
    },[todos]);

    return(
    <div className="App">
        <Header/>
        <Form setTodos={setTodos} todos={todos} />
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>)
}


export default App;