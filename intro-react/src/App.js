import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import {useState} from "react";
let counter = 0;
const App = () => {

    const initialTodos = [
    {name: "My first todo", checked: false, id: counter++},
    {name: "My second todo", checked: false, id: counter++}];
    const [todos, setTodos] = useState(initialTodos)
    return(
    <div className="App">
        <Header/>
        <Form setTodos={setTodos} todos={todos} counter={counter} />
        <TodoList setTodos={setTodos} todos={todos}/>
    </div>)
}


export default App;
