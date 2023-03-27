import React, {useState} from "react"; // import useState to work with local state
import {useDispatch, useSelector} from "react-redux"; // import useSelector, useDispatch hook to call reducers
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    /*retrieve todos from reducer state and assign to local todos constant*/
    const todos = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: ''});
    /*get dispatcher to invoke reducer functions*/
    const dispatch = useDispatch();
    /*handle click event of button
    * call reducer function passing new tod
    * as the payload in the action object */
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    /*handle delete button click, accepts todo index
    * dispatch event to deleteTodo reducer function
    * passing index of todo we want to delete*/
    /*handle keystroke changes in input field*/
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    /*handel checkbox click event, accept todo
    * index send to reducer function passing index of todo
    * to toggle done field */
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }
    const todoChangeHandler = (event) => {
        /*get data from input field*/
        const doValue = event.target.value;

        const newTodo = {
            do: doValue
        };

        setTodo(newTodo)
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25 float-end">
                        Create</button>
                    <input onChange={todoChangeHandler}
                           value={todo.do}
                           className="form-control w-75"/>

                </li>
                {
                    todos.map((todo, ndx) =>
                        <li key={todo._id}
                            className="list-group-item">
                            <button onClick={() => deleteTodoClickHandler(ndx)}
                                    className="btn btn-danger float-end ms-2">Delete</button>
                            <input type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;
