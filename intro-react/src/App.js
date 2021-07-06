import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
let arr1 = [1,2,3,4,5,6,7,8];
const App = () => (

    <div className="App">
        <Header/>
        <Form/>
        <TodoList todoArr={arr1}/>
    </div>
)


export default App;
