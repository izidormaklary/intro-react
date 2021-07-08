
import React from "react";

const InputText = React.forwardRef((props, ref) => (
        <input ref={ref} type="text" name="todo" placeholder="Type a new todo"/>
));

export default InputText;