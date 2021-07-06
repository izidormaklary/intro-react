const TodoListItem = (props) => (
    <>
        <li key={props.item.toString()}>
            <input type="checkbox"/>
              {props.item}
        </li>
    </>
)


export default TodoListItem;
