import InputText from "./InputText";

import Submit from "./Submit";
import { createRef} from "react"


function Form({todos, setTodos, counter}) {
    const inputRef = createRef();
    function clickHandler(){
        const inputElement = inputRef.current;
        const tempTodos = JSON.parse(JSON.stringify(todos));
        tempTodos.push({name:inputElement.value, checked:false, id: counter++})
        setTodos(tempTodos)
    }
    return (
        <div className="Form">
                <InputText ref={inputRef} />
                <br/>
                <Submit click={clickHandler}/>
        </div>
    )
}
export default Form;
